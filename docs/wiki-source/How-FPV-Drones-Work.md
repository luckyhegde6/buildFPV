# 🚁 How FPV Drones Work — From Sticks to Flight

## Visual guides: movement, lift and control

![FPV quadcopter movement infographic showing yaw, pitch, roll, throttle, propeller rotation and lift](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-drone-movements-guide.webp)

![FPV drone control-loop infographic covering sensors, flight controller, ESCs, radio and video links, antenna types, and common build components](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-drone-control-loop-guide.webp)

**The control path:** stick inputs travel from the radio transmitter to the receiver on the aircraft, then to the flight controller, ESCs, motors and propellers. Gyroscope and accelerometer feedback helps the controller correct motion and keep the quad stable.

These supplied overview graphics complement the step-by-step explanation below. Treat them as learning summaries; confirm motor order, CW/CCW layout, connector pinouts and firmware-specific behavior against the exact aircraft and official manuals.

![Real FPV racing quadcopter example](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/FPV_Quadrocopter.jpg/960px-FPV_Quadrocopter.jpg)

*Real-build photo: [FPV Quadrocopter on Wikimedia Commons](https://commons.wikimedia.org/wiki/File:FPV_Quadrocopter.jpg). Use it to identify the broad physical layout; it is not a wiring guide.*

An FPV quadcopter becomes easier to understand when you trace one simple chain:

**Your hands → radio transmitter → receiver on the drone → flight controller → ESCs → motors and propellers → movement.**

The diagrams below are deliberately ordered to answer the beginner questions: what creates lift, what yaw/pitch/roll mean, which way the drone moves, and what the radio controller looks like.

## 1. What the radio controller looks like

The radio transmitter is the handheld controller. The **RadioMaster Pocket** is one compact example; the exact switches, display, antennas and case can vary by model.

![RadioMaster Pocket radio controller, charcoal finish](https://radiomasterrc.com/cdn/shop/files/POCKET-1000x1000-Charcoal-1.jpg?v=1750061505)

*Product photo: [RadioMaster Pocket Radio Controller (official manufacturer page)](https://radiomasterrc.com/products/pocket-radio-controller-m2).*

### What the two sticks do — typical Mode 2 layout

![FPV radio controller and Mode 2 stick map](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/radio-controller-mode2.svg)

For a typical **Mode 2** radio:

| Stick movement | Command | What the quad does |
|---|---|---|
| Left stick up / down | Throttle | Requests more / less overall thrust |
| Left stick left / right | Yaw | Rotates the nose left / right |
| Right stick up / down | Pitch | Tilts the nose forward / backward |
| Right stick left / right | Roll | Tilts the quad left / right |

Mode 2 is common, but radio modes and channel mapping can be changed. Check your transmitter and flight-controller configuration before relying on this table. In **Acro/Rate mode**, a stick requests a rotation rate; it does not command a fixed tilt angle. In **Angle mode**, the FC tries to self-level.

## 2. How the quad lifts: thrust and airflow

![Diagram showing propellers pushing air down to create upward thrust](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/thrust-direction.svg)

The propellers accelerate air downward. The reaction force pushes the aircraft upward:

- **Climb:** total upward thrust is greater than the drone's weight.
- **Hover:** upward thrust balances weight.
- **Descend:** thrust is less than weight.

Throttle changes the overall thrust request, while the flight controller may adjust each motor individually to keep the quad stable or make it turn. Tilting the quad directs some thrust sideways, which can accelerate the drone horizontally.

### Why two propellers spin CW and two CCW

Two motors rotate clockwise and two counter-clockwise so their reaction torques can balance. The flight controller can create yaw by adjusting the torque balance between the clockwise and counter-clockwise motor groups.

**Motor numbers and exact CW/CCW locations depend on the firmware and build.** Use the motor diagram for the installed firmware and verify motor direction with propellers removed; do not treat one generic diagram as universal.

## 3. Pitch, roll and yaw — and which direction the drone moves

![Illustrated thrust, pitch, roll and yaw directions on a quadcopter](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/flight-axes.svg)

| Control | What rotates / changes | Usual movement effect |
|---|---|---|
| **Pitch** | Nose tilts up or down | Nose down tilts thrust forward, accelerating forward; nose up can slow forward motion or accelerate backward |
| **Roll** | Quad tilts left or right around its nose-to-tail axis | Tilting right accelerates right; tilting left accelerates left |
| **Yaw** | Nose rotates left or right around the vertical axis | Changes the direction the quad is pointing; yaw itself is not the same as moving sideways |
| **Throttle** | Changes the baseline thrust request | More thrust can climb; less can descend, depending on tilt and current movement |

In Acro mode, the aircraft keeps rotating while a non-zero rotation command is held. Centering the sticks stops requesting additional rotation; it does **not** automatically level the quad. Angle mode uses the FC's orientation estimate and accelerometer to help self-level. Practise the difference in a simulator such as Liftoff before flying a real quad.

## 4. How the flight controller keeps the drone responding

![FPV control-loop diagram](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-control-loop.svg)

1. Your radio sends stick commands over the control link.
2. The receiver forwards channels to the flight controller (FC).
3. Firmware turns the stick inputs into desired rates or attitude, depending on flight mode.
4. The gyro measures the quad's actual rotation.
5. Controller logic (commonly PID) compares desired and measured movement.
6. The mixer calculates the four motor commands.
7. ESCs change motor speed; the gyro measures the result and the loop repeats.

The **gyro** is central to fast stabilisation. GPS is a slower source of position and ground-speed information for supported on-screen display, logging, rescue and navigation features; it does not replace the gyro.

## 5. The parts and their jobs

| Part | What it does |
|---|---|
| Frame | Holds components and fixes motor locations |
| Propellers + brushless motors | Accelerate air to produce thrust |
| ESC | Controls electrical power to each motor |
| Flight controller (FC) | Reads sensors and radio commands, then calculates motor corrections |
| Radio receiver | Receives pilot commands (for example, ExpressLRS) and passes them to the FC |
| Camera + VTX / air unit | Transmits the live camera view |
| VRX / goggles | Receives and displays the video |
| LiPo battery + regulators | Supplies power at the required voltage |
| Optional GPS/GNSS | Supplies position and ground-speed information to the FC |
| Optional buzzer / Blackbox | Helps find the quad or analyse recorded flight data |

Continue to **[FPV Drone Parts — One by One](Drone-Parts-One-by-One.md)** for a visual lineup and detailed explanations of the frame, battery, motors, propellers, ESC, flight controller, receiver, camera, video transmitter/receiver, antennas and optional GPS/accessories.

## 6. Real boards: SpeedyBee stack vs BETAFPV AIO

![BETAFPV compact AIO flight controller example](https://betafpv.com/cdn/shop/products/567042f830a15bcefdc659371169a57e_9362ab81-dbf4-4962-b600-0cacf58637db.jpg?v=1625668950)

- **Stack:** FC board + separate 4-in-1 ESC, often used in 3.5–7 inch builds.
- **AIO:** FC and ESC on one board, popular in whoops and toothpick builds. It may include a receiver, OSD, current sensor or barometer, but check the exact revision.
- [SpeedyBee F405 V3 official specs](https://www.speedybee.com/speedybee-f405-v3-30x30-flight-controller/) are a useful board-layout example; the manufacturer marks that specific V3 product discontinued.
- [BETAFPV F4 1S 12A AIO](https://betafpv.com/products/f4-1s-12a-flight-controller) illustrates a compact AIO family. V1/V2/V3 revisions differ in voltage, MCU, receiver type, connectors and firmware target.

## Start learning today

- [ ] Point out the receiver, FC, ESC, motors, propellers, camera, VTX and battery on a real photo.
- [ ] Explain how downward airflow produces upward thrust.
- [ ] Demonstrate throttle, roll, pitch and yaw using the Mode 2 diagram.
- [ ] Trace the loop from Pocket → receiver → FC → ESCs/motors → gyro feedback.
- [ ] Practise those movements in Liftoff, then record one win and one next focus.

## 🎛️ Drone systems and controls — video resources

[![Watch the supplied drone systems and controls video](https://img.youtube.com/vi/sxaEaXcuQA4/hqdefault.jpg)](https://www.youtube.com/watch?v=sxaEaXcuQA4)

- [Drone systems and controls playlist](https://www.youtube.com/playlist?list=PLgMDNELGJ1CYU7vfun-Q7HXsldD-RsocG)
- [Single video: drone systems and controls](https://www.youtube.com/watch?v=sxaEaXcuQA4)

Use these as guided explanations alongside the diagrams and official manuals. I could not reliably confirm the playlist/video titles from public page metadata, so the links are grouped by the topic supplied with them rather than making claims about their exact syllabus.

## Official references

- [RadioMaster Pocket product page](https://radiomasterrc.com/products/pocket-radio-controller-m2)
- [Betaflight overview](https://betaflight.com/docs/wiki/getting-started)
- [Betaflight setup guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)
- [Betaflight motors tab](https://betaflight.com/docs/wiki/app/motors-tab)
- [Betaflight control-loop deep dive](https://betaflight.com/docs/wiki/guides/current/Deep-Dive)
- [SpeedyBee F405 V3](https://www.speedybee.com/speedybee-f405-v3-30x30-flight-controller/)
- [BETAFPV F4 1S 12A AIO](https://betafpv.com/products/f4-1s-12a-flight-controller)

For more real-world build photos, board examples and antenna/GPS product views, see [[Hardware Gallery]].
