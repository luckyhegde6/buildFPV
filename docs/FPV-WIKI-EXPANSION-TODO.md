# FPV Wiki Expansion — Master TODO

**Owner:** buildFPV project  
**Last research pass:** 2026-10-22  
**Canonical source repo:** `luckyhegde6/buildFPV`  
**Wiki source pages:** `docs/wiki-source/`  
**Reusable source assets:** `docs/assets/`  
**Publisher:** `scripts/publish-wiki.sh`  
**Scope:** drone categories and frame-size guides, component/platform comparisons, camera/VTX/VRX guide, images and diagrams, purchasing/building guides, troubleshooting, navigation, quality checks, and live-Wiki publication.

This file is the implementation backlog. Check items only after they have been implemented and verified. A commit to the main repository does **not** publish the separate GitHub Wiki. Live publication is complete only after the publisher has pushed to the Wiki repository and the live pages and images have been checked.

---

## 0. Research findings and accuracy guardrails

Initial manufacturer research was checked on **2026-10-22**. This is a working snapshot, not a permanent product catalogue. Revisit current datasheets, revision notes, local radio regulations, prices, and availability before writing definitive comparisons.

- [x] Confirm that frame class, flight purpose, duct/guard style, and purchase format are separate axes; do not present “BNF” as a frame size.
- [x] Confirm that propeller diameter (e.g. 2.5-inch, 3.5-inch, 5-inch, 7-inch) is not the same measurement as frame wheelbase (e.g. 75 mm/80.8 mm). Label diagrams carefully.
- [x] Confirm that “tinywhoop” usually refers to a very small protected-prop/ducted whoop class, but marketing names and exact dimensions vary by product. Use actual prop size, wheelbase, weight and duct style for examples.
- [x] Confirm that “cinewhoop” is primarily a guarded/ducted filming-oriented form/use case, not one universal propeller size. It can overlap with whoop construction and digital HD payloads.
- [x] Confirm official manufacturer examples demonstrate important variation even within the same rough category:
  - BETAFPV Air75: 75 mm wheelbase, 40 mm props, 1S, advertised 21 g, onboard ELRS receiver and 5.8 GHz analog VTX on the listed configuration. Source: https://betafpv.com/products/air75-brushless-whoop-quadcopter
  - BETAFPV Meteor75 Pro: frame/gyro/FC and SKU revisions exist; source page includes 45 mm props and revision notes. Check exact batch and gyro before firmware flashing. Source: https://betafpv.com/products/meteor75-pro-brushless-whoop-quadcopter
  - BETAFPV Pavo Pico: 80.8 mm wheelbase, 45 mm props, 2S, weights vary by air-unit fit; source supports several HD VTX families. Source: https://betafpv.com/products/pavo-pico-brushless-whoop-quadcopter
  - BETAFPV Pavo35: 148 mm wheelbase, D90S-style 90 mm props, 6S example; listed frame/air-unit weights differ with included equipment. Source: https://betafpv.com/products/pavo35-brushless-whoop-quadcopter
- [x] Confirm video ecosystems must be compared by exact product generation and supported goggles/receiver, not just by the label “digital”.
  - DJI O4 Air Unit Series specs/compatibility: https://www.dji.com/o4-air-unit/specs
  - DJI O4 FAQ: https://www.dji.com/o4-air-unit/faq
  - Walksnail / CADDX Avatar model comparison: https://wiki.caddxfpv.com/en/Avatar-HD-Series/How-to-buy
  - Walksnail Avatar HD Pro Kit: https://www.caddxfpv.com/products/walksnail-avatar-hd-pro-kit
  - Walksnail Goggles X manual/wiki: https://wiki.caddxfpv.com/en/Avatar-HD-Series/Receiver-Unit/Goggles-X
  - HDZero VTX summary: https://docs.hd-zero.com/vtx-summary
  - HDZero Freestyle V2 docs: https://docs.hd-zero.com/freestyle-v2
- [x] Flag a common error to avoid in any existing prose: do **not** imply all digital FPV video operates at 2.4 GHz. For example, DJI O4, Walksnail Avatar Pro and HDZero Freestyle V2 specs list 5 GHz / 5.8 GHz band ranges; the exact supported bands and legal power vary by product/region.
- [x] Distinguish DJI's camera-drone products from DJI O3/O4 FPV air units. A DJI camera drone is not automatically a modular DIY FPV air unit or compatible VRX.
- [ ] Do another direct source pass before publishing any spec table; cite each non-obvious spec near the row and record the source model/revision.
- [ ] Record a “last checked” date for volatile price, availability, firmware, goggles compatibility and regional transmitter rules. Prefer official specifications over retailer summaries.
- [ ] Remove or qualify unsupported blanket statements such as “digital is always lower latency”, “5-inch is always the fastest”, “whoops are safe indoors”, and universal range/flight-time promises. Explain test conditions and trade-offs.

---

## 1. Page architecture and navigation

### New overview and class pages

- [x] Create `docs/wiki-source/Drone-Categories-and-Size-Guide.md` as the landing/selector page.
  - [ ] Explain the different axes: prop size, wheelbase, guards/ducts, intended use, weight/payload, video ecosystem, and purchase format.
  - [ ] Include a comparison table and “choose this if…” pathways.
  - [ ] Link to every dedicated class page below.
  - [ ] Add a compact glossary for FPV, whoop, cinewhoop, toothpick, freestyle, racing, long-range, BNF, PNP, ARF, DIY and RTF.
- [x] Create `docs/wiki-source/Tinywhoop-and-Micro-FPV-Guide.md`.
- [x] Create `docs/wiki-source/2-5-Inch-Frame-Guide.md` (frame fit, compatibility, assembly; separate wider flight/purchase guide remains a follow-up).
- [x] Create `docs/wiki-source/3-5-Inch-Cinewhoop-Frame-Assembly.md`; fuller class-specific buying/flight guide remains a follow-up.
- [x] Create `docs/wiki-source/5-Inch-FPV-Racing-and-Freestyle.md`.
- [x] Create `docs/wiki-source/7-Inch-Long-Range-FPV-Guide.md`.
- [ ] Decide from source research whether to add separate `3-Inch-Toothpick-and-Freestyle.md`, `4-Inch-Long-Range-FPV-Guide.md`, and `Cine-Lifter-and-Heavy-Lift-FPV.md`; create only if enough distinct guidance exists to avoid shallow duplicate pages.
- [x] Create `docs/wiki-source/BNF-PNP-RTF-ARF-and-DIY-Formats.md` to explain package/build-completion formats independently from aircraft classes.
- [ ] Cross-link every class page with `First Build Checklist`, `Drone-Parts-One-by-One`, `FPV System Basics`, `How FPV Drones Work`, `Video Systems and Goggles`, and the new video comparison page.

### Video and component pages

- [x] Create `docs/wiki-source/Analog-vs-Digital-FPV-Camera-Video-Guide.md`; extend the exact-model price/firmware matrix in a later research pass.
- [ ] Position its link immediately after the existing camera/video-system guide in `docs/wiki-source/_Sidebar.md`; check page sequence and avoid duplicate or stale links.
- [ ] Review `Video-Systems-and-Goggles.md` and `Video-Antennas-VTX-VRX.md` so their roles are clear and their new-page links point to the detailed comparison rather than repeating entire sections.
- [ ] Link from `Drone-Parts-One-by-One.md` to the new class selector and the camera/VTX/VRX compatibility guide from the relevant component sections.
- [ ] Review `FPV-System-Basics.md` and `How-FPV-Drones-Work.md` for terminology, duplicate material, outdated band/latency claims, and inconsistent labels.

### Sidebar sequence to implement

- [ ] Keep the existing introductory learning pages first.
- [ ] Add a clearly labelled **Drones — classes and choosing a build** section after the introductory drone/system pages and before advanced build-purchase pages.
- [ ] Under that section, link the class selector, Tinywhoop, 2.5-inch, 3.5-inch Cinewhoop, 5-inch Racing/Freestyle, 7-inch Long Range, and BNF/PNP/RTF/DIY glossary.
- [ ] Put the camera/VTX/VRX comparison immediately after `Video Systems and Goggles` (which is the current closest camera/video overview), before or adjacent to `Video Antennas VTX VRX`.
- [ ] Add buying/build/troubleshooting pages to the existing **Build + safety** or **Configure + troubleshoot** section, not into the introductory flow.
- [ ] Verify exact GitHub Wiki page names generated by the publisher: filenames should map cleanly to internal Wiki link names.

---

## 2. Drone categories and class comparisons

- [ ] Define propeller size vs wheelbase in plain English with diagrams; state that convention and manufacturer naming vary.
- [ ] Build a comparison matrix containing intended use, typical props/frame style, indoor/outdoor fit, protected vs open props, payload/camera options, flight feel, noise, wind tolerance, typical repair scope, cost drivers, learning curve, and likely compromises.
- [ ] Use ranges as illustrative class descriptions, never as hard universal standards. For every product example quote its exact manufacturer spec and model/revision.
- [ ] Compare tinywhoop vs open-prop micro/toothpick vs cinewhoop vs 5-inch freestyle vs racing vs 7-inch long-range.
- [ ] Explain why prop guards/ducts may help close-proximity filming but add drag, mass, and tuning/efficiency trade-offs; do not describe them as collision-proof or universally safer.
- [ ] Explain that 5-inch racing and 5-inch freestyle share a prop class but commonly optimize for different priorities (weight, durability, camera/HD gear, tune, course vs tricks).
- [ ] Explain 7-inch builds are commonly selected for efficiency/payload/range missions, but larger battery and aircraft mass increase consequence of a crash; long range is not guaranteed by prop size.
- [ ] Explain micro/2.5-inch tradeoffs in weight, outdoor wind, battery energy, digital VTX payload, frame strength, repairability and RF range.
- [ ] Add “Who should choose this?” and “Who should avoid this?” sections to each page.
- [ ] Add budget planner categories: aircraft, goggles/video receiver, radio transmitter/control link, batteries, charger, spare props/frame/arms, tools, soldering gear where required, simulator and repairs. Mark prices volatile and local/import taxes dependent.
- [ ] Add recommended paths by goal: apartment/indoor, garden/park, cinematic indoor, freestyle, organized racing, long-range, and learn-to-build.
- [ ] Avoid unsafe or overly confident long-range advice; cover visual line of sight, failsafe planning, battery reserve, RF conditions, geographic/legal rules and spotter practices where applicable.

---

## 3. Buying-format glossary: BNF / PNP / ARF / RTF / DIY

- [ ] Explain **BNF (Bind-N-Fly)** as an assembled aircraft generally supplied with a receiver; buyer still needs a compatible transmitter and must confirm receiver protocol/firmware and binding steps.
- [ ] Explain **PNP (Plug-N-Play)** product definitions vary by manufacturer; usually excludes the receiver or radio-link equipment, but package details must be checked.
- [ ] Explain **RTF (Ready-To-Fly)** package contents explicitly: a bundle may include aircraft, transmitter, goggles, batteries and charger, but contents differ by kit.
- [ ] Explain **ARF / ARF+** carefully because package contents differ; provide a table of included/excluded parts for each actual listing reviewed.
- [ ] Explain a DIY kit / self-build as a separate path with soldering, firmware, configuration, troubleshooting and safety requirements.
- [ ] Add a protocol compatibility checklist for ELRS 2.4 GHz, ELRS 900 MHz/sub-GHz variants where relevant, Crossfire/TBS, FrSky and proprietary control links; no vague “compatible radio” claims.
- [ ] Add a warning that a BNF label does not mean compatible with every transmitter, and it does not include the FPV goggles/video system by definition.
- [ ] Sources to begin from: BETAFPV product kits and current official product descriptions; optionally supplement retailer definitions but privilege manufacturer package lists.

---

## 4. Dedicated page implementation checklist

Apply the same reusable structure to each class page: hero/overview infographic, plain-English summary, typical parts layout, manufacturer examples with exact model/revision, use cases, advantages, disadvantages, component matching, video-system implications, build/purchase checklist, maintenance/troubleshooting, safety/legal notes, and sources/date checked.

### Tinywhoop / micro

- [ ] Explain ducts/guards, 65–75 mm-class layouts and smaller indoor micro formats without making wheelbase = propeller size.
- [ ] Compare 1S/2S examples only when supported by product specifications.
- [ ] Compare brushed vs brushless only as relevant to the model; avoid describing all whoops as brushed or all as 1S.
- [ ] Include indoor etiquette, airflow/dust, prop/duct inspection, battery care and the fact that ducts do not eliminate injury or damage.
- [ ] Examples/source pages to review: BETAFPV Air75, Meteor75 Pro, Cetus X, current supported firmware/gyro revisions.
- [ ] Add starter buying checklist and repair/spares checklist.

### 2.5-inch micro / open-prop

- [ ] Explain toothpick/open-prop vs guarded tinywhoop and cinematic ducted designs.
- [ ] Explain the implications of exposed propellers, frame strength, payload, wind, digital air-unit weight and battery choice.
- [ ] Research actual 2.5-inch product/frame specifications; do not extrapolate from 2-inch or 3-inch models without labelling it.
- [ ] Include compatible prop/motor/ESC/frame/battery/video-fit review steps.

### 3.5-inch cinewhoop

- [ ] Explain protected/ducted propellers, close-quarters filming, HD air-unit and action-camera payload, and thrust margin.
- [ ] Compare at least one documented 2.5-inch or 2-inch option and one 3.5-inch option by exact weight without battery/air-unit vs complete takeoff weight when manufacturer data supports it.
- [ ] Use BETAFPV Pavo35 and smaller Pavo-family examples; verify current model, props, wheelbase, battery and camera compatibility.
- [ ] Explain duct drag, battery draw, inertia, heat/airflow, repair access and the difference between onboard HD recording and a carried action camera.
- [ ] Add indoor/close proximity risk and location permission considerations.

### 5-inch racing vs freestyle

- [ ] Explain shared nominal prop class but different build priorities.
- [ ] Compare frame geometry/durability, motor/prop/battery choices, HD video weight, camera protection, VTX antenna protection, tuning and repair costs.
- [ ] Give no universal motor KV or battery recommendation; use manufacturer build guides and fully scoped examples.
- [ ] Add a no-props bench checklist, motor order/direction verification, failsafe and radio/video checks.
- [ ] Link to simulator learning and the project's First Build Checklist.

### 7-inch long-range

- [ ] Explain design goals and common component pressures: efficient propulsion, battery energy/mass, GPS where appropriate, recovery options, antenna placement, video link, logging and redundancy.
- [ ] Separate claims about maximum radio-link range from usable/endurance range and jurisdictional operating limits.
- [ ] Explain wind, momentum, battery reserve, signal-loss plan, GPS limitations, failsafe/return behaviour dependencies, and the need to understand aircraft/firmware setup before field use.
- [ ] Add advanced/experienced-pilot flag rather than recommending a large long-range quad as a first aircraft by default.
- [ ] Review local laws and airspace pages before publication; never imply GPS guarantees recovery.

---

## 5. Camera / VTX / VRX ecosystem comparison

### Comparison matrix

- [ ] Compare analog 5.8 GHz video, DJI digital air units, Walksnail/Avatar (CADDXFPV), HDZero, and any currently supported BETAFPV P1 / other small-digital ecosystem that merits coverage.
- [ ] For each ecosystem, compare camera/sensor and resolution, recording method, live-view resolution/fps, latency claim and test condition, VTX weight/dimensions, input voltage, power draw/heat, antennas, goggles/VRX, firmware/update process, price tier checked on date, availability caveat, repair/accessories and ecosystem compatibility.
- [ ] Separate **live FPV feed** from **onboard recorded footage**. Do not state the live image and recording resolution are the same unless official documentation says so.
- [ ] Distinguish video receiver/VRX and goggles from the aircraft's control receiver (e.g. ExpressLRS). These are separate systems.
- [ ] Add a visual system diagram for each link: camera → video transmitter/air unit → video antenna → matching receiver/goggles; separately draw radio transmitter → control receiver → FC.
- [ ] Build a compatibility table with exact goggles and air-unit generations (especially DJI O3/O4 and Walksnail Avatar generations). Add a “check manufacturer matrix before purchase” note.
- [ ] Check regional frequency/power limits; power and frequencies vary by model and legal region. Do not treat manufacturer FCC-range claims as usable flight-range promises.
- [ ] Explain antenna connector type, impedance, polarization and mounting. Match circular polarization (RHCP/LHCP) at the relevant link ends; verify hardware conventions.
- [ ] Avoid universal claims about digital latency or range; explain compression, breakup/latency behaviour, race use, DVR and hardware dependencies.
- [ ] Clarify DJI consumer camera drones vs DIY FPV O3/O4 Air Units: distinct product classes, installation and receiver requirements.
- [ ] Source the comparison from current official docs/products and date the table. Re-check the DJI supported-goggles table before publishing.

### Current source list to verify again

- [BETAFPV Air75](https://betafpv.com/products/air75-brushless-whoop-quadcopter)
- [BETAFPV Meteor75 Pro](https://betafpv.com/products/meteor75-pro-brushless-whoop-quadcopter)
- [BETAFPV Pavo Pico](https://betafpv.com/products/pavo-pico-brushless-whoop-quadcopter)
- [BETAFPV Pavo35](https://betafpv.com/products/pavo35-brushless-whoop-quadcopter)
- [BETAFPV Cetus X kit](https://betafpv.com/products/cetus-x-fpv-kit)
- [CADDXFPV / Walksnail Avatar HD Pro](https://www.caddxfpv.com/products/walksnail-avatar-hd-pro-kit)
- [CADDXFPV Avatar product comparison](https://wiki.caddxfpv.com/en/Avatar-HD-Series/How-to-buy)
- [CADDXFPV / Walksnail Goggles X](https://wiki.caddxfpv.com/en/Avatar-HD-Series/Receiver-Unit/Goggles-X)
- [CADDXFPV downloads/manuals](https://www.caddxfpv.com/pages/download-center)
- [DJI O4 Air Unit specs](https://www.dji.com/o4-air-unit/specs)
- [DJI O4 Air Unit FAQ/compatibility](https://www.dji.com/o4-air-unit/faq)
- [DJI camera drone catalogue](https://www.dji.com/global/camera-drones?site=brandsite&from=nav)
- [HDZero VTX comparison](https://docs.hd-zero.com/vtx-summary)
- [HDZero Freestyle V2 VTX docs](https://docs.hd-zero.com/freestyle-v2)
- [HDZero product catalogue](https://www.hd-zero.com/products)
- [Betaflight setup guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)
- [Betaflight motors tab](https://betaflight.com/docs/wiki/app/motors-tab)

---

## 6. Create the diagrams and image assets

All custom visual assets should be editable/reproducible SVG where practical, readable on the Wiki at normal zoom, use consistent buildFPV colors/type, include descriptive alt text and captions, and state when they are schematic. Do not use an image as a substitute for a safe wiring diagram or current board pinout.

- [x] Create `docs/assets/drone-class-overview.svg`: size/class comparison from tinywhoop to 7-inch; label prop diameter and wheelbase as separate values/fields.
- [x] Create `docs/assets/whoop-vs-toothpick-vs-cinewhoop.svg`: open props vs protective ducts/guards vs open-prop micro, showing typical frame form without implying a universal layout.
- [x] Create `docs/assets/frame-prop-size-comparison.svg`: relative-size silhouette for 2.5, 3.5, 5 and 7-inch propellers; clear scale disclaimer if icons are schematic.
- [x] Create `docs/assets/drone-class-decision-tree.svg`: choose by indoor, outdoor, filming, racing, long range, budget and experience.
- [x] Create `docs/assets/bnf-pnp-rtf-arf-comparison.svg`: package format tendencies with an exact-SKU inclusion caveat.
- [x] Create a small reusable frame anatomy diagram (arm, centre plate, motor mount, FC/ESC mounts, camera cage, battery strap areas).
- [x] Create one dedicated hero/overview infographic for each class page: Tinywhoop, 2.5-inch, 3.5-inch Cinewhoop, 5-inch Racing/Freestyle and 7-inch Long Range.
- [ ] Create a 2.5/3.5 cinewhoop comparison diagram that highlights guard/duct volume, camera mounting and action camera payload impact.
- [x] Create `docs/assets/video-system-ecosystem-matrix.svg`: analog, DJI O3/O4, Walksnail Avatar and HDZero overview; exact compatibility matrix work remains.
- [x] Create `docs/assets/fpv-video-link-separation.svg`: independent control vs video vs power paths.
- [x] Create `docs/assets/fpv-camera-sensor-and-recording.svg`: live feed vs onboard recording vs goggles DVR.
- [x] Create `docs/assets/vtx-vrx-compatibility-check.svg`: VTX/VRX compatibility checklist.
- [ ] Create frame-fit drawings for 20×20/25.5×25.5/30.5×30.5 mm mounting patterns only if measurements are verified from the relevant official spec; label the units.
- [x] Add every new asset to `docs/assets/README.md`, with owning Wiki page, purpose, source/provenance, and accuracy limitations.
- [ ] Check all SVGs for valid XML, clipping/text overflow, contrast, alt text and legibility on mobile. Inspect the rendered outputs, not just source text.
- [ ] Prefer actual manufacturer/product photos for examples and original SVG explanatory diagrams for concepts. Preserve image attribution/licensing, use stable links, and avoid inaccurate AI-generated technical labels.
- [ ] Avoid use of logos/brand styling that implies endorsement. Do not alter manufacturer photos to make their specs appear different.

---

## 7. Buying guides and bill-of-materials tools

- [ ] Expand `Buying Parts in India.md` (check actual filename) with current suppliers, shipping/customs caveats, tax and warranty considerations, currency/date checked, and local regulatory guidance. Do not call out a retailer as vetted unless verified.
- [x] Create `FPV-Build-Budget-and-Buying-Guide.md`: full system cost, not just aircraft price, including controller, goggles/VRX, batteries, charger, spare props, repair tools, simulator and replacements.
- [ ] Create a class-specific buying matrix with minimum viable, balanced, and premium routes—but list exact model/revision and date, and avoid pretending product stocks/prices stay constant.
- [ ] Include video-system migration cost: goggles are a major ecosystem commitment; identify what is and isn't reusable before recommending a system.
- [ ] Create a printable BOM template with exact model, revision, mass, voltage range, mounting, protocol, antenna interface, firmware target, official spec link and open compatibility issue.
- [ ] Add a compatibility gate before purchase: frame/mount fit, prop clearance, motor/ESC/current, battery cell count, FC/regulator voltage, receiver protocol, VTX voltage/heat/airflow, camera/VTX/goggle generation, antenna connector/polarization and firmware support.
- [ ] Explain when BNF reduces soldering/configuration but can still need firmware setup, binding, checks and crash repairs.
- [ ] Add a guide for used/refurbished equipment: check firmware/end-of-support, connector/pin damage, goggle generation, battery health, transmitter/receiver protocol and whether the exact product has been discontinued.
- [ ] Add budget/cost calculator or table only after verified sample prices are collected; include a date/region and don't hardcode volatile promotions as permanent facts.

---

## 8. Build guides and checklists

- [x] Expand `First-Build-Checklist.md` with links to the class selector and buying-format glossary.
- [ ] Make separate safe build flows for a BNF whoop setup and a DIY 3.5/5-inch build so soldering-heavy steps are not presented as required for every beginner.
- [ ] Write a build sequence: inspect contents/revision → identify manuals → frame/mechanical fit → component placement → soldering/continuity checks → power safely without propellers → firmware/target → receiver setup → VTX/camera/goggles setup → motor mapping/direction with props off → failsafe/arming verification → propeller installation → controlled first hover at a suitable permitted site.
- [ ] Cross-reference Betaflight setup and motor tab; do not invent motor order and always tell readers to remove props when testing motor configuration.
- [ ] Add build-specific diagrams for mounting, airflow/thermal clearance, antenna strain relief and cable routing; do not infer pad locations from stock images.
- [ ] Add firmware target/gyro revision verification. Use Meteor75 Pro as one example of why revision/gyro variations matter, not as the only model with revisions.
- [ ] Add first-flight checks: correct props, motor order/direction, arm switch, failsafe, control directions, battery voltage/connector, video antenna installed, antenna placement and local/legal flight conditions.
- [ ] Add post-crash inspection (props/motors/arms/screws/battery/wires/antennas/FC stack) and post-flight log checklist.

---

## 9. Troubleshooting guides

- [x] Create `FPV-Troubleshooting-Quick-Guide.md` with symptom → likely causes → safe checks → next diagnostic step, divided by no power, no arming, no bind, receiver not moving in configurator, wrong motor response, unstable flight, black video, weak/breaking video, hot VTX, GPS/no-satellite, DVR/recording issues and firmware mismatch.
- [ ] Create a dedicated video troubleshooting section covering: wrong goggles generation/ecosystem, wrong band/channel, poor antenna, damaged coax/connector, wrong polarization, bad camera cable, VTX not powered/overheating, air-unit firmware/bind mismatch, and region settings.
- [ ] Create a control-link troubleshooting section: transmitter internal/external module selected correctly, receiver firmware/protocol, binding phrase or bind procedure, antenna/cable condition, telemetry/RSSI and failsafe.
- [ ] Create a no-arming/motor troubleshooting section: arming disable flags, receiver channel map, motor protocol, firmware target, wiring and battery/power checks—always props removed for bench diagnosis.
- [ ] Create an “after firmware update / board revision” guide: record current settings, verify target and hardware revision/gyro, backup config where supported, avoid random flashing and give vendor/Betaflight source links.
- [ ] Create a damaged LiPo / charging / storage safety page or extend the existing battery guidance; swollen/damaged batteries should not be used or charged.
- [ ] Add diagnostic flowcharts that start with the symptom and end with clear stop conditions (smell, smoke, heat, short, swollen battery, unknown pinout → disconnect safely and stop).
- [ ] Do not encourage powered testing with installed propellers. Emphasize safe power disconnection before soldering or handling exposed battery wiring.

---

## 10. Asset, content, and link integration

- [ ] Keep canonical text in `docs/wiki-source/` and canonical project-owned diagram files in `docs/assets/`.
- [ ] Verify current publisher behavior before adding large binary media; SVG/Markdown should sync cleanly, but large images need the supported Git workflow and must exist in the source repo before publishing.
- [x] Update `docs/assets/README.md` for the implemented diagram, GIF and product-photo sources.
- [x] Update `docs/wiki-source/_Sidebar.md` with the implemented page filenames/titles; rendered live navigation still needs verification.
- [ ] Add “Next” / “Previous” links where useful to class pages without creating a confusing loop.
- [ ] Standardize naming, punctuation and acronym definitions (FC, ESC, AIO, VTX, VRX, RX, ELRS, OSD, DVR, GNSS).
- [ ] Ensure diagrams and product photos appear before the relevant explanation section, not detached at the bottom.
- [ ] Ensure image alt text describes the actual image, not a sales pitch.
- [ ] Add source notes next to product photos; use official manuals for critical specifications and installation details.
- [ ] Preserve a clear distinction among concept illustration, marketing photo, product photo, product spec table and actual wiring/pinout diagram.

---

## 11. Content QA, validation, and maintenance

- [ ] Review every statement about voltage, bands, legal transmitter power, latency, range, camera recording, weight, flight time, goggles support, mounting pattern and included kit contents against an official spec/manual.
- [ ] Attach source links to the exact model and revision wherever available. Use citations/links immediately following tables or claims rather than one generic source list only.
- [ ] Mark manufacturer claim vs project interpretation vs practical recommendation. Explain test conditions for range/latency/endurance.
- [ ] Check internal links, filenames, sidebar order, image URLs and page naming against the separate GitHub Wiki's actual rendering.
- [ ] Check external images load and have stable attribution/license. Prefer locally copied images for Wiki reliability where permission/terms allow.
- [ ] Run Markdown/link/image checks on all changed pages.
- [ ] Validate new SVG syntax and view each new infographic rendered at full size and at typical Wiki/mobile width.
- [ ] Check terms consistency: props/ducts/whoop/cinewhoop/frame wheelbase/prop size/BNF vs physical class.
- [ ] Check legal content with current official regional sources at publication time. Clearly distinguish law from etiquette and product manufacturer advice.
- [ ] Verify no SKU revision, firmware/gyro target, or product discontinuation notice has been silently lost.
- [ ] Add a sources “checked on” date and review interval to pages whose specs/availability can change.
- [ ] Read every new page as a beginner: what is this category, what is it for, what does it cost beyond the aircraft, what must match, what can go wrong, and what should I read next?

---

## 12. Publish and verify the actual GitHub Wiki

- [ ] Commit source pages, assets, sidebar, asset README, and this TODO to the main `buildFPV` repository.
- [ ] Pull the latest `main` in the user's local clone.
- [ ] Run `bash scripts/publish-wiki.sh` from the repository root.
- [ ] Review the staged Wiki diff and check that images were copied into the Wiki repository's `images/` folder and Markdown references were rewritten to local Wiki image paths.
- [ ] Type the publisher's exact confirmation word `PUBLISH` after reviewing the staged content.
- [ ] Confirm the publisher commit and push to the separate `buildFPV.wiki.git` remote succeeds; do not treat a main-repo commit as Wiki publication.
- [ ] Verify live page links, sidebar, all images, local asset links, anchors and page names in a browser.
- [ ] Confirm the class selector and all class-specific pages show up in sidebar order.
- [x] Place `FPV-Cameras-VTX-VRX-Compatibility-Comparison` immediately after `Video Systems and Goggles` in the source sidebar; live rendering is pending publication.
- [ ] Open the new video matrix on desktop and mobile; check that tables and diagrams remain legible.
- [ ] Update this TODO's status/date after each release; leave unresolved items unchecked and write a brief blocker note rather than marking incomplete tasks done.

---

## Working notes

- This is a staged programme, not a claim that all pages/assets have been created.
- Manufacturer claims and prices change; keep dates, model/revision and source URLs near the claim.
- Size labels are practical shorthand; actual wheelbase, prop diameter, mass, payload and configuration govern compatibility.
- The separate GitHub Wiki publication remains a required last step after source changes are reviewed.


---

## 13. Implementation status — 22 October 2026

This status was updated after the first source implementation batch. A checkbox is checked here only where a corresponding repository file/asset has been created; it does **not** mean it has already been published to the separate Wiki.

### Source pages implemented in main (created; verify before final publication)

- [x] `docs/wiki-source/Drone-Categories-and-Size-Guide.md` — first class selector with category comparison and model-specific examples.
- [x] `docs/wiki-source/Frame-Geometries-Balanced-X-vs-Deadcat.md` — geometry overview, tool inventory, assembly order, troubleshooting.
- [x] `docs/wiki-source/Balanced-X-Frame-Assembly.md` — dedicated symmetrical-X frame assembly.
- [x] `docs/wiki-source/Deadcat-Frame-Assembly.md` — dedicated deadcat geometry and assembly.
- [x] `docs/wiki-source/2-5-Inch-Frame-Guide.md` — dedicated micro frame dimension/fit and assembly.
- [x] `docs/wiki-source/3-5-Inch-Cinewhoop-Frame-Assembly.md` — ducted frame/payload assembly trade-offs.
- [x] `docs/wiki-source/5-Inch-Frame-Assembly.md` — racing vs freestyle and assembly.
- [x] `docs/wiki-source/7-Inch-Long-Range-Frame-Assembly.md` — long-range frame and mission-planning caveats.
- [x] `docs/wiki-source/Motors-Propellers-and-Battery-Compatibility.md` — motor/prop/cell-count matching and battery ageing caveats.
- [x] `docs/wiki-source/FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md` — charger types, watt calculation and safe handling.
- [x] `docs/wiki-source/Analog-vs-Digital-FPV-Camera-Video-Guide.md` — analog/digital/camera ecosystem overview.
- [x] `docs/wiki-source/FPV-Goggles-and-VRX-Integration-Guide.md` — goggles categories and generation-specific matching.
- [x] `docs/wiki-source/Tinywhoop-and-Micro-FPV-Guide.md` — whoop and micro starter guide.
- [x] `docs/wiki-source/BNF-PNP-RTF-ARF-and-DIY-Formats.md` — package formats separated from flight class.
- [x] `docs/wiki-source/FPV-Troubleshooting-Quick-Guide.md` — general safe symptom-based troubleshooting.

### Original SVG assets implemented in main

- [x] `docs/assets/drone-class-overview.svg`
- [x] `docs/assets/balanced-x-vs-deadcat.svg`
- [x] `docs/assets/frame-size-reference.svg`
- [x] `docs/assets/motor-prop-battery-compatibility.svg`
- [x] `docs/assets/charger-balance-power.svg`
- [x] `docs/assets/analog-vs-digital-video.svg`
- [x] `docs/assets/goggles-vrx-integration.svg`

### Still outstanding / next implementation pass

- [x] Update `_Sidebar.md`, `docs/assets/README.md` and source cross-links. [ ] Verify the rendered navigation after Wiki publication.
- [x] Create `docs/research/FPV-Wiki-Expansion-Research-Report.md`; continue adding exact current specs as further model pages are implemented.
- [x] Add dedicated guides for analog VRX module integration, DJI O3/O4, Walksnail Avatar, HDZero, camera selection by use case and general troubleshooting. [ ] Add system-specific failure trees and complete exact firmware/version verification.
- [ ] Add fuller Tinywhoop, 2.5-inch, 3.5-inch cinewhoop, 5-inch and 7-inch class pages with actual manufacturer model comparisons and exact current revisions.
- [ ] Create verified BNF/PNP/RTF included-item matrix from current individual listings.
- [ ] Add remaining frame anatomy, frame mounting-pattern references, propeller type, LiPo-vs-Li-ion, video ecosystem comparison and decision-tree infographics.
- [x] Create first GIF `docs/assets/propeller-thrust-loop.gif` (concept loop, four frames). [ ] Validate rendering in a browser and create further GIFs for assembly/frame geometry or charger/video workflows.
- [ ] Add a comprehensive build tooling/assembly guide with separate branches for BNF maintenance and DIY soldering/building.
- [ ] Recheck battery cycle-life, max-time and charger claims from the exact manufacturer's pack and charger manuals; avoid universal values.
- [ ] Do final link/SVG/accessibility/source checks and revise any illustrative wheelbase ranges in `frame-size-reference.svg` against actual labelled model drawings or keep them clearly marked as conceptual.
- [ ] Publish to the separate GitHub Wiki with `bash scripts/publish-wiki.sh`, review staged diff and type `PUBLISH`.
- [ ] Verify the live Wiki contains all new pages and SVGs after successful Wiki push.

### Research / source QA notes

- The current class examples cite the [BETAFPV Air75](https://betafpv.com/products/air75-brushless-whoop-quadcopter) and [Pavo35](https://betafpv.com/products/pavo35-brushless-whoop-quadcopter) official listings. Values and bundled configurations can change.
- The current digital-video guide cites official [DJI O4 specifications](https://www.dji.com/o4-air-unit/specs), [CADDXFPV/Walksnail compatibility](https://wiki.caddxfpv.com/en/Avatar-HD-Series/How-to-buy), and [HDZero VTX data](https://docs.hd-zero.com/vtx-summary).
- The existing guides intentionally avoid a universal motor KV table, exact cycle-life promise, universal max flight time, or cross-brand digital-goggle compatibility claim.
- Do not mark these source implementation tasks as live-Wiki publication. The main repo and the `.wiki.git` repo have separate commits.


---

## 14. Latest implementation progress — 22 October 2026

### Frame images and dimensions

- [x] Create `docs/assets/frame-size-reference.svg` with model-specific examples rather than unsourced generic wheelbase ranges. Current examples: Sub250 OasisFly25 (135 mm wheelbase), BETAFPV Pavo35 (148 mm wheelbase, 92 mm duct diameter), GEPRC MK5X/MK5D (225/230 mm wheelbase), and iFlight AOS 7 V5 (313 mm wheelbase).
- [x] Add product photos with attribution/source notes to Balanced X, Deadcat, 2.5-inch, 3.5-inch cinewhoop, 5-inch and 7-inch frame pages.
- [x] Add dedicated frame selection and assembly pages: Balanced X, Deadcat, 2.5-inch, 3.5-inch cinewhoop, 5-inch and 7-inch long-range.
- [x] Add `FPV-Assembly-Tools-and-Workshop-Guide.md`.
- [ ] Audit all exact dimensions from the manufacturer drawing for every future class/product page. The class SVG silhouettes are explicitly not to scale and not drill templates.

### Video / goggles integration pages added

- [x] `Analog-Goggles-and-VRX-Integration.md`
- [x] `DJI-O3-O4-Goggles-and-Air-Unit-Integration.md`
- [x] `Walksnail-Avatar-Goggles-and-Air-Unit-Integration.md`
- [x] `HDZero-Goggles-and-VTX-Integration.md`
- [x] Cross-link these guides from `Video-Systems-and-Goggles.md` and the sidebar.
- [ ] Complete the exact SKU-by-SKU live compatibility matrix for each ecosystem, with firmware/goggles generation and manufacturer verification date.

### Wiki page URL / link rewrite fix

- [x] Change source Home navigation to direct extensionless Wiki URLs (e.g. `/wiki/FPV-System-Basics`, not `/wiki/FPV-System-Basics.md`).
- [x] Update `scripts/publish-wiki.sh` to rewrite internal relative Markdown links that target root Wiki pages from `Page.md` to `Page`, and retain anchors. This runs in the separate Wiki checkout during publishing.
- [ ] Sync and verify Home on the live Wiki; confirm the rendered links go to `/wiki/Page-Name` with no `.md` suffix.

### Quality checks and publication remain outstanding

- [ ] Validate shell syntax and execute `scripts/publish-wiki.sh` in a real local Git Bash clone; inspect every rewritten link in the staged Wiki diff.
- [ ] Run the publisher, type `PUBLISH`, and verify the Wiki push.
- [ ] Verify image download/localisation works for external product photos and the GIF is rendered on the live Wiki.
- [ ] Inspect SVG/photograph rendering on desktop and mobile.
- [ ] Add additional short GIFs and remaining class-specific overview infographics.


---

## 14. Implementation status update — 22 October 2026 (second pass)

The following are now implemented in the main repository and verified by refetching their source files. This is not proof of separate Wiki publication.

### Additional dedicated pages created

- [x] `docs/wiki-source/Analog-Goggles-and-VRX-Integration.md` — analog goggles, receiver modules and analog link setup.
- [x] `docs/wiki-source/DJI-O3-O4-Goggles-and-Air-Unit-Integration.md` — DJI FPV air-unit and supported goggles generation checks.
- [x] `docs/wiki-source/Walksnail-Avatar-Goggles-and-Air-Unit-Integration.md` — Avatar air-unit/camera/goggles integration.
- [x] `docs/wiki-source/HDZero-Goggles-and-VTX-Integration.md` — HDZero product-family integration and mounting/power checks.
- [x] `docs/wiki-source/FPV-Assembly-Tools-and-Workshop-Guide.md` — mechanical tools, soldering tools, safe first power, assembly and firmware hand-off.
- [x] `docs/research/FPV-Wiki-Expansion-Research-Report.md` — dated report of verified facts, sourced examples, cautions and follow-on work.
- [x] `scripts/test-wiki-link-rewrite.sh` — regression test for relative links ending in `.md`, anchors, and external URLs.

### Actual visual assets / model-specific frame images

- [x] Add `docs/assets/propeller-thrust-loop.gif` — small looping concept animation; embedded in Home and propulsion guide.
- [x] Add manufacturer/product frame photos near the top of the frame-specific pages: Axisflying MANTA 5 True-X example; GEPRC MK5D Deadcat example; Sub250 OasisFly25 2.5-inch example; BETAFPV Pavo35 3.5-inch example; iFlight AOS 7 V5 7-inch example; BETAFPV Air75 tinywhoop example.
- [x] Use product-source references to label dimensions separately: prop diameter vs wheelbase vs frame outside dimensions.
- [x] Correct the balanced-X photo example: GEPRC MK5X is squashed-X; the symmetrical/True-X product example is Axisflying MANTA 5 True-X, while GEPRC MK5D is the Deadcat comparison.
- [x] Add a model-specific dimension reference in `docs/assets/frame-size-reference.svg`: Sub250 OasisFly25 135 mm wheelbase; BETAFPV Pavo35 148 mm wheelbase / 92 mm duct diameter / D90S 90 mm prop; Axisflying MANTA 5 True-X 238 mm; GEPRC MK5D Deadcat 230 mm; iFlight AOS 7 V5 313 mm. These are model examples, not universal standards, and schematics are not to scale.
- [x] Register new SVG/GIFs and product image provenance in `docs/assets/README.md`.

### Navigation, source links and publisher

- [x] Add drone classes, frame assembly, battery/charger, camera/video and goggles tutorials to `docs/wiki-source/_Sidebar.md`.
- [x] Cross-link the First Build Checklist, parts guide, video overview and system basics to the new pages.
- [x] Update the Wiki Home source to use Wiki page slugs / direct Wiki URLs rather than Markdown source filenames ending in `.md`.
- [x] Fix the internal link rewrite in `scripts/publish-wiki.sh` so links such as `(How-FPV-Drones-Work.md#pitch)` become `(How-FPV-Drones-Work#pitch)`, while external URLs remain unchanged.
- [x] Add and locally test `scripts/test-wiki-link-rewrite.sh` using Bash on a sample link set; result: `Wiki link rewrite test passed.`

### Remaining work / publication blocker

- [ ] Create remaining detailed per-class buying comparisons with multiple exact current model SKUs, full takeoff weights and model-specific prop/motor/battery test tables.
- [x] Create `docs/wiki-source/FPV-Cameras-VTX-VRX-Compatibility-Comparison.md` with model-level examples and a compatibility checklist. [ ] Expand it into the full per-SKU firmware/recording/price snapshot matrix.
- [ ] Add further product-verified small-micro / 2.5-inch / 3.5-inch / 5-inch / 7-inch model examples and compare actual full-kit weights and payload limits.
- [ ] Finish camera choice guides split by tinywhoop, racing, freestyle, cinewhoop and long-range; include confirmed live-view vs onboard recording specs per model.
- [x] Add a representative manufacturer-sourced charger comparison to `docs/wiki-source/FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md` for ISDT UC2, ISDT 608AC, ToolkitRC M7AC and M6DAC, including chemistry/cell count, input type, power limits and channel caveats. [ ] Expand the table only after checking additional current models and manuals.
- [ ] Add a detailed BOM/budget guide using prices checked on date and in a stated region, clearly separating price snapshots from stable technical facts.
- [ ] Inspect/validate every external image URL and rendered SVG/GIF on desktop/mobile after the assets are downloaded to the Wiki repository.
- [ ] Run `bash scripts/test-wiki-link-rewrite.sh` in the local checkout after pulling `main`.
- [ ] Run `bash scripts/publish-wiki.sh` locally, inspect `git diff --cached`, type `PUBLISH`, and verify the commit/push to the separate Wiki repository.
- [ ] Verify the live Home page, page slugs, sidebar, all internal links and all images after the Wiki push.

**Publication is still pending, but the Wiki is not assumed uninitialized:** the user confirmed that the live Wiki exists at https://github.com/luckyhegde6/buildFPV/wiki. The earlier 404 came from attempts to fetch the separate `.wiki.git` endpoint through the available connector and is not evidence that the Wiki does not exist. Source changes are committed to `buildFPV/main`; the actual publisher push and live rendering checks remain unverified because this runtime's local shell cannot resolve `github.com`.


### Third implementation update — video compatibility matrix (22 October 2026)

- [x] Add `docs/wiki-source/FPV-Cameras-VTX-VRX-Compatibility-Comparison.md` with product-specific examples for BETAFPV Air75 analog, standard DJI O4 vs O4 Pro, selected HDZero VTX models and Walksnail/Avatar documentation.
- [x] Put the comparison page immediately after `Video Systems and Goggles` in `_Sidebar.md`.
- [x] Add a cross-link from `Video-Systems-and-Goggles.md` to the model-by-model comparison.

Remaining: the new comparison gives selected examples and official model docs, but a complete camera sensor / low-light / latency / recording table across every supported model remains open until each current SKU's data is checked. Do not mark cross-brand goggles support or latency rankings as settled without exact model/firmware/test conditions.


---

## 15. New class-guide tranche — committed 22 October 2026

The following broad class/flight-purpose pages have now been created separately from their mechanical assembly pages:

- [x] `docs/wiki-source/2-5-Inch-FPV-Guide.md` — 2.5-inch class, real Sub250 example, weight/payload tradeoffs and setup.
- [x] `docs/wiki-source/3-5-Inch-Cinewhoop-Guide.md` — real BETAFPV Pavo25 V2 vs Pavo35 comparison, guarded-prop trade-offs, payload and assembly notes.
- [x] `docs/wiki-source/5-Inch-FPV-Racing-and-Freestyle.md` — distinct race vs freestyle priorities and component compatibility.
- [x] `docs/wiki-source/7-Inch-Long-Range-FPV-Guide.md` — efficiency, energy reserve, recovery and experienced-pilot planning.
- [x] Link these class guides in `docs/wiki-source/_Sidebar.md` and `docs/wiki-source/Home.md` using extensionless Wiki slugs.
- [x] Add dedicated analog goggles/VRX, DJI O3/O4, Walksnail Avatar and HDZero integration tutorials to the sidebar and video overview page.
- [x] Add a workshop/tooling guide covering mechanical and electrical tools, frame dry-fit, screw-length checks, power safety and no-prop bench testing.
- [x] Add second short GIF `docs/assets/balanced-x-deadcat-compare.gif`, linked on the frame-geometry page and registered in the asset README.

### Frame-geometry QA

- [x] Correct the balanced-X example: GEPRC GEP-IX5 Fairy is presented as a true-X example (200 mm diagonal motor-to-motor wheelbase; product listing identifies the geometry), and GEPRC GEP-MK5X is not labelled true-X because it is a squashed-X.
- [x] Keep the deadcat example distinct: GEPRC GEP-MK5D is a named deadcat model (230 mm wheelbase).
- [x] Frame-size infographic uses manufacturer-specific examples: Sub250 OasisFly25, BETAFPV Pavo35, GEPRC GEP-MK5X/MK5D, iFlight AOS 7 V5. Drawings are illustrative and not scale templates.

### Still outstanding

- [ ] Publish the source bundle to the separate Wiki repository via the network-enabled local Git Bash checkout.
- [ ] Inspect live Wiki rendering of the sidebar, all images/GIFs and internal URL slugs after publishing.
- [ ] Build the detailed model-by-model camera/VTX/VRX/goggles compatibility matrix and separate camera-choice guides by tinywhoop, racing, freestyle, cinewhoop and long range.
- [x] Add representative charger specifications with manufacturer links and explicit AC/DC and dual-output power caveats. [ ] Broaden to additional models, confirm regional availability, and add dated price snapshots only after verification.
- [ ] Finish price-stamped India buying/BOM guides with explicit date/currency/region and full kit cost.
- [ ] Validate all external product photo downloads/URLs and image reuse terms. The source caption attribution is not a blanket licence for unrelated reuse.
- [ ] Add further small animations/tutorials only as real generated files, then verify the GIF frames and Wiki rendering.


### Model-level camera/VTX/VRX compatibility comparison — added

- [x] Create `docs/wiki-source/FPV-Cameras-VTX-VRX-Compatibility-Comparison.md`.
- [x] Link this page directly after `Video Systems and Goggles` in `_Sidebar.md`.
- [x] Link the comparison from Home and keep analog-vs-digital as the companion conceptual guide.
- [x] Expand the starter model examples into an exact-model comparison for BETAFPV Air75 (listed 5-in-1/C03 configuration), DJI O4 standard and Pro, Walksnail Avatar HD Pro Kit, HDZero Whoop V2 and HDZero Freestyle V2; record camera/live-feed/onboard recording, voltage, weight/mount, power/heat and ground-side ecosystem where manufacturer data is available.
- [ ] Continue the full per-SKU compatibility matrix across additional camera/VTX/VRX/goggle generations and firmware revisions; date-stamp verified price/availability only after a current market check.


### Fourth implementation update — buying and camera-selection guides (22 October 2026)

- [x] Add `docs/wiki-source/FPV-Build-Budget-and-Buying-Guide.md`: cost buckets, buying pathways by mission, ecosystem costs, full-system compatibility gates and second-hand equipment checks.
- [x] Add `docs/wiki-source/FPV-Camera-Selection-Guide.md`: camera/live-feed/DVR/onboard recording distinctions and camera-selection priorities for tinywhoop, micro, racing, freestyle, cinewhoop and long-range.
- [x] Link both guides from Home and add them to the sidebar. The camera selection guide is near the VTX/VRX comparison; the buying guide is under build/batteries/safety.
- [x] Add a dated representative exact-model camera/VTX/VRX matrix covering an analog micro (Air75), DJI O4 standard and Pro, Walksnail Avatar HD Pro, and two HDZero VTX models, including the camera/live-view/recording distinction, voltage, mounting/weight/power and ground-side ecosystem where manufacturer data was explicit.
- [ ] Extend the matrix to additional supported SKUs, exact goggles/receiver and firmware pairings, and price/availability snapshots only when source-checked for a stated date and region.
- [ ] Add region-stamped prices and supplier comparisons only after current checkout/duty/shipping information has been checked; never use stale promotional prices as stable facts.


### GIF validation correction — 22 October 2026

- [x] Replace the earlier invalid GIF byte stream with a validated four-frame 180 × 112 looping animation at `docs/assets/propeller-thrust-loop.gif`.
- [x] Verify the GIF header and asset blob on GitHub after replacement; the file now has a new blob SHA and remains referenced by Home and the motor/propulsion guide.
- [ ] Final browser-render check after the file is copied into the separate Wiki's `images/` folder. Source validation does not prove the separate Wiki has published it.

Current animation is a simple concept loop for rotor/thrust orientation, not a precise rotor-speed simulation or motor-order diagram.


### Fifth implementation update — frame geometry, integrations, assets and link validation (22 October 2026)

- [x] Add dedicated integration tutorials: `Analog-Goggles-and-VRX-Integration.md`, `DJI-O3-O4-Goggles-and-Air-Unit-Integration.md`, `Walksnail-Avatar-Goggles-and-Air-Unit-Integration.md`, and `HDZero-Goggles-and-VTX-Integration.md`.
- [x] Add `FPV-Assembly-Tools-and-Workshop-Guide.md` for mechanical tools, soldering/electrical tools, workshop safety and first-power flow.
- [x] Add `lipo-vs-li-ion.svg` and place it at the top of the charger/battery safety guide.
- [x] Add second concept animation `balanced-x-deadcat-compare.gif` and link it from frame geometry and Home.
- [x] Add source-linked product photos and specific model dimensions to the dedicated balanced-X, deadcat, 2.5-inch, 3.5-inch cinewhoop, 5-inch and 7-inch guides. Model examples include Sub250 OasisFly25, BETAFPV Pavo35, GEPRC MK5X/MK5D and iFlight AOS 7 V5.
- [x] Correct/verify the Wiki link rewrite regex in `scripts/publish-wiki.sh`: test cases confirm it rewrites `Page.md`, `./Page.md`, and `Page.md#anchor` to extensionless Wiki slugs and leaves external URLs unchanged.
- [x] Home's beginner-path and new guide links use direct extensionless `https://github.com/luckyhegde6/buildFPV/wiki/Page-Name` URLs, not source-file URLs.
- [ ] Run publisher against a real local checkout and inspect the generated staged Wiki diff. The remote cannot be cloned from this environment because outbound GitHub DNS/network access is unavailable here; don't claim live publication.
- [ ] Once locally pushed, verify Home and sidebar links and all linked photos/SVG/GIFs from the live Wiki in a browser.
- [ ] Continue browser/mobile rendering inspection, additional short GIFs, and model-by-model compatibility/product matrix research.


### Sixth implementation update — additional visual tutorials (22 October 2026)

- [x] Create and insert a mission-based class selector visual at the top of `Drone-Categories-and-Size-Guide.md`.
- [x] Create and insert a BNF/PNP/ARF/RTF/DIY package-format visual at the top of the format glossary.
- [x] Create and insert a live-feed vs onboard-recording vs goggles-DVR visual in the analog/digital guide.
- [x] Create and insert a video ecosystem comparison and pre-buy compatibility checklist at the top of the model-level camera/VTX/VRX comparison.
- [x] Register the new visuals in `docs/assets/README.md`.
- [ ] Review all visual assets after Wiki conversion to local `images/`, including text legibility on mobile and image-host download success.
- [ ] Complete the deeper exact-SKU matrix of camera sensor/lens/FOV, live feed modes, onboard recording, goggles/VRX generation, firmware compatibility, power and date-stamped prices; avoid an unsupported product ranking.


### Seventh implementation update — battery flight-time planning (22 October 2026)

- [x] Create `docs/wiki-source/Battery-Flight-Time-and-Cycle-Life-Planning.md`.
- [x] Include cell-count / capacity Wh arithmetic, a hypothetical 4S 1500 mAh estimate using an explicitly illustrative reserve and average-power assumption, flight-time uncertainty factors, LiPo/Li-ion constraints, and a battery inspection/use log.
- [x] Link the new battery planning page from Home, sidebar, motor/prop compatibility, and charger safety pages.
- [ ] Recheck this page's published equations, anchors and table rendering after Wiki sync; verify that links resolve to extensionless Wiki slugs.
- [ ] Consider a spreadsheet-style calculator only after more representative, sourced flight-log data is available; do not imply an estimate predicts a safe maximum flight time.


### Final source-level verification pass — 22 October 2026

- [x] Verify Home's 43 direct Wiki page routes use extensionless slugs; all 43 resolve to current `docs/wiki-source/*.md` filenames and none include `.md`.
- [x] Verify 28 standard Markdown links in the sidebar resolve to source page slugs; no missing source targets found.
- [x] Verify all 47 files under `docs/assets/` are registered in `docs/assets/README.md` (excluding the README itself).
- [x] Verify expected class, frame assembly, motor/prop/battery, charger, camera/video ecosystem, goggles/VRX, troubleshooting and battery-planning pages exist in source.
- [x] Run the link rewrite regression pattern with Bash/sed: standard relative links, `./Page.md`, anchors and an external URL; output matched expected extensionless Wiki links.
- [ ] Run the actual publisher against the real Wiki checkout and verify the remote push. Container networking could not resolve github.com, and the GitHub contents API cannot read the separate `.wiki.git` repository in this session; publishing remains unverified.


- [x] Validate the remaining native Wiki `[[Page Name]]` sidebar links by normalizing spaces to GitHub Wiki slugs: all 27 map to existing source pages.
- [x] Cross-check the 132 completed-checkbox lines that name a `docs/assets/` or `docs/wiki-source/` path against the repository tree: no missing path is marked complete.


---

## 16. Charger specification tranche — 22 October 2026

- [x] Add a dated manufacturer-sourced charger comparison to `docs/wiki-source/FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md`.
- [x] Include ISDT UC2 (supported 1S/2S standard LiPo), ISDT 608AC (AC/DC 1–6S charger), ToolkitRC M7AC (portable AC/DC 1–6S charger) and ToolkitRC M6DAC (two-output charger).
- [x] Link the manufacturer specifications and manuals, and distinguish charger-output ratings from AC input limits.
- [x] Explain that dual-output “per channel” claims depend on input source and operating mode; do not infer simultaneous full power from the headline rating.
- [x] Record the user's confirmation that the existing live Wiki is at https://github.com/luckyhegde6/buildFPV/wiki; do not attempt to initialize a second Wiki.
- [ ] From a network-enabled local clone, run `bash scripts/test-wiki-link-rewrite.sh`, run `bash scripts/publish-wiki.sh`, review the staged diff and type `PUBLISH` only after review.
- [ ] After the push, inspect the rendered table, its four manufacturer-source links, sidebar/slugs, and images/GIFs in the live Wiki.
- [ ] Expand the list only after checking more current charger models, exact revisions/manuals and source-supported per-channel power allocation. Do not imply this representative set is a market-wide recommendation.
- [ ] Keep India-specific prices and seller availability out of the table until checked for a stated date/region and exact bundle contents.

**Publication status unchanged:** the source page and TODO are committed to `buildFPV/main`; the user confirms the live Wiki already exists at https://github.com/luckyhegde6/buildFPV/wiki. Live rendering and the publisher push have not been verified in this session. The `.wiki.git` fetch returned 404 through the connector, while the local shell cannot resolve `github.com`; neither result disproves the live Wiki's existence, so publishing checks must resume from the existing Wiki using a network-enabled checkout.


---

## 17. Existing live Wiki confirmed by user — 22 October 2026

- [x] User confirmed the Wiki already exists at https://github.com/luckyhegde6/buildFPV/wiki.
- [x] Correct the earlier inaccurate inference: a 404 from the connector's attempt to fetch `buildFPV.wiki.git` / raw `Home.md` is not proof the Wiki is uninitialized.
- [ ] In a network-enabled checkout, fetch the existing Wiki remote, inspect its current Home/sidebar/pages and preserve any Wiki-only edits before publishing.
- [ ] Run `bash scripts/test-wiki-link-rewrite.sh` and `bash scripts/publish-wiki.sh`; inspect the staged Wiki diff and type `PUBLISH` only after review.
- [ ] Verify published pages, internal slugs, source-linked images and GIF rendering on the live Wiki.
- [ ] Record the resulting Wiki commit and live verification results here after the push.

**Current limitation:** the connector cannot fetch the Wiki routes through its repository fetch action, and this runtime's local shell reports `Could not resolve host: github.com`. Therefore the existence of the Wiki is accepted from the user's confirmation, but publishing and live page inspection remain unverified here.


---

## 18. Exact-model FPV video matrix tranche — 22 October 2026

- [x] Expand `FPV-Cameras-VTX-VRX-Compatibility-Comparison.md` with model-specific rows for BETAFPV Air75 (listed 5-in-1/C03 configuration), DJI O4 standard, DJI O4 Pro, Walksnail Avatar HD Pro Kit, HDZero Whoop V2 and HDZero Freestyle V2.
- [x] Include published sensor/FOV and recording modes when listed, live-view/latency claim with test-condition caveats, input voltage, weight/mount/power/thermal notes, and ground-side ecosystem.
- [x] Preserve model-generation distinctions and explain that the control receiver is not the video receiver.
- [x] Flag the Walksnail kit page's inconsistent combined-vs-component weight claims instead of silently choosing a number.
- [x] Re-fetch the committed matrix through GitHub MCP and perform a source-level structure check: all eight Markdown table lines use the expected five columns across six model rows, and the page introduces no stale local `.md` links.
- [ ] Continue with more camera and VTX SKUs, exact goggles/receiver + firmware pairings, and additional maker manuals. Do not create cross-brand compatibility assumptions.
- [ ] Verify the new table's layout and source links on the existing live Wiki after a reviewed publish.
- [ ] Add regional price/availability snapshots only after current source/checkout verification for a specific date and region.

**Research sources for this tranche:** [DJI O4 specs](https://www.dji.com/o4-air-unit/specs), [BETAFPV Air75](https://betafpv.com/products/air75-brushless-whoop-quadcopter), [Walksnail Avatar HD Pro Kit](https://www.caddxfpv.com/products/walksnail-avatar-hd-pro-kit), and [HDZero VTX specifications](https://docs.hd-zero.com/vtx-summary), all reviewed 22 October 2026.


---

## 19. Agent workflow and publish/verification handoff — 22 October 2026

- [x] Add root `AGENTS.md` with repository-wide agent/contributor rules.
- [x] Add `HANDOFF.md`, `MEMORY.md`, and append-oriented `SESSIONS.md`.
- [x] Add `.agents/README.md`, separate Research Agent and Builder Agent role files, the research-to-build workflow, and research/session templates.
- [x] Re-fetch the source tree through GitHub MCP and verify all requested root and `.agents/` files exist.
- [ ] Publish pending Wiki-source updates to the **existing** live Wiki at https://github.com/luckyhegde6/buildFPV/wiki.
- [ ] Use an authenticated Playwright/browser-capable tool to inspect the live Home/sidebar, updated charger and video matrix pages, internal links, SVGs and GIFs after publication.
- [ ] Record publisher push and browser verification evidence separately in `HANDOFF.md` and `SESSIONS.md`.

**Current tool gate:** GitHub repository MCP writes work for `buildFPV/main`, but its fetch action does not expose the Wiki Git remote/push. Plugin discovery did not expose a Playwright tool; TinyFish was found as a browser alternative and suggested, but is not connected in this session. Web fetch attempts for the Wiki routes were not usable for rendered-page verification. Do not label publication or Playwright checks successful until an authenticated browser and a write-capable Wiki Git path are actually available.


---

## 20. Remote publish and Playwright workflow prepared — 22 October 2026

- [x] Add `scripts/verify-wiki-live.mjs` with headless Playwright checks for live Home, the charger guide and exact-model video matrix at desktop/mobile viewports.
- [x] Add `.github/workflows/wiki-publish-verify.yml` to run link-rewrite tests, publish to the existing Wiki when a suitable secret exists, install Playwright with `npx`, and upload screenshots + a JSON report.
- [x] Add `.agents/PUBLISH_WIKI_NOW` as a one-shot trigger and add a `workflow_dispatch` entry point.
- [x] Fix the trigger condition: marker `added` **or** `modified` paths are accepted. Updating `.agents/PUBLISH_WIKI_NOW` now deliberately retriggers this workflow; edit it only when requesting a run.
- [x] Run local headless attempt: Playwright CLI version 1.57.0 is present, but page navigation failed with `net::ERR_BLOCKED_BY_ADMINISTRATOR`; `github.com` DNS is blocked. `npx` download timed out.
- [x] Re-check the Actions inventory after correcting the trigger: runs `39796268242` (commit `3142812`) and `39796597578` (commit `f2323a5`) were registered on push. Both reported `queued`, no jobs (`total_count: 0` at the jobs endpoint), and no artifacts at the latest read.
- [x] Inspect [run 39797230235](https://github.com/luckyhegde6/buildFPV/actions/runs/39797230235): link-rewrite regression passed; publishing failed at credential setup due to the missing Wiki-write secret; Playwright ran but route/content/image checks failed and artifact `12434310973` was uploaded.
- [ ] Ensure either `WIKI_PUBLISH_TOKEN` or `GH_PERSONAL_ACCESS_TOKEN` repository secret exists with write access to the existing Wiki Git remote.
- [x] Download and review artifact [12434310973](https://github.com/luckyhegde6/buildFPV/actions/runs/39797230235/artifacts/12434310973). Its JSON report is `passed: false`: guide routes redirected to Home, expected model text/tables were absent, and a live Wiki-local JPEG failed.
- [ ] After the owner adds the Wiki-write secret, rerun from Actions UI; require successful publish and a fresh Playwright report with passing routes/content/tables/images.
- [x] Update `HANDOFF.md` and this TODO with run `39797230235` and its observed result; no Wiki commit SHA exists because the push did not occur.

**Observed run result:** run `39797230235` (commit `ab2592162031430ecb510238af93c3957b40e1f1`) passed the link-rewrite test but failed credential setup because `WIKI_PUBLISH_TOKEN` / `GH_PERSONAL_ACCESS_TOKEN` was empty. The Playwright job installed Chromium and ran headless, then exited 1 because both guide routes redirected to Home and expected content/tables/image checks failed. Artifact `12434310973` exists and has been reviewed. No Wiki push occurred.


---

## 21. Workflow job-guard repair and third remote attempt — 22 October 2026

- [x] Inspect initial corrected run `39796597578`; GitHub reported the Playwright job as `skipped`, with no publisher job/artifact evidence.
- [x] Remove redundant marker-file job-level `if` guards. Automatic `push.paths` already limits push-triggered runs to `.agents/PUBLISH_WIKI_NOW`; the publisher now runs for a valid workflow trigger, and the verifier uses `if: always()` so it can run even if publish fails.
- [x] Update the marker to request a third run after the guard fix.
- [x] Confirm latest run [39797230235](https://github.com/luckyhegde6/buildFPV/actions/runs/39797230235) is registered with both the publish and Playwright jobs in `queued` status.
- [ ] Inspect actual publish logs; if successful, record the Wiki commit SHA and verify existing pages/media.
- [ ] Review the latest headless Playwright report/screenshots; do not claim checks passed without the uploaded evidence.

**Remaining blocker:** at the latest read, latest run `39797230235` has not started jobs and has no artifacts. The manual browser page may expose queue details not available through the connected GitHub MCP. Confirm the Wiki-push secret is set in repository Actions secrets without ever disclosing the secret value.


---

## 22. Executed remote workflow result and evidence — 22 October 2026

- [x] Review run [39797230235](https://github.com/luckyhegde6/buildFPV/actions/runs/39797230235), source commit `ab2592162031430ecb510238af93c3957b40e1f1`.
- [x] Link rewrite regression passed on the GitHub-hosted runner.
- [x] `npx --yes playwright@1.57.0 install --with-deps chromium` succeeded; Playwright Chromium ran in headless mode.
- [x] Download and inspect [artifact 12434310973](https://github.com/luckyhegde6/buildFPV/actions/runs/39797230235/artifacts/12434310973), containing `report.json` and six screenshots (Home, chargers and video matrix at desktop/mobile viewports).
- [x] Publisher failed at credential setup with `Missing WIKI_PUBLISH_TOKEN / GH_PERSONAL_ACCESS_TOKEN secret.`; publisher was skipped and no Wiki push occurred.
- [x] Playwright report result was `passed: false`. Home lacks the newer `Drone Categories and Size Guide` link and `images/fpv-build-concept-ai.jpg` does not load from the live Wiki; both guide URLs redirect to Home, where expected charger/video model phrases and tables are absent.
- [x] Confirmed source JPEG `docs/assets/fpv-build-concept-ai.jpg` exists in the main repository; the publisher should copy it to the existing Wiki on a successful publish.
- [x] Added an explicit unexpected-route redirect assertion and corrected shell quoting in workflow summary lines after reading the logs. These follow-up code changes have not yet been exercised by another Actions run.
- [ ] Configure `WIKI_PUBLISH_TOKEN` or `GH_PERSONAL_ACCESS_TOKEN` in repository Settings → Secrets and variables → Actions, with write access to the existing Wiki Git remote. Never paste the token into chat or commit it.
- [ ] Re-run via the Actions UI after the secret is configured. Mark publication complete only after publisher push succeeds and fresh Playwright output passes.

**Current status:** remote Playwright installation/execution and evidence capture are demonstrated. Publishing is blocked by missing secret configuration; live Wiki checks fail. Do not mark the Wiki as updated until a subsequent run proves the Wiki push and passes route/content/image assertions.


---

## 23. Latest-code validation marker — 22 October 2026

- [x] Commit the explicit final-route assertion in `scripts/verify-wiki-live.mjs` and the workflow shell-summary quoting/newline fixes.
- [x] Update `.agents/PUBLISH_WIKI_NOW` at commit `8e3833255f9485e608d68e75f79333c43a57e3f4` to request a fresh run of current `main`.
- [x] Re-check `/actions/runs?per_page=10`; the inventory still contains only the three earlier runs. No new run was visible for the latest marker update.
- [ ] After configuring the Wiki-write secret, manually run [Publish and verify existing FPV Wiki](https://github.com/luckyhegde6/buildFPV/actions/workflows/wiki-publish-verify.yml) on `main` so the latest code is tested together with the actual Wiki publish.
- [ ] Record the new run ID and updated report. Do not treat the rerun request commit as evidence that the latest fixes executed.

**Current handoff:** run 39797230235 is the most recent completed evidence. It proved remote Playwright installation/execution and artifact capture, but the publisher failed due to the missing secret and live Wiki checks failed. The current source code contains additional assertions/quoting fixes that have not yet been re-tested.


---

## 24. Wiki credential and publishing runbook — 22 October 2026

- [x] Add `.agents/wiki-publishing-runbook.md` documenting token generation, secret creation, safe local authentication, script execution and review, manual Actions dispatch, live browser verification, troubleshooting and credential rotation.
- [x] Link the runbook from `.agents/README.md`, `.agents/builder-agent.md`, and `.agents/workflows/research-to-build.md`.
- [x] Link the runbook from `HANDOFF.md` and record the change in `SESSIONS.md`.
- [x] Reference current official GitHub documentation for PAT management, Actions secrets and GitHub CLI secret creation.
- [ ] The repository owner must still create and add the PAT as `WIKI_PUBLISH_TOKEN` (preferred) or `GH_PERSONAL_ACCESS_TOKEN` (fallback) under repository Settings → Secrets and variables → Actions.
- [ ] After the secret is configured, manually run the existing [publish/verify workflow](https://github.com/luckyhegde6/buildFPV/actions/workflows/wiki-publish-verify.yml) and confirm a successful Wiki push plus passing fresh Playwright report.

**Status:** the runbook is committed and linked in the agent framework. It does not create or reveal credentials and does not change the existing Wiki's publication state.


---

## 25. Beginner video curriculum and YouTube resource links — 22 October 2026

- [x] Add the [Learn to fly an FPV drone (for total beginners)](https://www.youtube.com/playlist?list=PLwoDb7WF6c8lCKhQOTy-Vb9LfW0VAIrTP) playlist as a required buildFPV onboarding course before the first real flight in the README, Learning Guide, simulator docs, Wiki Home, Getting Started, Simulator Training and Daily Liftoff Routine. Label it as a learning gate, not certification.
- [x] Add drone systems/controls playlist PLgMDNELGJ1CYU7vfun-Q7HXsldD-RsocG and video sxaEaXcuQA4 to the relevant docs and Wiki pages.
- [x] Add RadioMaster Pocket setup/bind video GgaWMvAHZi8 to Pocket docs and Wiki.
- [x] Add DGCA/drone-awareness playlist resources PL_Fsqn9m2GhU3ep-PzQ4jg8aa-oxFP8W6, PL3IOIUhLPNVciQ1V5OLMmgEBQJbSzJ8iS, and PLn8ARIij4VbeN2OXLqHJfG2Nm4Hx8ilFq to India rules/resources pages, clearly marked supplemental to current official sources.
- [x] Create the optional coding/ML learning paths at docs/drone-coding-and-ml.md and docs/wiki-source/Drone-Coding-and-Machine-Learning.md covering LmEcyQnfpDA, QvRxxjaLjxg / PLeuMA6tJBPKsAfRfFuGrEljpBow5hPVD4, k-yDYgc8AmU, and PRwef_c7SXQ.
- [x] Add clickable thumbnails for individual videos and direct playlist links; raw YouTube iframes are avoided because GitHub-flavored Markdown filters iframe.
- [x] Link the new coding page from Wiki Home/sidebar, README, learning guide, roadmap, and reference pages.
- [x] Re-fetch 20 docs/Wiki-source files through GitHub MCP and confirm all supplied video/playlist identifiers are present in their intended sections.
- [ ] Publish these source changes to the existing live Wiki and inspect a fresh Playwright report. Previous run 39797230235 did not publish because WIKI_PUBLISH_TOKEN / GH_PERSONAL_ACCESS_TOKEN was missing; follow .agents/wiki-publishing-runbook.md to configure the secret and manually run the workflow. Marker update commit b3d40fa53b4fb180768bca597a296896600dc30c did not create a new Actions run.

**Status:** links and course sections are committed to buildFPV/main. Live Wiki publication/render validation remains a separate outstanding step.

### Latest live Wiki publication result (2026-10-23)

- [Run #13](https://github.com/luckyhegde6/buildFPV/actions/runs/39844524646) passed source link-rewrite testing and staged/committed 63 Wiki Markdown/image changes in the runner.
- The actual Wiki push failed with HTTP 403: `Permission to luckyhegde6/buildFPV.wiki.git denied to luckyhegde6`. `WIKI_PUBLISH_TOKEN` is present, but its current scope/repository access does not permit writing to the Wiki Git remote.
- Live verification failed because no push occurred. This TODO remains **open** until a token with Wiki write access is configured, the existing workflow completes the push, and the Playwright live-site report is reviewed.
- The publisher now avoids external image downloads in Actions, normalizes Markdown EOF whitespace, uses a batched per-page Wiki-link rewrite, and supplies a fallback Git author identity only when none is configured.
- Next: replace the Actions secret (do not paste token in chat), dispatch [the workflow](https://github.com/luckyhegde6/buildFPV/actions/workflows/wiki-publish-verify.yml), and recheck publish + live browser results.

### Publication update — 2026-10-23

- [Run #14](https://github.com/luckyhegde6/buildFPV/actions/runs/39845553074) published the Wiki source pages successfully using the owner's updated classic PAT.
- Playwright confirmed HTTP 200 for Home, charger guide and video compatibility matrix; charger and matrix checks passed. It reported one failed Wiki-local image on Home: `images/fpv-build-concept-ai.jpg`.
- The publisher was changed to force-stage image files and [run #15](https://github.com/luckyhegde6/buildFPV/actions/runs/39845914339) successfully republished. Live verification is still pending in the workflow because Playwright/Chromium installation has not advanced to the test step.
- [Run #16](https://github.com/luckyhegde6/buildFPV/actions/runs/39846078398) is queued with direct checks for the mandatory simulator course and coding/ML page.
- Status: **Wiki published; full live browser verification still open.**

### Supplied infographic images — publication status

- Source updates are committed and the latest Wiki publish (Run #18) succeeded: https://github.com/luckyhegde6/buildFPV/actions/runs/39863362323.
- `FPV-System-Basics.md` now links the FPV basics and beginner guide infographics. `How-FPV-Drones-Work.md` now links the movement and control-loop infographics.
- Fixed legacy broken-image references in Home and System Basics; added “The control path” text to How FPV Drones Work.
- Playwright has not completed for Run #18 because the Chromium installation step remains active. Run #19 is queued with explicit required-image assertions for all four visuals. This TODO stays open for live-verification until those browser checks report results.

### Real-world component photos — done

- The 15 downloaded photo assets, attribution/license manifest and page updates are committed on `main`.
- Live publish and Playwright verification passed: https://github.com/luckyhegde6/buildFPV/actions/runs/39929235479.
- Drone Parts One by One rendered with HTTP 200; all 15 unique real-world photo assets passed Wiki-local loading checks. Credits link to each Wikimedia Commons file and license, with caveats for representative examples (for instance, Crossfire receiver rather than ELRS; analog VTX rather than digital air unit).

### How FPV Drones Work image sizing — done

- Both top infographics now use accessible HTML image tags with declared width 1200; publisher rewrites them to Wiki-local paths.
- Regression test and Playwright live verification passed: https://github.com/luckyhegde6/buildFPV/actions/runs/40063630087.
- Desktop browser measured both images at 896 CSS px wide; both assets loaded and the page had no errors.

### Enlarged section visuals — verified

- Added individual large SVG panels for overview, axes/movements, lift/thrust, control loop, video link, antenna types, FC anatomy, motors/props, radio link, GPS and flight modes to four relevant guides.
- Fixed missing lift/thrust SVG and Simulator local asset paths.
- Live publish and verification passed: https://github.com/luckyhegde6/buildFPV/actions/runs/40067259902.

### Real product photos across drone and video integration guides — source committed

- [x] Add BETAFPV Air75, Pavo25 V2 and Pavo35 real product photos to the drone-class comparison and relevant 2.5-inch class/frame source guides.
- [x] Add CADDXFPV Ratel 2 analog camera and Walksnail Avatar HD Pro Kit/Goggles X product photos to the camera, video-system, and goggles/VRX integration guides.
- [x] Add official DJI O4 Air Unit and HDZero goggles/VRX product images to their respective integration guides.
- [x] Preserve suitable real model photos on existing tinywhoop, cinewhoop, 5-inch GEPRC, 7-inch iFlight, antenna/VRX and GPS/FC pages. Use exact-model captions; do not imply cross-ecosystem video compatibility.
- [x] Re-fetch all 21 requested docs/wiki-source files and confirm each contains at least one non-SVG real product photo.
- [ ] Trigger the existing publish/verify workflow and inspect actual results for published routes and all product CDN images. Source-level presence is not evidence of live image loading.

### Official real-world manufacturer photos — complete

- Added BETAFPV product images (Air65 II, Meteor75 Pro II, Pavo25/Pavo25 V2 frame, Pavo35 quad/frame, X-Knight 5 quad/frame) and a CADDXFPV / Walksnail Avatar GT2 video-system image to all ten requested class/frame guides.
- Product captions link to official pages; Caddx GT2 is not described as a full aircraft or frame. 7-inch frame photos remain the accurate existing iFlight AOS 7 reference.
- The publisher localizes official BETAFPV/CADDXFPV CDN images to Wiki `images/`; CI's broader external-host skip remains in place for other sites.
- Publish and Playwright checks passed in https://github.com/luckyhegde6/buildFPV/actions/runs/40075353669.

### Expanded video/goggles/GPS photo verification — rerun pending

- [x] Review run #27 (https://github.com/luckyhegde6/buildFPV/actions/runs/40075613106): Wiki publish succeeded and configured Playwright checks passed for the pages that were in the verifier at that time.
- [x] Correct official CADDX CDN image URLs to the allowlisted www.caddxfpv.com host in the five affected guides so CI can localize the Pro Kit and Goggles X photos into Wiki images/.
- [x] Extend scripts/verify-wiki-live.mjs to cover all additional listed video/goggles/GPS guides and assert that their expected product photos load.
- [ ] Run the updated publish workflow and review its new Playwright report/artifact before marking all 21 requested pages live-image verified.

### High-resolution overview and enlarged visuals across Wiki pages — source committed, live verification pending

- [x] Create editable 1800×1240 vector recreation `docs/assets/fpv-system-basics-high-resolution.svg` for the full FPV system overview.
- [x] Add the overview at width=1200 to FPV System Basics, Home, How FPV Drones Work, Drone Parts — One by One, and Getting Started.
- [x] Add enlarged width=1200 topic-specific SVG panels across all 10 drone class/frame guides, 9 camera/video/goggles guides, the antenna guide, and GPS/Flight Controllers.
- [x] Update verifier assertions for required local images and enlarged-size rendering; enable local downloading of the official DJI/HDZero imagery that failed remote-load checks.
- [ ] Publish the latest source changes and inspect the full live Playwright report. Run #28 failed for two image-load assertions, so do not treat the new high-resolution rollout as live-verified until the next run passes.
