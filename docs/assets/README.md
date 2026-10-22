# Assets and attribution

These image and diagram files are versioned as part of `luckyhegde6/buildFPV`. The maintained learning pages in `docs/` reference them with relative Markdown image paths, so GitHub renders them inline from the same commit. No separate Wiki repository is required.

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

- `fpv-build-concept-ai.jpg` — project-created AI concept art for general orientation only. It is not a wiring schematic or a reliable pinout/motor-order reference.
- `flight-axes.svg` — original explanatory diagram for throttle, roll, pitch and yaw. Use the installed firmware's motor map for actual motor numbering and direction.
- `fpv-control-loop.svg` — original simplified illustration of the pilot-input, sensor-feedback and motor-output loop.
- `gps-data-chain.svg` — original conceptual GPS/GNSS-to-flight-controller data path. Confirm UARTs, power and pins against both exact manuals.
- `pocket-control-map.svg` — original simplified RadioMaster Pocket control map. Switch functions are configurable in EdgeTX and can differ by radio/firmware version.
- `pocket-gimbal-adjustment.png` — Pocket gimbal adjustment reference supplied by the project owner; see [RadioMaster's product page](https://radiomasterrc.com/products/pocket-radio-controller-m2) and [official manuals index](https://radiomasterrc.com/pages/user-manuals) for current information.

| `drone-class-overview.svg` | [Drone Categories and Size Guide](../wiki-source/Drone-Categories-and-Size-Guide.md) | Schematic class overview; prop diameter and wheelbase deliberately described separately |
| `frame-size-reference.svg` | class guides and frame assembly pages | Illustrative dimensions only; not to scale and not a drill/manufacturing template |
| `balanced-x-vs-deadcat.svg` | [Frame geometry guide](../wiki-source/Frame-Geometries-Balanced-X-vs-Deadcat.md) | Top-view comparison and conceptual camera FOV; frame geometry varies by model |
| `motor-prop-battery-compatibility.svg` | [Motor/prop/battery guide](../wiki-source/Motors-Propellers-and-Battery-Compatibility.md) | Motor anatomy, blade count and conventional LiPo voltage math; no universal KV prescription |
| `charger-balance-power.svg` | [FPV charger guide](../wiki-source/FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md) | Main vs balance leads; illustrative 4S pack only; not a connector pinout |
| `analog-vs-digital-video.svg` | [Analog vs digital video guide](../wiki-source/Analog-vs-Digital-FPV-Camera-Video-Guide.md) | Separate analog, digital and RC control signal paths; not all ecosystems cross-compatible |
| `goggles-vrx-integration.svg` | [Goggles/VRX integration guide](../wiki-source/FPV-Goggles-and-VRX-Integration-Guide.md) | Compatibility categories and pre-purchase checklist; verify exact product generation |

## Reliability and attribution rules

Keep alt text and captions with every image. Product photographs hosted by manufacturers or retailers are examples, not official wiring diagrams. Product pages and external photos can move; keep a source link near the image and verify the current board revision and manual before using it to plan a build.


## Beginner Wiki component illustrations

The custom SVGs above were created for the [Drone Parts — One by One guide](../wiki-source/Drone-Parts-One-by-One.md). They use simplified conceptual drawings for learning component names and system paths. They are **not** product photographs, wiring schematics, board pinouts, or a universal motor-order reference. Follow the exact hardware and firmware documentation for any build decision.


## New FPV class and integration guides (22 October 2026)

The diagrams added in this tranche are original explanatory SVGs intended to render crisply in the Wiki. The frame-size artwork uses clearly labelled illustrative ranges; it must not be used to drill a frame, select screw length, or infer mounting/flight-control layouts. Use exact manufacturer drawings and manuals for those tasks. No short GIF has been marked complete unless an actual animation file is present in the repository; GIF creation and review remain tracked in the master TODO.
