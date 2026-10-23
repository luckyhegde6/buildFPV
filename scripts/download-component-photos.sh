#!/usr/bin/env bash
set -euo pipefail

# Download freely licensed component photographs from Wikimedia Commons.
# The source file/license pages are cited beside each image in
# docs/wiki-source/Drone-Parts-One-by-One.md and documented in
# docs/assets/REAL-WORLD-COMPONENT-PHOTO-CREDITS.md.
ROOT="$(git rev-parse --show-toplevel)"
ASSETS="$ROOT/docs/assets"
mkdir -p "$ASSETS"

download_photo() {
  local filename="$1"
  local source_url="$2"
  local target="$ASSETS/$filename"
  local temp="$target.download"

  if [[ -s "$target" ]]; then
    local mime
    mime="$(file --brief --mime-type "$target")"
    case "$mime" in
      image/jpeg|image/png) echo "Keeping existing asset: $filename ($mime)"; return 0 ;;
      *) echo "Existing asset has an unexpected MIME type: $filename ($mime)" >&2; exit 1 ;;
    esac
  fi

  echo "Downloading $filename from Wikimedia Commons..."
  rm -f "$temp"
  curl --fail --location --silent --show-error \
    --retry 2 --retry-all-errors --connect-timeout 15 --max-time 90 \
    --user-agent "buildFPV documentation image importer (educational use; see in-page attribution)" \
    "$source_url" --output "$temp"

  local mime
  mime="$(file --brief --mime-type "$temp")"
  case "$mime" in
    image/jpeg|image/png) ;;
    *) echo "Download was not a JPEG/PNG image: $filename ($mime)" >&2; rm -f "$temp"; exit 1 ;;
  esac

  if [[ ! -s "$temp" ]]; then
    echo "Downloaded file is empty: $filename" >&2
    rm -f "$temp"
    exit 1
  fi

  mv "$temp" "$target"
  echo "Saved $filename ($(wc -c < "$target") bytes; $mime)"
}

download_photo "fpv-photo-components-overview.jpg" "https://commons.wikimedia.org/wiki/Special:FilePath/71188-fpv-components.jpg?width=1200"
download_photo "fpv-photo-frame-kit.png" "https://commons.wikimedia.org/wiki/Special:FilePath/Drone_frame_kit_main_image.png?width=1200"
download_photo "fpv-photo-lipo-battery.jpg" "https://commons.wikimedia.org/wiki/Special:FilePath/Drone_li-po_battery.jpg?width=1200"
download_photo "fpv-photo-brushless-motor-esc.jpg" "https://commons.wikimedia.org/wiki/Special:FilePath/Brushless_ESC_and_propellor.jpg?width=1200"
download_photo "fpv-photo-propeller.jpg" "https://commons.wikimedia.org/wiki/Special:FilePath/Quadcopter_Propeller.JPG?width=1200"
download_photo "fpv-photo-esc.jpg" "https://commons.wikimedia.org/wiki/Special:FilePath/Esc2.jpg?width=1200"
download_photo "fpv-photo-flight-controller.jpg" "https://commons.wikimedia.org/wiki/Special:FilePath/Afro-Naze32-6DOF-Flight-Controller-Board-For-QAV250-ZMR250-Quadcopter%281%29.jpg?width=1000"
download_photo "fpv-photo-flight-control-board.jpg" "https://commons.wikimedia.org/wiki/Special:FilePath/UAV_Flight_control.jpg?width=1000"
download_photo "fpv-photo-control-receiver.jpg" "https://commons.wikimedia.org/wiki/Special:FilePath/TBS_Crossfire_Nano_receiver_%28XF_nano%29.jpg?width=1200"
download_photo "fpv-photo-fpv-camera.jpg" "https://commons.wikimedia.org/wiki/Special:FilePath/Foxeer_XAT600M_HS1177_FPV_camera.jpg?width=1000"
download_photo "fpv-photo-vtx.png" "https://commons.wikimedia.org/wiki/Special:FilePath/TeamBlacksheep_%28TBS%29_Unify_Pro_HV_5.8_GHz_RF_video_transmitter_with_RP_SMA_pigtail_front.png?width=1200"
download_photo "fpv-photo-radio-goggles.jpg" "https://commons.wikimedia.org/wiki/Special:FilePath/Remote_Control_FPV_drone_FPV_Goggles.jpg?width=1400"
download_photo "fpv-photo-antennas.jpg" "https://commons.wikimedia.org/wiki/Special:FilePath/FPV_Antennen.jpg?width=1200"
download_photo "fpv-photo-gps-module.jpg" "https://commons.wikimedia.org/wiki/Special:FilePath/GPS_ublox_NEO-M6_Chip.jpg?width=1200"
download_photo "fpv-photo-buzzer.jpg" "https://commons.wikimedia.org/wiki/Special:FilePath/Electromagnetic_buzzer_06.jpg?width=1200"

echo "Downloaded/validated 15 real-world component photographs."
