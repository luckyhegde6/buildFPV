# 🚁 How an FPV Quadcopter Works

> Start with the mental model: **you ask for movement, the flight controller measures movement, and the ESCs change motor speed to make the aircraft respond.** The loop repeats rapidly while you fly.

![An exploded drone component diagram showing battery, frame, camera, flight controller, ESC, motors and VTX](https://www.mouser.in/images/mktg/advantech_uav_infographic/mouser-amphenoluav-infographic-landingpage-breakdown-drone.png)

*Real-world component illustration from [Mouser / Amphenol's UAV infographic](https://www.mouser.in/amphenol-uav-infographic/). Product layouts vary.*

## 1. The major parts

| Part | Plain-language job | What it connects to |
|---|---|---|
| Frame | Holds the aircraft together and protects/positions components | Motors, FC/ESC, camera, battery and antennas |
| Propellers | Accelerate air to generate thrust | Motor shafts |
| Brushless motors | Turn electrical power into spinning torque | ESCs and propellers |
| ESC (electronic speed controller) | Converts motor commands into controlled three-phase power | Battery, FC signal, each motor |
| Flight controller (FC) | Computer running flight firmware; reads sensors and computes corrections | Receiver, gyro/accelerometer, ESC and peripherals |
| Receiver (RX) | Receives the pilot's control-link packets | Radio transmitter over RF; FC over serial/SPI depending on design |
| Camera + VTX/air unit | Sends live FPV video from the aircraft | Camera to video transmitter, then radio link to compatible VRX/goggles |
| Battery + regulators | Supplies energy at the required voltage | ESC and regulated FC/peripheral rails |
| Optional GPS/GNSS | Estimates position, ground speed and related navigation data | FC, usually over a UART |
| Optional buzzer / onboard flash | Helps locate the quad or analyse flight data | FC outputs / logging system |

**AIO** means *all-in-one*: a single board combines a flight controller and ESC; some versions also include a receiver, VTX, OSD or other functions. AIO does **not** mean every peripheral is present.

## 2. How it lifts

A propeller is a rotating airfoil. Its blades accelerate air downward; the reaction produces upward thrust. A quad lifts when the **sum of the upward components of the four rotors' thrust is greater than the aircraft's weight**. At a steady hover, average upward thrust balances weight.

- More combined thrust generally lets the quad climb; less lets it descend.
- Tilting the aircraft tilts the total thrust vector. Part of that thrust then accelerates the craft horizontally, so forward flight can require more total thrust to maintain height.
- Propeller diameter, pitch, blade count, motor KV, battery cell count, aircraft mass and air density all affect performance. Parts must be chosen as a matched system, not individually by a single spec.

The popular shorthand “more throttle = climb” is useful for learning, but the flight controller may add motor corrections, and an angled quad can trade vertical lift for horizontal acceleration.

## 3. Why two propellers spin each way

A typical quad has **two clockwise (CW) and two counter-clockwise (CCW)** rotors. Spinning a motor/propeller applies a reaction torque to the frame. Opposite rotation directions let the quad balance these torques in normal flight.

- **Throttle:** changes the overall thrust request—typically by raising or lowering the baseline output to all motors.
- **Roll:** rotates the quad left/right around its nose-to-tail axis. The controller creates a thrust difference between the left and right sides.
- **Pitch:** rotates the nose up/down around the side-to-side axis. The controller creates a thrust difference between the front and rear.
- **Yaw:** rotates the nose left/right around the vertical axis. The controller changes the relative torque of the CW and CCW motor groups.

Real flight controllers mix all four commands into four motor outputs continuously. The exact front direction, motor numbering, and “props-in” versus “props-out” rotation layout depend on the frame, firmware motor map and build. **Never copy a rotation diagram blindly**: check the exact Betaflight Motors tab diagram and verify motor direction with every propeller removed.

## 4. What happens in the control loop?

![Simplified control loop: stick input, desired rates, gyro feedback, controller, motor mixer, ESC and motors](assets/fpv-control-loop.svg)

1. **Pilot input:** the radio sends throttle / roll / pitch / yaw commands over a control link such as ExpressLRS.
2. **Receiver:** decodes the link and forwards channel data to the FC. It is not the same thing as a video receiver.
3. **Setpoint:** flight firmware turns the pilot's stick positions into a desired response (for example, a requested roll rate in Acro/Rate mode).
4. **Sensor feedback:** the gyro measures actual angular rotation. An accelerometer can support self-leveling and orientation estimation; optional barometer and GPS serve other functions.
5. **Controller + mixer:** firmware compares desired response with measured response, calculates correction (for example with PID control), and mixes it into individual motor commands.
6. **ESC + motor:** each ESC drives its brushless motor, changing thrust.
7. **Repeat:** fresh sensor samples begin the next iteration. Loop/sample rates depend on the FC, gyro, firmware and settings—do not treat one advertised number as universal.

The gyro is central to fast attitude/rate control. GPS is **not** a replacement for the gyro and does not directly stabilise every tiny wobble. GPS normally supplies slower position/speed data used for OSD, logging or features such as GPS Rescue when the firmware, receiver data, configuration and aircraft setup support them.

### Rate / Acro mode vs Angle mode

- **Acro / Rate:** stick input asks for a rotation rate. Centre the stick and the FC tries to stop rotation; it does not automatically level the quad.
- **Angle:** the FC uses orientation estimation and the accelerometer to limit tilt and self-level when the stick returns to centre.
- Exact available modes and behaviour depend on firmware and configuration. Learn the feel in Liftoff before a real aircraft flight.

## 5. Watch how a real FC/ESC stack looks

![SpeedyBee F405 V3 flight-controller board](https://store-fhxxhuiq8q.mybigcommerce.com/product_images/img_SpeedyBee_F405_V3_Stack/F405-V3-1.jpg)

*Example hardware photo from [SpeedyBee's F405 V3 page](https://www.speedybee.com/speedybee-f405-v3-30x30-flight-controller/). That product page currently marks this exact V3 board discontinued; this is a teaching example, not a buying recommendation.*

![BETAFPV F4 1S 12A AIO flight controller](https://betafpv.com/cdn/shop/products/567042f830a15bcefdc659371169a57e_9362ab81-dbf4-4962-b600-0cacf58637db.jpg?v=1625668950)

*Example compact AIO product photo from [BETAFPV's F4 1S 12A AIO family](https://betafpv.com/products/f4-1s-12a-flight-controller). Check the exact revision and receiver variant before using its manual.*

## 6. Beginner checklist: explain it back

- [ ] I can point out the frame, propellers, motors, FC, ESC, receiver, camera/VTX, battery and antenna.
- [ ] I can explain why two props spin CW and two CCW.
- [ ] I can describe throttle, roll, pitch and yaw in my own words.
- [ ] I can explain the loop: sticks → receiver → FC/sensors → mixer → ESCs → motors → sensor feedback.
- [ ] I know a radio receiver (control link) and a VRX/goggles (video link) are different systems.
- [ ] I know GPS is optional on many freestyle/racing builds and GPS Rescue is not guaranteed return-to-home.
- [ ] I will remove all propellers during configuration, firmware work and motor testing.

## Further reading

- [Betaflight: About the flight controller](https://betaflight.com/docs/wiki/getting-started)
- [Betaflight: Setup guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)
- [Betaflight: Motors tab and motor direction](https://betaflight.com/docs/wiki/app/motors-tab)
- [Betaflight: deeper look at the control loop](https://betaflight.com/docs/wiki/guides/current/Deep-Dive)
- [SpeedyBee F405 V3 manufacturer page and wiring/specification notes](https://www.speedybee.com/speedybee-f405-v3-30x30-flight-controller/)
- [BETAFPV F4 1S 12A AIO example](https://betafpv.com/products/f4-1s-12a-flight-controller)
