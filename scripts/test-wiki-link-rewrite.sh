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

printf 'Wiki link rewrite test passed.\n'
