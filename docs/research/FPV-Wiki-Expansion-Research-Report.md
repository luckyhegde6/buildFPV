# FPV Wiki Expansion — Research Report and Implementation Notes

**Prepared:** 22 October 2026  
**Repository:** [luckyhegde6/buildFPV](https://github.com/luckyhegde6/buildFPV)  
**Canonical pages:** `docs/wiki-source/`  
**Canonical diagrams:** `docs/assets/`  
**Status:** living research note; selected official product pages reviewed. This is not a claim that every requested product family or regional rule has been fully researched or that the separate GitHub Wiki has been published.

## Executive summary

The new guides should help the reader choose an aircraft and then verify its components as a system. Five labels must remain separate: **propeller diameter, frame wheelbase, frame geometry, flight purpose and purchase/package format**. A 3.5-inch cinewhoop and a deadcat describe different things: one is a common propeller / mission class, while the other describes a frame geometry. BNF/PNP/RTF describe how much gear is included, not frame shape.

The video guides should explicitly compare the full camera → VTX/air-unit → RF/antenna → goggles/VRX chain. “Digital HD” does not imply cross-brand compatibility. DJI consumer camera drones are not interchangeable with modular DJI FPV air units. Battery and motor guides must use maker test tables rather than a universal KV-by-cell-count chart; charger and cycle-life discussions must defer to the exact pack and charger manual.

The current source implementation adds these guides:
- Drone class selector; tinywhoop; BNF/PNP/RTF/ARF/DIY glossary.
- Frame geometry overview; dedicated Balanced X, Deadcat, 2.5-inch, 3.5-inch cinewhoop, 5-inch and 7-inch frame assembly guides.
- Motor/propeller/battery compatibility.
- FPV charger and LiPo/Li-ion safety.
- Analog-vs-digital camera/video system guide and goggles/VRX integration guide.
- Symptom-based troubleshooting guide.

Original SVGs currently in source:
- `drone-class-overview.svg`
- `balanced-x-vs-deadcat.svg`
- `frame-size-reference.svg`
- `motor-prop-battery-compatibility.svg`
- `charger-balance-power.svg`
- `analog-vs-digital-video.svg`
- `goggles-vrx-integration.svg`

Use the master TODO as the source of implementation status. GIF creation, full model-by-model compatibility tables, further ecosystem-specific integration pages, image rendering review, and live-Wiki publication remain follow-up tasks until actually completed.

---

## 1. Aircraft classes and geometry

### Five different terms that often get conflated

| Label | What it describes | Example |
|---|---|---|
| Prop size | Nominal diameter of the propeller | 40 mm, 2.5 inch, 5 inch, 7 inch |
| Wheelbase | Motor-to-motor frame dimension, commonly diagonal and usually mm | BETAFPV Air75 is listed with 75 mm wheelbase |
| Frame geometry | Motor placement/layout and structure | Symmetrical X, deadcat/front-spread, stretched/squished X, guarded/ducted |
| Mission | Intended use and priorities | Indoor practice, racing, freestyle, cine, long-range |
| Purchase format | Bundle contents / level of assembly | BNF, PNP, ARF, RTF, DIY |

A product marketing class is shorthand rather than a universal physical standard. Do not use prop diameter as a wheelbase or use a class diagram as a manufacturing/drilling plan.

### Official examples reviewed

**BETAFPV Air75** product page lists 21 g, 75 mm wheelbase, 40 mm two-blade props, 0802SE 23000KV motors, recommended LAVA 1S 450mAh 75C battery, onboard serial ELRS 2.4G receiver, and onboard 5.8G VTX. The page lists 6.5 min flight time using a stated 4.35–3.3 V range. The 4.35 V endpoint signals the configuration may be using its specified LiHV-style pack; do not apply the conventional 4.20 V/cell LiPo table to that battery without checking its label. Flight time is the manufacturer's stated test/reference, not a universal promise. Source: [BETAFPV Air75](https://betafpv.com/products/air75-brushless-whoop-quadcopter).

**BETAFPV Pavo35** listing gives 148 mm wheelbase, 2006 2400KV motors, GF D90S-3 props, XT60 connector, recommended 6S 1050–1400mAh battery, 238 g without DJI O3 air unit or battery, and 275 g with O3 air unit but still without battery. The page advertises 10–12 min for its listed setup and names supported video options including DJI O3, Walksnail Avatar HD Pro and analog. Those values are configuration-specific; complete takeoff weight must include battery, camera, mounts, antennas and any additional action camera. Source: [BETAFPV Pavo35](https://betafpv.com/products/pavo35-brushless-whoop-quadcopter).

**BETAFPV Pavo Pico** listing describes an 80.8 mm wheelbase, 45 mm prop class and 2S design with supported video-system configurations. Check the selected SKU and payload version. Source: [BETAFPV Pavo Pico](https://betafpv.com/products/pavo-pico-brushless-whoop-quadcopter).

These examples validate the need for per-product dimension/spec boxes on the class pages. They do not establish a universal wheelbase range for every 2.5, 3.5, 5 or 7-inch quad. The `frame-size-reference.svg` diagram is labelled illustrative and should be rechecked/modified if a future page wants to present a numeric wheelbase range as a fact. A real frame maker's dimensioned drawing must be the authority for fit and assembly.

### Balanced X vs deadcat

- **Symmetrical X:** generally symmetric motor geometry around the centre. It is a common general-purpose form. Front props may intrude into a wide field of view, depending on camera lens, camera tilt, prop diameter and motor layout.
- **Deadcat/front-spread:** geometry repositions/spreads front motors to keep the front props farther outside the camera frame. It is not a standardized dimension or performance guarantee.
- Neither shape is intrinsically better. Frame stiffness, arm mass, repairability, motor spacing, prop clearance, camera FOV, and a suitable tune matter.
- A deadcat image should show a conceptual camera field-of-view cone but should never be presented as a verified frame drawing unless it follows the exact manufacturer's drawing.

### Class trade-offs for beginners

| Class | Purpose | Trade-offs to explain |
|---|---|---|
| Tinywhoop / guarded micro | Indoor gates and small spaces | Low mass and ducts, but limited wind tolerance; duct mass/drag, dust and breakage |
| 2–2.5-inch open-prop micro / toothpick | Portable outdoor practice | Small form factor, but exposed props; payload, wind and video-unit weight can dominate |
| 3–3.5-inch cinewhoop | Close-proximity cinematography where appropriate | Guards and payload mounts, but more drag, inertia, heat and power demands |
| 5-inch racing | Course response | Common parts ecosystem and agility, but noise, power, exposed props and repair costs |
| 5-inch freestyle | Outdoor tricks/general freestyle | Durable/payload choices, but weight, crash energy and camera/VTX packaging |
| 7-inch long-range | Longer, efficient missions for experienced pilots | Endurance design options, but momentum, payload energy and recovery stakes; range never follows from size alone |

The page should label these as qualitative tendencies, not absolute regulations or consistent market standards.

---

## 2. Motor, propeller and battery compatibility

### Core technical rule

Never prescribe a universal KV number just from cell count or prop diameter. Select motor and prop using the exact maker's test table (prop model, battery voltage/cell count, current, thrust and temperature if provided). Verify ESC voltage/current and cooling, aircraft mass, and all component input-voltage limits. A high cell count increases voltage, but does not by itself guarantee a particular motor is suitable.

Typical FPV brushless motors often use an outrunner design. Stator sizing conventions (e.g. 0802, 1103, 1404, 2006) describe dimensions, while KV is approximate unloaded RPM per volt; neither number alone predicts thrust, torque or efficiency.

### Standard 4.20 V/cell LiPo arithmetic

| Pack | Nominal at 3.7 V/cell | Full at 4.20 V/cell |
|---|---:|---:|
| 1S | 3.7 V | 4.20 V |
| 2S | 7.4 V | 8.40 V |
| 3S | 11.1 V | 12.60 V |
| 4S | 14.8 V | 16.80 V |
| 6S | 22.2 V | 25.20 V |

These are only for a conventional pack whose specification explicitly states 3.7 V nominal / 4.20 V full per cell. The Air75 listing's 4.35 V test endpoint is an example showing why pack variant/chemistry must be read instead of assuming all LiPo-branded packs use the same full-charge voltage. LiHV and lithium-ion cell types may have different specified limits.

### LiPo vs Li-ion

- Many LiPo packs used for high-current FPV are designed for substantial current and quick throttle changes, but still suffer voltage sag, heat, physical damage and ageing.
- Many Li-ion cells have attractive energy density for efficient cruising, but an energy-dense cell is not necessarily suitable for freestyle current peaks. Current rating, pack design, parallel groups, wiring and thermal behaviour must all be checked.
- Wh ≈ nominal volts × capacity in Ah is a nominal energy calculation, not actual usable flight time.
- “Maximum flight time” needs a named aircraft, battery, payload, flight profile, environment and cutoff/reserve method. Manufacturer figures should be quoted with test conditions. Don't consume a pack to an unsafe voltage just to claim a longer flight.
- Cycle life is not a fixed universal number: cell model, charging current, storage, heat, discharge depth, balance and calendar ageing all matter. Inspect packs; stop using swollen/damaged/hot packs.

### Propeller categories

Two-/three-/four-blade, diameter, pitch and blade shape all change load. Multi-blade props may provide control feel or suit ducts but often increase load relative to a lighter-load prop on the same setup. CW/CCW prop type has to match the actual motor spin and firmware layout. Remove all props for bench configuration, firmware work, motor order/direction, failsafe and receiver tests.

---

## 3. Charger selection and battery safety

Select a charger after identifying the exact battery chemistry, full voltage, series count, current limit, connector and balance connector. A plug fitting does not prove the chemistry or polarity matches. Balance chargers need a compatible per-cell measurement path; multi-channel chargers may share their advertised total power across channels.

Approximate output power is charge voltage × current. For conventional 4.20 V/cell LiPo at 1 A, the ideal output is ~4.2 W for 1S, 8.4 W for 2S, 12.6 W for 3S, 16.8 W for 4S and 25.2 W for 6S. This is an illustrative calculation, not a charge-current recommendation. Real input power is greater due to losses. Use pack maker charge instructions and charger maker's per-channel output/power allocation.

Safety rules for the guides:
- Do not charge damaged, swollen, punctured, crushed or hot packs.
- Charge supervised in a suitable fire-safe place and remain present throughout.
- Verify chemistry, cell count, limit and charge current before charging.
- Stop for abnormal heat, swelling, odour, cell imbalance or charger error.
- Use storage charging and balance procedures according to exact pack/charger instructions.
- Do not assert a universal cycle count or universal Li-ion max-charge voltage.

Sources for the page include [BETAFPV battery catalogue](https://betafpv.com/collections/batteries) and [ToolkitRC charger specification/support](https://www.toolkitrc.com/). More research is needed to verify current charger manuals and model-specific balancing details before product recommendations are added.

---

## 4. Analog vs digital cameras, VTX, VRX and goggles

### Keep signal paths separate

**Control:** handheld radio → aircraft-side control receiver (e.g. ELRS) → flight controller.  
**Video:** camera → VTX/air unit → video antenna → compatible VRX/goggles.  
The receiver controlling stick inputs is not the goggles' video receiver.

Analog video is often lightweight and modular, with progressive image degradation when RF gets noisy; image detail is lower than HD options. Digital FPV can offer more detail and onboard recording, but latency, signal breakup, weight, power/heat and ecosystem compatibility vary by exact model/mode/conditions. No universal analog-versus-digital latency/range claim should be used without test conditions.

### Verified official manufacturer facts

**DJI O4 Air Unit Series:** DJI's current official specifications list different models with materially different weight, camera sensor/FOV, recording and power ranges:
- O4 Pro: module approx. 15.6 g without camera module, approx. 32 g with camera module; 1/1.3-inch CMOS, 155° FOV, live view modes including 1080p up to 100 fps and onboard 4K modes up to 120 fps in some formats; input 7.4–26.4 V.
- Standard O4: approx. 5.1 g without camera module and 8.2 g with camera module; 1/2-inch CMOS, 117.6° FOV; onboard 4K recording modes up to 60 fps in listed formats; input 3.7–13.2 V.
- DJI lists supported goggles/controller combinations by generation. Its stated latency and max transmission range are test-condition figures, not guaranteed performance in flight. Operating frequency/power allowed varies by region.
Sources: [DJI O4 Air Unit Series specs](https://www.dji.com/o4-air-unit/specs), [DJI O4 FAQ](https://www.dji.com/o4-air-unit/faq).

**HDZero:** official VTX comparison lists products with significantly different weight, mounting, input voltage, consumption and use case. Examples include Whoop V2 at 31×31 mm, 25.5×25.5 mm mounting, 5.3 g and 3–12.6 V; Freestyle V2 at 29×30 mm, 20×20 mounting, 22.3 g and 7–25 V. These are per-model specs, not properties of every HDZero product. Source: [HDZero VTX summary](https://docs.hd-zero.com/vtx-summary).

**Walksnail / CADDX:** model and goggles generation compatibility should be read from the official list, with current firmware/manual. Sources: [Avatar buying guide](https://wiki.caddxfpv.com/en/Avatar-HD-Series/How-to-buy), [Goggles X documentation](https://wiki.caddxfpv.com/en/Avatar-HD-Series/Receiver-Unit/Goggles-X), [Avatar HD Pro kit](https://www.caddxfpv.com/products/walksnail-avatar-hd-pro-kit).

**DJI camera drones vs FPV air units:** the consumer camera-drone catalogue is a different product class. Do not imply a consumer drone's camera/aircraft/goggles are modular FPV components that can simply be connected to a DIY quad. Source: [DJI camera drone catalogue](https://www.dji.com/global/camera-drones?site=brandsite&from=nav).

### Compatibility criteria

- Camera sensor/module, cable and air-unit generation.
- Exact VTX/air unit ↔ goggles/VRX model/generation and firmware.
- Frequency bands/channel availability and legal RF power in the actual country/region.
- Antenna connector, polarization, cable quality and installation.
- Input voltage, regulator capacity, current draw, cooling/airflow and physical frame/camera mount.
- Recording path: goggle DVR vs on-board recording, supported card/file format and motion data for stabilisation.
- Goggles optics/comfort: FOV, diopter/focus, IPD/eye box, battery, receiver upgrade path, HDMI/AV inputs only where exact model supports them.
- Exact binding/update procedure; do not cross-flash guessed hardware targets.

---

## 5. Page design and implementation sequence

### Source pages created in main

| File | Role |
|---|---|
| `Drone-Categories-and-Size-Guide.md` | Class selector / category definitions |
| `Tinywhoop-and-Micro-FPV-Guide.md` | Indoor micro buying/setup/troubleshooting |
| `BNF-PNP-RTF-ARF-and-DIY-Formats.md` | Purchase-format glossary |
| `Frame-Geometries-Balanced-X-vs-Deadcat.md` | Geometry differences and general assembly |
| `Balanced-X-Frame-Assembly.md` | Symmetrical X assembly |
| `Deadcat-Frame-Assembly.md` | Deadcat assembly and camera FOV checks |
| `2-5-Inch-Frame-Guide.md` | Micro frame fit and assembly |
| `3-5-Inch-Cinewhoop-Frame-Assembly.md` | Duct/camera payload assembly |
| `5-Inch-Frame-Assembly.md` | Racing vs freestyle mechanical priorities |
| `7-Inch-Long-Range-Frame-Assembly.md` | Endurance/mission-specific mechanical guide |
| `Motors-Propellers-and-Battery-Compatibility.md` | Matching variables and voltage table |
| `FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md` | Charger selection and battery safety |
| `Analog-vs-Digital-FPV-Camera-Video-Guide.md` | Ecosystem and camera comparison |
| `FPV-Goggles-and-VRX-Integration-Guide.md` | Goggles categories and compatibility |
| `FPV-Troubleshooting-Quick-Guide.md` | Symptom-led diagnostics and stop conditions |

### SVG assets created in main

- `drone-class-overview.svg`
- `balanced-x-vs-deadcat.svg`
- `frame-size-reference.svg`
- `motor-prop-battery-compatibility.svg`
- `charger-balance-power.svg`
- `analog-vs-digital-video.svg`
- `goggles-vrx-integration.svg`

These are source SVG diagrams. A completed animated GIF is **not** currently included; GIF creation remains an explicit open task in the TODO rather than being falsely marked finished. Use actual verified model photos for realistic frame examples; schematic geometry should remain labelled as illustrative.

### Next work

1. Finish navigation cross-links and asset index; validate every new filename appears in the right order.
2. Add a dedicated manufacturer-verified model matrix for Tinywhoop / 2.5 / cinewhoop / 5 / 7 inch and purchase formats.
3. Add system-specific integration tutorials for DJI O3/O4, Walksnail Avatar, HDZero and analog VRX module setups.
4. Build the remaining diagrams (camera recording/live feed, antenna/connector verification, battery chemistry, BNF kit contents) and actual small GIFs; inspect every export.
5. Add a comprehensive tool/consumables tutorial separated into mechanical assembly, soldering/electrical checks and firmware/bench checks.
6. Verify product facts, manuals, current regional laws and price/availability near publication. Mark all mutable facts with checked dates.
7. Run Markdown/image/link/SVG checks, review sidebar, update TODO status, then publish via the separate Wiki remote.

---

## Source registry (official/product sources; checked 22 October 2026 unless noted)

### BETAFPV
- [BETAFPV Air75](https://betafpv.com/products/air75-brushless-whoop-quadcopter)
- [BETAFPV Meteor75 Pro](https://betafpv.com/products/meteor75-pro-brushless-whoop-quadcopter)
- [BETAFPV Pavo Pico](https://betafpv.com/products/pavo-pico-brushless-whoop-quadcopter)
- [BETAFPV Pavo35](https://betafpv.com/products/pavo35-brushless-whoop-quadcopter)
- [BETAFPV Cetus X Kit](https://betafpv.com/products/cetus-x-fpv-kit)
- [BETAFPV battery catalogue](https://betafpv.com/collections/batteries)

### DJI
- [DJI O4 Air Unit Series specifications](https://www.dji.com/o4-air-unit/specs)
- [DJI O4 Air Unit FAQ](https://www.dji.com/o4-air-unit/faq)
- [DJI consumer camera drone catalogue](https://www.dji.com/global/camera-drones?site=brandsite&from=nav)

### CADDXFPV / Walksnail
- [Avatar HD Pro Kit](https://www.caddxfpv.com/products/walksnail-avatar-hd-pro-kit)
- [Avatar compatibility / buying guide](https://wiki.caddxfpv.com/en/Avatar-HD-Series/How-to-buy)
- [Walksnail Goggles X documentation](https://wiki.caddxfpv.com/en/Avatar-HD-Series/Receiver-Unit/Goggles-X)
- [CADDXFPV download centre](https://www.caddxfpv.com/pages/download-center)

### HDZero
- [HDZero VTX product comparison](https://docs.hd-zero.com/vtx-summary)
- [HDZero Freestyle V2](https://docs.hd-zero.com/freestyle-v2)
- [HDZero product catalogue](https://www.hd-zero.com/products)

### Flight-controller setup
- [Betaflight setup guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)
- [Betaflight motors tab](https://betaflight.com/docs/wiki/app/motors-tab)

### Charger / power
- [ToolkitRC M7AC product page](https://www.toolkitrc.com/m7ac/)
- [ToolkitRC official support/products](https://www.toolkitrc.com/)

*Scope caveat:* this report is a working snapshot from selected official sources. It does not replace product manuals, battery datasheets, charger manuals, or local laws. The TODO tracks model-specific research, further source-checking and the remaining build/publish work.


---

## Addendum: frame-dimension photo references and later implementation pass (22 October 2026)

### Model-specific dimensions now shown in the frame reference

These figures were cross-checked against the manufacturer/model sources listed below; they are examples, not category-wide standards. The SVG uses schematic top views that are **not to scale** and should never be used as drill templates.

| Class / actual product | Manufacturer-published values | What the guide can safely teach |
|---|---|---|
| 2.5-inch open micro — Sub250 OasisFly25 | Manufacturer listing: 135 mm wheelbase; HQ 2.5×2.5×3 props; 1404/4500KV motors on the shown build and a 4S 530–730mAh recommended battery. Exact SKU/package differs. | Wheelbase is its own model dimension. Use its frame drawing for plates, mounting holes and fasteners. |
| 3.5-ish guarded cinewhoop — BETAFPV Pavo35 | Frame page: 148 mm wheelbase; 92 mm duct diameter; 3 mm top plate; 1.5 mm base plate; 2 mm gimbal plate; 113.9 g frame weight; 25.5×25.5 FC holes and 20×20 / 25.5×25.5 VTX mount options. Complete quad SKU lists D90S-3 (90 mm) propellers and a 6S battery configuration. | “3.5-inch cinewhoop” is product-class shorthand; this model uses a 90 mm prop and 92 mm duct. Do not flatten duct OD, prop diameter and wheelbase into one number. |
| 5-inch symmetrical/squashed-X — GEPRC GEP-MK5X O3 frame | 225 mm wheelbase; 214×168×42 mm overall dimensions; 5-inch props; 2.5 mm top/bottom plates, 5 mm arms, 30.5×30.5 mm FC mounts, 141.9 g standard / 156.1 g Pro frame. | This is a specific 5-inch squashed-X example, not the dimensions of all 5-inch X frames. |
| 5-inch deadcat — GEPRC GEP-MK5D O3 frame | 230 mm wheelbase; 208×193×42 mm dimensions; 5-inch props; 2.5 mm plates, 5 mm arms; 30.5×30.5 mm FC mounting; 168.0 g standard / 197.0 g Pro frame. | The deadcat and X versions differ in dimensions and mass; the camera-view objective is explicit in the manufacturer's text. |
| 7-inch long-range — iFlight AOS 7 V5 frame kit | 313 mm wheelbase; 254×184×36 mm overall dimensions; 8 mm arms; 2 mm top and 2.5 mm bottom plates; 20×20 and 30×30 flight-stack mounting; 325 g listed frame mass. | A 7-inch propeller class can use a model-specific wheelbase much larger than generic internet estimates; use the exact drawing for fit. |

Sources:
- [Sub250 OasisFly25 product page](https://sub250.com/en-nl/collections/oasisfly-series/products/sub250-oasisfly25-hd-o3)
- [BETAFPV Pavo35 frame](https://betafpv.com/products/pavo35-brushless-whoop-frame)
- [BETAFPV Pavo35 quad](https://betafpv.com/products/pavo35-brushless-whoop-quadcopter)
- [GEPRC GEP-MK5X O3 frame](https://geprc.com/product/gep-mk5x-o3-frame/)
- [GEPRC GEP-MK5D O3 DeadCat frame](https://geprc.com/product/gep-mk5d-o3-frame/)
- [iFlight AOS 7 V5 frame kit](https://shop.iflight.com/AOS-7-V5-Frame-Kit-Pro2311)

### Real product photographs added in Markdown pages

Source-linked product photos were added to the six major frame pages: GEPRC MK5X (balanced/squashed X and 5 inch), GEPRC MK5D deadcat, Sub250 OasisFly25, BETAFPV Pavo35, and iFlight AOS 7 V5. The source captions identify manufacturer specifications separately from retailer-hosted image files where applicable. The Wiki publishing script attempts to copy external images to the Wiki's local `images/` directory; verify the actual downloaded images during publication.

### Additional pages and tutorials implemented

- `Analog-Goggles-and-VRX-Integration.md` — analog receiver / module integration tutorial.
- `DJI-O3-O4-Goggles-and-Air-Unit-Integration.md` — DJI air unit/goggles generation compatibility and setup.
- `Walksnail-Avatar-Goggles-and-Air-Unit-Integration.md` — CADDXFPV/Walksnail model-specific integration path.
- `HDZero-Goggles-and-VTX-Integration.md` — HDZero VTX and goggles/receiver integration.
- `FPV-Assembly-Tools-and-Workshop-Guide.md` — mechanical tools, soldering/electrical tools, workshop safety, assembly and first-power checks.
- `FPV-Troubleshooting-Quick-Guide.md` — symptoms and safe diagnostics.
- `propeller-thrust-loop.gif` — first actual four-frame looping GIF committed under `docs/assets/`. It is conceptual rather than a specific motor configuration.

### Important remaining work

This implementation pass is not a substitute for the rest of the TODO. Still required: verify every internal Markdown link after the publisher rewrites relative `.md` targets, validate the SVGs/rendered images on the target Wiki, add further model-specific/price-snapshot matrices, finish extra battery chemistry/charger-source research, create additional video/antenna/camera/compatibility infographic variants, create further animated GIFs, and sync/push the separate GitHub Wiki. The source Home page now uses extensionless Wiki page URLs. The publisher script includes a step to rewrite internal links like `](Some-Page.md)` to `](Some-Page)` when the target page exists in the Wiki checkout.


---

## 6. Targeted frame-photo / dimension validation pass (22 October 2026)

These were checked against current product pages and are useful, model-specific examples to accompany the new frame-assembly pages. Product photos are manufacturer or retail product imagery, not fabricated scale drawings.

### Symmetrical True-X vs Deadcat examples

- **Axisflying MANTA 5 True X:** Team BlackSheep's listing identifies a True-X variant, lists a 238 mm wheelbase, 133 g, T700 carbon, and max 5.1-inch propellers. The same product family also has a Squashed-X variant, so the SKU/variant selection matters. Source: [Team BlackSheep / Axisflying MANTA 5](https://www.team-blacksheep.com/products/product%3A7703).
- **GEPRC GEP-MK5D O3 DeadCat:** official page lists a 230 mm wheelbase, 208 × 193 × 42 mm frame dimensions, 2.5 mm top/bottom plates, 5 mm arms, 30.5 × 30.5 mm FC mounting, camera installation space 20 mm, and 5-inch props. GEPRC describes its DC geometry as aimed at unobstructed O3 onboard video and says the X variant can show props in view. Source: [GEPRC GEP-MK5D O3](https://geprc.com/product/gep-mk5d-o3-frame/).
- **GEPRC GEP-MK5X O3:** official page lists a 225 mm wheelbase, 214 × 168 × 42 mm overall dimensions, 2.5 mm top/bottom plates, 5 mm arms, 30.5 × 30.5 mm FC mounting and 5-inch prop compatibility. GEPRC describes the MK5X as squashed-X, which is why the balanced-X page's representative photo has been changed to the MANTA True-X example. Source: [GEPRC GEP-MK5X O3](https://geprc.com/product/gep-mk5x-o3-frame/).

### Other class photo/spec examples

- **Sub250 OasisFly25:** the listing gives a 135 mm wheelbase, 2.5-inch props, 2 mm roof/top plate, 2.5 mm bottom plate, 2.5 mm arms, 20 mm equipment-layer height, 9 mm motor-mount holes (M2), recommended 4S 530–730 mAh LiPo or 6S, 14/15-series motors and FC mounting holes 20 × 20 / 25 × 25 mm. The page is a retailer listing, so confirm the purchased kit/SKU and current official documentation. Source: [Pyrodrone product listing](https://pyrodrone.com/collections/sub250-oasisfly25-frame-and-parts-collection/products/sub250-oasisfly25-2-5-inches-hd-freestyle-quadcopter-frame-kit).
- **BETAFPV Pavo35 frame:** official listing specifies 148 mm wheelbase, 92 mm duct diameter, 3 mm top plate, 1.5 mm base plate, 2 mm gimbal plate, 25.5 × 25.5 mm FC mounts, 20/25.5 mm VTX mounting options and 113.9 g frame weight. It lists the Gemfan D90S 3-blade propeller, 2006 motors, and 6S 1100 mAh as one matched configuration. The complete drone's all-up weight differs. Source: [BETAFPV Pavo35 frame](https://betafpv.com/products/pavo35-brushless-whoop-frame).
- **iFlight AOS 7 V5:** official listing gives a 313 mm wheelbase, 254 × 184 × 36 mm overall dimensions, 8 mm arms, 2 mm top plate, 2.5 mm bottom plate, 20 × 20 and 30.5 × 30.5 mm FC mount options, multiple VTX mount options and 325 g listed frame weight. Source: [iFlight AOS 7 V5 frame kit](https://shop.iflight.com/AOS-7-V5-Frame-Kit-Pro2311).
- **BETAFPV Air75 tinywhoop:** official listing gives 21 g, 75 mm wheelbase, 40 mm two-blade props, 0802SE 23000KV motors, 1S 450 mAh recommended pack, onboard serial ELRS and analog 5.8 GHz VTX. The listed 6.5-minute flight-time figure is tied to the manufacturer's 4.35 V–3.3 V test range and setup; don't assume a conventional 4.20 V full-charge LiPo limit without verifying the pack. Source: [BETAFPV Air75](https://betafpv.com/products/air75-brushless-whoop-quadcopter).

### Interpretation limits

- Wheelbase, outside frame dimensions, prop diameter, duct diameter and FC stack mounting patterns are different measurements.
- Nominal class labels and maker catalog categories overlap; e.g. a cinewhoop mission may use a specific nominal 3.5-inch / 90 mm prop family. Product manuals decide fit.
- Product photos are not dimensioned engineering drawings. The new `frame-size-reference.svg` labels model-specific examples but explicitly states the top-view silhouettes are illustrative/not to scale and must not be used as drill templates.
- A True-X frame, Squashed-X and Deadcat are not simply different names for the same geometry; match the model label to the corresponding manufacturer frame.
- Product stock/prices shown by shops can change and are not preserved as durable facts in the technical guide.

## 7. Second implementation tranche recorded

The source repository now contains additional dedicated integration/tutorial pages:
- `Analog-Goggles-and-VRX-Integration.md`
- `DJI-O3-O4-Goggles-and-Air-Unit-Integration.md`
- `Walksnail-Avatar-Goggles-and-Air-Unit-Integration.md`
- `HDZero-Goggles-and-VTX-Integration.md`
- `FPV-Assembly-Tools-and-Workshop-Guide.md`

The source also contains `scripts/test-wiki-link-rewrite.sh`, which was executed locally using Bash against plain internal links, links with anchors and an external URL; the regression test passed. The publisher was changed to rewrite internal source links ending in `.md` into Wiki slugs while preserving anchors and external links.

A small actual GIF `docs/assets/propeller-thrust-loop.gif` has been committed and referenced from the Home and motor/propulsion pages. It is a minimal concept animation; it is not a frame-assembly animation or a motor-order diagram. Further GIFs are still open in the TODO.

**Publication status:** the main repository contains these source commits. The separate GitHub Wiki is not yet confirmed updated; this environment cannot resolve `github.com` through the local shell and the connected GitHub API returned 404 for the `.wiki` repository. Publication remains dependent on running `bash scripts/publish-wiki.sh` from a network-enabled local clone and verifying the push.


## 8. Dedicated camera / VTX / VRX comparison page added (22 October 2026)

The main repository now contains `docs/wiki-source/FPV-Cameras-VTX-VRX-Compatibility-Comparison.md`. It is placed immediately after `Video Systems and Goggles` in the Wiki sidebar and covers:
- Analog 5.8 GHz camera → VTX → antenna → VRX/goggles as a distinct modular chain.
- DJI O4 standard versus O4 Pro with separate model-level sensor/FOV/weight/voltage/recording notes.
- Selected HDZero Whoop V2 and Freestyle V2 VTX physical/electrical examples from the official VTX summary.
- Walksnail / CADDXFPV compatibility documentation and how to verify goggles generation.
- BETAFPV Air75 as an integrated analog micro example, with exact wheelbase separated from prop size and its stated flight-time test range caveat.
- A mission-selection matrix (tinywhoop, racing, freestyle, cinewhoop, long-range), plus buying compatibility and common-error checklists.

Source for DJI live-view/recording specs and goggles compatibility: [DJI O4 specs](https://www.dji.com/o4-air-unit/specs), [DJI O4 FAQ](https://www.dji.com/o4-air-unit/faq). For HDZero physical/electrical model differences, use [HDZero VTX summary](https://docs.hd-zero.com/vtx-summary) and [Freestyle V2 docs](https://docs.hd-zero.com/freestyle-v2). For Walksnail pairings, use [Avatar compatibility](https://wiki.caddxfpv.com/en/Avatar-HD-Series/How-to-buy) and [Goggles X docs](https://wiki.caddxfpv.com/en/Avatar-HD-Series/Receiver-Unit/Goggles-X). The page deliberately leaves a comprehensive sensor/low-light/latency table across all current cameras as unfinished until exact model revisions and comparable test conditions have been researched.

Navigation update: `_Sidebar.md` now links this comparison immediately after the general video overview; `Video-Systems-and-Goggles.md` links to the deeper matrix. The separate live Wiki still requires the local publisher and verified push.


---

## 8. Third class-guide tranche and geometry correction — 22 October 2026

### Class-level pages now separate from assembly pages

The source repository now distinguishes a class/purpose article from its companion mechanical assembly article:

| Class / purpose page | Assembly companion | Focus |
|---|---|---|
| `2-5-Inch-FPV-Guide.md` | `2-5-Inch-Frame-Guide.md` | Use case, micro/toothpick trade-offs, payload and compatibility |
| `3-5-Inch-Cinewhoop-Guide.md` | `3-5-Inch-Cinewhoop-Frame-Assembly.md` | Filming purposes, guarded-prop trade-offs and Pavo25 V2 vs Pavo35 examples |
| `5-Inch-FPV-Racing-and-Freestyle.md` | `5-Inch-Frame-Assembly.md` | Shared prop class, differing race/freestyle priorities, repair and payload |
| `7-Inch-Long-Range-FPV-Guide.md` | `7-Inch-Long-Range-Frame-Assembly.md` | Efficiency, battery reserve, links and recovery planning |

These class guides were linked into both `docs/wiki-source/_Sidebar.md` and `docs/wiki-source/Home.md` via Wiki page slugs, not source filenames. The sidebar retains the assembly pages as separate entries.

### Verified frame examples and correction to naming

An important terminology correction was made during image review: **GEPRC GEP-MK5X is a squashed-X example, not a true-X frame**. The balanced/true-X explanatory page now uses GEPRC's GEP-IX5 Fairy listing as a true-X example, whose maker page identifies 5-inch prop compatibility, a 200 mm diagonal motor-to-motor wheelbase, and 105 g frame weight. Source: [GEPRC GEP-IX5 Fairy product page](https://geprc.com/products/multirotors/gep-ix5-fairy/). It is an older product listing; current availability may differ.

The comparison page uses GEPRC's GEP-MK5X O3 (225 mm WB, 214 × 168 × 42 mm overall dimensions, 5-inch props) for the squashed-X frame example and GEP-MK5D O3 DeadCat (230 mm WB, 208 × 193 × 42 mm overall dimensions, 5-inch props) for the deadcat example:
- [GEP-MK5X frame specs](https://geprc.com/product/gep-mk5x-o3-frame/)
- [GEP-MK5D DeadCat frame specs](https://geprc.com/product/gep-mk5d-o3-frame/)

A real product photo is not a dimensioned engineering drawing. The model dimensions in the SVG are source-backed labels; the silhouettes are explicitly marked illustrative/not to scale. Readers are directed to the exact manufacturer's technical drawing for mounting patterns, arm fit and screw length.

### Actual animation files

Two real GIF assets are in source:
- `docs/assets/propeller-thrust-loop.gif` — simple looping concept of propeller rotation/thrust direction.
- `docs/assets/balanced-x-deadcat-compare.gif` — four-frame conceptual comparison of front motor spread and camera field of view.

They are intentionally small schematic explainers, not real-world simulated physics or motor-order diagrams. The first is linked from Home; the second is linked from the frame geometry page. Both are listed in `docs/assets/README.md`. Browser rendering and the downloaded/served result still need checking after Wiki publication.

### Navigation and publication status

The source Home page now links to the new class pages at absolute extensionless paths such as `/wiki/2-5-Inch-FPV-Guide`, not `/wiki/2-5-Inch-FPV-Guide.md`. The publisher script was updated to rewrite relative internal `.md` links into extensionless Wiki slugs when their target pages exist in the local Wiki checkout, while preserving anchors/external URLs. A Bash regression-test script has been added and reported passing in the local Git Bash test context.

The separate `buildFPV.wiki.git` repository has not been pushed/verified from this session. The main-repo source commits are not the same as a live Wiki publication. Final publication still requires pulling `main`, running `bash scripts/publish-wiki.sh`, inspecting the staged diff, typing `PUBLISH`, and checking the resulting live pages and images.

### Remaining research priorities

1. Exact SKU-by-SKU video ecosystem matrix: supported camera modules, air unit/VTX, goggles/VRX generation, firmware, input voltage, live-view modes, recording modes and current date checked.
2. Camera recommendations split by micro/tinywhoop, race, freestyle, cinewhoop and long range, with separate live camera feed vs onboard recording fields.
3. Current chargers and manuals: chemistry/cell count, balance behavior, input requirements, channel watt allocation and output current.
4. Further product-verified frame classes and manufacturer dimensioned diagrams. Current schematic class ranges should not be treated as CAD.
5. India-specific buying/BOM snapshots with currency, date, taxes/shipping and full system cost, without treating availability as stable.
