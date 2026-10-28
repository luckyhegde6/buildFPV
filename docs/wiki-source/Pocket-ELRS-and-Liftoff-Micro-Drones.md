# Connect the RadioMaster Pocket to Liftoff: Micro Drones

**Goal:** make your Pocket appear as a USB controller, calibrate it inside *Liftoff: Micro Drones*, and verify all four flight axes before practising. This is a simulator-only connection. You do not need to bind the Pocket to a real ELRS receiver, connect a powered quad, or install propellers.

- Game: [Liftoff: Micro Drones on Steam](https://store.steampowered.com/app/1432320/Liftoff_Micro_Drones/)
- Official product overview: [Liftoff: Micro Drones](https://www.liftoff-game.com/our-products/liftoff-micro-drones)
- Already set up the radio for the original game? Keep the [Pocket ELRS and Liftoff guide](Pocket-ELRS-and-Liftoff) open too. The two games require their own controller calibration.

## The connection path

**RadioMaster Pocket → USB data cable → computer's controller/HID input → Liftoff: Micro Drones calibration → in-game flight controls.**

USB joystick mode sends stick positions to the simulator. It is not an ExpressLRS radio link and does not use the aircraft's receiver. The game's Steam page recommends using an RC transmitter, and the developer notes that the transmitter must be detected as a gamepad by the host computer before the game can calibrate it.

## Connection check at a glance

| Stage | What to confirm |
|---|---|
| USB cable and radio | The Pocket is powered and set to USB joystick/HID mode using a data-capable cable. |
| Computer | A controller/gamepad appears and responds when the sticks move. |
| Micro Drones | The game can select the controller in its own input/calibration settings. |
| Calibration | Roll, pitch, yaw and throttle each have the expected direction and usable range. |

## Before connecting

- [ ] Install and launch *Liftoff: Micro Drones* from Steam at least once.
- [ ] Use a known **data-capable** USB-C cable; a charging-only cable will not provide controller data.
- [ ] Install suitable radio batteries and fit the Pocket's antenna before powering it with its internal RF module enabled.
- [ ] Keep this setup separate from any real-aircraft model. Do not change receiver binding or aircraft firmware to solve a USB simulator problem.

For the Pocket's batteries, antenna, USB mode prompt and general radio precautions, see [Pocket ELRS and Liftoff](Pocket-ELRS-and-Liftoff).

## 1. Connect the Pocket by USB

1. Turn on the RadioMaster Pocket.
2. Connect it directly to the computer with the USB-C data cable.
3. If EdgeTX shows a USB mode prompt, choose the **USB joystick / HID** option intended for simulator input. Exact wording can vary with EdgeTX version.
4. If there is no prompt, do not guess at firmware changes. Check the radio's current manual and USB options for your version.
5. Confirm the computer recognises a controller/gamepad before moving into the game's settings.

The radio may appear with a generic controller name rather than the exact Pocket model name. The important first check is whether the computer sees the controller and its axes, not whether the label is pretty.

## 2. Calibrate inside Liftoff: Micro Drones

1. Launch *Liftoff: Micro Drones* and open its controller/input calibration settings.
2. Select the controller that corresponds to the Pocket.
3. Start the game's calibration process and follow the prompts. Move the sticks through their full range when requested, without touching other controls at the same time.
4. Assign or confirm the four main flight controls: **roll, pitch, yaw and throttle**.
5. Test each axis separately. Check that the on-screen input moves smoothly, reaches both ends of the range, and returns as expected.
6. Confirm the throttle reaches true minimum and full range. Avoid starting a flight until it responds predictably.
7. If an axis moves in the wrong direction, use the game's calibration/fine-tune options to invert that axis rather than changing several settings at once.
8. Finish the calibration and record the controller settings that work.

**Important:** calibrate the Pocket separately in *Liftoff: Micro Drones*, even if it already works in *Liftoff: FPV Drone Racing*. Developer support notes that the two games use the same input-processing system but do **not** share controller configuration files.

## 3. Check Steam Input if controls look wrong

Start by testing the normal connection. If the game sees the Pocket but axes are mapped strangely, the throttle range is incomplete, or an axis behaves like a one-direction gamepad trigger, try disabling Steam Input for this game:

1. Exit the game.
2. Open the game in your Steam Library and choose **Properties**.
3. Open **Controller** and set the per-game override to **Disable Steam Input**.
4. Reopen *Liftoff: Micro Drones* and repeat the in-game calibration.

Steam Input can affect how some transmitters and axes are exposed to the game. This is a troubleshooting step, not a claim that every computer requires the setting. Menu labels may vary with the Steam client.

## 4. What about Pocket switches?

First get the four flight axes working correctly. Extra switches, sliders or buttons may not be exposed or assignable in the same way as they are in the original Liftoff game; the game may identify a transmitter as a generic gamepad. Do not rely on a particular switch for arm/disarm, reset or flight modes until you confirm that the control is available and works in this game's own settings.

If a function cannot be mapped, use the game's supported keyboard/menu control as appropriate and check current developer guidance. Do not try to fix a simulator-only button mapping by binding the radio to a real aircraft.

## Troubleshooting

| Symptom | First checks |
|---|---|
| Game does not detect the Pocket | Try a data-capable cable and another USB port; choose USB joystick/HID mode; check whether the computer sees a controller first. |
| Computer sees it, but Micro Drones does not | Reopen the game after connecting the radio, inspect the game's controller/calibration page, and check per-game Steam Input settings. |
| Throttle only moves through part of its range | Disable Steam Input for this game, restart it and calibrate throttle again from minimum to maximum. |
| Roll, pitch or yaw is reversed | Use the game's per-axis fine-tune/invert option, then verify that axis alone. |
| It works in original Liftoff but not Micro Drones | Calibrate independently in Micro Drones; controller configuration is not shared between the games. |
| A switch is not available | Test the four main axes first; extra controls may be exposed differently. Do not assume a switch assignment carries over from another simulator. |

## First test flight checklist

- [ ] All four main axes are detected and move smoothly.
- [ ] Roll, pitch and yaw directions match the intended inputs.
- [ ] Throttle reaches minimum and maximum.
- [ ] Calibration is saved for **Liftoff: Micro Drones** itself.
- [ ] The game, map/level, drone preset and any custom settings are recorded in the practice log.
- [ ] Start slowly in an open indoor layout and focus on smooth throttle, gentle turns and recoveries before racing gates.

Simulator settings do not automatically configure a real drone. Before a real flight, follow a separate bench setup and safety process; verify receiver mapping, failsafe and arming behaviour with all propellers removed.

## Sources and related guides

- [Liftoff: Micro Drones — official product overview](https://www.liftoff-game.com/our-products/liftoff-micro-drones)
- [Liftoff: Micro Drones — Steam store and system requirements](https://store.steampowered.com/app/1432320/Liftoff_Micro_Drones/)
- [Developer response: calibrate separately in Micro Drones](https://steamcommunity.com/app/410340/discussions/1/3790380404156101611/)
- [Developer/controller guidance: computer must detect the transmitter as a gamepad](https://steamcommunity.com/app/1432320/discussions/0/661611657898956841/)
- [Controller troubleshooting: Steam Input and in-game calibration](https://steamcommunity.com/app/1432320/discussions/2/4413047527585836030/)
- [Pocket ELRS and Liftoff — original game setup](Pocket-ELRS-and-Liftoff)
- [Simulator Training](Simulator-Training)
- [Tinywhoops and Micro FPV Guide](Tinywhoop-and-Micro-FPV-Guide)
