---
title: "Robocar Update 1/4/2022"
description: "The first update of a WIP autonomous RC car."
author: "Noah Wager"
date: "2022-01-04"
published: true
---

<script>
  import { base } from "$app/paths";
</script>

Hello, world! This is the first update of my Robocar project. It seems this project will take me a fairly long time to complete, so I'm batching updates in a progress report of sorts. This update encompasses my work over the past (very slow) month. Below is an image of the Robocar in it's current state.

![Front of in-progress Robocar with LIDAR mounted.]({base}/images/robocar/robocar-lidar-front-1024.jpg)
_The front of an in-progress Robocar with a LIDAR module mounted and various wires connecting to the Pico._

## Summary

The Router successfully routes commands from the Brain to the peripherals, which allows the car to move based on user input to the Brain with an Xbox One controller. I've successfully made a high-latency, difficult-to-control, very expensive RC car. Yay.

## Hardware Progress

As per MuSHR recommendations, I replaced the stock motor on the RC car chassis with a more powerful one, installed a capable ESC, and upgraded the steering servo. This process was fairly straightforward, albeit laborious, with the exception of the motor. I have learned that thread-locker is indeed very good at locking a screw, which meant I stripped the grub screw attaching the pinion gear to the stock motor shaft. I had to use a dremel to saw off the motor, but I was eventually successful.

To mount the electronics, I modeled some basic geometric parts that were fastened to the chassis with M3 screws and nuts. The parts had holes for the Nano, LIDAR, and buck-converter (to convert from 2S LiPo voltage to 5V) which were fastened using M3 screws as well. Once the vehicle can successfully drive with LIDAR data, as in the CSE 478 course, I will print another piece to mount a USB webcam that will be used for computer vision.

## ROS Progress

The project has four main code bases: the ROS workspace on the host machine (a desktop PC), the ROS workspace on the Brain, the source for Robocar logic, and the Router codebase. I was able to get ROS Melodic running on the Nano (Ubuntu 18.04) and the host machine (on an Ubuntu 18.04 VM) and wrote the logic for LIDAR localization.

As I learned from class, this LIDAR localization involves a predefined map and a particle filter that continously updates on new LIDAR data to estimate the position and orientation of the robot. Data is passed around using the ROS messenger/subscriber framework to keep things asynchronous. While this code passes the few tests I've written, it has yet to be tested on the vehicle because of issues regarding motor control.

## Motor Control Through the Router

The Router successfully communicates with the Brain through a serial USB connection, which means data can be requested by, or sent from, the Brain and the Router sends an appropriate response, actuating devices if necessary. To control the motor, the Router uses a PID controller to match a target velocity sent by the Brain, measuring the current velocity for feedback.

## Velocity Measurement

Initially, I measured velocity using one wheel-mounted magnet and a Hall-effect sensor to detect when a revolution had occurred. For slow speeds, this resulted in very long delays between measurements, so I needed to find a way to increase the resolution. I tried using an accelerometer on an MPU6050 to calculate intermediate changes in speed (i.e. acceleration) so the velocity would be more up-to-date, but I ran into issues calibrating the MPU6050 and was getting incorrect readings. I pivotted to a fully-wheel-based system, mounting 8 magnets on the wheel instead of one. So far, the readings have been fairly accurate and occur frequently enough that the integral component of the PID controller can compensate for low-speed errors.

## The Current Issue

When I said the Router "controls" the motor, that may have been overzealous. The car's motion does not agree with the Brain's commands _at all_. When given a target velocity, sometimes it refuses to accelerate, and other times it greatly overshoots the target before shutting down the motor to slow down. Obviously, the Router PID parameters need to be tuned, but I am also fighting the latency and mechanics of the ESC. This is the current blocking issue, and once I fix it, I can begin testing mapping and localization.
