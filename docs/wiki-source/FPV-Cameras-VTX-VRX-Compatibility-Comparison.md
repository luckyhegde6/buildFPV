# FPV Cameras, VTX, VRX and Goggles — Compatibility Comparison

![Analog vs digital FPV video paths](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/analog-vs-digital-video.svg)

**Start with a complete video system.** Camera, VTX/air unit, antenna, ground receiver (VRX) and goggles/display must work as a supported chain. A flight-control radio receiver such as ELRS is separate from the video receiver.

This is a compatibility guide, not a permanent price or stock ranking. Manufacturer specifications and supported goggles/firmware are model- and revision-specific; check the exact current manual before buying.

## 1. Video-system overview

| System | Aircraft-side chain | Ground-side requirement | Typical strengths | Important trade-offs |
|---|---|---|---|---|
| **Analog 5.8 GHz** | Compatible analog FPV camera → analog VTX → antenna | Analog VRX/goggles with compatible band/channel and antenna setup | Lightweight, often lower component cost, camera/VTX/receiver can often be replaced independently | Lower image detail; picture commonly degrades progressively with noise/interference; DVR quality depends on the receiver/recorder |
| **DJI O4 Air Unit** | Camera module matched to standard O4 air unit | DJI goggles/controller generation explicitly listed by DJI for O4 | Digital live view and onboard recording in a compact module | Input voltage and camera/recording specs differ from O4 Pro; proprietary generation/firmware matching matters |
| **DJI O4 Air Unit Pro** | Camera module matched to O4 Pro air unit | DJI goggles/controller generation explicitly listed by DJI for O4 Pro | Higher-end sensor/FOV and recording modes listed by DJI | More mass/size and higher input-voltage range than standard O4; airflow and mounting matter |
| **Walksnail Avatar / CADDXFPV** | Exact Avatar camera + VTX/air-unit model | Officially supported Avatar goggles/VRX generation and firmware | Digital HD options and multiple form factors across the product family | Compatibility must be checked by exact generation; connector, camera cable, firmware and receiver are not universal |
| **HDZero** | Camera supported by exact HDZero VTX → antenna | HDZero-compatible goggles/receiver and supported modes | Product options for whoop, racing and freestyle uses; specs vary by model | Mounting, voltage, weight and power differ significantly among VTX models; do not treat “digital” as cross-brand compatible |
| **Integrated analog whoop/AIO** | Camera and analog VTX, sometimes integrated with FC/ESC/RX on one board | Analog goggles/VRX matching the VTX link | Low mass, fewer wires, good fit for tiny builds | Repair/replacement may mean changing a combined board; battery and payload limit component choices |

## 2. Verified example specifications — model-specific, not category-wide

| Model | Published details useful for comparison | What not to assume | Official source |
|---|---|---|---|
| **BETAFPV Air75 (listed 5-in-1 version)** | 21 g aircraft; 75 mm wheelbase; 40 mm two-blade props; C03 camera; onboard 5.8 GHz analog VTX listed at 25–400 mW; onboard serial ELRS 2.4 GHz RX; recommended LAVA 1S 450 mAh pack | Its 75 mm wheelbase is not its prop diameter. The maker's 6.5-minute number uses a stated 4.35–3.3 V test range and is not a universal flight-time target | [BETAFPV Air75](https://betafpv.com/products/air75-brushless-whoop-quadcopter) |
| **DJI O4 Air Unit (standard)** | DJI specs list approximately 5.1 g without camera module / 8.2 g with camera module, 1/2-inch CMOS and 117.6° FOV; listed live-view/recording modes and input range are specific to this model | Do not apply O4 Pro's sensor, input voltage, recording modes or weight to standard O4 | [DJI O4 specs](https://www.dji.com/o4-air-unit/specs) |
| **DJI O4 Air Unit Pro** | DJI specs list approximately 15.6 g without camera module / 32 g with camera module, 1/1.3-inch CMOS and 155° FOV; listed onboard recording includes supported 4K modes; input range differs from standard O4 | Recording and live-view mode depend on product, firmware and settings. Manufacturer range/latency tests are not a flight guarantee | [DJI O4 specs](https://www.dji.com/o4-air-unit/specs) |
| **HDZero Whoop V2 VTX** | HDZero's VTX table lists a 31 × 31 mm board outline, 25.5 × 25.5 mm mounting, about 5.3 g and 3–12.6 V input for the listed model | These values are not properties of every HDZero VTX or board revision | [HDZero VTX summary](https://docs.hd-zero.com/vtx-summary) |
| **HDZero Freestyle V2 VTX** | HDZero's table lists a 29 × 30 mm outline, 20 × 20 mm mounting, about 22.3 g and 7–25 V input for the listed model | Don't assume it fits a tinywhoop or can be powered directly from any battery | [Freestyle V2 documentation](https://docs.hd-zero.com/freestyle-v2) |
| **Walksnail Avatar HD Pro / Goggles X** | CADDXFPV documents multiple Avatar air units/camera kits and goggles/VRX generations, with a model-level compatibility guide and manuals | Don't infer exact compatibility from “Walksnail”, “Avatar”, “digital” or connector appearance alone | [Avatar compatibility](https://wiki.caddxfpv.com/en/Avatar-HD-Series/How-to-buy), [Goggles X docs](https://wiki.caddxfpv.com/en/Avatar-HD-Series/Receiver-Unit/Goggles-X) |

**Source interpretation:** the table repeats selected maker-published values for a named model. It does not prove all optional kits or later hardware revisions have identical components; use the current listing/box label for the selected SKU.

## 3. Camera types and how to choose

### Analog FPV cameras
Select an analog camera that outputs a signal accepted by the VTX and physically fits the canopy/cage. Compare resolution format, aspect ratio, lens/FOV, latency test method, low-light performance, dynamic range, physical size and mass only where the maker publishes comparable data. Most analog FPV camera/VTX pairings are component-based, but board/cable/output compatibility still matters.

### Digital camera modules
Many digital air units require a specific supported camera module and cable. Compare sensor size, FOV, supported live-view mode, onboard recording, weight, input power and cooling per exact model. A larger sensor or higher recording resolution alone does not tell the whole story about live-feed latency, signal robustness, low-light quality or flight performance.

**Always distinguish three images/recordings:**
1. **Live FPV view** — the image received by goggles during flight.
2. **Goggle DVR** — recording made by supported goggles/VRX from the received feed.
3. **Onboard recording** — recording directly on a supported digital air unit or separate action camera.

These can have different resolutions, frame rates, crops, colour, stabilisation data and failure modes.

## 4. Match the video system to the mission

| Use case | What often matters most | Trade-offs to evaluate |
|---|---|---|
| Tinywhoop / indoor micro | Low camera/VTX mass, small physical footprint, current draw and antennas | HD modules can consume a large part of the aircraft's weight and power budget |
| Racing | End-to-end latency in the selected mode, consistent picture, receiver behavior and racer preference | A latency claim from another mode/product cannot be used as a universal comparison |
| Freestyle | Camera crash protection, antenna security, video-recording needs and replacement cost | Heavier HD unit/action camera affects mass, handling and crash consequence |
| Cinewhoop | Camera FOV, onboard recording, air-unit fit, thermal management and payload | Ducts add mass/drag; action-camera + air-unit weight affects thrust/current/inertia |
| Long-range / efficient cruise | Power draw, antennas, supported link mode, recording and recovery planning | Advertised RF range is not usable mission range or battery endurance; local rules still apply |

## 5. Compatibility matrix before checkout

- [ ] Exact camera model and signal/interface are supported by the selected VTX/air unit.
- [ ] Exact air unit/VTX generation is explicitly listed as compatible with intended goggles/VRX and firmware.
- [ ] Input voltage range includes full battery voltage or the build uses an appropriately rated regulator.
- [ ] FC/OSD/serial connections follow the exact board and air-unit manuals; no guessed pinouts.
- [ ] Antenna connector, operating band, polarization and mounting are correct.
- [ ] RF channel/power configuration is allowed in the location of operation.
- [ ] Frame dimensions, camera opening, module mounting and cable length fit the exact frame version.
- [ ] Air unit has required airflow/cooling; follow the maker's stationary/bench-power warning.
- [ ] Goggle DVR and onboard recording requirements are separated and confirmed.
- [ ] Spare camera modules, cables, antennas and replacement VTX/air-unit availability are considered.

## 6. Common compatibility errors

| Error | Why it fails | Safer fix |
|---|---|---|
| Buying goggles because they say “HD” | Digital FPV ecosystems are not a universal cross-brand standard | Check the exact maker's compatibility table |
| Treating DJI consumer camera drones as modular FPV parts | Consumer camera-drone products and DIY FPV air units are different systems | Start from DJI's FPV O3/O4 air-unit documentation, not the camera-drone catalogue |
| Powering a VTX from a compatible-looking battery plug | Plug shape says nothing about allowable input voltage or polarity | Check voltage, polarity, power input and regulator ratings against the manual |
| Assuming onboard recording equals goggle DVR | They're different signal/recording paths | Test and document each independently |
| Matching antennas only by connector | Band, polarization, connector and mounting also matter | Verify the RF link end-to-end |
| Using a published maximum range as a flight plan | Range depends on test conditions, RF environment, antennas, region and energy reserve | Plan to a conservative mission budget and local rules |

## 7. Official references

- [BETAFPV Air75](https://betafpv.com/products/air75-brushless-whoop-quadcopter)
- [CADDXFPV / Walksnail Avatar HD Pro Kit](https://www.caddxfpv.com/products/walksnail-avatar-hd-pro-kit)
- [CADDXFPV Avatar compatibility guide](https://wiki.caddxfpv.com/en/Avatar-HD-Series/How-to-buy)
- [Walksnail Goggles X documentation](https://wiki.caddxfpv.com/en/Avatar-HD-Series/Receiver-Unit/Goggles-X)
- [CADDXFPV downloads / manuals](https://www.caddxfpv.com/pages/download-center)
- [DJI O4 Air Unit Series specifications](https://www.dji.com/o4-air-unit/specs)
- [DJI O4 FAQ / compatibility](https://www.dji.com/o4-air-unit/faq)
- [DJI camera-drone catalogue](https://www.dji.com/global/camera-drones?site=brandsite&from=nav) — included only to clarify that DJI camera drones are a separate product category
- [HDZero VTX summary](https://docs.hd-zero.com/vtx-summary)
- [HDZero Freestyle V2](https://docs.hd-zero.com/freestyle-v2)
- [HDZero product catalogue](https://www.hd-zero.com/products)
- [Betaflight setup guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)

*Reviewed 22 October 2026. Specs/firmware/availability and local RF rules can change. Recheck exact SKU and manual at purchase time.*
