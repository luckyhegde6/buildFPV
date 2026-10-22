# FPV Assembly Tools and Workshop Guide

![Frame and assembly tool reference](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/frame-size-reference.svg)

This guide collects tools and workshop practices for safe maintenance, frame assembly and DIY electrical work. A BNF quad often needs fewer tools than a DIY build. Choose tools based on the exact hardware and manufacturer instructions rather than buying every item in a generic list.

## 1. Core mechanical tools

| Tool | Use | Selection note |
|---|---|---|
| Quality hex drivers (the exact metric sizes used by your frame) | Frame, motor, stack and camera fasteners | Correct bit fit reduces stripped screws; don't assume one size fits the whole build |
| Small nut driver/wrench and fine pliers | Locknuts, standoffs and antenna hardware | Avoid crushing coax, connectors or soft grommets |
| Caliper or ruler | Measure frame/stack dimensions, battery and screw lengths | Compare against dimensioned drawings; photos aren't accurate scale references |
| Tweezers and flush cutters | Wires, small parts, zip ties | Keep clippings away from battery wires and boards |
| Small parts tray and labels | Prevent lost screws and distinguish variants | Label front/rear arms and board revisions where similar parts differ |
| Propeller tool | Install/remove matching prop nuts or retainers | Keep all props removed during configuration and motor tests |
| Eye protection | Protect against small debris and fasteners | Especially useful during cutting, grinding or fitting |

## 2. DIY electrical tools

| Tool | Use | Safety / limit |
|---|---|---|
| Temperature-controlled soldering iron with suitable tip | Wire and board solder joints when the build requires soldering | Use fume extraction and a heat-resistant stable stand; don't heat battery cells |
| Suitable solder and flux | Reliable joints on supported pads/wires | Use the chosen electronics maker's recommended practices and clean residues as appropriate |
| Fume extraction | Reduces breathing exposure during soldering | Keep face out of plume; ventilate |
| Multimeter with continuity/resistance and voltage modes | Unpowered short checks, polarity and pack checks | Know safe probe points; disconnect battery for continuity checks |
| Board holder/helping hands | Prevents components moving during soldering | Don't clamp delicate connectors or crush the PCB |
| Heat-shrink, electrical insulation and cable-ties | Protect joins and route wires | Keep insulation away from hot parts and wire paths away from props |
| Smoke-stopper / current-limited first-power method | May limit damage during initial power-up | Not a guarantee; still verify polarity and continuity before connecting |
| Suitable magnifier / bench light | Find bridges, cracked solder and damaged connectors | Inspect before applying power |

Avoid random screwdrivers, metal tools near exposed battery terminals, loose wire strands and cluttered work surfaces. Threadlocker is only appropriate where the frame/motor maker permits it; some types attack plastic and must not enter motor bearings/windings.

## 3. Mechanical assembly workflow

1. Identify exact frame, motor, FC/ESC, camera and VTX revisions and gather the matching manuals/dimension drawings.
2. Lay out all frame parts and dry-fit arms, plates, standoffs, stack spacer, camera cage and battery mounts.
3. Check motor bolt pattern and **screw length**; screws must not contact copper windings inside the motor.
4. Check stack mount-hole spacing against exact board and frame drawings. Do not force holes or flex a PCB to fit.
5. Place components to preserve USB/connector access, camera view, airflow and antenna routing.
6. Route cables away from prop discs, motor bells, sharp carbon edges and hot parts; provide strain relief without sharp coax bends.
7. Secure the battery so it cannot slide or touch props and the centre of gravity remains suitable.
8. Tighten evenly according to maker guidance; recheck all clearances after installing the actual props (during this step keep power disconnected).
9. Inspect for frame cracks, pinched wires, loose arms and camera/antenna mount issues.

See [Balanced X assembly](Balanced-X-Frame-Assembly.md), [Deadcat assembly](Deadcat-Frame-Assembly.md), and the [frame geometry guide](Frame-Geometries-Balanced-X-vs-Deadcat.md).

## 4. Electrical safety and first power

- Disconnect the battery before soldering, changing wires or performing continuity checks.
- Verify power polarity and the exact board's labelled VBAT/GND/regulator pads from the manufacturer pinout. Never guess from a similar board photo.
- Confirm solder joints, solder bridges, connector wiring, exposed copper and cable clearance before powering.
- Use the manufacturer's recommended first-power procedure; a smoke-stopper may help detect a short but doesn't make an unknown wiring setup safe.
- Stop for smoke, burning smell, unexpected current, hot components or a battery that heats/swells.
- Remove all propellers before USB configuration, firmware work, receiver/failsafe checks or motor-output/direction tests.
- Do not charge damaged LiPo/Li-ion packs and don't leave packs charging unattended.

## 5. Firmware and motor check

1. Confirm exact FC model/revision, gyro and correct firmware target.
2. Back up current config where supported before a firmware change.
3. Check receiver protocol, channel mapping and arming/failsafe status in the correct configurator.
4. Use the installed firmware's motor order/direction diagram with all props removed.
5. Verify video separately: camera → VTX/air unit → antenna → compatible goggles/VRX.
6. Fit propellers only after order/direction, transmitter inputs, failsafe and system checks pass.

Official references: [Betaflight Setup Guide](https://betaflight.com/docs/wiki/getting-started/setup-guide), [Betaflight Motors Tab](https://betaflight.com/docs/wiki/app/motors-tab).

## 6. Small maintenance kit

Keep a labelled box of the exact spare propellers, screws, arms/ducts, motor, frame-specific spacers, battery straps, antenna pigtail/connectors, heat-shrink and cleaning tools appropriate to your model. Do not substitute screws by length alone; thread diameter, head type, material and required engagement matter.

## Further guides

- [Motors, Propellers and Battery Compatibility](Motors-Propellers-and-Battery-Compatibility.md)
- [FPV Chargers and Battery Safety](FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md)
- [First Build Checklist](First-Build-Checklist.md)
- [FPV Troubleshooting Quick Guide](FPV-Troubleshooting-Quick-Guide.md)

*Reviewed 22 October 2026. Procedures vary by frame and electronics; the exact maker manuals take precedence.*
