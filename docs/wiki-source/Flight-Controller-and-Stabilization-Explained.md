# Flight Controller and Stabilization Explained

[Back to FPV System Basics](FPV-System-Basics.md) · [Practical setup: Betaflight Basics](Betaflight-Basics.md) · [How FPV Drones Work](How-FPV-Drones-Work.md)

The flight controller (FC) is the onboard computer that turns pilot requests and sensor measurements into motor commands. It does not directly create thrust; it asks the electronic speed controllers (ESCs) to change motor output.

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-control-loop.svg" alt="Conceptual feedback loop connecting radio input, receiver, flight controller, ESCs, motors and sensor feedback" width="1200" />

*Conceptual control loop, not a wiring map. Connectors, motor output order and sensor placement vary by board.*

## 1. Follow one control request

Imagine moving the roll stick slightly to the right:

1. The radio transmits a channel value.
2. The receiver passes channel data to the FC.
3. Firmware converts the channel into a desired movement, called a **setpoint**.
4. The gyro measures how fast the aircraft is actually rotating.
5. The controller compares requested and measured movement and calculates corrections.
6. The mixer allocates the requested correction across the individual motors.
7. ESCs change motor drive; propeller thrust changes the aircraft's rotation.
8. The gyro measures the result and the loop repeats.

This fast feedback process is why a quad can remain controllable despite disturbances. If a propeller is damaged, the frame vibrates badly or the FC is mounted incorrectly, the sensor readings and control response can become worse.

## 2. Gyroscope, accelerometer and other sensors

| Sensor / input | What it contributes | Important limitation |
|---|---|---|
| **Gyroscope (gyro)** | Measures rotational rate around the aircraft axes; central to basic rate stabilization | Vibration, damage or poor installation can degrade measurements |
| **Accelerometer (ACC)** | Measures specific force and can help estimate orientation relative to gravity | Not a direct altitude or position sensor |
| **Barometer** | Estimates pressure-related altitude changes on supported builds | Pressure, airflow and calibration affect the reading |
| **GNSS/GPS receiver** | Supplies position, velocity and timing-related data depending on device/output | Satellite data is not a replacement for the high-rate gyro loop |
| **Magnetometer/compass** | Estimates magnetic heading when present and correctly calibrated | Motor currents and other magnetic fields can corrupt its readings |

A small quad may contain only some of these sensors. Do not assume every FC has a barometer, compass, flash storage or a particular UART count. Check the exact board.

## 3. PID, in plain language

Many multirotor flight controllers use a PID-style controller. The terms are part of a control calculation, not three independent flight modes.

- **P (proportional)** responds to the current error between the setpoint and measured rotation. Too much can contribute to overshoot or oscillation.
- **I (integral)** accumulates persistent error over time. It helps correct sustained differences, but poor values can contribute to windup or slow unwanted drift.
- **D (derivative)** responds to how the error is changing and can add damping, but it is sensitive to noisy measurements and can increase motor heating when inappropriate.
- Modern firmware may also use feedforward, filters, dynamic filtering and other logic. These are implementation-specific.

Do not copy PID or filter numbers from another drone as a beginner shortcut. Frame stiffness, motors, props, battery, firmware version, mounting and weight all affect the system. Start from a known-good manufacturer or firmware baseline and change one thing at a time only when you can identify a specific problem.

Official reference: [Betaflight PID Tuning Guide](https://betaflight.com/docs/wiki/guides/current/PID-Tuning-Guide).

## 4. Flight modes change the request, not the hardware

- **Acro/Rate mode:** stick input requests angular rate. Releasing the stick generally stops requesting additional rotation; the quad does not automatically level itself.
- **Angle mode:** uses accelerometer-based leveling to limit tilt and return toward level when the sticks are centered, within the limits of the implementation.
- **Horizon or other assisted modes:** exact behavior depends on firmware and configuration.
- **GPS Rescue:** where supported and configured, it is a separate advanced return behavior using GNSS and other system estimates—not the same thing as normal stabilization.

The FC still needs the correct orientation, motor mix, working sensors, correct receiver input and a safe baseline. A flight mode cannot compensate for incorrect motor directions or an incompatible board target.

## 5. Configuration tabs are different questions

Betaflight and other configurators expose different parts of the same aircraft:

| Area | Question it answers |
|---|---|
| **Setup** | Does the virtual model follow the physical board orientation, and do supported sensors report plausible data? |
| **Ports** | Which UART/peripheral functions are enabled on the actual wired ports? |
| **Receiver** | Are the expected control channels reaching the FC with the right mapping and range? |
| **Modes** | Which AUX channel ranges activate ARM, beeper or supported flight modes? |
| **Motors** | Does the actual output numbering and direction match the installed firmware's motor map? |
| **Failsafe** | What does the aircraft do when valid radio data is lost? |
| **Blackbox / logs** | What did the sensor, controller and motor signals do during a flight or fault? |

The tabs and available options vary by firmware and board. Back up settings before changing them, and inspect a preconfigured quad before assuming it needs a firmware flash.

## 6. Sensor and setup sanity checks

For an unpowered or USB-connected bench check, move the airframe gently and confirm the configurator's orientation model follows the physical movement. Review sensor status and receiver movement. Use the precise manufacturer's board arrow/marking and configurator options to set orientation; don't guess from the USB connector direction.

Receiver or motor tests must be performed with **every propeller removed**. Disconnect the battery before rewiring. Follow the current [Betaflight Safety guide](https://betaflight.com/docs/wiki/guides/current/Safety) and [Setup Guide](https://betaflight.com/docs/wiki/getting-started/setup-guide).

## 7. What symptoms can tell you

| Symptom | First places to investigate |
|---|---|
| Quad flips or immediately becomes unstable at takeoff | Stop immediately; verify motor order/direction, prop type, FC orientation and firmware motor map before any new attempt |
| Model orientation looks wrong in Setup | FC orientation setting and physical mounting |
| Stick response is wrong | Radio channel order, channel mapping, receiver provider and channel direction |
| Oscillation or excessive motor heat | Props/motors/frame first, then firmware baseline, filtering and tuning with evidence |
| Sensor data looks noisy while stationary | Mounting, vibration, board damage, wiring, or electrical noise; inspect before flight |
| GPS Rescue or self-leveling option is missing | Hardware, target/firmware build and current documentation; don't enable unsupported CLI flags at random |

## Continue learning

- [Betaflight Basics](Betaflight-Basics.md) gives a beginner tab-by-tab setup sequence.
- [ExpressLRS Basics](ExpressLRS-Basics.md) explains the incoming control link.
- [GPS, GNSS and Flight Controllers](GPS-and-Flight-Controllers.md) covers real board examples and GNSS.
- [Bench Safety and Flight Readiness](Bench-Safety-and-Flight-Readiness.md) provides a pre-flight inspection.
- [Official Betaflight pilot guides](https://betaflight.com/docs/wiki/guides).

## Knowledge check

1. Why does the flight controller need feedback from the gyro?
2. How is a setpoint different from a sensor measurement?
3. Why does GPS not replace the gyro?
4. Why must motor number/direction be verified using the installed firmware's map?
