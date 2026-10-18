# 🚁 How FPV Drones Work — From Sticks to Flight

![Exploded view of a typical UAV build showing battery, flight controller, ESC, frame, motors, camera and video transmitter](https://www.mouser.in/images/mktg/advantech_uav_infographic/mouser-amphenoluav-infographic-landingpage-breakdown-drone.png)

*Image source: [Mouser / Amphenol UAV component breakdown](https://www.mouser.in/amphenol-uav-infographic/). It is a component-location illustration; your specific build may look different.*

An FPV quadcopter becomes much easier to understand when you separate four systems: **control, flight control, propulsion and video**.

## 1. The parts and their jobs

| Part | What it does |
|---|---|
| Frame | Holds components and fixes motor locations |
| Props + brushless motors | Accelerate air to produce thrust |
| ESC | Controls electrical power to each motor |
| Flight controller (FC) | Reads sensors and radio commands, then calculates motor corrections |
| Radio receiver | Receives pilot commands (e.g. ExpressLRS) and passes them to the FC |
| Camera + VTX/air unit | Transmits the live camera view |
| VRX / goggles | Receives and displays the video |
| LiPo battery + regulators | Supplies power at the required voltage |
| Optional GPS/GNSS | Supplies position and ground-speed information to the FC |
| Optional buzzer / Blackbox | Helps find the quad or analyse recorded flight data |

## 2. How the quad lifts

![SpeedyBee flight controller example](https://store-fhxxhuiq8q.mybigcommerce.com/product_images/img_SpeedyBee_F405_V3_Stack/F405-V3-1.jpg)

All four propellers accelerate air downwards. The reaction creates upward thrust. If the total vertical thrust is greater than the aircraft's weight, it climbs; if lower, it descends; if it balances weight, it can hover. Tilting the quad points some thrust sideways, which accelerates it forward or sideways.

### Why two CW and two CCW propellers?

Two motors rotate clockwise and two counter-clockwise so their reaction torques can balance. The FC creates roll by changing left-vs-right thrust, pitch by changing front-vs-rear thrust, and yaw by changing the torque balance between CW and CCW groups.

**The motor corner numbers and exact CW/CCW layout are firmware/build-dependent.** Use the diagram in the installed firmware's Motors tab and verify with props removed; don't memorise a single illustration as universal.

## 3. Throttle, roll, pitch and yaw

![AI-generated visual concept of a real-style FPV build](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-build-3d-concept.jpg)

*AI-generated illustrative concept art made for this learning project, not a wiring or motor-order reference. Use the official diagrams below for configuration.*

- **Throttle** changes the overall thrust request. Real flight-control corrections may add/subtract output from individual motors.
- **Roll** tilts left/right.
- **Pitch** tilts the nose forward/back.
- **Yaw** rotates the nose left/right around the vertical axis.

In Acro/Rate mode, the sticks request rotational rates. The aircraft does not auto-level when you centre the sticks. In Angle mode, self-level behaviour uses the FC's orientation estimate and accelerometer. Learn the difference in Liftoff before flying a real quad.

## 4. The feedback/control loop

![FPV control-loop diagram](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-control-loop.svg)

1. Your radio sends stick commands over the control link.
2. The receiver forwards channels to the FC.
3. Firmware converts stick positions into desired rates/attitude.
4. The gyro measures the quad's actual rotation.
5. Controller logic (commonly PID) compares desired vs actual movement.
6. The mixer calculates the four motor commands.
7. ESCs change motor speed; the gyro measures the result and the loop repeats.

This loop runs much faster than GPS navigation updates. The **gyro** is central to fast stabilisation; GPS is a slower source of position/speed information for supported OSD, logging and rescue/navigation features.

## 5. What the letters mean

- **FC** — flight controller, the onboard computer.
- **ESC** — electronic speed controller; a 4-in-1 ESC drives all four motors from one board.
- **AIO** — all-in-one FC/ESC board; some AIOs also include a receiver or VTX.
- **RX (control)** — radio-control receiver.
- **VTX** — video transmitter carried by the aircraft.
- **VRX** — video receiver, usually in goggles or an external receiver.
- **GPS/GNSS** — satellite positioning; does not replace the gyro.

## 6. Real boards: SpeedyBee stack vs BETAFPV AIO

![BETAFPV compact AIO flight controller example](https://betafpv.com/cdn/shop/products/567042f830a15bcefdc659371169a57e_9362ab81-dbf4-4962-b600-0cacf58637db.jpg?v=1625668950)

- **Stack:** FC board + separate 4-in-1 ESC, often used in 3.5–7 inch builds.
- **AIO:** FC and ESC on one board, popular in whoops and toothpick builds. It may include a receiver, OSD, current sensor or barometer, but check the exact revision.
- [SpeedyBee F405 V3 official specs](https://www.speedybee.com/speedybee-f405-v3-30x30-flight-controller/) are a useful board-layout example; the manufacturer marks that specific V3 product discontinued.
- [BETAFPV F4 1S 12A AIO](https://betafpv.com/products/f4-1s-12a-flight-controller) illustrates a compact AIO family. V1/V2/V3 revisions differ in voltage, MCU, receiver type, connectors and firmware target.

## Start learning today

- [ ] Point out the receiver, FC, ESC, motors, props, camera, VTX and battery on a real photo.
- [ ] Explain why two props turn CW and two CCW.
- [ ] Describe throttle, roll, pitch and yaw.
- [ ] Trace the loop from Pocket → receiver → FC → ESCs/motors → gyro feedback.
- [ ] Practise those movements in Liftoff, then log one win and one next focus.

## Official references

- [Betaflight overview](https://betaflight.com/docs/wiki/getting-started)
- [Betaflight setup guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)
- [Betaflight motors tab](https://betaflight.com/docs/wiki/app/motors-tab)
- [Betaflight control-loop deep dive](https://betaflight.com/docs/wiki/guides/current/Deep-Dive)
- [SpeedyBee F405 V3](https://www.speedybee.com/speedybee-f405-v3-30x30-flight-controller/)
- [BETAFPV F4 1S 12A AIO](https://betafpv.com/products/f4-1s-12a-flight-controller)
