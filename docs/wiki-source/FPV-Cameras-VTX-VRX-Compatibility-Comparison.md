# FPV Cameras, VTX, VRX and Goggles — Compatibility Comparison

![Analog vs digital FPV video paths](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/analog-vs-digital-video.svg)

![FPV video ecosystem compatibility overview](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/video-system-ecosystem-matrix.svg)

![Pre-purchase VTX and VRX compatibility checklist](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/vtx-vrx-compatibility-check.svg)

![CADDXFPV Walksnail Avatar HD Pro Kit product photo](https://www.caddxfpv.com/cdn/shop/products/Pro_62561ada-8f5a-4ec5-a416-cba1d0b7dd77.jpg?v=1680772446&width=2400)

*Real product example: [CADDXFPV Walksnail Avatar HD Pro Kit](https://www.caddxfpv.com/products/walksnail-avatar-hd-pro-kit). This belongs to the Walksnail digital ecosystem; it is not compatible with DJI or HDZero goggles merely because all are digital HD systems.*

![CADDXFPV Ratel 2 analog FPV camera product photo](https://www.caddxfpv.com/cdn/shop/files/CADDXFPVRatel2Camera_c2e413af-99a4-4978-9367-b3ae881ae02f.png?v=1744944069&width=1200)

*Real analog camera example: [CADDXFPV Ratel 2](https://www.caddxfpv.com/products/ratel-2-1-1-8inch-starlight-sensor-freestyle-fpv-camera). It illustrates the aircraft-side camera, not a complete camera/VTX/goggles bundle.*

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

## 2. Exact-model comparison — specifications checked 22 October 2026

The rows below are **specific examples, not a market-wide ranking**. Live view, onboard recording, and goggle DVR are different paths. “Latency” values are only comparable when the product, goggles, transmission mode, displayed frame rate and test conditions match; manufacturer minimum/average claims below use different methods and must not be compared as if measured in one lab.

| Exact model / variant | Camera and onboard recording | Live transmission / latency published by maker | Power, size and thermal fit | Ground-side receiver to verify |
|---|---|---|---|---|
| **BETAFPV Air75 — listed 5-in-1 / C03-camera configuration** | C03 analog FPV camera; product listing gives a 21 g aircraft, 75 mm wheelbase and 40 mm two-blade props. No separate HD onboard video recorder is specified for this configuration. | Integrated analog 5.8 GHz VTX is listed at **25–400 mW**. The listing does not state a directly comparable end-to-end latency figure for the installed analog chain. | VTX, FC, ESC and serial ELRS 2.4 GHz RX are integrated on the listed 5-in-1 board. Check the current SKU and board revision before relying on details from another Air75 variant. | Analog 5.8 GHz goggles/VRX with compatible band/channel and antenna. The onboard ELRS receiver is for **control**, not video reception. [BETAFPV official product listing](https://betafpv.com/products/air75-brushless-whoop-quadcopter) |
| **DJI O4 Air Unit — standard** | 1/2-inch CMOS; 117.6° FOV. Onboard recording: up to 4K (4:3 or 16:9) at 60 fps and 1080p at up to 120 fps in listed modes; maximum listed bitrate 100 Mbps. Built-in storage **23 GB**; DJI lists no supported microSD card for this model. | Live view up to **1080p/100 fps**. DJI lists minimum latency of **20 ms with Goggles 3**, **24 ms with Goggles N3**, or **less than 35 ms with Goggles 2/Integra**, at 1080p/100 fps transmission quality in the stated setup. Those are manufacturer figures from an interference-free outdoor test, not guaranteed in-flight latency. | Air unit plus camera module approx. **8.2 g** (approx. **9.2 g** with lens mount); input **3.7–13.2 V**; one antenna / 1T1R. Confirm the full battery voltage is inside the range and allow the manufacturer's required airflow. | DJI lists **Goggles 3, Goggles N3, Goggles 2 and Goggles Integra** for O4. DJI FPV Remote Controller 3 pairs with Goggles 3/N3; Remote Controller 2 pairs with Goggles 2/Integra when using DJI control through SBUS. A separate control receiver such as ELRS is a different link. [DJI official specifications](https://www.dji.com/o4-air-unit/specs) |
| **DJI O4 Air Unit Pro** | 1/1.3-inch CMOS; 155° FOV. Onboard recording: up to 4K (16:9) at 120 fps in supported modes and 4K (4:3) at 60 fps; also lists 2.7K/1080p modes up to 120 fps. Maximum listed bitrate **130 Mbps**. Built-in storage **4 GB** plus supported microSD cards up to **512 GB**. | Live view up to **1080p/100 fps**. DJI lists minimum latency of **15 ms with Goggles 3**, **19 ms with Goggles N3**, or **less than 30 ms with Goggles 2/Integra**, at 1080p/100 fps transmission quality in the stated setup. DJI's latency note specifies an interference-free outdoor test; results vary with equipment and conditions. | Air unit with camera module approx. **32 g** (module excluded: 15.6 g); input **7.4–26.4 V**; two antennas / 2T2R. Compared with standard O4 it is larger/heavier and needs more mounting space and thermal airflow. | DJI lists **Goggles 3, Goggles N3, Goggles 2 and Goggles Integra**, with the same generation-specific DJI controller combinations noted in DJI's current specs. Verify firmware and the exact hardware revision before purchase. [DJI official specifications](https://www.dji.com/o4-air-unit/specs) |
| **Walksnail Avatar HD Pro Kit — SKU WN08-3014B / Avatar V2 Module listing** | Pro camera: **1/1.8-inch Sony Starvis II**, 160° FOV, f/1.6; the product spec lists 1080p/60 and 720p/120 modes, with 1080p/120 described as compatibility. VTX has **8 GB** built-in storage for 1080p/720p onboard recording. | Maker lists an **average 22 ms** delay and 1080p/60 / 720p/120 system modes. This is the maker's stated average; it is not directly comparable with DJI's minimum-latency measurements above. Check firmware release notes before relying on a mode marked “compatibility.” | Camera listed at **9.5 g**; VTX module listed at **17.6 g** and **6–25.2 V** input, 5.725–5.850 GHz, with 20×20 mm and 25.5×25.5 mm mounting options. The product page also advertises a 15.4 g figure in marketing copy, which does not reconcile with its separately listed camera and VTX weights; do not treat 15.4 g as confirmed installed-system mass without clarifying the exact kit/revision. Follow its cooling and antenna instructions. | An explicitly compatible **Walksnail Avatar** goggles/VRX product and supported firmware. Use the current [CADDXFPV Avatar compatibility matrix](https://wiki.caddxfpv.com/en/Avatar-HD-Series/How-to-buy); “digital HD” does not make it compatible with DJI or HDZero. [Official kit specifications](https://www.caddxfpv.com/products/walksnail-avatar-hd-pro-kit) |
| **HDZero Whoop V2 VTX** | The VTX is separate from the camera, so select a supported HDZero camera and confirm cable/connector details. The VTX specification table does not make an onboard recording promise for this module; confirm DVR capability on the selected receiver/goggles. | The manufacturer lists 25 mW and 200 mW RF output options. Do not infer latency or video modes from another HDZero VTX; verify the chosen camera, VTX and goggles mode together. | **5.3 g**, 31×31 mm board outline, **25.5×25.5 mm** mounting, **3–12.6 V** input, **5–6 W** consumption. Antenna is listed as **not included**. Heat and antenna placement matter in tight whoop frames. | HDZero-compatible goggles/receiver and a supported camera/VTX configuration. It is not a generic digital VTX for DJI or Walksnail goggles. [HDZero official VTX specifications](https://docs.hd-zero.com/vtx-summary) |
| **HDZero Freestyle V2 VTX** | Camera is selected separately and must be supported by the selected HDZero VTX. Confirm recording/DVR features on the exact receiver/goggles; do not treat VTX specifications as camera or recorder specifications. | Manufacturer lists 25/200 mW output, with higher output modes indicated as 500/900 mW with HAM-license unlock. Output and allowed frequencies/power depend on applicable rules; don't copy an FCC/HAM configuration into another region. | **22.3 g**, 29×30 mm board outline, **20×20 mm** mounting, **7–25 V** input, **6–15 W** consumption. RHCP antenna is listed as included. Heavier and more power-consuming than the Whoop V2; check frame fit, regulator and airflow. | HDZero-compatible goggles/receiver and an explicitly supported mode. Other brands' digital goggles are not interchangeable by virtue of both products being HD. [HDZero Freestyle V2 / VTX specifications](https://docs.hd-zero.com/vtx-summary) |

### Compatibility conclusions from these examples

- **Power ranges are not interchangeable.** Standard DJI O4 is listed at 3.7–13.2 V; DJI O4 Pro at 7.4–26.4 V; Walksnail Avatar V2 Module at 6–25.2 V; HDZero Whoop V2 at 3–12.6 V; and HDZero Freestyle V2 at 7–25 V. Compare with the pack's *maximum fully charged voltage*, not its nominal voltage. Use a correctly rated regulator where required.
- **A recording spec is not a live-feed spec.** DJI's 4K onboard modes do not mean the pilot sees 4K in the goggles. The live-feed, goggle DVR and onboard recording are separate capabilities.
- **Do not rank latency from this table.** DJI publishes minimum values in a specified 1080p/100 fps racing-mode test; Walksnail describes an average-delay figure; the Air75 and HDZero VTX table cited here do not provide like-for-like end-to-end camera-to-display latency values.
- **Mounting, weight and cooling are design inputs.** A 20×20 mm mounting pattern does not prove connector clearance, camera/cable fit, voltage safety or enough airflow. Check the exact manufacturer's drawing and manual before assembly.
- **Control and video are separate links.** For example, Air75's onboard ELRS receiver is a control receiver. It does not receive the analog video signal. Likewise, a control link such as ELRS does not by itself make video goggles compatible.

**Source interpretation:** model-specific numbers above come from the linked manufacturer listings and spec tables checked on **22 October 2026**. The Walksnail product page contains conflicting weight claims, which are flagged instead of silently reconciled. Specs, firmware, package contents and regional transmitter rules can change; confirm the exact SKU and current documentation at checkout.

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
