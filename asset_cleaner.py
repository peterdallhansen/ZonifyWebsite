import os
from pathlib import Path
import re

# Paths
SRC_DIR = Path('/Users/pdh/Documents/GitHub/ZonifyWebsite/src')
PUBLIC_DIR = Path('/Users/pdh/Documents/GitHub/ZonifyWebsite/public')
CONTENT_DIR = Path('/Users/pdh/Documents/GitHub/ZonifyWebsite/content')

# Set to False to actually delete files
DRY_RUN = False # ENABLED DELETION

# Files we never delete because Next.js uses them implicitly or they are entry points
ENTRY_POINTS = {
    'favicon.ico', 'opengraph-image.png', 'twitter-image.png', 'apple-icon.png',
    'icon.png', 'robots.txt', 'sitemap.xml', 'manifest.json', 'icon.ico',
    'layout.tsx', 'page.tsx', 'loading.tsx', 'error.tsx', 'not-found.tsx',
    'middleware.ts', 'sitemap.ts', 'robots.ts', 'global.css', 'globals.css',
    'route.ts', 'opengraph-image.tsx', 'opengraph-image.jpg'
}

# Directories that are 100% safe from deletion (e.g. article images)
PROTECTED_DIRS = [
    'public/images/articles',
]

# 1. Gather all files and their contents
code_files = {} # path: content
all_assets = [] # list of paths

# Scan SRC
for root, dirs, files in os.walk(SRC_DIR):
    for file in files:
        file_path = Path(root, file)
        if file.endswith(('.ts', '.tsx', '.css', '.json', '.js', '.jsx', '.md')):
            try:
                code_files[file_path] = file_path.read_text(encoding='utf-8')
            except:
                pass
        else:
            all_assets.append(file_path)

# Scan CONTENT (for references to images/assets)
if CONTENT_DIR.exists():
    for root, dirs, files in os.walk(CONTENT_DIR):
        for file in files:
            file_path = Path(root, file)
            try:
                # Add content text to our search pool
                code_files[file_path] = file_path.read_text(encoding='utf-8')
            except:
                pass

if PUBLIC_DIR.exists():
    for root, dirs, files in os.walk(PUBLIC_DIR):
        for file in files:
            all_assets.append(Path(root, file))

# Create a master text of ALL code to search in
# We concatenate all files EXCEPT the one we are currently checking to avoid self-matches
all_code_text = "\n".join(code_files.values())

def is_file_referenced(file_path, all_code):
    filename = file_path.name
    # 1. Check exact filename (for assets/images)
    if filename in all_code:
        return True
    
    # 2. Check for imports (without extension)
    if file_path.suffix in ['.ts', '.tsx', '.js', '.jsx']:
        stem = file_path.stem
        # Look for the stem in import statements or as a component name
        # Simple heuristic: look for re.search(fr"['\"/]{stem}['\"]", all_code)
        if re.search(fr"['\"/]{re.escape(stem)}['\"]", all_code):
            return True
        # Also check if the stem is used as a component <Stem />
        if re.search(fr"<{re.escape(stem)}[\s/>]", all_code):
            return True
            
    return False

print(f"{'--- DRY RUN ACTIVE ---' if DRY_RUN else '--- LIVE MODE: DELETING FILES ---'}")

unused_assets = []
unused_code = []

# 2. Check Assets (Public and src/assets)
for asset_path in all_assets:
    if asset_path.name in ENTRY_POINTS:
        continue
    
    # Check if file is in a protected directory
    is_protected = False
    for pd in PROTECTED_DIRS:
        if pd in str(asset_path):
            is_protected = True
            break
    if is_protected:
        continue
    
    if not is_file_referenced(asset_path, all_code_text):
        unused_assets.append(asset_path)

# 3. Check Code Files (Components, hooks, etc)
for code_path, content in code_files.items():
    if code_path.name in ENTRY_POINTS or code_path.name == 'ZONIFY.md':
        continue
    
    # Skip checking contents themselves as unused code (they are data)
    if CONTENT_DIR in code_path.parents:
        continue
    
    # Very important: we must search for this file's references in OTHER files only
    other_code = "\n".join([c for p, c in code_files.items() if p != code_path])
    
    if not is_file_referenced(code_path, other_code):
        unused_code.append(code_path)

# Report
print(f"\n[UNUSED ASSETS] Found {len(unused_assets)}")
for p in unused_assets:
    print(f"  - {p.relative_to(Path('/Users/pdh/Documents/GitHub/ZonifyWebsite'))}")
    if not DRY_RUN:
        p.unlink()

print(f"\n[UNUSED CODE FILES] Found {len(unused_code)}")
for p in unused_code:
    print(f"  - {p.relative_to(Path('/Users/pdh/Documents/GitHub/ZonifyWebsite'))}")
    if not DRY_RUN:
        p.unlink()

if not DRY_RUN:
    # Delete empty directories
    def remove_empty_dirs(path):
        if not path.is_dir():
            return
        for child in path.iterdir():
            if child.is_dir():
                remove_empty_dirs(child)
        try:
            path.rmdir()
        except OSError:
            pass
    remove_empty_dirs(PUBLIC_DIR)
    remove_empty_dirs(SRC_DIR)

print("\nScan complete.")
if DRY_RUN:
    print("No files were deleted. Change DRY_RUN = False to execute deletion.")
