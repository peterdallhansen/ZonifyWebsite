import os
import re
import shutil
import json
from pathlib import Path

SRC_DIR = Path('/Users/pdh/Documents/GitHub/website')
DST_DIR = Path('/Users/pdh/Documents/GitHub/ZonifyWebsite')
DST_CODE_DIR = DST_DIR / 'src'

ACCESSIBLE_ROUTES = [
    'page.tsx', 'layout.tsx', 'globals.css', 'not-found.tsx', 'opengraph-image.png',
    'about', 'api', 'business-terms', 'careers', 'compliance', 'contact',
    'deployment', 'industries', 'integrations', 'learn', 'news', 'partners',
    'privacy', 'research', 'solutions', 'team', 'terms', 'use-cases'
]

visited = set()
to_visit = set()

def resolve_path(import_path, current_dir):
    if import_path.startswith('@/'):
        base = import_path[2:]
        paths = [
            base,
            f"{base}.tsx", f"{base}.ts", f"{base}.css", f"{base}.js", f"{base}.jsx", f"{base}.mjs",
            f"{base}/index.tsx", f"{base}/index.ts", f"{base}/index.js",
            f"{base}.json"
        ]
        for p in paths:
            if (SRC_DIR / p).is_file(): return p
    elif import_path.startswith('./') or import_path.startswith('../'):
        try:
            resolved = (current_dir / import_path).resolve()
            rel = resolved.relative_to(SRC_DIR.resolve())
            base = str(rel)
            paths = [
                base,
                f"{base}.tsx", f"{base}.ts", f"{base}.css", f"{base}.js", f"{base}.jsx", f"{base}.mjs",
                f"{base}/index.tsx", f"{base}/index.ts", f"{base}/index.js",
                f"{base}.json"
            ]
            for p in paths:
                if (SRC_DIR / p).is_file(): return p
        except ValueError:
            pass
    return None

def scan_file(file_path_str):
    if file_path_str in visited: return
    visited.add(file_path_str)
    
    full_path = SRC_DIR / file_path_str
    if not full_path.exists() or not full_path.is_file(): return
    if full_path.suffix not in ['.ts', '.tsx', '.js', '.jsx', '.css', '.mjs', '.json', '.md']: return

    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception:
        return
        
    import_pattern = re.compile(r'''(?:from|import)\s*\(?['"]([@\./][^'"]+)['"]\)?''')
    for match in import_pattern.findall(content):
        resolved = resolve_path(match, full_path.parent)
        if resolved and resolved not in visited:
            to_visit.add(resolved)
            
    asset_pattern = re.compile(r'''['"](/[^'"]+\.[a-zA-Z0-9]+)['"]''')
    for asset in asset_pattern.findall(content):
        if asset.startswith('/') and not asset.startswith('//'):
            pub_path = f"public{asset}"
            if (SRC_DIR / pub_path).is_file() and pub_path not in visited:
                to_visit.add(pub_path)
            asset_path = f"assets{asset}"
            if (SRC_DIR / asset_path).is_file() and asset_path not in visited:
                to_visit.add(asset_path)

for route in ACCESSIBLE_ROUTES:
    base = Path('app') / route
    if (SRC_DIR / base).is_dir():
        for root, dirs, files in os.walk(SRC_DIR / base):
            for file in files:
                rel = Path(root).relative_to(SRC_DIR) / file
                # The fix is here:
                to_visit.add(str(rel))
    elif (SRC_DIR / base).is_file():
        to_visit.add(str(base))

to_visit.update(['lib/constants.ts', 'tailwind.config.ts', 'components.json', 'postcss.config.mjs'])

while to_visit:
    item = to_visit.pop()
    scan_file(item)

print(f"Total files to transfer: {len(visited)}")

for item in visited:
    src_file = SRC_DIR / item
    if not src_file.exists(): continue
    
    if item in ['package.json', 'tsconfig.json', 'components.json', 'tailwind.config.ts', 'postcss.config.mjs']:
        dst_file = DST_DIR / item
    elif item.startswith('public/'):
        dst_file = DST_DIR / item
    else:
        dst_file = DST_CODE_DIR / item
        
    dst_file.parent.mkdir(parents=True, exist_ok=True)
    if dst_file.is_file() and item in ['package.json', 'tsconfig.json']:
        continue
    
    shutil.copy2(src_file, dst_file)
    
print("Done")
