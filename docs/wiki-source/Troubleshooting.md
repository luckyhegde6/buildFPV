# 🧰 Troubleshooting — observe, isolate, verify

**Rule:** change one thing at a time and write down what you changed. For physical quad troubleshooting, remove all propellers first; disconnect the battery before wiring work.

## Liftoff does not detect the radio

- [ ] Try a known-good USB data cable and another USB port.
- [ ] Check the radio USB prompt; choose joystick/gamepad rather than storage when offered.
- [ ] Close apps that might claim the input device.
- [ ] Check the operating system's game-controller/input panel, then calibrate inside Liftoff.
- [ ] Confirm the selected input device in Liftoff.
- [ ] Check the current radio manual/firmware documentation before changing EdgeTX.

## Wrong / reversed stick inputs

- [ ] Move only one stick axis at a time and note what value responds.
- [ ] Recalibrate in the simulator.
- [ ] Check the radio model/channel setup before applying random inversion settings.
- [ ] Record the fix and verify throttle minimum.

## ELRS receiver will not bind

- [ ] Check band (2.4 GHz vs 900 MHz) and exact hardware targets.
- [ ] Check TX/RX firmware versions and binding-phrase settings.
- [ ] Observe and record the receiver LED behavior; match it to current ELRS docs.
- [ ] Confirm the receiver is powered correctly and not held in bootloader mode by a stuck button.
- [ ] Follow official ELRS binding steps; don't assume every receiver uses the same button procedure.

## Betaflight cannot connect

- [ ] Confirm the USB cable transfers data.
- [ ] Verify the port and close other programs that might be using it.
- [ ] Identify the actual board and current firmware before flashing anything.
- [ ] Back up the configuration before changing firmware or settings.
- [ ] Follow the official setup guide for drivers and the exact configurator/firmware compatibility.

## Flight controller sees no receiver input

- [ ] Identify the exact receiver type: UART or integrated SPI.
- [ ] For UART ELRS, confirm wiring, the correct UART and Serial RX setting, and CRSF provider as required.
- [ ] For integrated SPI ELRS, follow the FC vendor's firmware/receiver-provider directions.
- [ ] Save and reboot as needed; inspect channel mapping and live values.

## Video is black / VTX seems hot / no goggles image

- [ ] Confirm VTX/air unit and goggles/receiver are the same compatible ecosystem and generation.
- [ ] Check camera/VTX power requirements and exact wiring diagram.
- [ ] Do not power equipment contrary to the manual's antenna/cooling requirements.
- [ ] Verify antennas/connectors and channel/frequency using permitted settings.
- [ ] Check vendor firmware and binding procedures for both ends.

## When stuck: make a minimal bug report

```text
Exact hardware/model + revision:
Firmware versions:
What I expected:
What actually happened:
Exact steps to reproduce:
What changed immediately before the issue:
LEDs / error text:
Config backup available?:
Photos / screenshot / video:
Official docs checked:
```

Avoid posting personal information, serial numbers, Wi-Fi passwords, binding phrases, or private credentials in public issues. A binding phrase is not a security password, but keeping your chosen setup private can still reduce accidental configuration confusion.
