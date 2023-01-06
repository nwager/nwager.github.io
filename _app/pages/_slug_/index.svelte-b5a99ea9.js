import{S as it,i as lt,s as nt,e as i,k as u,t as n,c as l,a as c,d as e,m as f,h,Q as st,b as v,g as s,I as t,n as He,x as Kt,y as oo,z as Xt,j as ro,p as Yt,q as ao,r as Qt,C as Zt,o as so}from"../../chunks/index-b588d774.js";import{b as Qe}from"../../chunks/paths-396f020f.js";import{s as io}from"../../chunks/utils-8309f6d0.js";function lo(q){let d,g,T,y,I,_,x,E,J,b,P,j,K,L,he,X,D,ce,Y,H,ue,Q,k,fe,U,W,pe,Z,M,de,ee,S,me,C,te,we,B,V,ve,oe,A,be,re,R,ye,N,z,_e,F,O,ae,$;return{c(){d=i("p"),g=i("img"),y=u(),I=i("p"),_=n("As a college student, it was customary to cover the apartment ceiling with tacky LED strips that detract from the otherwise-cozy home decor. Programming addressable LED strips is one of my favorite electronics activities, so I used an ESP8266 to control the LEDs using WiFi (in the name of convenience)."),x=u(),E=i("p"),J=n("The poorly-documented code can be found on "),b=i("a"),P=n("Github"),j=n("."),K=u(),L=i("h2"),he=n("Hardware"),X=u(),D=i("p"),ce=n("To make the controller compact, I designed a simple PCB to hold the ESP8266, buck converter, PSU terminals, and 3.3V-5V level shifter (hidden underneath the ESP)."),Y=u(),H=i("p"),ue=n("WS2811 strips require 12V, and my specific strip drew around 75W. I decided to use a 150W 12V power supply to have a sizeable power cushion, with room to extend the LED strip in the future. I also included a 1000uF smoothing capacitor for good measure."),Q=u(),k=i("p"),fe=n("To power the ESP8266, I used a 5V buck converter board with header pins that slot into corresponding connectors on the PCB. The ESP operates at 3.3V while the WS2811s use 5V, so I pass the datalines through a 5V level shifter IC (SN74HCT245) and 330-ohm resistors for safety."),U=u(),W=i("h2"),pe=n("Software"),Z=u(),M=i("p"),de=n("The ESP serves an HTML page stored in program memory. This page contains HTTP POSTs to send commands from the webpage to the ESP (i.e. color selection, on-off toggling, animation selection). Upon receiving these messages, the ESP updates the lights accordingly and sends back a response so the webpage is up-to-date."),ee=u(),S=i("p"),me=n("To control the LEDs, I used the popular library "),C=i("a"),te=n("FastLED"),we=n(". It provides an API to change the LED HSV values and individually address each pixel."),B=u(),V=i("h2"),ve=n("What about the loose connector on the left?"),oe=u(),A=i("p"),be=n("For fun, I added support for a \u201Cclock\u201D that displays the current time in binary on a WS2812B strip. 12-hour time can be displayed in 10 bits: 4 for hours 0-11, and 6 for minutes 0-59. To separate the hours and minutes, a single LED between them toggles every second. In total, the WS2812B strip needs 11 pixels. Unfortunately, I wasn\u2019t able to create a housing for the clock that fits aesthetically, so I disconnected the feature."),re=u(),R=i("h2"),ye=n("Summary"),N=u(),z=i("p"),_e=n("This project was a fun exercise in simple web-based apps using an ESP8266, with pretty lights as visual feedback (my favorite kind of feedback!). The available controls are fairly basic, and much more interesting animations are possible with FastLED. However, on the rare occasions where the LEDs are turned on, the ability to finely control the color with a mobile device is good enough."),F=u(),O=i("p"),ae=i("img"),this.h()},l(a){d=l(a,"P",{});var m=c(d);g=l(m,"IMG",{src:!0,alt:!0}),m.forEach(e),y=f(a),I=l(a,"P",{});var r=c(I);_=h(r,"As a college student, it was customary to cover the apartment ceiling with tacky LED strips that detract from the otherwise-cozy home decor. Programming addressable LED strips is one of my favorite electronics activities, so I used an ESP8266 to control the LEDs using WiFi (in the name of convenience)."),r.forEach(e),x=f(a),E=l(a,"P",{});var p=c(E);J=h(p,"The poorly-documented code can be found on "),b=l(p,"A",{href:!0,rel:!0});var ge=c(b);P=h(ge,"Github"),ge.forEach(e),j=h(p,"."),p.forEach(e),K=f(a),L=l(a,"H2",{});var se=c(L);he=h(se,"Hardware"),se.forEach(e),X=f(a),D=l(a,"P",{});var Se=c(D);ce=h(Se,"To make the controller compact, I designed a simple PCB to hold the ESP8266, buck converter, PSU terminals, and 3.3V-5V level shifter (hidden underneath the ESP)."),Se.forEach(e),Y=f(a),H=l(a,"P",{});var Re=c(H);ue=h(Re,"WS2811 strips require 12V, and my specific strip drew around 75W. I decided to use a 150W 12V power supply to have a sizeable power cushion, with room to extend the LED strip in the future. I also included a 1000uF smoothing capacitor for good measure."),Re.forEach(e),Q=f(a),k=l(a,"P",{});var Pe=c(k);fe=h(Pe,"To power the ESP8266, I used a 5V buck converter board with header pins that slot into corresponding connectors on the PCB. The ESP operates at 3.3V while the WS2811s use 5V, so I pass the datalines through a 5V level shifter IC (SN74HCT245) and 330-ohm resistors for safety."),Pe.forEach(e),U=f(a),W=l(a,"H2",{});var ie=c(W);pe=h(ie,"Software"),ie.forEach(e),Z=f(a),M=l(a,"P",{});var Te=c(M);de=h(Te,"The ESP serves an HTML page stored in program memory. This page contains HTTP POSTs to send commands from the webpage to the ESP (i.e. color selection, on-off toggling, animation selection). Upon receiving these messages, the ESP updates the lights accordingly and sends back a response so the webpage is up-to-date."),Te.forEach(e),ee=f(a),S=l(a,"P",{});var le=c(S);me=h(le,"To control the LEDs, I used the popular library "),C=l(le,"A",{href:!0,rel:!0});var G=c(C);te=h(G,"FastLED"),G.forEach(e),we=h(le,". It provides an API to change the LED HSV values and individually address each pixel."),le.forEach(e),B=f(a),V=l(a,"H2",{});var ke=c(V);ve=h(ke,"What about the loose connector on the left?"),ke.forEach(e),oe=f(a),A=l(a,"P",{});var Ie=c(A);be=h(Ie,"For fun, I added support for a \u201Cclock\u201D that displays the current time in binary on a WS2812B strip. 12-hour time can be displayed in 10 bits: 4 for hours 0-11, and 6 for minutes 0-59. To separate the hours and minutes, a single LED between them toggles every second. In total, the WS2812B strip needs 11 pixels. Unfortunately, I wasn\u2019t able to create a housing for the clock that fits aesthetically, so I disconnected the feature."),Ie.forEach(e),re=f(a),R=l(a,"H2",{});var Le=c(R);ye=h(Le,"Summary"),Le.forEach(e),N=f(a),z=l(a,"P",{});var De=c(z);_e=h(De,"This project was a fun exercise in simple web-based apps using an ESP8266, with pretty lights as visual feedback (my favorite kind of feedback!). The available controls are fairly basic, and much more interesting animations are possible with FastLED. However, on the rare occasions where the LEDs are turned on, the ability to finely control the color with a mobile device is good enough."),De.forEach(e),F=f(a),O=l(a,"P",{});var Ee=c(O);ae=l(Ee,"IMG",{src:!0,alt:!0}),Ee.forEach(e),this.h()},h(){st(g.src,T=Qe+"/images/esp8266-leds/esp8266-both-1024.jpg")||v(g,"src",T),v(g,"alt","ESP8266 controller enclosure and circuit board"),v(b,"href","https://github.com/nwager/dorm-lights"),v(b,"rel","nofollow"),v(C,"href","https://fastled.io/"),v(C,"rel","nofollow"),st(ae.src,$=Qe+"/images/esp8266-leds/esp8266-leds-1024.jpg")||v(ae,"src",$),v(ae,"alt","LED strip turned on")},m(a,m){s(a,d,m),t(d,g),s(a,y,m),s(a,I,m),t(I,_),s(a,x,m),s(a,E,m),t(E,J),t(E,b),t(b,P),t(E,j),s(a,K,m),s(a,L,m),t(L,he),s(a,X,m),s(a,D,m),t(D,ce),s(a,Y,m),s(a,H,m),t(H,ue),s(a,Q,m),s(a,k,m),t(k,fe),s(a,U,m),s(a,W,m),t(W,pe),s(a,Z,m),s(a,M,m),t(M,de),s(a,ee,m),s(a,S,m),t(S,me),t(S,C),t(C,te),t(S,we),s(a,B,m),s(a,V,m),t(V,ve),s(a,oe,m),s(a,A,m),t(A,be),s(a,re,m),s(a,R,m),t(R,ye),s(a,N,m),s(a,z,m),t(z,_e),s(a,F,m),s(a,O,m),t(O,ae)},p:He,i:He,o:He,d(a){a&&e(d),a&&e(y),a&&e(I),a&&e(x),a&&e(E),a&&e(K),a&&e(L),a&&e(X),a&&e(D),a&&e(Y),a&&e(H),a&&e(Q),a&&e(k),a&&e(U),a&&e(W),a&&e(Z),a&&e(M),a&&e(ee),a&&e(S),a&&e(B),a&&e(V),a&&e(oe),a&&e(A),a&&e(re),a&&e(R),a&&e(N),a&&e(z),a&&e(F),a&&e(O)}}}const no={title:"ESP8266 WiFi LED Lighting",description:"A ceiling-mounted LED strip controlled by an ESP8266 web server.",author:"Noah Wager",date:"2021-06-22",published:!0};class ho extends it{constructor(d){super();lt(this,d,null,lo,nt,{})}}var co=Object.freeze(Object.defineProperty({__proto__:null,default:ho,metadata:no},Symbol.toStringTag,{value:"Module"}));function uo(q){let d,g,T,y,I,_,x,E,J,b,P,j,K,L,he,X,D,ce,Y,H,ue,Q,k,fe,U,W,pe,Z,M,de,ee,S,me,C,te,we,B,V,ve,oe,A,be,re,R,ye,N,z,_e,F,O,ae,$,a,m;return{c(){d=i("p"),g=n("Hello, world! This is the first update of my Robocar project. It seems this project will take me a fairly long time to complete, so I\u2019m batching updates in a progress report of sorts. This update encompasses my work over the past (very slow) month. Below is an image of the Robocar in it\u2019s current state."),T=u(),y=i("p"),I=i("img"),x=u(),E=i("em"),J=n("The front of an in-progress Robocar with a LIDAR module mounted and various wires connecting to the Pico."),b=u(),P=i("h2"),j=n("Summary"),K=u(),L=i("p"),he=n("The Router successfully routes commands from the Brain to the peripherals, which allows the car to move based on user input to the Brain with an Xbox One controller. I\u2019ve successfully made a high-latency, difficult-to-control, very expensive RC car. Yay."),X=u(),D=i("h2"),ce=n("Hardware Progress"),Y=u(),H=i("p"),ue=n("As per MuSHR recommendations, I replaced the stock motor on the RC car chassis with a more powerful one, installed a capable ESC, and upgraded the steering servo. This process was fairly straightforward, albeit laborious, with the exception of the motor. I have learned that thread-locker is indeed very good at locking a screw, which meant I stripped the grub screw attaching the pinion gear to the stock motor shaft. I had to use a dremel to saw off the motor, but I was eventually successful."),Q=u(),k=i("p"),fe=n("To mount the electronics, I modeled some basic geometric parts that were fastened to the chassis with M3 screws and nuts. The parts had holes for the Nano, LIDAR, and buck-converter (to convert from 2S LiPo voltage to 5V) which were fastened using M3 screws as well. Once the vehicle can successfully drive with LIDAR data, as in the CSE 478 course, I will print another piece to mount a USB webcam that will be used for computer vision."),U=u(),W=i("h2"),pe=n("ROS Progress"),Z=u(),M=i("p"),de=n("The project has four main code bases: the ROS workspace on the host machine (a desktop PC), the ROS workspace on the Brain, the source for Robocar logic, and the Router codebase. I was able to get ROS Melodic running on the Nano (Ubuntu 18.04) and the host machine (on an Ubuntu 18.04 VM) and wrote the logic for LIDAR localization."),ee=u(),S=i("p"),me=n("As I learned from class, this LIDAR localization involves a predefined map and a particle filter that continously updates on new LIDAR data to estimate the position and orientation of the robot. Data is passed around using the ROS messenger/subscriber framework to keep things asynchronous. While this code passes the few tests I\u2019ve written, it has yet to be tested on the vehicle because of issues regarding motor control."),C=u(),te=i("h2"),we=n("Motor Control Through the Router"),B=u(),V=i("p"),ve=n("The Router successfully communicates with the Brain through a serial USB connection, which means data can be requested by, or sent from, the Brain and the Router sends an appropriate response, actuating devices if necessary. To control the motor, the Router uses a PID controller to match a target velocity sent by the Brain, measuring the current velocity for feedback."),oe=u(),A=i("h2"),be=n("Velocity Measurement"),re=u(),R=i("p"),ye=n("Initially, I measured velocity using one wheel-mounted magnet and a Hall-effect sensor to detect when a revolution had occurred. For slow speeds, this resulted in very long delays between measurements, so I needed to find a way to increase the resolution. I tried using an accelerometer on an MPU6050 to calculate intermediate changes in speed (i.e. acceleration) so the velocity would be more up-to-date, but I ran into issues calibrating the MPU6050 and was getting incorrect readings. I pivotted to a fully-wheel-based system, mounting 8 magnets on the wheel instead of one. So far, the readings have been fairly accurate and occur frequently enough that the integral component of the PID controller can compensate for low-speed errors."),N=u(),z=i("h2"),_e=n("The Current Issue"),F=u(),O=i("p"),ae=n("When I said the Router \u201Ccontrols\u201D the motor, that may have been overzealous. The car\u2019s motion does not agree with the Brain\u2019s commands "),$=i("em"),a=n("at all"),m=n(". When given a target velocity, sometimes it refuses to accelerate, and other times it greatly overshoots the target before shutting down the motor to slow down. Obviously, the Router PID parameters need to be tuned, but I am also fighting the latency and mechanics of the ESC. This is the current blocking issue, and once I fix it, I can begin testing mapping and localization."),this.h()},l(r){d=l(r,"P",{});var p=c(d);g=h(p,"Hello, world! This is the first update of my Robocar project. It seems this project will take me a fairly long time to complete, so I\u2019m batching updates in a progress report of sorts. This update encompasses my work over the past (very slow) month. Below is an image of the Robocar in it\u2019s current state."),p.forEach(e),T=f(r),y=l(r,"P",{});var ge=c(y);I=l(ge,"IMG",{src:!0,alt:!0}),x=f(ge),E=l(ge,"EM",{});var se=c(E);J=h(se,"The front of an in-progress Robocar with a LIDAR module mounted and various wires connecting to the Pico."),se.forEach(e),ge.forEach(e),b=f(r),P=l(r,"H2",{});var Se=c(P);j=h(Se,"Summary"),Se.forEach(e),K=f(r),L=l(r,"P",{});var Re=c(L);he=h(Re,"The Router successfully routes commands from the Brain to the peripherals, which allows the car to move based on user input to the Brain with an Xbox One controller. I\u2019ve successfully made a high-latency, difficult-to-control, very expensive RC car. Yay."),Re.forEach(e),X=f(r),D=l(r,"H2",{});var Pe=c(D);ce=h(Pe,"Hardware Progress"),Pe.forEach(e),Y=f(r),H=l(r,"P",{});var ie=c(H);ue=h(ie,"As per MuSHR recommendations, I replaced the stock motor on the RC car chassis with a more powerful one, installed a capable ESC, and upgraded the steering servo. This process was fairly straightforward, albeit laborious, with the exception of the motor. I have learned that thread-locker is indeed very good at locking a screw, which meant I stripped the grub screw attaching the pinion gear to the stock motor shaft. I had to use a dremel to saw off the motor, but I was eventually successful."),ie.forEach(e),Q=f(r),k=l(r,"P",{});var Te=c(k);fe=h(Te,"To mount the electronics, I modeled some basic geometric parts that were fastened to the chassis with M3 screws and nuts. The parts had holes for the Nano, LIDAR, and buck-converter (to convert from 2S LiPo voltage to 5V) which were fastened using M3 screws as well. Once the vehicle can successfully drive with LIDAR data, as in the CSE 478 course, I will print another piece to mount a USB webcam that will be used for computer vision."),Te.forEach(e),U=f(r),W=l(r,"H2",{});var le=c(W);pe=h(le,"ROS Progress"),le.forEach(e),Z=f(r),M=l(r,"P",{});var G=c(M);de=h(G,"The project has four main code bases: the ROS workspace on the host machine (a desktop PC), the ROS workspace on the Brain, the source for Robocar logic, and the Router codebase. I was able to get ROS Melodic running on the Nano (Ubuntu 18.04) and the host machine (on an Ubuntu 18.04 VM) and wrote the logic for LIDAR localization."),G.forEach(e),ee=f(r),S=l(r,"P",{});var ke=c(S);me=h(ke,"As I learned from class, this LIDAR localization involves a predefined map and a particle filter that continously updates on new LIDAR data to estimate the position and orientation of the robot. Data is passed around using the ROS messenger/subscriber framework to keep things asynchronous. While this code passes the few tests I\u2019ve written, it has yet to be tested on the vehicle because of issues regarding motor control."),ke.forEach(e),C=f(r),te=l(r,"H2",{});var Ie=c(te);we=h(Ie,"Motor Control Through the Router"),Ie.forEach(e),B=f(r),V=l(r,"P",{});var Le=c(V);ve=h(Le,"The Router successfully communicates with the Brain through a serial USB connection, which means data can be requested by, or sent from, the Brain and the Router sends an appropriate response, actuating devices if necessary. To control the motor, the Router uses a PID controller to match a target velocity sent by the Brain, measuring the current velocity for feedback."),Le.forEach(e),oe=f(r),A=l(r,"H2",{});var De=c(A);be=h(De,"Velocity Measurement"),De.forEach(e),re=f(r),R=l(r,"P",{});var Ee=c(R);ye=h(Ee,"Initially, I measured velocity using one wheel-mounted magnet and a Hall-effect sensor to detect when a revolution had occurred. For slow speeds, this resulted in very long delays between measurements, so I needed to find a way to increase the resolution. I tried using an accelerometer on an MPU6050 to calculate intermediate changes in speed (i.e. acceleration) so the velocity would be more up-to-date, but I ran into issues calibrating the MPU6050 and was getting incorrect readings. I pivotted to a fully-wheel-based system, mounting 8 magnets on the wheel instead of one. So far, the readings have been fairly accurate and occur frequently enough that the integral component of the PID controller can compensate for low-speed errors."),Ee.forEach(e),N=f(r),z=l(r,"H2",{});var Be=c(z);_e=h(Be,"The Current Issue"),Be.forEach(e),F=f(r),O=l(r,"P",{});var Me=c(O);ae=h(Me,"When I said the Router \u201Ccontrols\u201D the motor, that may have been overzealous. The car\u2019s motion does not agree with the Brain\u2019s commands "),$=l(Me,"EM",{});var Oe=c($);a=h(Oe,"at all"),Oe.forEach(e),m=h(Me,". When given a target velocity, sometimes it refuses to accelerate, and other times it greatly overshoots the target before shutting down the motor to slow down. Obviously, the Router PID parameters need to be tuned, but I am also fighting the latency and mechanics of the ESC. This is the current blocking issue, and once I fix it, I can begin testing mapping and localization."),Me.forEach(e),this.h()},h(){st(I.src,_=Qe+"/images/robocar/robocar-lidar-front-1024.jpg")||v(I,"src",_),v(I,"alt","Front of in-progress Robocar with LIDAR mounted.")},m(r,p){s(r,d,p),t(d,g),s(r,T,p),s(r,y,p),t(y,I),t(y,x),t(y,E),t(E,J),s(r,b,p),s(r,P,p),t(P,j),s(r,K,p),s(r,L,p),t(L,he),s(r,X,p),s(r,D,p),t(D,ce),s(r,Y,p),s(r,H,p),t(H,ue),s(r,Q,p),s(r,k,p),t(k,fe),s(r,U,p),s(r,W,p),t(W,pe),s(r,Z,p),s(r,M,p),t(M,de),s(r,ee,p),s(r,S,p),t(S,me),s(r,C,p),s(r,te,p),t(te,we),s(r,B,p),s(r,V,p),t(V,ve),s(r,oe,p),s(r,A,p),t(A,be),s(r,re,p),s(r,R,p),t(R,ye),s(r,N,p),s(r,z,p),t(z,_e),s(r,F,p),s(r,O,p),t(O,ae),t(O,$),t($,a),t(O,m)},p:He,i:He,o:He,d(r){r&&e(d),r&&e(T),r&&e(y),r&&e(b),r&&e(P),r&&e(K),r&&e(L),r&&e(X),r&&e(D),r&&e(Y),r&&e(H),r&&e(Q),r&&e(k),r&&e(U),r&&e(W),r&&e(Z),r&&e(M),r&&e(ee),r&&e(S),r&&e(C),r&&e(te),r&&e(B),r&&e(V),r&&e(oe),r&&e(A),r&&e(re),r&&e(R),r&&e(N),r&&e(z),r&&e(F),r&&e(O)}}}const fo={title:"Robocar Update 1/4/2022",description:"The first update of a WIP autonomous RC car.",author:"Noah Wager",date:"2022-01-04",published:!0};class po extends it{constructor(d){super();lt(this,d,null,uo,nt,{})}}var mo=Object.freeze(Object.defineProperty({__proto__:null,default:po,metadata:fo},Symbol.toStringTag,{value:"Module"}));function wo(q){let d,g,T,y,I,_,x,E,J,b,P,j,K,L,he,X,D,ce,Y,H,ue,Q,k,fe,U,W,pe,Z,M,de,ee,S,me,C,te,we,B,V,ve,oe,A,be,re,R,ye,N,z,_e,F,O,ae,$,a,m,r,p,ge,se,Se,Re,Pe,ie,Te,le,G,ke,Ie,Le,De,Ee,Be,Me,Oe,Ve,ht,Ze,ne,Ge,xe,ct,ut,Je,je,ft,pt,Ke,Ue,dt,mt,Xe,We,wt,et,Ne,vt,tt,ze,Ye,Fe,bt;return{c(){d=i("h2"),g=n("Introduction"),T=u(),y=i("p"),I=i("img"),x=u(),E=i("em"),J=n("The front of an in-progress Robocar with a LIDAR module mounted and various wires connecting to the Pico."),b=u(),P=i("h3"),j=n("Objectives"),K=u(),L=i("p"),he=n("This project requires a good amount of effort to complete, so why am I doing this?"),X=u(),D=i("p"),ce=n("I\u2019m pursuing this because it provides an exciting opportunity to learn new skills in embedded systems and robotics and improve my C and Python knowledge. My greatests interest in the technology sector is intelligent computer systems interfacing with hardware, and yet I have little experience in the field outside of school. Throughout this project, which is very much a work-in-progress, I hope to gain some of that experience in a way that is challenging and enjoyable."),Y=u(),H=i("h3"),ue=n("UW Inpiration"),Q=u(),k=i("p"),fe=n("\u201CRobocar\u201D is a project I started over the summer of 2022, heavily inspired by the Autonomous Robotics (CSE 478) course at the University of Washington. The class consisted of a simulator for the "),U=i("a"),W=n("MuSHR"),pe=n(" vehicle with an incomplete ROS stack that students implemented over the quarter. We learned the basics of localization, control theory, and planning, culminating in a semi-robust car that could follow a path in a predetermined map while avoiding obstacles. Unfortunately, COVID prevented the class from working with physical vehicles, so I was left unsatisfied in the hardware department. Hence, the existence of this project."),Z=u(),M=i("h3"),de=n("System Overview"),ee=u(),S=i("p"),me=n("Like MuSHR, my car would use a Jetson Nano ("),C=i("a"),te=n("Seeed reComputer J1010"),we=n(") running "),B=i("a"),V=n("ROS Melodic"),ve=n(" to process data and calculate controls."),oe=u(),A=i("p"),be=n("The Nano is a very capable and somewhat-affordable SoC with a GPU, which made it the best choice for a small autonomous vehicle project. It can reliably synthesize LIDAR and camera data to localize the robot and detect objects, which is needed for the system."),re=u(),R=i("p"),ye=n("Unlike MuSHR, which uses a "),N=i("a"),z=n("VESC"),_e=n(", I chose a cheap PWM-operated ESC. The VESC would normally handle motor control and steering, so in its place I incorporated a "),F=i("a"),O=n("Raspberry Pi Pico"),ae=n(" that takes commands from the Nano. Since there are various sensors, inputs, and other tasks to perform simultaneously on the Pico, it uses "),$=i("a"),a=n("FreeRTOS"),m=n("."),r=u(),p=i("p"),ge=n("The Pico was chosen mainly for its $4 price while offering two 125MHz cores and a well-documented C/C++ SDK from Raspberry Pi. FreeRTOS has a "),se=i("a"),Se=n("symmetric multiprocessing (SMP) port"),Re=n(" that can utilize both cores, which sweetens the deal even further."),Pe=u(),ie=i("h3"),Te=n("A Note on Naming"),le=u(),G=i("p"),ke=n("I needed to give the Jetson Nano and Raspberry Pi Pico generic names instead of \u201CNano\u201D and \u201CPico\u201D so I could theoretically switch out hardware without changing names in code. I decided on "),Ie=i("strong"),Le=n("Brain"),De=n(" for the Nano and "),Ee=i("strong"),Be=n("Router"),Me=n(" for the Pico because the \u201CBrain\u201D carries out the central computations and sends signals to the auxiliary device, and the \u201CRouter\u201D takes those signals and routes them to the corresponding peripheral."),Oe=u(),Ve=i("h2"),ht=n("Github Repositories"),Ze=u(),ne=i("ul"),Ge=i("li"),xe=i("a"),ct=n("Robocar automation source code"),ut=u(),Je=i("li"),je=i("a"),ft=n("Onboard ROS Melodic (catkin) workspace"),pt=u(),Ke=i("li"),Ue=i("a"),dt=n("Host machine Melodic (catkin) workspace"),mt=u(),Xe=i("li"),We=i("a"),wt=n("Auxiliary peripheral router system"),et=u(),Ne=i("h2"),vt=n("Updates"),tt=u(),ze=i("ul"),Ye=i("li"),Fe=i("a"),bt=n("Update 1/4/2022"),this.h()},l(o){d=l(o,"H2",{});var w=c(d);g=h(w,"Introduction"),w.forEach(e),T=f(o),y=l(o,"P",{});var ot=c(y);I=l(ot,"IMG",{src:!0,alt:!0}),x=f(ot),E=l(ot,"EM",{});var yt=c(E);J=h(yt,"The front of an in-progress Robocar with a LIDAR module mounted and various wires connecting to the Pico."),yt.forEach(e),ot.forEach(e),b=f(o),P=l(o,"H3",{});var _t=c(P);j=h(_t,"Objectives"),_t.forEach(e),K=f(o),L=l(o,"P",{});var gt=c(L);he=h(gt,"This project requires a good amount of effort to complete, so why am I doing this?"),gt.forEach(e),X=f(o),D=l(o,"P",{});var It=c(D);ce=h(It,"I\u2019m pursuing this because it provides an exciting opportunity to learn new skills in embedded systems and robotics and improve my C and Python knowledge. My greatests interest in the technology sector is intelligent computer systems interfacing with hardware, and yet I have little experience in the field outside of school. Throughout this project, which is very much a work-in-progress, I hope to gain some of that experience in a way that is challenging and enjoyable."),It.forEach(e),Y=f(o),H=l(o,"H3",{});var Et=c(H);ue=h(Et,"UW Inpiration"),Et.forEach(e),Q=f(o),k=l(o,"P",{});var rt=c(k);fe=h(rt,"\u201CRobocar\u201D is a project I started over the summer of 2022, heavily inspired by the Autonomous Robotics (CSE 478) course at the University of Washington. The class consisted of a simulator for the "),U=l(rt,"A",{href:!0,rel:!0});var Pt=c(U);W=h(Pt,"MuSHR"),Pt.forEach(e),pe=h(rt," vehicle with an incomplete ROS stack that students implemented over the quarter. We learned the basics of localization, control theory, and planning, culminating in a semi-robust car that could follow a path in a predetermined map while avoiding obstacles. Unfortunately, COVID prevented the class from working with physical vehicles, so I was left unsatisfied in the hardware department. Hence, the existence of this project."),rt.forEach(e),Z=f(o),M=l(o,"H3",{});var St=c(M);de=h(St,"System Overview"),St.forEach(e),ee=f(o),S=l(o,"P",{});var qe=c(S);me=h(qe,"Like MuSHR, my car would use a Jetson Nano ("),C=l(qe,"A",{href:!0,rel:!0});var Rt=c(C);te=h(Rt,"Seeed reComputer J1010"),Rt.forEach(e),we=h(qe,") running "),B=l(qe,"A",{href:!0,rel:!0});var Tt=c(B);V=h(Tt,"ROS Melodic"),Tt.forEach(e),ve=h(qe," to process data and calculate controls."),qe.forEach(e),oe=f(o),A=l(o,"P",{});var kt=c(A);be=h(kt,"The Nano is a very capable and somewhat-affordable SoC with a GPU, which made it the best choice for a small autonomous vehicle project. It can reliably synthesize LIDAR and camera data to localize the robot and detect objects, which is needed for the system."),kt.forEach(e),re=f(o),R=l(o,"P",{});var Ce=c(R);ye=h(Ce,"Unlike MuSHR, which uses a "),N=l(Ce,"A",{href:!0,rel:!0});var Lt=c(N);z=h(Lt,"VESC"),Lt.forEach(e),_e=h(Ce,", I chose a cheap PWM-operated ESC. The VESC would normally handle motor control and steering, so in its place I incorporated a "),F=l(Ce,"A",{href:!0,rel:!0});var Dt=c(F);O=h(Dt,"Raspberry Pi Pico"),Dt.forEach(e),ae=h(Ce," that takes commands from the Nano. Since there are various sensors, inputs, and other tasks to perform simultaneously on the Pico, it uses "),$=l(Ce,"A",{href:!0,rel:!0});var Ht=c($);a=h(Ht,"FreeRTOS"),Ht.forEach(e),m=h(Ce,"."),Ce.forEach(e),r=f(o),p=l(o,"P",{});var at=c(p);ge=h(at,"The Pico was chosen mainly for its $4 price while offering two 125MHz cores and a well-documented C/C++ SDK from Raspberry Pi. FreeRTOS has a "),se=l(at,"A",{href:!0,rel:!0});var Mt=c(se);Se=h(Mt,"symmetric multiprocessing (SMP) port"),Mt.forEach(e),Re=h(at," that can utilize both cores, which sweetens the deal even further."),at.forEach(e),Pe=f(o),ie=l(o,"H3",{});var Ct=c(ie);Te=h(Ct,"A Note on Naming"),Ct.forEach(e),le=f(o),G=l(o,"P",{});var $e=c(G);ke=h($e,"I needed to give the Jetson Nano and Raspberry Pi Pico generic names instead of \u201CNano\u201D and \u201CPico\u201D so I could theoretically switch out hardware without changing names in code. I decided on "),Ie=l($e,"STRONG",{});var At=c(Ie);Le=h(At,"Brain"),At.forEach(e),De=h($e," for the Nano and "),Ee=l($e,"STRONG",{});var Ot=c(Ee);Be=h(Ot,"Router"),Ot.forEach(e),Me=h($e," for the Pico because the \u201CBrain\u201D carries out the central computations and sends signals to the auxiliary device, and the \u201CRouter\u201D takes those signals and routes them to the corresponding peripheral."),$e.forEach(e),Oe=f(o),Ve=l(o,"H2",{});var xt=c(Ve);ht=h(xt,"Github Repositories"),xt.forEach(e),Ze=f(o),ne=l(o,"UL",{});var Ae=c(ne);Ge=l(Ae,"LI",{});var jt=c(Ge);xe=l(jt,"A",{href:!0,rel:!0});var Ut=c(xe);ct=h(Ut,"Robocar automation source code"),Ut.forEach(e),jt.forEach(e),ut=f(Ae),Je=l(Ae,"LI",{});var Wt=c(Je);je=l(Wt,"A",{href:!0,rel:!0});var Bt=c(je);ft=h(Bt,"Onboard ROS Melodic (catkin) workspace"),Bt.forEach(e),Wt.forEach(e),pt=f(Ae),Ke=l(Ae,"LI",{});var Vt=c(Ke);Ue=l(Vt,"A",{href:!0,rel:!0});var Nt=c(Ue);dt=h(Nt,"Host machine Melodic (catkin) workspace"),Nt.forEach(e),Vt.forEach(e),mt=f(Ae),Xe=l(Ae,"LI",{});var zt=c(Xe);We=l(zt,"A",{href:!0,rel:!0});var Ft=c(We);wt=h(Ft,"Auxiliary peripheral router system"),Ft.forEach(e),zt.forEach(e),Ae.forEach(e),et=f(o),Ne=l(o,"H2",{});var qt=c(Ne);vt=h(qt,"Updates"),qt.forEach(e),tt=f(o),ze=l(o,"UL",{});var $t=c(ze);Ye=l($t,"LI",{});var Gt=c(Ye);Fe=l(Gt,"A",{href:!0});var Jt=c(Fe);bt=h(Jt,"Update 1/4/2022"),Jt.forEach(e),Gt.forEach(e),$t.forEach(e),this.h()},h(){st(I.src,_=Qe+"/images/robocar/robocar-lidar-front-1024.jpg")||v(I,"src",_),v(I,"alt","Front of in-progress Robocar with LIDAR mounted."),v(U,"href","https://mushr.io"),v(U,"rel","nofollow"),v(C,"href","https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html"),v(C,"rel","nofollow"),v(B,"href","http://wiki.ros.org/melodic"),v(B,"rel","nofollow"),v(N,"href","https://vesc-project.com"),v(N,"rel","nofollow"),v(F,"href","https://www.raspberrypi.com/products/raspberry-pi-pico"),v(F,"rel","nofollow"),v($,"href","https://www.freertos.org"),v($,"rel","nofollow"),v(se,"href","https://freertos.org/symmetric-multiprocessing-introduction.html"),v(se,"rel","nofollow"),v(xe,"href","https://github.com/nwager/robocar_src"),v(xe,"rel","nofollow"),v(je,"href","https://github.com/nwager/robocar_ws"),v(je,"rel","nofollow"),v(Ue,"href","https://github.com/nwager/robocar_host_ws"),v(Ue,"rel","nofollow"),v(We,"href","https://github.com/nwager/robocar_router"),v(We,"rel","nofollow"),v(Fe,"href",Qe+"/robocar-1-4-22")},m(o,w){s(o,d,w),t(d,g),s(o,T,w),s(o,y,w),t(y,I),t(y,x),t(y,E),t(E,J),s(o,b,w),s(o,P,w),t(P,j),s(o,K,w),s(o,L,w),t(L,he),s(o,X,w),s(o,D,w),t(D,ce),s(o,Y,w),s(o,H,w),t(H,ue),s(o,Q,w),s(o,k,w),t(k,fe),t(k,U),t(U,W),t(k,pe),s(o,Z,w),s(o,M,w),t(M,de),s(o,ee,w),s(o,S,w),t(S,me),t(S,C),t(C,te),t(S,we),t(S,B),t(B,V),t(S,ve),s(o,oe,w),s(o,A,w),t(A,be),s(o,re,w),s(o,R,w),t(R,ye),t(R,N),t(N,z),t(R,_e),t(R,F),t(F,O),t(R,ae),t(R,$),t($,a),t(R,m),s(o,r,w),s(o,p,w),t(p,ge),t(p,se),t(se,Se),t(p,Re),s(o,Pe,w),s(o,ie,w),t(ie,Te),s(o,le,w),s(o,G,w),t(G,ke),t(G,Ie),t(Ie,Le),t(G,De),t(G,Ee),t(Ee,Be),t(G,Me),s(o,Oe,w),s(o,Ve,w),t(Ve,ht),s(o,Ze,w),s(o,ne,w),t(ne,Ge),t(Ge,xe),t(xe,ct),t(ne,ut),t(ne,Je),t(Je,je),t(je,ft),t(ne,pt),t(ne,Ke),t(Ke,Ue),t(Ue,dt),t(ne,mt),t(ne,Xe),t(Xe,We),t(We,wt),s(o,et,w),s(o,Ne,w),t(Ne,vt),s(o,tt,w),s(o,ze,w),t(ze,Ye),t(Ye,Fe),t(Fe,bt)},p:He,i:He,o:He,d(o){o&&e(d),o&&e(T),o&&e(y),o&&e(b),o&&e(P),o&&e(K),o&&e(L),o&&e(X),o&&e(D),o&&e(Y),o&&e(H),o&&e(Q),o&&e(k),o&&e(Z),o&&e(M),o&&e(ee),o&&e(S),o&&e(oe),o&&e(A),o&&e(re),o&&e(R),o&&e(r),o&&e(p),o&&e(Pe),o&&e(ie),o&&e(le),o&&e(G),o&&e(Oe),o&&e(Ve),o&&e(Ze),o&&e(ne),o&&e(et),o&&e(Ne),o&&e(tt),o&&e(ze)}}}const vo={title:"Robocar Home",description:"The home page of my Robocar project.",author:"Noah Wager",date:"2022-01-04",published:!0};class bo extends it{constructor(d){super();lt(this,d,null,wo,nt,{})}}var yo=Object.freeze(Object.defineProperty({__proto__:null,default:bo,metadata:vo},Symbol.toStringTag,{value:"Module"}));function _o(q){let d,g,T=q[1].title+"",y,I,_,x;var E=q[0];function J(b){return{}}return E&&(_=new E(J())),{c(){d=i("div"),g=i("h1"),y=n(T),I=u(),_&&Kt(_.$$.fragment),this.h()},l(b){d=l(b,"DIV",{class:!0});var P=c(d);g=l(P,"H1",{});var j=c(g);y=h(j,T),j.forEach(e),I=f(P),_&&oo(_.$$.fragment,P),P.forEach(e),this.h()},h(){v(d,"class","post-content svelte-1r9bln8")},m(b,P){s(b,d,P),t(d,g),t(g,y),t(d,I),_&&Xt(_,d,null),x=!0},p(b,[P]){if((!x||P&2)&&T!==(T=b[1].title+"")&&ro(y,T),E!==(E=b[0])){if(_){so();const j=_;Yt(j.$$.fragment,1,0,()=>{Zt(j,1)}),ao()}E?(_=new E(J()),Kt(_.$$.fragment),Qt(_.$$.fragment,1),Xt(_,d,null)):_=null}},i(b){x||(_&&Qt(_.$$.fragment,b),x=!0)},o(b){_&&Yt(_.$$.fragment,b),x=!1},d(b){b&&e(d),_&&Zt(_)}}}const eo={"../../posts/esp8266-leds.svelte.md":co,"../../posts/robocar/robocar-1-4-22.svelte.md":mo,"../../posts/robocar/robocar.svelte.md":yo};let to=[];for(let q in eo){const d=eo[q],g=io(q);to.push({post:d,slug:g})}function So({params:q}){const{slug:d}=q,g=to.find(T=>T.slug.toLowerCase()===d.toLowerCase()&&T.published!==!1);return g?{props:{page:g.post.default,metadata:g.post.metadata}}:{status:404,error:new Error("Post could not be found")}}function go(q,d,g){let{page:T}=d,{metadata:y}=d;return q.$$set=I=>{"page"in I&&g(0,T=I.page),"metadata"in I&&g(1,y=I.metadata)},[T,y]}class Ro extends it{constructor(d){super();lt(this,d,go,_o,nt,{page:0,metadata:1})}}export{Ro as default,So as load};
