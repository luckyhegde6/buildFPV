# FPV System Basics

![Real FPV quadcopter example](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/FPV_Quadrocopter.jpg/960px-FPV_Quadrocopter.jpg)

*Real-build photo: [FPV Quadrocopter on Wikimedia Commons](https://commons.wikimedia.org/wiki/File:FPV_Quadrocopter.jpg). This is an overview photo, not a wiring diagram.*

FPV means first-person view: an onboard camera transmits live video to compatible goggles or a display. A quad combines several systems that must be compatible but are not the same thing.

## The control path

`Pilot's sticks → RadioMaster Pocket ELRS → 2.4 GHz ExpressLRS link → aircraft receiver → flight controller → ESC → motors → propellers`

The radio sends control commands. The receiver delivers channel data to the flight controller. The flight controller combines pilot input with gyro/sensor readings; it then sends motor commands to the ESC.

## The video path

`Camera → analog VTX or digital air unit → video link → compatible goggles/display → pilot`

The selected video system determines which goggles/receiver and antennas are compatible. A 2.4 GHz ELRS control link does not determine which FPV video system to use.

## Power and recording

`Battery → power distribution/regulators → FC, ESC, receiver, camera/video hardware, motors`

Actual wiring and supported input voltages depend on each product. Check the board manuals rather than relying on this conceptual diagram.

DVR can record what the goggles/display receives. An onboard camera may record higher-quality footage separately. Gyroflow can stabilize compatible recorded footage when the necessary camera/motion-data workflow is supported; it is not required for flying.

## Firmware is separate by subsystem

- EdgeTX: radio operating system/model configuration on the Pocket.
- ExpressLRS: the RC control link on the transmitter module and receiver.
- Betaflight or another supported flight-controller firmware: flight behavior, receiver mapping, motor outputs and failsafe-related configuration.
- VTX/air-unit firmware: specific video hardware.
- Gyroflow: desktop post-processing/stabilization workflow.

Do not update all systems at once. Confirm the exact target and recovery procedure for each one.

## Core terms

- **LiPo cell count (S):** number of cells in series; this affects voltage.
- **Rates:** relation between stick input and commanded rotation.
- **Arming switch:** deliberate control used to enable motors.
- **Failsafe:** defined action on signal loss; verify real behavior rather than assuming.
- **Blackbox:** flight-controller logging useful for diagnosis.

## Knowledge check

- [ ] Explain how a roll-stick movement becomes a motor command.
- [ ] Explain why successful ELRS binding does not verify video, motor direction, failsafe, or battery wiring.
- [ ] Explain the difference between ELRS and a video transmitter.
