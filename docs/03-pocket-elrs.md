# 3. RadioMaster Pocket ELRS notes

This page is based first on the uploaded **RadioMaster Pocket Quick Start Guide, revision A1.8**. Confirm current details against the manufacturer's latest manual before changing firmware or radio settings.

## What the supplied A1.8 guide says

The guide identifies the Pocket as an EdgeTX radio with X5 Hall gimbals, a monochrome 128×64 LCD, a USB-C port, and a nano-compatible external module bay. It lists the ELRS model as having an internal 2.4 GHz ExpressLRS module.

Important points from the guide:

- The radio uses **two 18650 Li-ion cells**, which the illustrated/specification section says are not included. It lists a radio voltage range of **6.6–8.4 V DC**.
- Install the antenna **before** turning on the radio with its internal RF module powered. The guide warns that operating without an antenna can damage the module.
- The ELRS section recommends enabling **Dynamic Power** and using a **500 Hz or lower packet rate** to extend battery life and reduce heat. Treat this as the guide's recommendation, not a universal setting for every build.
- Firmware updates can make a radio unusable if done incorrectly; update only with a clear reason and a verified procedure.
- It warns to remove propellers for assembly/maintenance where applicable, and not to charge unattended. Use only the supported battery chemistry and correct polarity.

## 🎥 RadioMaster Pocket setup video

[![RadioMaster Pocket — how to set up and bind a drone](https://img.youtube.com/vi/GgaWMvAHZi8/hqdefault.jpg)](https://www.youtube.com/watch?v=GgaWMvAHZi8)

Watch [RadioMaster Pocket — How To Set Up and Bind a Drone — Step by Step](https://www.youtube.com/watch?v=GgaWMvAHZi8) alongside this button guide. Compare menu names and binding/Betaflight steps with your exact Pocket, EdgeTX, ELRS and receiver versions. For simulator-only input, use USB joystick mode; binding a real drone receiver is a separate task.

## Radio and simulator: separate the workflows

**Simulator input does not require binding an aircraft receiver.** The normal beginner workflow is to use USB joystick input and calibrate the axes in the simulator. The exact prompt/menu can vary by EdgeTX build and computer operating system.

Checklist:

- [ ] Antenna attached before powering the radio.
- [ ] USB cable supports data, not just charging.
- [ ] Radio is detected by the computer.
- [ ] Correct USB joystick/HID-style mode selected if prompted.
- [ ] Roll, pitch, yaw and throttle are assigned to the correct axes.
- [ ] Throttle minimum, center points and axis directions are correct in the simulator.
- [ ] Arm/disarm control is mapped and tested in the simulator.

If the radio is not detected, change one variable at a time: USB mode, cable/port, computer input-device recognition, and Liftoff calibration. Do not begin by flashing firmware.

## ExpressLRS concepts for later

- **Binding** establishes a control link between compatible transmitter and receiver configurations. Follow the receiver maker's current documented bind method; boot/power-cycle methods vary by receiver.
- **Firmware compatibility matters.** Confirm the transmitter's ELRS major version and the receiver firmware/target before flashing. Do not guess a target or copy a binding phrase without recording it securely.
- **Packet rate and RF power are trade-offs.** Higher packet rates can reduce latency but may reduce link margin and increase power/heat. Start with conservative, documented settings and understand them before changing them.
- **Failsafe must be verified.** Do a propeller-off bench check and confirm the flight controller reports the expected receiver-loss state. Never test link loss while flying near people or property.
- **A solid receiver LED is not a complete safety test.** Check channel mapping, arming, disarming, and configured failsafe separately.

## Safe bench habit

Before connecting a real aircraft to USB or battery: remove every propeller, place the aircraft so it cannot snag wires, keep the battery disconnected during soldering, and avoid motor tests unless the procedure explicitly calls for them and the props are off.

## Official reference links

- RadioMaster: https://radiomasterrc.com/
- ExpressLRS documentation: https://www.expresslrs.org/
- EdgeTX: https://edgetx.org/

This page is a learning note, not a substitute for the manual for your exact radio hardware, EdgeTX version, ELRS version, or receiver.
