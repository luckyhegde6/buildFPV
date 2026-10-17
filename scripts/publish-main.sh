#!/usr/bin/env bash
set -euo pipefail

# Safety-first helper for a local checkout of luckyhegde6/buildFPV.
# Copy/review this starter bundle in your clone, then run this script from it.
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
BRANCH="$(git branch --show-current)"
REMOTE="$(git remote get-url origin)"

if [[ "$BRANCH" != "main" ]]; then
  echo "Refusing to commit/push: current branch is '$BRANCH', not 'main'." >&2
  echo "Review the branch and switch to main intentionally before retrying." >&2
  exit 1
fi
if [[ "$REMOTE" != *"github.com/luckyhegde6/buildFPV"* ]]; then
  echo "Refusing to push: origin does not look like luckyhegde6/buildFPV ($REMOTE)." >&2
  exit 1
fi

git add README.md docs .github scripts
if git diff --cached --quiet; then
  echo "No staged documentation changes; nothing to commit."
  exit 0
fi

echo "Files staged for commit:"
git diff --cached --stat
printf '\nReview with: git diff --cached\n'
printf 'Commit and push these reviewed docs to main? Type YES to continue: '
read -r answer
if [[ "$answer" != "YES" ]]; then
  echo "Stopped without committing or pushing."
  exit 0
fi

git commit -m "docs: expand beginner FPV learning guide and Pocket setup"
git push origin main
