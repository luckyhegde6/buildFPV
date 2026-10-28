# FPV GPS, Telemetry and Recovery Explained

[Back to FPV System Basics](FPV-System-Basics.md) · [GPS and Flight Controllers](GPS-and-Flight-Controllers.md) · [Troubleshooting](Troubleshooting.md)

GPS/GNSS modules, telemetry, buzzers and flight logs add information that helps the pilot understand where the quad is, how it is behaving and—on supported, correctly configured systems—how it might respond to a specific failure. These features are not all the same system.

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-gps-navigation.svg" alt="Conceptual GNSS satellite, receiver module and flight-controller data path" width="1200" />

*Conceptual data path. It is not a UART pinout, antenna-placement drawing or guarantee that a particular firmware build supports a feature.*

## 1. GPS and GNSS

**GNSS** is the broad term for satellite-navigation systems. GPS is one such system. A receiver uses satellite signals to estimate its position and movement; it then outputs data to a flight controller using a supported interface/protocol.

A GNSS module may report latitude/longitude, altitude estimates, ground speed, course over ground, fix status and satellite information. What the FC can use depends on the device, messages, update rate and firmware support. Course over ground describes travel direction and is not automatically the same as the quad's nose heading when hovering or moving slowly.

The module needs a suitable view of the sky and a stable installation. Frame carbon, wiring, high-current components and other electronics can affect placement or compass data, depending on hardware. Use the maker's recommendations rather than placing the GPS based only on aesthetics.

## 2. From GNSS module to FC

A typical external GNSS unit uses power, ground and serial data to a compatible FC port, often a UART. Some modules include additional sensors such as a compass, while others do not. The correct ports, supply voltage, protocol, baud rate and configuration depend on the exact hardware and firmware.

Do not assume that the two wires marked TX and RX can be connected by matching labels to the same names on the FC; serial links are normally crossed between a sender and receiver, but board-specific diagrams are authoritative. Wrong voltage or pad selection can damage hardware.

After configuring, check the FC's live GPS status, fix type, satellite count, position and data freshness while safely stationary and with a clear view of the sky. A reported number of satellites alone does not prove the position is accurate enough for every feature.

## 3. GPS Rescue is not ordinary stabilization

A GPS receiver being installed does not automatically provide return-to-home behavior. GPS Rescue is firmware-specific, requires supported hardware and configuration, and depends on a valid home position, suitable sensor estimates, tuning, the environment and enough power/thrust to fly the intended path.

The current [Betaflight GPS Rescue guide](https://betaflight.com/docs/wiki/guides/current/GPS-Rescue) explains supported hardware, configuration, phases and warnings for recent versions. Its instructions explicitly advise careful testing before relying on Rescue. Read and follow the current guide for the installed version rather than copying settings from a video or another quad.

Never assume GPS Rescue will work because the OSD shows coordinates. Do not use it as a substitute for maintaining control-link/video awareness, checking your home indicator, observing local rules or practicing in an appropriate environment. Treat any configured rescue feature as something requiring deliberate validation.

## 4. Telemetry — data traveling back to the pilot

Control data travels from the transmitter to the aircraft; **telemetry** is information sent back from the aircraft system to the radio or another display. Depending on the components and protocol, it may include receiver link statistics, battery measurements, GPS position/speed and other device status.

Telemetry paths differ. Some information can travel through the RC receiver/control link, while flight data can also be overlaid on the video system's OSD. Do not assume that every OSD item is automatically sent to your radio, or that video loss and RC-link loss have the same effect.

## 5. OSD, buzzer and Blackbox serve different roles

| Feature | What it is for | What it does not guarantee |
|---|---|---|
| **OSD** | Displays selected information over the FPV view, where supported | Does not record a full diagnostic history by itself |
| **Telemetry** | Sends selected aircraft data back to the radio/display | Does not prove every sensor is correct or every data path is active |
| **Buzzer / beeper** | Helps locate a quad or signal a state when configured/supported | Is not guaranteed to operate after power loss or board damage |
| **Blackbox/logging** | Saves controller/sensor/motor-related data for later diagnosis when supported/configured | Does not automatically explain a fault without interpretation |
| **GPS Rescue** | A configured advanced response to return toward home on supported builds | Is not an automatic feature of every GPS-equipped quad and is not guaranteed to recover every failure |

## 6. How to validate a GPS/data subsystem

- [ ] Confirm the exact GNSS module, supply voltage, protocol and firmware support.
- [ ] Use the correct FC pads/UART and verify power/ground in the manuals before connecting.
- [ ] Place the module as recommended, away from unnecessary interference and with antenna orientation considered.
- [ ] Check live status and data freshness in the configurator.
- [ ] Confirm home position and relevant OSD indicators before flight where applicable.
- [ ] If using GPS Rescue, read the version-specific official guide and perform its prescribed cautious tests before relying on it.
- [ ] Verify buzzer/telemetry/logging features individually; one working feature does not prove another is configured.

## 7. Symptoms and possible starting points

| Symptom | First checks |
|---|---|
| No GPS device detected | Correct power, ground, TX/RX wiring, port assignment, protocol and supported hardware |
| Device detected but no fix | Outdoor sky visibility, antenna/module installation, time to acquire, supported protocol and hardware health |
| Map/OSD position jumps | Fix quality, signal environment, mounting, data freshness and sensor wiring |
| GPS Rescue unavailable or fails a sanity check | Exact firmware build, supported GNSS protocol, valid home/fix and every current configuration requirement |
| No telemetry on radio | Receiver/protocol support, enabled telemetry path, radio sensor discovery and device configuration |
| Buzzer/logging absent | Hardware presence, firmware build support, connection, configured mode and power conditions |

## Continue learning

- [GPS and Flight Controllers](GPS-and-Flight-Controllers.md) shows representative hardware and system connections.
- [ExpressLRS Basics](ExpressLRS-Basics.md) explains the RC-link side of data/telemetry.
- [Betaflight Basics](Betaflight-Basics.md) covers the configurator and failsafe setup sequence.
- [Troubleshooting](Troubleshooting.md) helps separate a missing sensor from a missing control/video link.

## Knowledge check

1. Why is GNSS course over ground not always the quad's nose heading?
2. Why does installing a GPS module not automatically enable GPS Rescue?
3. How does telemetry differ from the OSD and Blackbox?
4. Why must GPS Rescue be deliberately tested rather than assumed?
