---
title: "MetRocketry — Avionics and Flight Computer"
shortDescription: "Avionics engineering on a student rocketry team, covering the flight computer power subsystem, PCB design, and telemetry hardware."
category: "Embedded"
status: "In Progress"
# TODO: add the month you joined the avionics team, e.g. "2024-09".
# startDate: "2024-09"
featured: true
technologies:
  - KiCad
  - Altium Designer
  - Power electronics
  - SPI
  - Embedded systems
sortOrder: 3
draft: false
---

## Overview

MetRocketry is Toronto Metropolitan University's student rocketry team. My work
has been on the avionics side: the flight computer's power subsystem, PCB
design, telemetry hardware and the integration between the embedded software
and the boards it runs on.

Avionics is a team effort and the flight computer is a collaborative design, so
the sections below separate what I worked on directly from the work of the team
as a whole.

## My contributions

- Flight computer **power subsystem** design: a 7.4 V battery input feeding
  regulated 3.3 V and 5 V rails for the flight computer and its peripherals.
- **MCU-controlled electronic fuses**, so that power to individual subsystems
  can be safely controlled to avoid under/over voltage/current, ensuring
  safe operation.
- **PCB design** in Altium Designer.
- **Telemetry hardware** and peripheral integration, including LoRa radio,
  microSD over SPI, barometer, accelerometer/gyrometer and
  temperature sensors over I2C and a GPS over UART.

## Team context

The flight computer is designed and built by the avionics sub-team and a
number of its subsystems were developed by other members. The team has 
participated in the **International Rocket Engineering Competition**. 
Following the compeition this year in June, I was promoted to
**Avionics PCB/CAD Lead** The leadership side of the role is covered on the
[experience page](/experience/).

<!-- ==========================================================================
     SECTIONS TO ADD AS YOU WRITE THIS UP

     Left out on purpose so that no empty section appears on the live site.
     Paste a block back in and fill it in when you have the content, then
     delete the surrounding comment markers.

     Nothing below this line is visible on the website.
     ======================================================================= -->

<!-- The design decisions behind the power rails: why these regulators or
     topologies, the expected load, how you handled brownout or inrush, and
     what margin you designed for:

## Power subsystem design
-->

<!-- Why software-controlled fusing was chosen over fixed fuses, what the MCU
     can switch, and how a fault is detected and handled:

## Electronic fuses
-->

<!-- The SPI bus layout: which devices share the bus, how chip select is
     handled, and the data-rate requirements of the radio and the microSD card:

## Telemetry and storage
-->

<!-- The real constraints you worked under: board space, mass, thermal limits,
     connector choices, parts availability:

## Challenges and trade-offs
-->

<!-- Photographs of the boards, schematic captures, layout views, or block
     diagrams. Put the image files in public/images/projects/ first, then paste
     these lines in and fix the filenames and the descriptions:

## Hardware

![Assembled flight computer power board, top side](/images/projects/metrocketry-power-board.jpg)

![Block diagram of the flight computer showing the power rails and the SPI peripherals](/images/projects/metrocketry-block-diagram.png)
-->

<!-- The technical lessons, in your own words:

## What I learned
-->

<!-- What the next revision of the board or subsystem should change:

## Future improvements
-->
