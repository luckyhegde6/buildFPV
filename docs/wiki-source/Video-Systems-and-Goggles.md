# 📺 FPV Video Systems and Goggles

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-video-system.svg" alt="Enlarged high-resolution FPV video path from camera through VTX or digital air unit to compatible goggles" width="1200" />

*High-resolution video-path overview. Analog, DJI, Walksnail and HDZero are not interchangeable simply because they all carry FPV video.*

For step-by-step compatibility and setup, see the [Analog Goggles/VRX guide](Analog-Goggles-and-VRX-Integration.md), [DJI O3/O4 air-unit and goggles guide](DJI-O3-O4-Goggles-and-Air-Unit-Integration.md), [Walksnail Avatar guide](Walksnail-Avatar-Goggles-and-Air-Unit-Integration.md), and [HDZero integration guide](HDZero-Goggles-and-VTX-Integration.md). The general comparison page is [Analog vs Digital FPV Cameras and Video](Analog-vs-Digital-FPV-Camera-Video-Guide.md).

For a deeper camera/system comparison see [Analog vs Digital FPV: Cameras, VTX and VRX](Analog-vs-Digital-FPV-Camera-Video-Guide.md), followed by [FPV Goggles and VRX Integration](FPV-Goggles-and-VRX-Integration-Guide.md). These are dedicated compatibility guides; this page remains the short overview.

![Walksnail Avatar video receiver example](https://www.caddxfpv.com/cdn/shop/files/VRX_and_V2.webp?v=1760685297&width=2000)

*Manufacturer image: [CADDXFPV / Walksnail VRX](https://www.caddxfpv.com/products/walksnail-avatar-fpv-vrx). Verify compatibility against the exact VRX/goggles and air-unit generation.*

**Choose the video system before buying goggles.**

For the detailed model-by-model camera / VTX / VRX and goggles compatibility table, start with [FPV Cameras, VTX, VRX and Goggles Compatibility Comparison](FPV-Cameras-VTX-VRX-Compatibility-Comparison.md), then continue to the dedicated [analog vs digital guide](Analog-vs-Digital-FPV-Camera-Video-Guide.md) and ecosystem integration pages below.

 The radio-control link (ELRS) and FPV video link are independent systems. A Pocket ELRS transmitter does not tell you what goggles will work with your quad.

## Main routes

| Route | What it means | Beginner trade-off |
|---|---|---|
| **Analog 5.8 GHz** | Camera → analog VTX → analog receiver/goggles | Often lower entry cost and broad parts availability; image is lower resolution and can degrade with signal/noise |
| **DJI digital** | Compatible DJI air unit/camera and DJI digital goggles/receiver ecosystem | Integrated digital image experience; system/component compatibility and cost need careful checking |
| **Walksnail Avatar** | CADDXFPV / Walksnail digital air unit and matching goggles/VRX | Digital HD options; verify exact generation, air unit, goggles or VRX, antenna and firmware support |
| **HDZero** | HDZero VTX/air unit and HDZero-compatible goggles/receiver | Digital FPV ecosystem with specific compatibility and component choices; check official current documentation |
| **OpenHD / RubyFPV** | Open digital radio/video projects, often involving SBCs/radio hardware/software setup | Interesting engineering projects, usually not the lowest-friction first-flight route |

No row is an absolute latency/quality ranking: performance depends on the exact gear, mode, signal, and use case.

## Compatibility questions before buying

- [ ] What exact VTX/air unit is fitted to the quad?
- [ ] What exact goggles, receiver module, or ground-station receiver supports it?
- [ ] Does the camera/VTX kit include antennas? Which connector and polarization?
- [ ] Is the video unit's voltage input compatible with the planned battery or regulator?
- [ ] Do the mounting holes, camera width, coax cable and antenna mounting fit the frame?
- [ ] What video channel/frequency and output-power rules apply where it will be operated? Verify official local requirements; do not assume a menu's maximum setting is legal.
- [ ] Does the video system record onboard, record DVR in the goggles, or need an action camera?
- [ ] For post-stabilization, does the file provide compatible gyro data or another supported motion-data source?

## Recording and Gyroflow

There are three different recordings to distinguish:

1. **Goggle DVR:** records the pilot-view feed; useful for review/debugging, often not the best high-quality final footage.
2. **Onboard digital recording or action camera:** captures a separate higher-quality view, depending on system/camera.
3. **Gyroflow post-stabilization:** works with supported footage and motion data (from a camera or supported external source). It is not an FPV transmission system and doesn't automatically stabilize every file.

Start with your system's manual. Only investigate Gyroflow after you can capture a test file and confirm it includes supported motion data.

## Vendor/product links

- [CADDXFPV / Walksnail official store](https://www.caddxfpv.com/)
- [BETAFPV official store](https://betafpv.com/)
- [Gyroflow GitHub and documentation](https://github.com/gyroflow/gyroflow)
- [OpenHD documentation](https://openhd.gitbook.io/open-hd/)
- [RubyFPV website](https://rubyfpv.com/)

Stock and product compatibility change. Use these pages to research exact hardware, not as a substitute for checking current manuals and receiver/goggle compatibility.
