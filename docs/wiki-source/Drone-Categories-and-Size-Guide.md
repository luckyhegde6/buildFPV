# Drone Categories and Size Guide

**Purpose:** choose an FPV aircraft by the job you want to do, then check exact dimensions and components. This is a class-selection guide, not a universal build specification.

![Schematic comparison of FPV drone sizes](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/drone-class-overview.svg)

![Decision tree for choosing an FPV drone class by mission](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/drone-class-decision-tree.svg)

> **Important terminology:** Propeller size, frame wheelbase, prop guards, flight purpose and package format describe different things. A “3.5-inch cinewhoop” is a common shorthand, not a guarantee of exact dimensions or camera payload. Check the actual product sheet.

## 1. First separate the five labels

- **Propeller class** — the nominal diameter of the propellers, often described in inches: 2.5, 3.5, 5 or 7 inch.
- **Wheelbase** — usually a diagonal motor-to-motor distance on a quad, usually in millimetres. It is not the propeller diameter.
- **Frame style** — open-prop X, deadcat, ducted/guarded whoop, toothpick, long-range frame or another layout.
- **Flight purpose** — indoor cruising, freestyle, racing, close-proximity filming, long-range or payload carrying.
- **Purchase format** — BNF (Bind-N-Fly), PNP, ARF, RTF or DIY. These describe included equipment and assembly state, not aircraft size. See [BNF, PNP, RTF, ARF and DIY formats](BNF-PNP-RTF-ARF-and-DIY-Formats.md).

## 2. Quick class comparison

The categories overlap. Values below are qualitative selection guidance rather than hard size standards.

| Class | Typical setting / purpose | Strengths | Main compromises | Who it suits |
|---|---|---|---|---|
| **Tinywhoop / indoor micro** | Small ducted props; indoor gates, close practice | Low mass, protected props, can be inexpensive to repair; fits tight spaces | Shorter useful flight time, can struggle in wind, ducts collect dust and still can damage objects/people | Indoor practice and simulator-to-real transition |
| **2–2.5 inch micro / toothpick** | Usually open-prop; garden/park, light freestyle or travel | More efficient/open airflow than many tiny ducted builds, portable | Exposed props; tiny frames have little room; HD VTX can be a major part of takeoff weight/power | Pilot who wants a portable outdoor quad |
| **3–3.5 inch cinewhoop** | Ducted/guarded filming in selected close environments | Prop guards can reduce some contact risks; camera mounts/payload options | Duct drag, extra mass, current/heat and inertia; guards are not collision-proof | Slow close-proximity filming when the aircraft and site are appropriate |
| **3 inch open-prop freestyle / toothpick** | Lightweight outdoor freestyle | Nimble, usually lighter than larger quads | Less momentum and payload than 5 inch; wind and camera weight matter | Lightweight freestyle and efficient cruising |
| **5 inch racing** | Race gates and competitive response | Large ecosystem of parts and setups; high agility and thrust potential | Loud, exposed props, higher energy and crash consequence; repair spares/tools matter | Racing-focused pilot who has a safe suitable site |
| **5 inch freestyle** | Outdoor tricks, proximity with appropriate spacing, general freestyle | Payload room, durability options, broad repair ecosystem | Can be loud and powerful; HD unit/action camera adds mass and alters handling | Outdoor freestyle and general-purpose DIY builds |
| **7 inch long-range / endurance** | Experienced-pilot cruising and longer missions where lawful | Room for efficient propulsion and energy storage; can carry navigation/recording gear | More momentum and mass, greater battery and recovery stakes, not automatically long-range | Experienced pilots planning a conservative mission |
| **Large cine-lifter / heavy-lift** | Payload or cinema work with specialised designs | Payload capability | High cost, complex engineering, severe energy and safety consequences | Specialist use, not a default beginner choice |

**A “whoop” and a “cinewhoop” are not strictly opposing categories.** Whoop often describes a compact guarded/ducted form; cinewhoop describes a filming purpose and often uses guards. Exact design and payload capability vary by product.

## 3. Examples from manufacturer specifications

These are model-specific examples checked on **22 October 2026**; they show why wheelbase, prop size, battery and mass must be listed separately.

| Example | Published details | What the example teaches |
|---|---|---|
| BETAFPV Air75 | 75 mm wheelbase, 40 mm two-blade props, 1S 450 mAh recommended pack, about 21 g published aircraft weight; manufacturer lists 6.5 min under stated 4.35–3.3 V test range | A 75 mm wheelbase does not mean 75 mm propellers; flight time belongs to that configured product/test condition. |
| BETAFPV Pavo Pico | 80.8 mm wheelbase, 45 mm props, 2S; support depends on the specific supported HD/analog installation | A very compact guarded build can still be a camera/video system integration project. |
| BETAFPV Pavo35 | 148 mm wheelbase, 90 mm prop designation, 6S 1050–1400 mAh recommended, listed 10–12 min on manufacturer page; weight depends on included video/camera hardware | A larger cinewhoop can carry more filming gear but requires attention to all-up mass, power and inertia. |

Source pages: [Air75](https://betafpv.com/products/air75-brushless-whoop-quadcopter), [Pavo Pico](https://betafpv.com/products/pavo-pico-brushless-whoop-quadcopter), [Pavo35](https://betafpv.com/products/pavo35-brushless-whoop-quadcopter). Specs and bundled configuration can change; follow the exact product revision.

## 4. Choose by goal, not by the biggest number

- **Need indoor gates and low mass?** Start by comparing tinywhoop kits. Check room, floor/surface, noise, guards/props, spare parts and whether you already have a compatible radio/video system.
- **Want outdoor portability?** Compare an open-prop 2–2.5 inch micro with a small 3-inch class. Consider local wind, exposed prop risk, camera/VTX mass and battery availability.
- **Want protected close-proximity footage?** Compare cinewhoops by payload, prop guards, total takeoff weight, camera mount, VTX heat/airflow and required space. “Protected” does not mean safe to fly near people.
- **Want race practice?** Prioritise predictable performance, repairability, simulator training, suitable space and current event rules rather than camera payload.
- **Want general outdoor freestyle?** A 5-inch build is a common platform, but it demands more space, spares, repair tools and discipline than a tinywhoop. A smaller open-prop micro can teach the basics at lower kinetic energy.
- **Want longer missions?** Treat 7-inch as an experienced-pilot project. Airframe size alone cannot guarantee range or endurance; energy reserve, link budget, wind, mission profile, recovery setup and legal requirements dominate.

## 5. Total-cost checklist

Aircraft price is not the full cost. Account for:

- Compatible control radio and receiver protocol.
- Compatible FPV goggles/VRX and air-unit/video ecosystem.
- Batteries, appropriate balance charger and safe storage/transport.
- Spare propellers, arms/ducts/canopy and common fasteners.
- Tools (hex drivers, multimeter, soldering gear if DIY, fume extraction, smoke-stopper, cutters, heat-shrink and safe power lead/connector tools).
- Simulator, repairs and shipping/tax/warranty uncertainty.
- Time to configure firmware, verify receiver channels, check failsafe and confirm motor layout.

See [First Build Checklist](First-Build-Checklist.md), [motors, propellers and battery compatibility](Motors-Propellers-and-Battery-Compatibility.md), and [FPV chargers and battery safety](FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md).

## 6. Safety and limitations

The same class can vary substantially between light and heavy builds. Extra batteries, action cameras, ducts and digital video hardware change inertia, current draw and handling. Use the legal/airspace guidance for the place you actually fly. Maintain visual line of sight and a safe separation from people and property; do not treat a marketing range or flight-time figure as a mission guarantee.

## Sources

- [BETAFPV Air75 product specification](https://betafpv.com/products/air75-brushless-whoop-quadcopter)
- [BETAFPV Pavo Pico product specification](https://betafpv.com/products/pavo-pico-brushless-whoop-quadcopter)
- [BETAFPV Pavo35 product specification](https://betafpv.com/products/pavo35-brushless-whoop-quadcopter)
- [Betaflight setup guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)

*Reviewed on 22 October 2026. This page is educational; it is not a universal BOM or a legal interpretation for every jurisdiction.*

## 7. Detailed frame and system guides

For geometry and mechanical assembly, continue to:
- [Frame Geometries: Balanced X vs Deadcat](Frame-Geometries-Balanced-X-vs-Deadcat.md)
- [Balanced X frame assembly](Balanced-X-Frame-Assembly.md)
- [Deadcat frame assembly](Deadcat-Frame-Assembly.md)
- [2.5-inch frame guide](2-5-Inch-Frame-Guide.md)
- [3.5-inch cinewhoop frame assembly](3-5-Inch-Cinewhoop-Frame-Assembly.md)
- [5-inch frame assembly](5-Inch-Frame-Assembly.md)
- [7-inch long-range frame assembly](7-Inch-Long-Range-Frame-Assembly.md)

For component and video choices:
- [Motors, Propellers and Battery Compatibility](Motors-Propellers-and-Battery-Compatibility.md)
- [FPV Chargers, LiPo and Li-ion Safety](FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md)
- [BNF, PNP, ARF, RTF and DIY formats](BNF-PNP-RTF-ARF-and-DIY-Formats.md)
- [Analog vs Digital FPV Cameras and Video](Analog-vs-Digital-FPV-Camera-Video-Guide.md)
- [Goggles and VRX Integration](FPV-Goggles-and-VRX-Integration-Guide.md)

