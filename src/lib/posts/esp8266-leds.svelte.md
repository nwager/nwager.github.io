---
title: "ESP8266 WiFi LED Lighting"
description: "A ceiling-mounted LED strip controlled by an ESP8266 web server."
author: "Noah Wager"
date: "2021-06-22"
published: true
---

<script>
  import { base } from "$app/paths";
</script>

![ESP8266 controller enclosure and circuit board]({base}/images/esp8266-leds/esp8266-both-1024.jpg)

As a college student, it was customary to cover the apartment ceiling with tacky LED strips that detract from the otherwise-cozy home decor. Programming addressable LED strips is one of my favorite electronics activities, so I used an ESP8266 to control the LEDs using WiFi (in the name of convenience).

## Hardware

To make the controller compact, I designed a simple PCB to hold the ESP8266, buck converter, PSU terminals, and 3.3V-5V level shifter (hidden underneath the ESP).

WS2811 strips require 12V, and my specific strip drew around 75W. I decided to use a 150W 12V power supply to have a sizeable power cushion, with room to extend the LED strip in the future. I also included a 1000uF smoothing capacitor for good measure.

To power the ESP8266, I used a 5V buck converter board with header pins that slot into corresponding connectors on the PCB. The ESP operates at 3.3V while the WS2811s use 5V, so I pass the datalines through a 5V level shifter IC (SN74HCT245) and 330-ohm resistors for safety.

## Software

The ESP serves an HTML page stored in program memory. This page contains HTTP POSTs to send commands from the webpage to the ESP (i.e. color selection, on-off toggling, animation selection). Upon receiving these messages, the ESP updates the lights accordingly and sends back a response so the webpage is up-to-date.

To control the LEDs, I used the popular library [FastLED](https://fastled.io/). It provides an API to change the LED HSV values and individually address each pixel.

## What about the loose connector on the left?

For fun, I added support for a "clock" that displays the current time in binary on a WS2812B strip. 12-hour time can be displayed in 10 bits: 4 for hours 0-11, and 6 for minutes 0-59. To separate the hours and minutes, a single LED between them toggles every second. In total, the WS2812B strip needs 11 pixels. Unfortunately, I wasn't able to create a housing for the clock that fits aesthetically, so I disconnected the feature.

## Summary

This project was a fun exercise in simple web-based apps using an ESP8266, with pretty lights as visual feedback (my favorite kind of feedback!). The available controls are fairly basic, and much more interesting animations are possible with FastLED. However, on the rare occasions where the LEDs are turned on, the ability to finely control the color with a mobile device is good enough.

![LED strip turned on]({base}/images/esp8266-leds/esp8266-leds-1024.jpg)
