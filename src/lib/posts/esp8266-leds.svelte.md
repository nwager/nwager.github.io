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

![ESP8266 controller and active LED strip]({base}/images/esp8266-leds/esp8266-both-1024.jpg)

As a college student, it was customary to cover the apartment ceiling with tacky LED strips that detract from the otherwise-cozy home decor. Programming addressable LED strips with microcontrollers is one of my favorite electronics activities, so I used an ESP8266 to control the LEDs using WiFi (in the name of convenience).