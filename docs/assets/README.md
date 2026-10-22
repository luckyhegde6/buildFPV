# Assets and attribution

These image and diagram files are versioned in the source repository `luckyhegde6/buildFPV` under `docs/assets/`. The canonical Markdown pages are in `docs/wiki-source/`. The live GitHub Wiki is a separate repository: run `scripts/publish-wiki.sh` to copy the pages and assets into it, rewrite image links to the Wiki's local `images/` directory, and convert internal `.md` links to extensionless Wiki page slugs.

## Where each visual belongs

| Visual | Best place to learn from it | What it explains |
|---|---|---|
| `fpv-build-concept-ai.jpg` | [Learning guide](../LEARNING-GUIDE.md) and [system basics](../01-fpv-basics.md) | A broad visual orientation to a typical FPV quad; not a wiring reference |
| `flight-axes.svg` | [How an FPV quad works](../07-how-fpv-drones-work.md) | Throttle, roll, pitch and yaw |
| `fpv-control-loop.svg` | [System basics](../01-fpv-basics.md) and [how a quad works](../07-how-fpv-drones-work.md) | Pilot input, sensor feedback, controller, ESCs and motors |
| `pocket-control-map.svg` | [RadioMaster Pocket guide](../06-pocket-button-guide.md) | Physical radio controls; switch assignments remain configurable |
| `pocket-gimbal-adjustment.png` | [RadioMaster Pocket guide](../06-pocket-button-guide.md) | Gimbal adjustment reference |
| `gps-data-chain.svg` | [GPS and FC guide](../09-gps-and-flight-controller-examples.md) | Conceptual GNSS-to-flight-controller data path |
| `fpv-parts-lineup.svg` | [Drone Parts — One by One](../wiki-source/Drone-Parts-One-by-One.md) | Full beginner component lineup and separate control, power and video paths |
| `fpv-part-frame.svg` | Drone Parts — One by One | Frame arms, centre plates and motor mounts |
| `fpv-part-battery-power.svg` | Drone Parts — One by One | LiPo battery, distribution and regulated power paths |
| `fpv-part-motor.svg`, `fpv-part-propeller.svg` | Drone Parts — One by One | Motor anatomy and propeller geometry |
| `fpv-part-esc.svg`, `fpv-part-flight-controller.svg`, `fpv-part-fc-esc-aio.svg` | Drone Parts — One by One | ESC, flight controller and stack-vs-AIO comparison |
| `fpv-part-gyro.svg` | Drone Parts — One by One | Gyro/accelerometer sensing and stabilization |
| `fpv-part-elrs-receiver.svg` | Drone Parts — One by One | Radio transmitter and aircraft-side ELRS receiver |
| `fpv-part-camera.svg`, `fpv-part-vtx.svg`, `fpv-part-vrx-goggles.svg` | Drone Parts — One by One | Camera, aircraft video transmitter and ground receiver/goggles |
| `fpv-part-antennas.svg` | Drone Parts — One by One | Linear, circular-polarized, directional and stubby antennas |
| `fpv-part-gps.svg`, `fpv-part-buzzer-blackbox.svg` | Drone Parts — One by One | Optional GNSS, recovery beeper and flight logging |
| `drone-class-overview.svg` | [Drone Categories and Size Guide](../wiki-source/Drone-Categories-and-Size-Guide.md) | Schematic selection overview; not to scale |
| `balanced-x-vs-deadcat.svg` | [Frame Geometries — Balanced X vs Deadcat](../wiki-source/Frame-Geometries-Balanced-X-vs-Deadcat.md) | Conceptual frame top view and camera FOV; frame shapes vary |
| `frame-size-reference.svg` | Class guides and frame assembly pages | Model-specific dimensions; silhouettes are not to scale or drill templates |
| `motor-prop-battery-compatibility.svg` | [Motors, Propellers and Battery Compatibility](../wiki-source/Motors-Propellers-and-Battery-Compatibility.md) | BLDC, prop and conventional LiPo voltage examples; no universal KV table |
| `drone-class-decision-tree.svg` | [Drone Categories and Size Guide](../wiki-source/Drone-Categories-and-Size-Guide.md) | Mission-based class selector with strengths and compromises |
| `bnf-pnp-rtf-arf-comparison.svg` | [BNF/PNP/RTF/ARF/DIY formats](../wiki-source/BNF-PNP-RTF-ARF-and-DIY-Formats.md) | Package inclusion tendencies; always check exact SKU contents |
| `fpv-camera-sensor-and-recording.svg` | [Analog vs Digital FPV](../wiki-source/Analog-vs-Digital-FPV-Camera-Video-Guide.md) | Separate live feed, onboard recording and goggles DVR paths |
| `video-system-ecosystem-matrix.svg` | [FPV Cameras/VTX/VRX comparison](../wiki-source/FPV-Cameras-VTX-VRX-Compatibility-Comparison.md) | Analog and digital ecosystem families; not a cross-brand compatibility promise |
| `vtx-vrx-compatibility-check.svg` | [FPV Cameras/VTX/VRX comparison](../wiki-source/FPV-Cameras-VTX-VRX-Compatibility-Comparison.md) | Pre-buy checklist for power, connector, firmware, generation, antenna and mounting |
| `lipo-vs-li-ion.svg` | [FPV Chargers, LiPo and Li-ion Safety](../wiki-source/FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md) | LiPo vs Li-ion use-case trade-offs and voltage caveat; no universal cycle-life/flight-time promise |
| `charger-balance-power.svg` | [Charger and Battery Safety](../wiki-source/FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md) | Main and balance leads; illustration only, not a pinout |
| `analog-vs-digital-video.svg` | [Analog vs Digital FPV](../wiki-source/Analog-vs-Digital-FPV-Camera-Video-Guide.md) | Camera/VTX/VRX signal paths; cross-brand HD compatibility is not implied |
| `goggles-vrx-integration.svg` | [Goggles and VRX Integration](../wiki-source/FPV-Goggles-and-VRX-Integration-Guide.md) | Compatibility categories; exact model/generation must be checked |
| `propeller-thrust-loop.gif` | [Home / thrust explainer](../wiki-source/Home.md) | Four-frame concept animation; illustrates prop rotation and thrust, not actual motor order |
| `balanced-x-deadcat-compare.gif` | [Frame geometry guide](../wiki-source/Frame-Geometries-Balanced-X-vs-Deadcat.md) | Four-frame concept animation showing the front motor spread/camera FOV difference; not a manufacturing drawing |

- `fpv-build-concept-ai.jpg` — project-created AI concept art for general orientation only. It is not a wiring schematic or a reliable pinout/motor-order reference.
- `flight-axes.svg` — original explanatory diagram for throttle, roll, pitch and yaw. Use the installed firmware's motor map for actual motor numbering and direction.
- `fpv-control-loop.svg` — original simplified illustration of the pilot-input, sensor-feedback and motor-output loop.
- `gps-data-chain.svg` — original conceptual GPS/GNSS-to-flight-controller data path. Confirm UARTs, power and pins against both exact manuals.
- `pocket-control-map.svg` — original simplified RadioMaster Pocket control map. Switch functions are configurable in EdgeTX and can differ by radio/firmware version.
- `pocket-gimbal-adjustment.png` — Pocket gimbal adjustment reference supplied by the project owner; see [RadioMaster's product page](https://radiomasterrc.com/products/pocket-radio-controller-m2) and [official manuals index](https://radiomasterrc.com/pages/user-manuals) for current information.

## Reliability and attribution rules

Keep alt text and captions with every image. Product photographs hosted by manufacturers or retailers are examples, not official wiring diagrams. Product pages and external photos can move; keep a source link near the image and verify the current board revision and manual before using it to plan a build.


## Beginner Wiki component illustrations

The custom SVGs above were created for the [Drone Parts — One by One guide](../wiki-source/Drone-Parts-One-by-One.md). They use simplified conceptual drawings for learning component names and system paths. They are **not** product photographs, wiring schematics, board pinouts, or a universal motor-order reference. Follow the exact hardware and firmware documentation for any build decision.


## New FPV class and integration guides (22 October 2026)

The diagrams added in this tranche are original explanatory SVGs intended to render crisply in the Wiki. The frame-size artwork uses real named-product dimensions where cited, but its silhouettes are still schematic and not to scale; it must not be used to drill a frame, select screw length, or infer mounting/flight-control layouts. Use exact manufacturer drawings and manuals for those tasks. Two concept GIFs are present in the source repo; their appearance and localization into the separate Wiki must still be verified after publication.


## Real product photos used by frame guides

The frame assembly pages show source-linked product images so readers can compare schematics against a real product. The publisher script downloads these linked images into the Wiki's local `images/` folder where the source host permits it; source links remain in the captions.

- [GEPRC GEP-MK5X O3 Frame](https://geprc.com/product/gep-mk5x-o3-frame/) — product photo and 225 mm wheelbase / 214 × 168 × 42 mm specifications.
- [GEPRC GEP-MK5D O3 DeadCat Frame](https://geprc.com/product/gep-mk5d-o3-frame/) — product photo and 230 mm wheelbase / 208 × 193 × 42 mm specifications.
- [Sub250 OasisFly25](https://sub250.com/en-nl/collections/oasisfly-series/products/sub250-oasisfly25-hd-o3) — 135 mm wheelbase and 2.5-inch prop example; inline photo hosted by Unmanned Tech, credited in page caption.
- [BETAFPV Pavo35 frame](https://betafpv.com/products/pavo35-brushless-whoop-frame) — wheelbase, duct, plate thickness and frame mass; product photo hosted by BETAFPV.
- [iFlight AOS 7 V5 Frame Kit](https://shop.iflight.com/AOS-7-V5-Frame-Kit-Pro2311) — 313 mm wheelbase, 254 × 184 × 36 mm size, 8 mm arms and 325 g listed frame mass; inline photo hosted by FPV Store RC, credited in page caption.

Use manufacturer dimensions for fit decisions and exact assembly drawings. Images are not dimensioned CAD, and retailer product photographs may show one edition or color only. Check terms/licensing when reusing photos outside the Wiki; attribution does not by itself grant reuse permission.


## Product-frame photos used in the frame guides

| Model / use | Source | Notes |
|---|---|---|
| BETAFPV Air75 tinywhoop | [BETAFPV official product page](https://betafpv.com/products/air75-brushless-whoop-quadcopter) | Product photos are illustrative; the page's wheelbase (75 mm) and 40 mm prop size are separate measurements |
| Axisflying MANTA 5 True-X / GEPRC MK5D Deadcat | [Axisflying MANTA 5](https://www.team-blacksheep.com/products/product%3A7703) / [GEPRC MK5D](https://geprc.com/product/gep-mk5d-o3-frame/) | True-X example: 238 mm wheelbase; Deadcat example: 230 mm wheelbase. GEPRC MK5X is squashed-X, not a perfect True-X. |
| Sub250 OasisFly25 | [Pyrodrone product listing](https://pyrodrone.com/collections/sub250-oasisfly25-frame-and-parts-collection/products/sub250-oasisfly25-2-5-inches-hd-freestyle-quadcopter-frame-kit) | Retailer listing used for 135 mm wheelbase and 2.5-inch prop specifications; confirm against the current kit/version |
| BETAFPV Pavo35 frame | [BETAFPV official frame page](https://betafpv.com/products/pavo35-brushless-whoop-frame) | 148 mm wheelbase, 92 mm duct diameter and model-specific mount details |
| iFlight AOS 7 V5 | [iFlight official frame page](https://shop.iflight.com/AOS-7-V5-Frame-Kit-Pro2311) | 313 mm wheelbase, 254 × 184 × 36 mm overall dimensions and 325 g listed frame weight |

The source SVG dimensions are annotated for learning and comparison only. Manufacturer/retailer product photos and specs should be rechecked before purchase; a product image is not a mechanical drawing.
