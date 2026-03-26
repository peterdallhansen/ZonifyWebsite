import os
from pathlib import Path

# Paths
SRC_DIR = Path('/Users/pdh/Documents/GitHub/ZonifyWebsite/src')
PUBLIC_DIR = Path('/Users/pdh/Documents/GitHub/ZonifyWebsite/public')

# Gather all text content to search for filenames
full_text = ""
for root, dirs, files in os.walk(SRC_DIR):
    # Exclude assets from text search to prevent self-reference matching
    if 'assets' in Path(root).parts:
        continue
    for file in files:
        if file.endswith(('.ts', '.tsx', '.css', '.json', '.js', '.jsx')):
            try:
                full_text += Path(root, file).read_text(encoding='utf-8')
            except:
                pass
                
# Files we never delete because Next.js uses them implicitly based on their name
METADATA_FILES = {
    'favicon.ico',
    'opengraph-image.png',
    'twitter-image.png',
    'apple-icon.png',
    'icon.png',
    'robots.txt',
    'sitemap.xml',
    'manifest.json',
    'icon.ico',
    'icon2.ico',
    'icona.ico',
    'iconb.ico',
    'i.ico',
    'f.ico',
    'b.ico'
}

deleted_count = 0

# 1. Clean up public directory
if PUBLIC_DIR.exists():
    for root, dirs, files in os.walk(PUBLIC_DIR):
        for file in files:
            if file in METADATA_FILES:
                continue
                
            file_path = Path(root, file)
            # If the filename exactly doesn't appear IN The code, it's dead
            if file not in full_text:
                file_path.unlink()
                print(f"Deleted unused public asset: {file_path.relative_to(PUBLIC_DIR)}")
                deleted_count += 1
                
# 2. Clean up src/assets directory (SVG components, etc)
ASSETS_DIR = SRC_DIR / 'assets'
if ASSETS_DIR.exists():
    for root, dirs, files in os.walk(ASSETS_DIR):
        for file in files:
            if file in METADATA_FILES:
                continue
                
            file_path = Path(root, file)
            # Check if this filename is imported or used in the code
            if file not in full_text:
                file_path.unlink()
                print(f"Deleted unused src/asset: {file_path.relative_to(ASSETS_DIR)}")
                deleted_count += 1

print(f"Total dead visual assets deleted: {deleted_count}")

# Delete empty directories in public and assets
def remove_empty_dirs(path):
    if not path.is_dir():
        return
    for child in path.iterdir():
        if child.is_dir():
            remove_empty_dirs(child)
    try:
        path.rmdir()
    except OSError:
        pass # Not empty

remove_empty_dirs(PUBLIC_DIR)
if ASSETS_DIR.exists():
    remove_empty_dirs(ASSETS_DIR)
