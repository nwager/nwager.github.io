import { base } from "$app/paths";
import type { NonemptyArray } from "$lib/types";

export interface ProjectData {
  title: string;
  description: string;
  images: NonemptyArray<string>; // path of "images/[project]"
  links?: NonemptyArray<[string, string]>; // [text, href]
  styleOverride?: string; // additional image styling
}

const postPath = base + "/";

export const projects: ProjectData[] = [
  {
    title: "Robocar",
    description: "Autonomous RC car powered by a Jetson Nano.",
    images: [
      "images/robocar/robocar-lidar-front-1024.jpg",
      "images/robocar/robocar-lidar-back-1024.jpg",
      "images/robocar/robocar-before-1024.jpg",
    ],
    links: [
      ["Home page", postPath + "robocar"],
    ],
    styleOverride: "object-position:center",
  },
  {
    title: "Matterport Space Search",
    description: "I interned at Matterport in summer 2021, where I worked on the front-end web-app team. I was able to write and push code to the production codebase, and my summer-long project was to design and implement the prototype for a new feature called Space Search. Users can search and filter through a space's Mattertags, room labels, etc. to better navigate and organize spacial data.",
    images: [
      "images/mp-sps/sps-ewf-1024.jpg"
    ],
    links: [
      ["View this space", "https://my.matterport.com/show/?m=ugH9NdUC3aC&q=september"]
    ],
  },
  {
    title: "Matterport UI Panel",
    description: "Another one of my Matterport additions was the new title panel. Previously, the title was a small box in the top corner, so it was redesigned to fit with the style of the other panels. This new panel shows a preview image of the space and summarizing information about the space and owners.",
    images: [
      "images/mp-title/mp-menu-marked-1024.jpg"
    ],
    links: [
      ["View this space", "https://my.matterport.com/show/?m=CRg23STmKZp"]
    ],
  },
  {
    title: "This Website",
    description: "Built with SvelteKit and hosted by GitHub Pages, this website shows snippets of my personal and professional projects. In addition to sharing my work, creating this site has taught me a great deal about Svelte and SvelteKit, from syntax to routing. After using React's virtual DOM for so many sites and apps, the compiled nature of Svelte is rather refreshing.",
    images: [
      "images/portfolio/portfolio-home-1024.jpg",
      "images/portfolio/portfolio-carousel-1024.jpg",
      "images/portfolio/portfolio-about-1024.jpg",
    ],
    links: [
      ["GitHub", "https://github.com/nwager/nwager.github.io"],
    ],
  },
  {
    title: "ESP8266 WiFi LED Lighting",
    description: "To spice up my room lighting, I created an LED strip controller using an ESP8266. The chip serves a webpage that controls HSV and animation style using HTTP requests, which makes lighting adjustments quick and convenient. The hardware consists of a 12V source that sends power to a WS2811 LED strip, as well as a 5V buck converter that drives the ESP8266 and an optional WS2812B strip that tells time in binary (not active due to conflicts with apartment aesthetics).",
    images: [
      "images/esp8266-leds/esp8266-both-1024.jpg",
      "images/esp8266-leds/esp8266-leds-1024.jpg",
      "images/esp8266-leds/esp8266-leds-box-1024.jpg",
      "images/esp8266-leds/esp8266-site-1024.jpg",
    ],
    links: [
      ["Read more", postPath + "esp8266-leds"],
      ["Github", "https://github.com/nwager/dorm-lights"],
    ],
    styleOverride: "object-position:center",
  },
  {
    title: "React + ThreeJS Demo",
    description: "I created a website using Create React App and ThreeJS to practice using React and WebGL. It's a simple website meant to demonstrate the integration of a dynamic ThreeJS scene with functional UI elements. The scene features a whale swimming in circles through randomly-positioned rings, accompanied by overlayed text, links, and a contact form.",
    images: [
      "images/r3js/r3js-main-1024.jpg",
      "images/r3js/r3js-contact-1024.jpg",
    ],
    links: [
      ["Website", "https://nwager.github.io/react-threejs/"],
      ["GitHub", "https://github.com/nwager/react-threejs"],
    ],
  },
  {
    title: "DIY Fume Extractor",
    description: "I designed a case for a fan and carbon filter in Fusion 360 and then 3D-printed it. My DIY soldering station needed ventilation, and it just so happens that used computer fans are fairly inexpensive.",
    images: [
      "images/fume-extractor/fume-ext-face-1024.jpg",
      "images/fume-extractor/fume-ext-rear-1024.jpg",
      "images/fume-extractor/fume-ext-disas-1024.jpg",
      "images/fume-extractor/fume-ext-halfdisas-1024.jpg",
    ],
    links: [
      ["More info", "https://github.com/nwager/3dp-fume-extractor-case/"],
    ],
    styleOverride: "object-position:center",
  },
  {
    title: "Pi Day 2021",
    description: "This project was a small celebration of Pi Day on 3/14/2021. It illustrates the limiting behavior of the Archimedes method of approximating pi, which involves calculating the circumference of a regular polygon inscribed in a circle. As the number of sides increases, the circumference approaches that of the circle, from which pi can be extracted.",
    images: [
      "images/pi-day/pi-day-cap-1024.jpg",
    ],
    links: [
      ["Website", "https://nwager.github.io/pi-day-2021/"],
      ["GitHub", "https://github.com/nwager/pi-day-2021"],
    ],
  },
  {
    title: "Music Maker",
    description: "This is a virtual synth I put together using HTML/CSS/JS for my Personal Learning Experience in my junior year Theory of Knowledge class in high school. My objective was to learn a JavaScript project, and a synth seemed to adequately combine my interest in music and programming.",
    images: [
      "images/music-maker/music-maker-cap-1024.jpg",
    ],
    links: [
      ["Website", "https://nwager.github.io/music-maker/"],
      ["GitHub", "https://github.com/nwager/music-maker"],
    ],
  },
  {
    title: "CS IA - Circular Motion",
    description: "IA stands for Internal Assessment, which is a large project required by the International Baccalaureate. For my CS IA in my senior year of high school, I made a website containing simulations of uniform circular motion using JS canvas. As well as programming, the project included design processes and documentation.",
    images: [
      "images/circular-motion/csia-circle-1024.jpg",
      "images/circular-motion/csia-turntable-1024.jpg",
      "images/circular-motion/csia-angled-string-1024.jpg",
      "images/circular-motion/csia-recording.gif",
    ],
    links: [
      ["Website", "https://nwager.github.io/CircularMotion/"],
      ["GitHub", "https://github.com/nwager/CircularMotion"],
    ],
  },
];
