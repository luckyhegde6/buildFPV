# FPV Goggles and VRX Integration Guide

![Goggles and receiver integration overview](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/goggles-vrx-integration.svg)

**Choose goggles before choosing the aircraft video transmitter.** Goggles are not all interchangeable. The aircraft video receiver (VRX) must support the exact analog or digital video system and, for digital products, often the precise generation and firmware combination. The radio-control receiver (e.g. ELRS) is completely separate.

## 1. Goggles and receiver categories

| Type | What it is | Benefits | Trade-offs / checks |
|---|---|---|---|
| **Analog goggles with built-in receiver** | Goggles contain an analog 5.8 GHz VRX | Simple entry route, fewer separate parts | Check supported bands/channels, receiver sensitivity/features, antenna connectors and whether a receiver module can be replaced |
| **Analog goggles with module bay** | Goggles accept a compatible external VRX module | Upgrade choice and receiver diversity options on supported goggles | Module bay pinout/shape/protocol and power are not universal; verify the goggles and module manual |
| **Digital ecosystem goggles** | Goggles designed to receive one maker's digital FPV system | Integrated digital receiver, display and recording/features | Generally not compatible with another maker's digital air unit just because both are “HD” |
| **Standalone VRX + screen/monitor** | Receiver output connects to a supported monitor/HDMI/display | Useful for ground station or spectators | Interface, latency, input support, power and recording features vary |
| **Box goggles vs compact binocular goggles** | Differences in display/optics/fit rather than a guarantee of video-system compatibility | Box goggles can be cost-accessible and glasses-friendly; compact goggles can be portable | Compare FOV, resolution, diopter/eyebox, IPD/fit, focus adjustment, weight, battery and comfort in person where possible |
| **Video receiver diversity** | Two or more receiver/antenna inputs with supported combining/selection | May help reception with suitable antennas/environment | “Diversity” is a receiver architecture, not an antenna shape or a guarantee of range |

## 2. Common video ecosystems

### Analog 5.8 GHz
**Typical chain:** analog FPV camera → analog VTX → antenna → analog receiver/goggles.

Check the exact frequency/channel support, RF power allowed in your region, antenna connector and polarization, and whether your goggles have a built-in receiver or require a module. A random digital air unit cannot be treated as an analog VTX.

### DJI digital air units
DJI lists exact supported goggles and remote controllers for each FPV air-unit generation. For example, DJI's O4 Air Unit specifications distinguish standard O4 and O4 Pro and list supported combinations such as Goggles 3 / Goggles N3 with the DJI FPV Remote Controller 3, or Goggles 2 / Goggles Integra with the Remote Controller 2. Verify the current page and firmware notes before purchase.

- [DJI O4 Air Unit Series specs and compatibility](https://www.dji.com/o4-air-unit/specs)
- [DJI O4 FAQ](https://www.dji.com/o4-air-unit/faq)

The standard O4 and O4 Pro are not identical in weight, camera, recording and input-voltage specifications. Compatibility is generation-specific. DJI consumer camera drones are not interchangeable with an arbitrary DIY FPV air unit.

### Walksnail Avatar / CADDXFPV
Avatar has different air-unit, camera and goggles/VRX products. Check the official compatibility comparison for supported pairings and use the exact manual for firmware, binding and camera-module details.

- [Official Avatar buying / compatibility page](https://wiki.caddxfpv.com/en/Avatar-HD-Series/How-to-buy)
- [Walksnail Goggles X documentation](https://wiki.caddxfpv.com/en/Avatar-HD-Series/Receiver-Unit/Goggles-X)
- [Walksnail HD Pro Kit](https://www.caddxfpv.com/products/walksnail-avatar-hd-pro-kit)
- [CADDXFPV downloads](https://www.caddxfpv.com/pages/download-center)

### HDZero
HDZero goggles and video transmitters are designed around the HDZero ecosystem. Different VTX products have distinct mounting, input-voltage and power characteristics; check the exact VTX page and goggles documentation.

- [HDZero product catalogue](https://www.hd-zero.com/products)
- [Official HDZero VTX summary](https://docs.hd-zero.com/vtx-summary)
- [HDZero Freestyle V2](https://docs.hd-zero.com/freestyle-v2)

Do not assume that a receiver labeled “digital” supports DJI or Walksnail. “HD” is not a universal cross-brand standard.

## 3. Goggles ergonomics and integration checks

Before buying, assess more than display resolution:

- **Fit and optics:** field of view (FOV), focus/diopter adjustment, interpupillary distance (IPD) or eye box, ability to wear corrective glasses, face foam and light leakage.
- **Display and latency:** resolution and refresh rate, compatible transmission modes, latency under the specific mode/test condition, and behaviour under weak signals.
- **Receiver system:** built-in vs external module; exact module bay/interface, diversity capability, antenna connectors and supported bands.
- **Power:** battery type, voltage, runtime and charging arrangement; use the supplied/manual-approved supply.
- **DVR / recording:** distinguish receiver-side DVR from onboard air-unit recording. Check resolution, file format, supported card and audio/OSD limitations.
- **External inputs/outputs:** HDMI-in/out or analog-in are supported only on certain models and firmware. A connector being physically present does not guarantee every input mode.
- **Upgrade/replacement cost:** receiver modules, antennas, cables, faceplates and batteries can be system-specific.
- **Simulator use:** check USB/HDMI/AV input support and supported mode in the exact goggles manual.

Try fit and optics if possible. Comfort and clarity vary between pilots, so treat FOV or fit preferences as subjective rather than universal rankings.

## 4. Integration procedure

1. Write the exact air unit/VTX model, camera, goggles/VRX model, hardware revision and firmware versions.
2. Read the maker's compatibility page and ensure the air unit ↔ receiver/goggles generation is explicitly supported.
3. Verify input voltage, antenna, connector, polarization, channel/band and regional settings.
4. Follow the official binding/activation and firmware update order. Back up applicable settings first and do not cross-flash a guessed target.
5. Mount and route antennas according to the hardware instructions. Avoid pinched coax, loose connectors and propeller interference.
6. Provide the required airflow and do not leave a digital air unit powered on an unventilated bench if its manual warns against that.
7. Test live video, channels/OSD, signal warnings, DVR and any onboard recording as separate items before flight.

## 5. Quick compatibility matrix

| Air-side video system | Ground side to verify | Do not assume |
|---|---|---|
| Analog camera + analog VTX | Analog VRX / goggles with compatible band, channel, antenna and connector | That any 5.8 GHz product supports the same band/channel/polarization |
| DJI O3/O4 air unit | Exact DJI goggles generation and firmware listed by DJI for that unit | That every DJI-branded goggle supports every air unit |
| Walksnail Avatar air unit | Explicit compatible Avatar goggles/VRX model/generation and firmware | That Walksnail digital video is compatible with DJI/HDZero simply because all are HD |
| HDZero VTX | HDZero-compatible receiver/goggles and supported firmware/mode | That a generic HDMI connector makes ecosystems interchangeable |
| Unknown/used system | Identify exact label, revision, cable and manual before powering/buying | Never buy purely based on the seller saying “digital goggles” |

## Sources (checked 22 October 2026)

- [DJI O4 Air Unit Series specifications](https://www.dji.com/o4-air-unit/specs)
- [DJI O4 FAQ](https://www.dji.com/o4-air-unit/faq)
- [CADDXFPV Avatar comparison](https://wiki.caddxfpv.com/en/Avatar-HD-Series/How-to-buy)
- [CADDXFPV Goggles X guide](https://wiki.caddxfpv.com/en/Avatar-HD-Series/Receiver-Unit/Goggles-X)
- [HDZero VTX specifications](https://docs.hd-zero.com/vtx-summary)
- [BETAFPV](https://betafpv.com/)

*Live compatibility and firmware can change. Always check the exact manufacturer support table immediately before purchasing or updating.*
