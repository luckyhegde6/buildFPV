# Deadcat FPV Frame — Camera Visibility, Dimensions and Assembly

![Deadcat frame geometry versus symmetrical X and camera field of view](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/balanced-x-vs-deadcat.svg)

![Manufacturer product photo of GEPRC GEP-MK5D deadcat frame](https://geprc.com/wp-content/uploads/2023/01/7-2-1-600x600.jpg)

*Real product example: GEPRC GEP-MK5D O3 DeadCat. The manufacturer lists a 230 mm wheelbase, 208 × 193 × 42 mm overall dimensions, and 5-inch prop compatibility. Its maker describes the DC layout as intended to reduce visible props in O3 recordings. [GEPRC specifications](https://geprc.com/product/gep-mk5d-o3-frame/).*

A **deadcat** frame shifts or spreads the front motor positions to reduce propeller tips entering the camera image. The name describes a family of layouts, not one standardized geometry. Check a real frame drawing and camera FOV rather than assuming every deadcat completely hides the props.

## 1. What the shape changes

On a symmetrical X frame, motor positions are arranged symmetrically; wide lenses and higher camera tilt can show front props. A deadcat design may spread the front motors farther apart, change their fore/aft positions, or shape the arms so the prop discs sit farther outside the camera's field of view.

![Illustrative frame classes; wheelbase is separate from prop size](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/frame-size-reference.svg)

The diagram is a teaching illustration, not a dimensioned manufacturing drawing. Actual motor-to-motor distances, arm offsets, prop sizes, plate dimensions and mounting patterns must come from the chosen frame's official drawing.

## 2. Reasons to choose a deadcat

- Reduce visible front prop tips in recorded video without digitally cropping the image as much.
- Preserve a familiar quad layout while changing motor locations to suit a camera lens and flight purpose.
- Choose among open-prop, cinematic, freestyle and long-range designs where a deadcat option is offered.

Trade-offs vary by model. Non-symmetric geometry can change motor spacing, arm design and handling/tuning. It does not automatically improve flight performance or crash strength. A matching prop diameter, motor position and camera FOV still matter.

## 3. Tools and fit checklist

Use the exact hex drivers, caliper, correct hardware, spare arms/screws, tweezers and cable-management supplies. For DIY soldering/configuration, add fume extraction, soldering equipment, multimeter and a suitable current-limited first-power tool. Wear eye protection and keep the bench clear.

Before assembly confirm:
- [ ] Frame drawing shows exact front/rear motor positions and allowed prop diameter.
- [ ] The intended camera module and lens fit the cage; test FOV/tilt before final tightening.
- [ ] Arms and stack mounting pattern match FC/ESC hardware; spacers keep boards from contacting carbon.
- [ ] Motor screws are the correct length for the motor base and arm thickness.
- [ ] Battery is secure and does not block the camera, antenna or prop disc.
- [ ] Air unit/VTX airflow and antenna route follow the manufacturer manual.
- [ ] The frame's actual motor numbering/order is checked later in the installed firmware, with props removed.

## 4. Assembly sequence

1. Dry-fit centre plates, arms, standoffs and camera cage from the frame kit.
2. Verify exact screw types/lengths. Never insert longer screws into motors just because the frame plate is thicker; check whether manufacturer-approved hardware is needed.
3. Place front arms according to the frame's intended orientation—do not mirror or swap asymmetrical arms based on appearance alone.
4. Install motors, confirming shaft clearance and free rotation before attaching electronic wiring.
5. Dry-fit the flight stack, camera and video transmitter. Confirm USB access, connector reach, antenna routing, VTX cooling and that the camera view remains clear.
6. Place the battery and strap, then check its mass and position do not interfere with prop clearance or camera cables.
7. Route and secure wires with slack for service but no loops near rotating parts. Protect antenna coax from sharp bends and strain at the connector.
8. Tighten fasteners evenly according to the frame instructions, then inspect all four prop discs against every wire, plate, camera mount and duct/guard.
9. Continue to separate electronics/firmware checklists with all props removed.

## 5. Camera and prop visibility test

The best deadcat setup is confirmed using the **actual camera and propeller**, not solely the frame label:
1. Fit the camera and lens intended for flight.
2. Set a provisional camera tilt.
3. View a still/frame at the camera's actual FOV/aspect ratio.
4. Check all prop tips through the expected camera angle and any image stabilisation crop.
5. Adjust only within the camera mount's intended range; if props still intrude, consider a different frame/camera FOV rather than altering motor geometry without an engineering design.

## 6. Troubleshooting

| Symptom | Possible check |
|---|---|
| Front prop still visible | Confirm lens/FOV, tilt, prop size, exact motor offset and frame variant |
| Uneven response after switching from X | Use correct firmware/motor map and a suitable tune; do not reuse assumptions blindly |
| Arms/plate do not match | Verify part numbers, revision and front/rear orientation |
| Coax/video unit gets hot | Check airflow and bench-use requirements |
| Vibration after impact | Inspect propeller balance/damage, motor shaft, arms, fasteners and camera mounts |

## References

- [Frame geometries — balanced X vs deadcat](Frame-Geometries-Balanced-X-vs-Deadcat.md)
- [Balanced X frame assembly](Balanced-X-Frame-Assembly.md)
- [First Build Checklist](First-Build-Checklist.md)
- [Betaflight Setup Guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)

*Deadcat dimensions are product-specific. Use the exact manufacturer's frame drawing; these diagrams are conceptual and are not drill templates.*