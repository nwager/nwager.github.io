import type { NonemptyArray } from "$lib/utils";

export interface ProjectData {
  title: string;
  description: string;
  images: NonemptyArray<string>;
  links: NonemptyArray<[string, string]>;
}

export const projects: ProjectData[] = [
  {
    title: "Matterport UI Panel",
    description: "I interned at Matterport in summer 2021, where I worked on the front-end web-app team. I was able to write and push code to the production codebase, and one of my additions was the new title panel. Previously, the title was a small box in the top corner, so it was redesigned to fit with the style of the other panels.",
    images: [
      "images/matterport/mp-menu-marked-1024.jpg"
    ],
    links: [
      ["View this model", "https://my.matterport.com/show/?m=CRg23STmKZp"]
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
    description: "This is a virtual synth I put together using HTML/CSS/JS for my Personal Learning Experience in my junior year Theory of Knowledge class. My objective was to learn a JavaScript project, and a synth seemed to adequately combine my interest in music and programming.",
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
    description: "IA stands for Internal Assessment, which is a large project required by the International Baccalaureate. For my CS IA in senior year, I made a website containing simulations of uniform circular motion using JS canvas. As well as programming, the project included design processes and documentation.",
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
