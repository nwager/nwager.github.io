---
title: "Robocar Home"
description: "The home page of my Robocar project."
author: "Noah Wager"
date: "2022-01-04"
published: true
---

<script>
  import { base } from "$app/paths";
</script>

## Introduction

![Front of in-progress Robocar with LIDAR mounted.]({base}/images/robocar/robocar-lidar-front-1024.jpg)
_The front of an in-progress Robocar with a LIDAR module mounted and various wires connecting to the Pico._

### Objectives

This project requires a good amount of effort to complete, so why am I doing this?

I'm pursuing this because it provides an exciting opportunity to learn new skills in embedded systems and robotics and improve my C and Python knowledge. My greatests interest in the technology sector is intelligent computer systems interfacing with hardware, and yet I have little experience in the field outside of school. Throughout this project, which is very much a work-in-progress, I hope to gain some of that experience in a way that is challenging and enjoyable.

### UW Inpiration

"Robocar" is a project I started over the summer of 2022, heavily inspired by the Autonomous Robotics (CSE 478) course at the University of Washington. The class consisted of a simulator for the [MuSHR](https://mushr.io) vehicle with an incomplete ROS stack that students implemented over the quarter. We learned the basics of localization, control theory, and planning, culminating in a semi-robust car that could follow a path in a predetermined map while avoiding obstacles. Unfortunately, COVID prevented the class from working with physical vehicles, so I was left unsatisfied in the hardware department. Hence, the existence of this project.

### System Overview

Like MuSHR, my car would use a Jetson Nano ([Seeed reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)) running [ROS Melodic](http://wiki.ros.org/melodic) to process data and calculate controls.

The Nano is a very capable and somewhat-affordable SoC with a GPU, which made it the best choice for a small autonomous vehicle project. It can reliably synthesize LIDAR and camera data to localize the robot and detect objects, which is needed for the system.

Unlike MuSHR, which uses a [VESC](https://vesc-project.com), I chose a cheap PWM-operated ESC. The VESC would normally handle motor control and steering, so in its place I incorporated a [Raspberry Pi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico) that takes commands from the Nano. Since there are various sensors, inputs, and other tasks to perform simultaneously on the Pico, it uses [FreeRTOS](https://www.freertos.org).

The Pico was chosen mainly for its $4 price while offering two 125MHz cores and a well-documented C/C++ SDK from Raspberry Pi. FreeRTOS has a [symmetric multiprocessing (SMP) port](https://freertos.org/symmetric-multiprocessing-introduction.html) that can utilize both cores, which sweetens the deal even further.

### A Note on Naming

I needed to give the Jetson Nano and Raspberry Pi Pico generic names instead of "Nano" and "Pico" so I could theoretically switch out hardware without changing names in code. I decided on **Brain** for the Nano and **Router** for the Pico because the "Brain" carries out the central computations and sends signals to the auxiliary device, and the "Router" takes those signals and routes them to the corresponding peripheral.

## Github Repositories

- [Robocar automation source code](https://github.com/nwager/robocar_src)
- [Onboard ROS Melodic (catkin) workspace](https://github.com/nwager/robocar_ws)
- [Host machine Melodic (catkin) workspace](https://github.com/nwager/robocar_host_ws)
- [Auxiliary peripheral router system](https://github.com/nwager/robocar_router)

## Updates

- [Update 1/4/2022]({base}/robocar-1-4-22)