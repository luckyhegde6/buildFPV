# 7-Inch Long-Range FPV — Aircraft Design and Mission Planning

![iFlight AOS 7 V5 long-range frame kit product photo](https://fpvstorerc.com/cdn/shop/files/IFlightAOS7V5FrameKit_4.jpg?v=1750820095&width=1445)

*Real frame example: iFlight AOS 7 V5. Official product specs list 313 mm wheelbase, 254 × 184 × 36 mm overall dimensions, 8 mm arms, and 325 g frame weight. [iFlight specification](https://shop.iflight.com/AOS-7-V5-Frame-Kit-Pro2311). Image hosted by FPV Store RC.*

A 7-inch propeller has a nominal diameter of 177.8 mm. A 7-inch build is often chosen for efficient cruising and mission equipment, but **propeller size does not guarantee range or flight time**. Mission planning must consider the entire aircraft, actual power consumption, wind, radio/video links, local law and a conservative energy reserve.

## 1. Why choose a 7-inch class?

Potential benefits include space for efficient prop/motor setups, higher-energy batteries and mission equipment such as GPS/GNSS or a larger antenna. Trade-offs include more mass and momentum, more expensive components/spares, greater risk if lost or crashed, larger operating envelope and more complex recovery planning.

This is usually not the easiest first real quad. Learn radio orientation, acro recovery, failsafe and battery use in a simulator and on a smaller repairable model first.

## 2. Efficiency, LiPo and Li-ion

Longer missions are an energy-budget problem:
- Pack energy (Wh) is approximately nominal voltage × capacity in Ah; it is not all safely usable.
- Motor/prop efficiency, total all-up mass, aerodynamic drag, battery resistance and average throttle determine average power.
- LiPo can support high current; many Li-ion cells offer useful energy density for lower-current cruising but cannot safely supply every freestyle/long-range load. Match the exact cell datasheet and pack construction.
- Extra battery capacity adds mass, which can reduce efficiency or require more thrust; bigger is not always better.
- Never plan to use every last watt-hour. Reserve must account for wind, detours, landing/return, battery age and uncertainty.

See [Motors, Propellers and Battery Compatibility](Motors-Propellers-and-Battery-Compatibility.md) and [FPV Chargers and Battery Safety](FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md).

## 3. Powertrain and fit

Use the exact motor-maker table linking stator/KV, battery cell count and propeller size/pitch. Verify ESC voltage/current, connector and wiring, battery current capability, cooling and total mass. Confirm every direct-battery component tolerates full battery voltage or has a documented regulator.

Before assembly, check:
- exact frame drawing and motor/stack mounting patterns,
- prop clearance and screw length,
- battery size/retention and center of gravity,
- camera/air-unit mounting, antenna/coax placement, airflow and access for service,
- GPS/GNSS and recovery equipment mount and wiring as documented by manufacturer.

Use [7-Inch Long-Range Frame Assembly](7-Inch-Long-Range-Frame-Assembly.md).

## 4. Control/video link and recovery

Control and video are separate links. A control receiver such as ELRS is not the same as the goggles' VRX. Choose compatible air-side VTX/air unit and goggles receiver, follow exact firmware and antenna guidance, and comply with regional channel/power constraints.

GPS/GNSS helps provide position/ground-speed data where supported and correctly configured; it does not guarantee return-to-home or recovery. Failsafe behavior depends on firmware, receiver configuration, sensors, link status and setup. Understand and test the aircraft's documented failsafe in controlled safe conditions. Keep an independent recovery plan and don't infer safe route or legal range from marketing claims.

## 5. Mission-planning checklist

- [ ] Verify current applicable aviation/airspace/radio rules for the location and mission.
- [ ] Choose a suitable operating area and maintain required visual line of sight and separation.
- [ ] Check wind, precipitation, temperature and visibility for the planned route.
- [ ] Check battery health, energy reserve, current demand and return/landing options.
- [ ] Verify control/video link, antennas and failsafe.
- [ ] Validate GPS setup/rescue features according to the exact firmware guide, without assuming they guarantee recovery.
- [ ] Keep flight logs and inspect motors, props, arms, antenna mounts, battery and wiring after landing.
- [ ] Stop the mission if link quality, weather, battery reserve or aircraft behavior departs from the plan.

## 6. Troubleshooting / failure conditions

| Symptom | Safe response |
|---|---|
| Battery sag/voltage alarm early | Land conservatively and inspect battery, load, prop/motor setup, wind and actual all-up weight |
| Control link degraded | Follow the aircraft's known failsafe procedure; don't push range to recover an unreliable link |
| Video weak or breaking | Check antenna, connectors, polarization, supported band/power and air-unit cooling |
| GPS no fix | Abort relying on GPS-dependent features until exact sensor/configuration issue is resolved |
| Crash/damage | Disconnect battery and inspect frame/arms/props/motors/battery/electronics before any re-flight |

## Sources

- [iFlight AOS 7 V5 Frame Kit](https://shop.iflight.com/AOS-7-V5-Frame-Kit-Pro2311)
- [Betaflight setup guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)
- [Betaflight Motors Tab](https://betaflight.com/docs/wiki/app/motors-tab)

*Reviewed 22 October 2026. This page deliberately avoids claiming guaranteed range, endurance or rescue capability.*
