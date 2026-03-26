import os
import re
from pathlib import Path

# 1. Clean up page.tsx
page_file = Path('/Users/pdh/Documents/GitHub/ZonifyWebsite/src/app/page.tsx')
if page_file.exists():
    content = page_file.read_text()
    # Remove lines containing {/* ... */}
    content = re.sub(r'\s*\{\/\*.*?\*\/\}\s*', '\n', content, flags=re.DOTALL)
    # Remove empty lines that were created
    content = re.sub(r'\n{3,}', '\n\n', content)
    page_file.write_text(content)
    print("Cleaned up page.tsx")

# 2. Tree shaking
SRC_DIR = Path('/Users/pdh/Documents/GitHub/ZonifyWebsite/src')
used_files = set()
to_process = set()

# Add entry points
for root, dirs, files in os.walk(SRC_DIR / 'app'):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.css')):
            path = Path(root) / file
            to_process.add(str(path))
            used_files.add(str(path))

# Also add config files
for file in ['components.json', 'tailwind.config.ts', 'tsconfig.json']:
    path = Path('/Users/pdh/Documents/GitHub/ZonifyWebsite') / file
    if path.exists():
        to_process.add(str(path))
        used_files.add(str(path))
        
def resolve_import(imp_path, current_dir):
    if imp_path.startswith('@/'):
        base = SRC_DIR / imp_path[2:]
    elif imp_path.startswith('./') or imp_path.startswith('../'):
        base = (current_dir / imp_path).resolve()
    else:
        return None
        
    paths_to_try = [
        base,
        base.with_suffix('.tsx'),
        base.with_suffix('.ts'),
        base.with_suffix('.jsx'),
        base.with_suffix('.js'),
        base.with_suffix('.css'),
        base / 'index.tsx',
        base / 'index.ts'
    ]
    for p in paths_to_try:
        if p.is_file():
            return str(p)
    return None

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        return
        
    current_dir = Path(filepath).parent
    # Find imports
    import_pattern = re.compile(r'''(?:from|import)\s*\(?['"]([@\./][^'"]+)['"]\)?''')
    for imp in import_pattern.findall(content):
        resolved = resolve_import(imp, current_dir)
        if resolved and resolved not in used_files:
            used_files.add(resolved)
            to_process.add(resolved)
            
    # Find assets referenced by absolute path in public like "/images/..."
    asset_pattern = re.compile(r'''['"](/[^'"]+\.[a-zA-Z0-9]+)['"]''')
    for asset in asset_pattern.findall(content):
        if asset.startswith('/') and not asset.startswith('//'):
            pub_path = Path('/Users/pdh/Documents/GitHub/ZonifyWebsite/public') / asset.lstrip('/')
            if pub_path.is_file() and str(pub_path) not in used_files:
                used_files.add(str(pub_path))
            
            src_pub_path = SRC_DIR / 'public' / asset.lstrip('/')
            if src_pub_path.is_file() and str(src_pub_path) not in used_files:
                used_files.add(str(src_pub_path))

while to_process:
    curr = to_process.pop()
    process_file(curr)

print(f"Total used files: {len(used_files)}")

# 3. Delete unused components and libraries
deleted_count = 0
for root, dirs, files in os.walk(SRC_DIR):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.css', '.js', '.jsx')):
            filepath = str(Path(root) / file)
            if filepath not in used_files:
                os.remove(filepath)
                print(f"Deleted unused file: {Path(filepath).relative_to(SRC_DIR)}")
                deleted_count += 1
                
print(f"Total deleted unused files: {deleted_count}")
