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

# GitHub-hosted runners may not define a Git author identity. Preserve any
# existing maintainer identity, and add a repository-local fallback only when
# Git has no configured name/email (needed for automated Wiki commits).
if ! git config user.name >/dev/null 2>&1; then
  git config user.name "${BUILDFPV_WIKI_GIT_USER_NAME:-github-actions[bot]}"
fi
if ! git config user.email >/dev/null 2>&1; then
  git config user.email "${BUILDFPV_WIKI_GIT_USER_EMAIL:-41898282+github-actions[bot]@users.noreply.github.com}"
fi

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

# Allow recovery when the previous publisher run already copied the generated
# pages/images into the Wiki checkout. These files are safe to refresh from source.
# Still stop if a file outside the expected generated set has local edits.
STATUS="$(git status --porcelain --untracked-files=all)"
if [[ -n "$STATUS" ]]; then
  UNEXPECTED=0
  while IFS= read -r status_line; do
    [[ -n "$status_line" ]] || continue
    path="${status_line:3}"
    case "$path" in
      *.md|images/*)
        # Only root Wiki markdown and files under images/ are publisher-managed.
        if [[ "$path" == */* && "$path" != images/* ]]; then
          echo "Unexpected nested change: $path" >&2
          UNEXPECTED=1
        fi
        ;;
      *)
        echo "Unexpected local change: $path" >&2
        UNEXPECTED=1
        ;;
    esac
  done <<< "$STATUS"

  if [[ "$UNEXPECTED" -ne 0 ]]; then
    echo "Refusing to publish because non-generated local changes need review." >&2
    git status --short
    exit 1
  fi

  echo "Found Wiki Markdown/images from an earlier interrupted publish."
  echo "They will be refreshed from docs/wiki-source and docs/assets before staging."
fi

# Refresh existing Wiki history before replacing pages. A clean clone is still
# required, but source pages in this repo never count as Wiki working-tree edits.
BRANCH="$(git branch --show-current)"
if [[ -z "$BRANCH" ]]; then
  echo "Refusing to publish from a detached HEAD." >&2
  exit 1
fi
git fetch origin
if git show-ref --verify --quiet "refs/remotes/origin/$BRANCH"; then
  git merge --ff-only "origin/$BRANCH"
else
  echo "No origin tracking branch exists for '$BRANCH'; continuing with the initialized Wiki branch."
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
      if [[ "${BUILDFPV_SKIP_EXTERNAL_IMAGE_DOWNLOADS:-0}" == "1" ]]; then
        echo "Skipping external image download; retaining source URL: $image_url"
        continue
      fi
      extension="${basename##*.}"
      stem="${basename%.*}"
      url_hash="$(printf '%s' "$image_url" | sha256sum | cut -c1-8)"
      filename="${stem}-${url_hash}.${extension}"
      target="$WIKI_DIR/images/$filename"
      if [[ ! -s "$target" ]]; then
        if ! curl --fail --location --silent --show-error --connect-timeout 5 --max-time 12 "$image_url" --output "$target.tmp"; then
          rm -f "$target.tmp"
          echo "Warning: could not download image; keeping source URL: $image_url" >&2
          continue
        fi
        mv "$target.tmp" "$target"
      fi
    fi

    # Rewrite the matching Markdown image destination using Bash only.
    # This keeps the publisher compatible with Git Bash installs without Python.
    wiki_path="images/$filename"
    temp_page="$page.tmp"
    while IFS= read -r line || [[ -n "$line" ]]; do
      line="${line//"]($image_url)"/"]($wiki_path)"}"
      printf '%s\n' "$line"
    done < "$page" > "$temp_page"
    mv "$temp_page" "$page"
  done < <(grep -Eo '!\[[^]]*\]\(https?://[^)]*\)' "$page" | sed -E 's/^!\[[^]]*\]\((https?:\/\/[^)]*)\)$/\1/' | sort -u)
done

# Internal Wiki links point to page slugs, not the source Markdown filenames.
# GitHub Wiki's public routes omit the ".md" suffix. Preserve optional anchors and
# do not change external URLs or source-code paths. Build all substitutions first,
# then run sed once per page instead of spawning a process for every line/target pair.
for page in "$WIKI_DIR"/*.md; do
  [[ -f "$page" ]] || continue
  sed_args=()
  while IFS= read -r target_page; do
    [[ -n "$target_page" ]] || continue
    [[ "$target_page" == "README.md" ]] && continue
    target_slug="${target_page%.md}"
    escaped_page="${target_page//./\\.}"
    sed_args+=(-e "s|\\]\\((\\./)?${escaped_page}(#[^)]*)?\\)|](${target_slug}\\2)|g")
  done < <(for target in "$WIKI_DIR"/*.md; do basename "$target"; done)
  if [[ "${#sed_args[@]}" -gt 0 ]]; then
    temp_page="$page.tmp"
    sed -E "${sed_args[@]}" "$page" > "$temp_page"
    mv "$temp_page" "$page"
  fi
done

# GitHub's whitespace check rejects newly added blank lines at EOF. Normalize all
# publisher-managed Markdown pages while preserving internal blank lines and line breaks.
for page in "$WIKI_DIR"/*.md; do
  [[ -f "$page" ]] || continue
  temp_page="$page.tmp"
  awk '
    { lines[NR] = $0 }
    END {
      n = NR
      while (n > 0 && lines[n] ~ /^[[:space:]]*$/) n--
      for (i = 1; i <= n; i++) print lines[i]
    }
  ' "$page" > "$temp_page"
  mv "$temp_page" "$page"
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
