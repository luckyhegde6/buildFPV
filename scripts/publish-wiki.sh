#!/usr/bin/env bash
set -euo pipefail

# Safety-first publisher for the dedicated GitHub Wiki repository.
# Run from a local checkout of luckyhegde6/buildFPV after syncing main.
ROOT="$(git rev-parse --show-toplevel)"
SOURCE="$ROOT/docs/wiki-source"
ASSET_SOURCE="$ROOT/docs/assets"
WIKI_REMOTE="${BUILDFPV_WIKI_REMOTE:-https://github.com/luckyhegde6/buildFPV.wiki.git}"
AUTO_CONFIRM=0
if [[ "${1:-}" == "--yes" ]]; then
  AUTO_CONFIRM=1
  shift
fi
WIKI_DIR="${1:-$(dirname "$ROOT")/buildFPV.wiki}"

if [[ ! -d "$SOURCE" ]]; then
  echo "Could not find Wiki source pages at: $SOURCE" >&2
  exit 1
fi

if [[ ! -d "$ASSET_SOURCE" ]]; then
  echo "Could not find project image assets at: $ASSET_SOURCE" >&2
  exit 1
fi

if [[ ! -d "$WIKI_DIR/.git" ]]; then
  echo "Cloning Wiki into: $WIKI_DIR"
  if ! git clone "$WIKI_REMOTE" "$WIKI_DIR"; then
    echo "Could not clone the Wiki repository." >&2
    echo "GitHub may not have initialized it yet. Open the Wiki page, create/save the first Home page, then rerun this script." >&2
    exit 1
  fi
fi

cd "$WIKI_DIR"

if ! git remote get-url origin >/dev/null 2>&1; then
  echo "Refusing to publish: Wiki clone has no 'origin' remote." >&2
  exit 1
fi

normalise_remote() {
  printf '%s' "$1" | sed -E 's#\.git$##; s#/$##'
}

EXPECTED_REMOTE="$(normalise_remote "$WIKI_REMOTE")"
ACTUAL_REMOTE="$(normalise_remote "$(git remote get-url origin)")"
if [[ "$ACTUAL_REMOTE" != "$EXPECTED_REMOTE" ]]; then
  echo "Refusing to publish to an unexpected Wiki remote." >&2
  echo "Expected: $EXPECTED_REMOTE" >&2
  echo "Actual:   $ACTUAL_REMOTE" >&2
  exit 1
fi

if [[ -n "$(git status --porcelain --untracked-files=all)" ]]; then
  echo "Refusing to publish: Wiki clone has local changes." >&2
  echo "Review or commit/stash those changes, then run this script again." >&2
  git status --short
  exit 1
fi

# Refresh an existing clean clone before staging changes. On first initialization,
# the clone may have no branch or remote-tracking ref yet; keep that case usable.
BRANCH="$(git branch --show-current)"
if [[ -n "$BRANCH" ]]; then
  git fetch origin
  if git show-ref --verify --quiet "refs/remotes/origin/$BRANCH"; then
    git merge --ff-only "origin/$BRANCH"
  else
    echo "Note: no matching origin tracking branch yet; continuing with local Wiki branch '$BRANCH'."
  fi
else
  echo "Refusing to publish from a detached HEAD." >&2
  exit 1
fi

# Wiki pages live at the root of the separate .wiki.git repository.
# README.md is maintainer documentation for docs/wiki-source, not a Wiki page.
for page in "$SOURCE"/*.md; do
  [[ "$(basename "$page")" == "README.md" ]] && continue
  cp "$page" "$WIKI_DIR"/
done

# Publish image files inside the Wiki repository itself, not just as hotlinks.
# Project-owned images are copied from docs/assets. External image URLs are
# downloaded into images/ when possible; if a host blocks downloads, the page
# keeps its original URL so the image can still load from its source.
mkdir -p "$WIKI_DIR/images"

for page in "$WIKI_DIR"/*.md; do
  [[ -f "$page" ]] || continue
  while IFS= read -r image_url; do
    [[ -n "$image_url" ]] || continue
    clean_url="${image_url%%\?*}"
    basename="${clean_url##*/}"
    [[ -n "$basename" ]] || continue

    if [[ "$image_url" == https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/* ]]; then
      filename="$basename"
      if [[ -f "$ASSET_SOURCE/$filename" ]]; then
        cp "$ASSET_SOURCE/$filename" "$WIKI_DIR/images/$filename"
      else
        echo "Warning: project asset not found: $ASSET_SOURCE/$filename" >&2
        continue
      fi
    else
      extension="${basename##*.}"
      stem="${basename%.*}"
      url_hash="$(printf '%s' "$image_url" | sha256sum | cut -c1-8)"
      filename="${stem}-${url_hash}.${extension}"
      target="$WIKI_DIR/images/$filename"
      if [[ ! -s "$target" ]]; then
        if ! curl --fail --location --silent --show-error --retry 2 --connect-timeout 15 "$image_url" --output "$target.tmp"; then
          rm -f "$target.tmp"
          echo "Warning: could not download image; keeping source URL: $image_url" >&2
          continue
        fi
        mv "$target.tmp" "$target"
      fi
    fi

    # Rewrite only the matching Markdown image destination for the Wiki copy.
    python3 - "$page" "$image_url" "images/$filename" <<'PY'
import pathlib
import sys

page = pathlib.Path(sys.argv[1])
source_url = sys.argv[2]
wiki_path = sys.argv[3]
text = page.read_text(encoding="utf-8")
text = text.replace(f"]({source_url})", f"]({wiki_path})")
page.write_text(text, encoding="utf-8")
PY
  done < <(grep -Eo '!\[[^]]*\]\(https?://[^)]*\)' "$page" | sed -E 's/^!\[[^]]*\]\((https?:\/\/[^)]*)\)$/\1/' | sort -u)
done

git add -- *.md images/
if git diff --cached --quiet; then
  echo "Wiki pages and images already match docs/wiki-source; nothing to publish."
  exit 0
fi

git diff --cached --check
echo "Wiki pages and images staged for publication:"
git diff --cached --stat
printf '\nReview the staged content with: git diff --cached\n'
if [[ "$AUTO_CONFIRM" -eq 1 ]]; then
  echo "Auto-confirm enabled by --yes; committing staged Wiki pages and images."
else
  printf 'Commit and push these Wiki updates? Type PUBLISH to continue: '
  read -r answer
  if [[ "$answer" != "PUBLISH" ]]; then
    echo "Stopped without committing or pushing."
    exit 0
  fi
fi

git commit -m "docs: sync beginner FPV Wiki pages and images"
echo "Pushing Wiki branch $(git branch --show-current) to origin..."
git push origin HEAD
