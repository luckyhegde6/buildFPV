#!/usr/bin/env bash
set -euo pipefail

# Publish docs/wiki-source/*.md to the dedicated GitHub Wiki Git repository.
# Run from a local buildFPV clone after committing/pushing the main repo docs.
ROOT="$(git rev-parse --show-toplevel)"
SOURCE="$ROOT/docs/wiki-source"
WIKI_REMOTE="${BUILDFPV_WIKI_REMOTE:-https://github.com/luckyhegde6/buildFPV.wiki.git}"
WIKI_DIR="${1:-$(dirname "$ROOT")/buildFPV.wiki}"

if [[ ! -d "$SOURCE" ]]; then
  echo "Could not find docs/wiki-source at $SOURCE" >&2
  exit 1
fi

if [[ ! -d "$WIKI_DIR/.git" ]]; then
  echo "Cloning Wiki into: $WIKI_DIR"
  git clone "$WIKI_REMOTE" "$WIKI_DIR"
fi

# Wiki pages live at the root of the separate .wiki.git repository.
# README.md is maintainer documentation for this source folder, not a Wiki page.
for page in "$SOURCE"/*.md; do
  [[ "$(basename "$page")" == "README.md" ]] && continue
  cp "$page" "$WIKI_DIR"/
done

cd "$WIKI_DIR"
git add -- *.md
if git diff --cached --quiet; then
  echo "Wiki already matches docs/wiki-source; nothing to publish."
  exit 0
fi

git commit -m "docs: expand beginner FPV wiki and Pocket radio guide"
echo "Pushing Wiki branch $(git branch --show-current) to origin..."
git push origin HEAD
