# Pocket ELRS and Liftoff

![RadioMaster Pocket front-control map](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/pocket-control-map.svg)

This page covers a radio-only simulator workflow. It does not require a real receiver or a powered quad.

## RadioMaster Pocket notes from the supplied A1.8 quick-start guide

- The ELRS version uses an internal 2.4 GHz ExpressLRS module.
- Install the provided antenna before installing batteries and powering the radio; operating without it can damage the RF module.
- The guide specifies two 3.7 V 18650 Li-ion cells and built-in USB-C charging; use suitable cells and follow the guide's charging cautions.
- For the internal ELRS module, the guide recommends Dynamic Power and a packet rate of 500 Hz or lower to help extend battery life and limit heat. Treat this as the manual's recommendation, not a universal setting for every future setup.
- Firmware updates can make a radio unusable if the wrong process or target is used. Do not update just because a new version exists; first understand why it is needed and how to recover.

Refer to the manufacturer's current documentation if the radio menus differ from the A1.8 guide.

## Connect it to Liftoff FPV Drone Racing

1. Install suitable radio batteries and fit the antenna before powering the radio.
2. Turn the radio on and connect it to the computer using a data-capable USB-C cable.
3. If an EdgeTX USB mode prompt appears, choose the joystick/HID-style mode intended for simulator input. Wording can vary by firmware version.
4. In the computer's controller settings and the game's input settings, look for the controller and calibrate it.
5. Move each stick axis separately. Confirm roll, pitch, yaw and throttle respond to the intended controls and directions; confirm throttle minimum is truly minimum.
6. Map a simulator arm/disarm control if the simulator supports it. Test in the simulator before attempting a practice flight.
7. Save the controller profile or record the working setup.

### Also using Liftoff: Micro Drones?

Use the dedicated [Pocket ELRS and Liftoff: Micro Drones connection guide](Pocket-ELRS-and-Liftoff-Micro-Drones) for detailed setup, per-game calibration, Steam Input troubleshooting and axis checks. [Liftoff: Micro Drones](https://store.steampowered.com/app/1432320/Liftoff_Micro_Drones/) is a separate game, so do not assume controller settings or craft presets from Liftoff FPV Drone Racing carry across.

## If the radio is not detected

- Try a known data-capable cable and another USB port.
- Reconnect and pay attention to the radio's USB-mode prompt.
- Check whether the operating system detects a controller before changing simulator settings.
- Calibrate axes and move one axis at a time.
- Change only one thing per attempt; record the change and result.

## Safe ELRS habits

Binding the radio to a receiver is a separate task from USB simulator setup. When you eventually bind an aircraft, use the official ExpressLRS instructions and verify receiver firmware compatibility, channel mapping, failsafe and arming behavior with all propellers removed. Do not assume a successful bind proves the aircraft safe.
