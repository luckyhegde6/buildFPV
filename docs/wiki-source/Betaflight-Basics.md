# 🧠 Betaflight Basics — understand before you click

![FPV flight-control loop](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-control-loop.svg)

[Betaflight](https://betaflight.com/) is flight-controller firmware used on many FPV freestyle/racing quads. The [Betaflight App](https://betaflight.com/docs/wiki/app) is the configurator for supported Betaflight flight controllers. Do not connect the app to the radio or digital video unit; connect it to the **flight controller** with a data-capable USB cable.

> [!WARNING]
> **Remove all propellers** before connecting/configuring a real quad, flashing firmware, or testing motors. Disconnect the battery before wiring changes. A motor command can be dangerous even on a bench.

## 🎥 Video learning roadmap

Use these playlists alongside this page:

1. [Betaflight setup and roadmap playlist](https://youtube.com/playlist?list=PLwoDb7WF6c8kH_vLskPnY5xjuT284rhmj) — work through setup concepts in order.
2. [PID tuning playlist](https://youtube.com/playlist?list=PLwoDb7WF6c8kstkxtyFgpNr1cVD7zpp-2) — save for after you understand the baseline configuration and can identify a specific tuning goal.

Treat video instructions as version-dependent. Before applying a setting, confirm it matches your flight-controller hardware and installed Betaflight version in the current official documentation. Do not copy CLI commands or tune values from another build without understanding them.

## Tabs to learn first

| App area | What it tells you | Beginner task |
|---|---|---|
| Setup | Board orientation and sensors | Move the unpowered airframe gently and confirm the 3D model follows the same orientation |
| Ports | UART functions | Enable Serial RX only on the UART where the receiver is actually wired, when using a UART receiver |
| Receiver | Live stick/channel values | Confirm roll/pitch/yaw/throttle and AUX switches move in the expected direction/range |
| Modes | ARM and auxiliary features | Understand ARM and beeper; add ANGLE only if appropriate for the setup and firmware |
| Motors | Motor outputs and direction | **Props off**; verify numbering, order and direction using the board's diagram |
| Failsafe | What happens if RC link is lost | Read the current guide, configure, and test exactly as documented |
| OSD / Video transmitter | On-screen data and supported VTX control | Leave advanced tuning until the baseline setup is stable |
| CLI / Presets | Advanced settings and backup/restore | Save the configuration before applying presets or changing settings |

## First connection workflow

- [ ] Use a USB cable confirmed to carry data.
- [ ] Connect the flight controller, not the Pocket transmitter or VTX.
- [ ] Record the FC model/revision and current firmware version.
- [ ] Save `diff all` or `dump` output (as recommended by the exact Betaflight docs) before changes.
- [ ] Inspect the current setup before flashing firmware; a factory-configured quad may already have the correct firmware/CLI settings.
- [ ] Confirm board orientation and accelerometer calibration as applicable.
- [ ] Identify the receiver wiring and the correct UART/provider; ELRS UART receivers typically use CRSF serial receiver provider. Built-in SPI receivers use a different option.
- [ ] Confirm channels and AUX switches.
- [ ] Configure and verify failsafe as a separate deliberate step.
- [ ] Test motors only with every propeller removed.

## Keep these concepts separate

- **Firmware target:** the exact board/variant to which firmware is built. Similar-looking FC names are not enough.
- **Configurator version:** the app used to communicate with firmware. Compatibility ranges change; check current docs before updating either.
- **Receiver protocol:** for common UART ExpressLRS receiver setups, Betaflight uses a serial receiver with CRSF as the provider; do not guess UARTs/pads.
- **Modes:** ARM permits motors to run; it is not a flight mode. ANGLE is self-leveling; Acro/Rate mode commands angular rate and does not self-level.
- **Failsafe:** a radio losing connection must not be treated as an exceptional edge case. Configure and test it intentionally.

## Official references

- [Betaflight Setup Guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)
- [Betaflight Safety](https://betaflight.com/docs/wiki/guides/current/Safety)
- [Receiver guide](https://betaflight.com/docs/wiki/guides/current/Rx)
- [Modes](https://betaflight.com/docs/wiki/guides/current/Modes)
- [Failsafe tab](https://betaflight.com/docs/wiki/app/failsafe-tab)

These are living docs. Match the instructions to your installed firmware version and board revision.
