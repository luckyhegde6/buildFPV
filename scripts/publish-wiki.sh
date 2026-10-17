#!/usr/bin/env bash
set -euo pipefail

# Safety-first publisher for the dedicated GitHub Wiki repository.
# Run from a local checkout of luckyhegde6/buildFPV after syncing main.
ROOT="$(git rev-parse --show-toplevel)"
SOURCE="$ROOT/docs/wiki-source"
WIKI_REMOTE="${BUILDFPV_WIKI_REMOTE:-https://github.com/luckyhegde6/buildFPV.wiki.git}"
WIKI_DIR="${1:-$(dirname "$ROOT")/buildFPV.wiki}"

if [[ ! -d "$SOURCE" ]]; then
  echo "Could not find Wiki source pages at: $SOURCE" >&2
  exit 1
fi

if [[ ! -d "$WIKI_DIR/.git" ]]; then
  echo "Cloning Wiki into: $WIKI_DIR"
  git clone "$WIKI_REMOTE" "$WIKI_DIR"
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

# Wiki pages live at the root of the separate .wiki.git repository.
# README.md is maintainer documentation for docs/wiki-source, not a Wiki page.
for page in "$SOURCE"/*.md; do
  [[ "$(basename "$page")" == "README.md" ]] && continue
  cp "$page" "$WIKI_DIR"/
done

git add -- *.md
if git diff --cached --quiet; then
  echo "Wiki already matches docs/wiki-source; nothing to publish."
  exit 0
fi

git diff --cached --check
echo "Wiki pages staged for publication:"
git diff --cached --stat
printf '\nReview the staged content with: git diff --cached\n'
printf 'Commit and push these Wiki updates? Type PUBLISH to continue: '
read -r answer
if [[ "$answer" != "PUBLISH" ]]; then
  echo "Stopped without committing or pushing."
  exit 0
fi

git commit -m "docs: sync beginner FPV Wiki pages"
echo "Pushing Wiki branch $(git branch --show-current) to origin..."
git push origin HEAD
