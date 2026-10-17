# 📡 ExpressLRS Basics — radio control link

ExpressLRS (ELRS) is an open-source radio-control link. It is separate from the video link and separate from the flight-controller firmware. Your RadioMaster Pocket ELRS has an internal 2.4 GHz ELRS module (verify this matches the exact product/revision you own).

## The control path

```text
Pocket ELRS (transmitter module + firmware)
        ⇅ compatible RF band / ELRS configuration
ELRS receiver on the quad
        ⇅ serial link (commonly CRSF on a UART receiver)
Flight controller (e.g. Betaflight)
```

## Before first bind

- [ ] Confirm both transmitter module and receiver use the same supported RF band (for Pocket ELRS this is commonly 2.4 GHz; do not pair it with a 900 MHz receiver).
- [ ] Record the hardware target and ELRS firmware version at both ends.
- [ ] Match the firmware major version/configuration as the official docs require; don't update blindly.
- [ ] A unique binding phrase is configured identically at both ends, **or** use the current documented traditional binding procedure.
- [ ] For a UART receiver, identify the correct pads/UART and configure the flight controller's Serial RX/CRSF settings per the FC guide.
- [ ] Confirm stick/channel movement in the flight-controller receiver tab.
- [ ] Configure and verify failsafe.

## Binding concepts

ELRS supports a binding phrase approach and a traditional bind mode. With a matching phrase on compatible firmware, devices can pair without manually triggering bind each time. For traditional binding, follow the *current* ELRS instructions carefully; receiver behavior may differ depending on firmware/phrase settings. Do not repeatedly power-cycle hardware without first checking the actual receiver target/manual.

## Pocket note from the uploaded RadioMaster A1.8 quick-start guide

- The guide specifies 2 × 18650 lithium-ion cells and an input/operating voltage range of 6.6–8.4 V DC for the Pocket.
- It warns to install the antenna before powering the radio with its internal RF module enabled.
- For the internal ELRS version, it recommends Dynamic Power and a 500 Hz or lower packet rate to reduce heating and battery use.
- These are transmitter guidance notes; they do not replace receiver-specific or local RF regulations.

## Common mismatch symptoms

| Symptom | Check first |
|---|---|
| Receiver never links | RF band, firmware versions/targets, binding phrase, receiver power and actual LED pattern |
| Link works but Betaflight has no stick input | Receiver wiring, correct UART, Serial RX enabled on that UART, CRSF provider, saved configuration |
| Wrong stick moves / reversed axes | Radio channel order and FC channel mapping; fix and verify before arming |
| Intermittent link | Antenna/connector, power, installation, interference, hardware and configured RF mode; perform a documented range/link check |
| Failsafe uncertain | Stop. Follow the current Betaflight/ELRS guide and deliberately verify behavior with props removed |

## Official steps

1. [ExpressLRS — Getting Started](https://www.expresslrs.org/quick-start/getting-started/)
2. [ExpressLRS — Binding](https://www.expresslrs.org/quick-start/binding/)
3. [ExpressLRS — Web UI](https://www.expresslrs.org/quick-start/webui/)
4. [ExpressLRS — hardware overview](https://www.expresslrs.org/hardware/overview/)

Never equate an ELRS bind with a fully configured and flight-ready aircraft.
