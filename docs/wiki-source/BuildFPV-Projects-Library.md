# 🧪 buildFPV Projects Library — what to explore, and when

These are learning directions, not a claim that you should build every system. Start with control skill and a simple aircraft before adding custom video, long-range links, or embedded Linux systems.

| Project | Role | Suggested time to explore | Why / caution |
|---|---|---|---|
| [Betaflight](https://betaflight.com/) | Flight-controller firmware and configuration app | **Early theory**, hands-on when a real FC or supported BNF is available | Learn receiver, modes, motors, OSD and failsafe. Firmware target and board revision must match exactly. |
| [ExpressLRS](https://github.com/ExpressLRS/ExpressLRS) | Open-source radio-control link | **Now / early** | Directly relevant to Pocket ELRS. Learn band, target, version, bind phrase and link checks before advanced settings. |
| [TBS Source One](https://github.com/tbs-trappy/source_one) | Open-source frame/CAD project | **After simulator + basic component literacy** | Great way to learn frame geometry, plates, arms, mounts and replacement parts. A 5-inch custom build has real battery/propeller injury risk and should not be the first rushed purchase. |
| [Gyroflow](https://github.com/gyroflow/gyroflow) | Video stabilization using gyro/motion data | **Once you have suitable footage** | Useful for post-processing; first confirm your camera/system produces a supported file/data path. |
| [OpenVTx](https://github.com/OpenVTx/OpenVTx) | Open-source video transmitter firmware/control protocols | **Later / electronics comfort** | Helpful for understanding MSP, SmartAudio and Tramp-style VTX control. Only use on explicitly supported hardware and with its docs. |
| [RubyFPV](https://github.com/RubyFPV/RubyFPV) · [site](https://rubyfpv.com/) | Open digital FPV/radio system | **Advanced project** | A deeper hardware/software system with supported hardware and configuration choices. Not a beginner shortcut for goggles/quad setup. |
| [OpenHD](https://github.com/OpenHD/OpenHD) · [docs](https://openhd.gitbook.io/open-hd/) | Open digital video / ground-station ecosystem | **Advanced tinkering phase** | Adds SBCs, radios, network/video configuration and integration. Learn basic flight and RF/video compatibility first. |
| [awesome-flying-fpv](https://github.com/Matthias84/awesome-flying-fpv) | Curated directory of FPV/UAV software and hardware | **Browse gradually** | A discovery map—not every link is equally current; check maintenance, supported hardware and official docs. |

## Project maturity and complexity — practical heuristic

- **Start learning now:** Betaflight docs, ExpressLRS docs, Liftoff and the RadioMaster manual.
- **Understand before building:** Source One's CAD and a matched frame/electronics bill of materials.
- **Use when you have the right input/output:** Gyroflow (supported recording + gyro data).
- **Advanced experimentation:** OpenVTx, RubyFPV, and OpenHD. These add firmware/hardware integration work; they are rewarding engineering projects, but not prerequisites for flying safely.

The complexity labels are recommendations for learning order, not a formal ranking or guarantee about project maintenance. Review each project's current releases, issue activity, supported hardware and license before basing a build on it.
