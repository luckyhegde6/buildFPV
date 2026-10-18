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

- `fpv-build-concept-ai.jpg` — project-created AI concept art for general orientation only. It is not a wiring schematic or a reliable pinout/motor-order reference.
- `flight-axes.svg` — original explanatory diagram for throttle, roll, pitch and yaw. Use the installed firmware's motor map for actual motor numbering and direction.
- `fpv-control-loop.svg` — original simplified illustration of the pilot-input, sensor-feedback and motor-output loop.
- `gps-data-chain.svg` — original conceptual GPS/GNSS-to-flight-controller data path. Confirm UARTs, power and pins against both exact manuals.
- `pocket-control-map.svg` — original simplified RadioMaster Pocket control map. Switch functions are configurable in EdgeTX and can differ by radio/firmware version.
- `pocket-gimbal-adjustment.png` — Pocket gimbal adjustment reference supplied by the project owner; see [RadioMaster's product page](https://radiomasterrc.com/products/pocket-radio-controller-m2) and [official manuals index](https://radiomasterrc.com/pages/user-manuals) for current information.

## Reliability and attribution rules

Keep alt text and captions with every image. Product photographs hosted by manufacturers or retailers are examples, not official wiring diagrams. Product pages and external photos can move; keep a source link near the image and verify the current board revision and manual before using it to plan a build.
