# 🧭 GPS, GNSS and Flight Controller Boards

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-flight-controller.svg" alt="Enlarged high-resolution vector overview of a flight controller's processor, IMU, UART, power and motor interfaces" width="1200" />

*High-resolution conceptual flight-controller map. Board layouts and pad labels vary; use the exact board pinout and manual.*

![SpeedyBee F405 V3 FC example](https://store-fhxxhuiq8q.mybigcommerce.com/product_images/img_SpeedyBee_F405_V3_Stack/F405-V3-1.jpg)

*Example FC hardware. Exact board features vary by revision; see [manufacturer specs](https://www.speedybee.com/speedybee-f405-v3-30x30-flight-controller/). That exact V3 product page is marked discontinued.*

## 1. GPS/GNSS is not the gyro

- **GNSS** is the general term for satellite navigation constellations such as GPS, Galileo, GLONASS and BeiDou.
- A **GPS module** estimates position and ground motion from satellites and sends those data to the FC, usually over UART.
- A **gyro** measures rotation and is central to fast flight stabilisation.
- An **accelerometer** supports attitude estimation/self-level modes.
- A **barometer** estimates altitude changes from pressure; it can be built into the FC without any GPS.
- A **magnetometer/compass** measures magnetic heading and may be included on a GPS+compass module.

## 2. GPS module styles

![Compact Beitian BN-220 GPS module example](https://readytosky.com/pic/big/1171_2.jpg)

| Style | What it means |
|---|---|
| Compact GNSS + ceramic patch antenna | Common on small quads; check size, orientation and supported constellations |
| GNSS + compass | Adds magnetic heading; keep away from high-current wires, motors and magnets |
| Newer receiver chipset (for example M10 generation) | May have better acquisition/tracking support than older modules, but antenna and environment still matter |
| Dual-frequency / high-precision GNSS | Specialist, larger/costlier option; rarely needed for a basic beginner freestyle build |

"M8/M9/M10" generally describes receiver-chip generations, not a guarantee of accuracy for every assembled module. Check the module's protocol, supported firmware, antenna, dimensions, supply voltage and update rate.

## 3. Wiring and setup in plain English

A common serial GPS connection uses:
- GPS TX → FC RX on the chosen UART.
- GPS RX → FC TX, when the module/configuration needs commands sent back.
- VCC and GND according to the exact module voltage rating.
- Optional compass SDA/SCL → supported FC I²C pads when a magnetometer is included.

Do not trust wire colours alone. Follow the exact wiring diagram for the exact board.

In Betaflight, enable the appropriate GPS peripheral on the correct UART and select a supported protocol (UBLOX is common; other protocols depend on the module). Confirm the FC shows valid satellite/3D-fix data and sane position/speed before enabling a feature that depends on it.

![GPS data route: satellites to GPS module to flight controller](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/gps-data-chain.svg)

## 4. What GPS can help with

When supported and correctly configured, GPS data can be used for OSD position/speed/distance, flight logs and features such as GPS Rescue. GPS is not required for many freestyle/racing quads and is not the fast sensor that controls each motor wobble.

**GPS Rescue is not a guaranteed Return-to-Home feature.** It requires careful setup and testing, depends on correct sensor/firmware configuration, and can fail in poor signal, wrong home point, compass interference, strong wind or other unsuitable conditions. Read the current [Betaflight GPS Rescue guide](https://betaflight.com/docs/wiki/guides/current/GPS-Rescue) before considering it.

## 5. Stack vs AIO

![BETAFPV F4 1S 12A AIO board example](https://betafpv.com/cdn/shop/products/567042f830a15bcefdc659371169a57e_9362ab81-dbf4-4962-b600-0cacf58637db.jpg?v=1625668950)

- **FC + ESC stack:** two main boards stacked; common on larger builds with room for a separate 4-in-1 ESC. Features such as barometer, OSD, Blackbox and Bluetooth vary by model.
- **AIO:** FC and ESC share one board, saving space/weight. Some variants also include a receiver, VTX, current sensor or barometer.
- SpeedyBee F405 V3 specifications list STM32F405, BMI270, barometer, OSD, Bluetooth, multiple UARTs and 30.5×30.5 mm mounting; the exact page is marked discontinued, so it is a reference example, not a buy recommendation.
- BETAFPV F4 1S 12A AIO versions differ. The V3 listing describes serial ELRS, barometer/current sensing and 1–2S support, with different MCU/firmware variants. **Do not flash a firmware target based on the family name alone.**

## 6. What to check before you buy or configure

- [ ] Exact PCB revision / firmware target
- [ ] Battery cell-count range and ESC continuous current
- [ ] BEC outputs for VTX and peripherals
- [ ] UART count for receiver, GPS and digital VTX
- [ ] Whether GPS / compass / barometer are included or external
- [ ] Receiver type (SPI ELRS vs serial ELRS is an important difference)
- [ ] Mounting pattern, board dimensions and connector/pinout
- [ ] Backup saved before configuration or firmware changes
- [ ] All props removed for firmware, wiring and motor tests

## Official references

- [Betaflight GPS tab](https://betaflight.com/docs/wiki/app/gps-tab)
- [Betaflight GPS Rescue](https://betaflight.com/docs/wiki/guides/current/GPS-Rescue)
- [SpeedyBee F405 V3](https://www.speedybee.com/speedybee-f405-v3-30x30-flight-controller/)
- [BETAFPV F4 1S 12A AIO](https://betafpv.com/products/f4-1s-12a-flight-controller)
- [BETAFPV F4 1S 12A AIO V3](https://betafpv.com/products/f4-1s-12a-aio-brushless-flight-controller-v3-0)
- [ArduPilot GPS/Compass overview](https://ardupilot.org/copter/docs/common-positioning-landing-page.html)
