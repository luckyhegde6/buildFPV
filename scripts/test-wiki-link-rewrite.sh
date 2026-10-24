#!/usr/bin/env bash
# Regression test for the Wiki internal-link rewrite used by scripts/publish-wiki.sh.
# Run with: bash scripts/test-wiki-link-rewrite.sh
set -euo pipefail

target_page="How-FPV-Drones-Work.md"
target_slug="${target_page%.md}"
escaped_page="${target_page//./\\.}"

rewrite_line() {
  printf '%s\n' "$1" | sed -E "s|\\]\\((\\./)?${escaped_page}(#[^)]*)?\\)|](${target_slug}\\2)|g"
}

input='[plain](How-FPV-Drones-Work.md) [anchor](./How-FPV-Drones-Work.md#pitch) [external](https://example.com/How-FPV-Drones-Work.md)'
expected='[plain](How-FPV-Drones-Work) [anchor](How-FPV-Drones-Work#pitch) [external](https://example.com/How-FPV-Drones-Work.md)'
actual="$(rewrite_line "$input")"

if [[ "$actual" != "$expected" ]]; then
  printf 'Wiki link rewrite regression.\nExpected: %s\nActual:   %s\n' "$expected" "$actual" >&2
  exit 1
fi

# Regression test for HTML image sizing and Wiki-local asset rewrite.
image_url='https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-drone-movements-guide.webp'
wiki_path='images/fpv-drone-movements-guide.webp'
html_input='<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-drone-movements-guide.webp" alt="movement" width="1200" />'
html_from="src=\"$image_url\""
html_to="src=\"$wiki_path\""
html_actual="${html_input//"$html_from"/"$html_to"}"
html_expected='<img src="images/fpv-drone-movements-guide.webp" alt="movement" width="1200" />'
if [[ "$html_actual" != "$html_expected" ]]; then
  printf 'HTML image rewrite regression.\\nExpected: %s\\nActual:   %s\\n' "$html_expected" "$html_actual" >&2
  exit 1
fi

printf 'Wiki link and image rewrite tests passed.\\n'
