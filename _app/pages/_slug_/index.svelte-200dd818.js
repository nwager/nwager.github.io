import{S as ae,i as le,s as oe,e as u,k as P,t as h,c as n,a as p,d as t,m as w,h as v,Q as ce,b as C,g as a,I as c,n as j,x as Ie,y as He,z as De,j as Ve,p as xe,q as Ne,r as Te,C as Le,o as We}from"../../chunks/index-b588d774.js";import{b as me}from"../../chunks/paths-396f020f.js";import{s as Ce}from"../../chunks/utils-8309f6d0.js";function je(S){let s,o,g,f,d,l,E,b,L,_,y,q,k,I,F,H,D,U,V,x,$,N,T,A,i,m,z,M,O,G,B,W,Q,Z,X,re,ee,J,ue,te,K,ne,ie,R,Y,pe;return{c(){s=u("p"),o=u("img"),f=P(),d=u("p"),l=h("As a college student, it was customary to cover the apartment ceiling with tacky LED strips that detract from the otherwise-cozy home decor. Programming addressable LED strips is one of my favorite electronics activities, so I used an ESP8266 to control the LEDs using WiFi (in the name of convenience)."),E=P(),b=u("h2"),L=h("Hardware"),_=P(),y=u("p"),q=h("To make the controller compact, I designed a simple PCB to hold the ESP8266, buck converter, PSU terminals, and 3.3V-5V level shifter (hidden underneath the ESP)."),k=P(),I=u("p"),F=h("WS2811 strips require 12V, and my specific strip drew around 75W. I decided to use a 150W 12V power supply to have a sizeable power cushion, with room to extend the LED strip in the future. I also included a 1000uF smoothing capacitor for good measure."),H=P(),D=u("p"),U=h("To power the ESP8266, I used a 5V buck converter board with header pins that slot into corresponding connectors on the PCB. The ESP operates at 3.3V while the WS2811s use 5V, so I pass the datalines through a 5V level shifter IC (SN74HCT245) and 330-ohm resistors for safety."),V=P(),x=u("h2"),$=h("Software"),N=P(),T=u("p"),A=h("The ESP serves an HTML page stored in program memory. This page contains HTTP POSTs to send commands from the webpage to the ESP (i.e. color selection, on-off toggling, animation selection). Upon receiving these messages, the ESP updates the lights accordingly and sends back a response so the webpage is up-to-date."),i=P(),m=u("p"),z=h("To control the LEDs, I used the popular library "),M=u("a"),O=h("FastLED"),G=h(". It provides an API to change the LED HSV values and individually address each pixel."),B=P(),W=u("h2"),Q=h("What about the loose connector on the left?"),Z=P(),X=u("p"),re=h("For fun, I added support for a \u201Cclock\u201D that displays the current time in binary on a WS2812B strip. 12-hour time can be displayed in 10 bits: 4 for hours 0-11, and 6 for minutes 0-59. To separate the hours and minutes, a single LED between them toggles every second. In total, the WS2812B strip needs 11 pixels. Unfortunately, I wasn\u2019t able to create a housing for the clock that fits aesthetically, so I disconnected the feature."),ee=P(),J=u("h2"),ue=h("Summary"),te=P(),K=u("p"),ne=h("This project was a fun exercise in simple web-based apps using an ESP8266, with pretty lights as visual feedback (my favorite kind of feedback!). The available controls are fairly basic, and much more interesting animations are possible with FastLED. However, on the rare occasions where the LEDs are turned on, the ability to finely control the color with a mobile device is good enough."),ie=P(),R=u("p"),Y=u("img"),this.h()},l(e){s=n(e,"P",{});var r=p(s);o=n(r,"IMG",{src:!0,alt:!0}),r.forEach(t),f=w(e),d=n(e,"P",{});var de=p(d);l=v(de,"As a college student, it was customary to cover the apartment ceiling with tacky LED strips that detract from the otherwise-cozy home decor. Programming addressable LED strips is one of my favorite electronics activities, so I used an ESP8266 to control the LEDs using WiFi (in the name of convenience)."),de.forEach(t),E=w(e),b=n(e,"H2",{});var fe=p(b);L=v(fe,"Hardware"),fe.forEach(t),_=w(e),y=n(e,"P",{});var he=p(y);q=v(he,"To make the controller compact, I designed a simple PCB to hold the ESP8266, buck converter, PSU terminals, and 3.3V-5V level shifter (hidden underneath the ESP)."),he.forEach(t),k=w(e),I=n(e,"P",{});var ve=p(I);F=v(ve,"WS2811 strips require 12V, and my specific strip drew around 75W. I decided to use a 150W 12V power supply to have a sizeable power cushion, with room to extend the LED strip in the future. I also included a 1000uF smoothing capacitor for good measure."),ve.forEach(t),H=w(e),D=n(e,"P",{});var be=p(D);U=v(be,"To power the ESP8266, I used a 5V buck converter board with header pins that slot into corresponding connectors on the PCB. The ESP operates at 3.3V while the WS2811s use 5V, so I pass the datalines through a 5V level shifter IC (SN74HCT245) and 330-ohm resistors for safety."),be.forEach(t),V=w(e),x=n(e,"H2",{});var _e=p(x);$=v(_e,"Software"),_e.forEach(t),N=w(e),T=n(e,"P",{});var ge=p(T);A=v(ge,"The ESP serves an HTML page stored in program memory. This page contains HTTP POSTs to send commands from the webpage to the ESP (i.e. color selection, on-off toggling, animation selection). Upon receiving these messages, the ESP updates the lights accordingly and sends back a response so the webpage is up-to-date."),ge.forEach(t),i=w(e),m=n(e,"P",{});var se=p(m);z=v(se,"To control the LEDs, I used the popular library "),M=n(se,"A",{href:!0,rel:!0});var Ee=p(M);O=v(Ee,"FastLED"),Ee.forEach(t),G=v(se,". It provides an API to change the LED HSV values and individually address each pixel."),se.forEach(t),B=w(e),W=n(e,"H2",{});var ye=p(W);Q=v(ye,"What about the loose connector on the left?"),ye.forEach(t),Z=w(e),X=n(e,"P",{});var Pe=p(X);re=v(Pe,"For fun, I added support for a \u201Cclock\u201D that displays the current time in binary on a WS2812B strip. 12-hour time can be displayed in 10 bits: 4 for hours 0-11, and 6 for minutes 0-59. To separate the hours and minutes, a single LED between them toggles every second. In total, the WS2812B strip needs 11 pixels. Unfortunately, I wasn\u2019t able to create a housing for the clock that fits aesthetically, so I disconnected the feature."),Pe.forEach(t),ee=w(e),J=n(e,"H2",{});var we=p(J);ue=v(we,"Summary"),we.forEach(t),te=w(e),K=n(e,"P",{});var Se=p(K);ne=v(Se,"This project was a fun exercise in simple web-based apps using an ESP8266, with pretty lights as visual feedback (my favorite kind of feedback!). The available controls are fairly basic, and much more interesting animations are possible with FastLED. However, on the rare occasions where the LEDs are turned on, the ability to finely control the color with a mobile device is good enough."),Se.forEach(t),ie=w(e),R=n(e,"P",{});var qe=p(R);Y=n(qe,"IMG",{src:!0,alt:!0}),qe.forEach(t),this.h()},h(){ce(o.src,g=me+"/images/esp8266-leds/esp8266-both-1024.jpg")||C(o,"src",g),C(o,"alt","ESP8266 controller enclosure and circuit board"),C(M,"href","https://fastled.io/"),C(M,"rel","nofollow"),ce(Y.src,pe=me+"/images/esp8266-leds/esp8266-leds-1024.jpg")||C(Y,"src",pe),C(Y,"alt","LED strip turned on")},m(e,r){a(e,s,r),c(s,o),a(e,f,r),a(e,d,r),c(d,l),a(e,E,r),a(e,b,r),c(b,L),a(e,_,r),a(e,y,r),c(y,q),a(e,k,r),a(e,I,r),c(I,F),a(e,H,r),a(e,D,r),c(D,U),a(e,V,r),a(e,x,r),c(x,$),a(e,N,r),a(e,T,r),c(T,A),a(e,i,r),a(e,m,r),c(m,z),c(m,M),c(M,O),c(m,G),a(e,B,r),a(e,W,r),c(W,Q),a(e,Z,r),a(e,X,r),c(X,re),a(e,ee,r),a(e,J,r),c(J,ue),a(e,te,r),a(e,K,r),c(K,ne),a(e,ie,r),a(e,R,r),c(R,Y)},p:j,i:j,o:j,d(e){e&&t(s),e&&t(f),e&&t(d),e&&t(E),e&&t(b),e&&t(_),e&&t(y),e&&t(k),e&&t(I),e&&t(H),e&&t(D),e&&t(V),e&&t(x),e&&t(N),e&&t(T),e&&t(i),e&&t(m),e&&t(B),e&&t(W),e&&t(Z),e&&t(X),e&&t(ee),e&&t(J),e&&t(te),e&&t(K),e&&t(ie),e&&t(R)}}}const Fe={title:"ESP8266 WiFi LED Lighting",description:"A ceiling-mounted LED strip controlled by an ESP8266 web server.",author:"Noah Wager",date:"2021-06-22",published:!0};class Ue extends ae{constructor(s){super();le(this,s,null,je,oe,{})}}var $e=Object.freeze(Object.defineProperty({__proto__:null,default:Ue,metadata:Fe},Symbol.toStringTag,{value:"Module"}));function Ae(S){let s,o,g,f,d;return{c(){s=u("h1"),o=h("Hey y\u2019all"),g=P(),f=u("p"),d=h("This is blog post numero dos.")},l(l){s=n(l,"H1",{});var E=p(s);o=v(E,"Hey y\u2019all"),E.forEach(t),g=w(l),f=n(l,"P",{});var b=p(f);d=v(b,"This is blog post numero dos."),b.forEach(t)},m(l,E){a(l,s,E),c(s,o),a(l,g,E),a(l,f,E),c(f,d)},p:j,i:j,o:j,d(l){l&&t(s),l&&t(g),l&&t(f)}}}const Be={title:"Second post",description:"I made a second blog post.",author:"Noah Wager",date:"2022-06-21",published:!0};class ze extends ae{constructor(s){super();le(this,s,null,Ae,oe,{})}}var Oe=Object.freeze(Object.defineProperty({__proto__:null,default:ze,metadata:Be},Symbol.toStringTag,{value:"Module"}));function Ge(S){let s,o,g,f,d,l,E,b,L,_,y,q,k,I,F,H,D,U,V,x,$,N,T,A;return{c(){s=u("p"),o=u("img"),f=P(),d=u("p"),l=h("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque orci nec facilisis iaculis. Sed accumsan placerat dolor. Donec sollicitudin nisi sit amet sodales molestie. Maecenas sit amet dolor nulla. Fusce sed elit et erat consequat dignissim. Nunc eu erat felis. Mauris pretium, arcu eu dapibus tempor, mauris eros tempor tortor, eu tincidunt erat libero sit amet mi. Phasellus eu libero mollis, finibus lacus eget, sollicitudin nulla."),E=P(),b=u("p"),L=h("Here\u2019s a random Svelte component thrown into my MDsveX markdown:"),_=P(),y=u("h2"),q=h("Example heading"),k=P(),I=u("p"),F=h("In lectus erat, maximus sed pulvinar eu, elementum vehicula mi. Maecenas nec dui urna. Nunc at magna purus. Cras facilisis, purus in dignissim egestas, ante ligula malesuada leo, quis malesuada dolor tortor vitae mauris. Morbi auctor mauris nibh, ut sodales tortor volutpat in. Donec aliquet ex eget ullamcorper semper. Proin vel libero at nulla gravida blandit. Maecenas odio massa, pretium blandit lectus ac, vehicula ultrices justo. Suspendisse libero dolor, tristique quis laoreet vel, placerat vel nisl. Nunc et venenatis nunc, vitae fringilla risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus consectetur pellentesque ipsum, in hendrerit lectus ultricies quis. Morbi ultrices, elit nec lacinia vulputate, dolor nibh commodo justo, quis dictum nisi nulla vel mi."),H=P(),D=u("h2"),U=h("Another example heading"),V=P(),x=u("p"),$=h("Nullam nisl risus, pellentesque at enim id, molestie tristique purus. Aliquam ultricies, sem eu rutrum posuere, augue libero commodo nisi, et aliquam massa mi vitae nunc. In sodales, lorem vitae pellentesque lacinia, est velit condimentum orci, in vestibulum lorem est eget nisi. Quisque varius eget risus mattis rutrum. Sed tellus nisl, egestas a ligula et, finibus sollicitudin mauris. Ut sit amet scelerisque purus, luctus auctor leo. Nullam enim velit, tincidunt sed venenatis non, fringilla ut lacus. Morbi diam nulla, luctus non orci at, maximus rhoncus est."),N=P(),T=u("p"),A=h("Ut quis leo rhoncus, aliquet sapien at, venenatis lectus. Nunc mattis vestibulum sapien. Donec quis vestibulum ex. Vivamus condimentum dui gravida pulvinar feugiat. Duis posuere, lacus eu cursus gravida, magna ex lobortis sapien, non finibus orci justo at orci. Nulla sit amet ligula a lorem aliquam consequat. Sed vehicula lacus nec ipsum efficitur, vel volutpat sem blandit. Curabitur nunc nunc, commodo sed ultrices id, dignissim ac orci. Nunc semper lectus et orci faucibus, et suscipit nisl consequat. Phasellus malesuada nisl a risus ultricies, vitae pretium libero vulputate. Nullam at neque ut enim mattis dapibus porttitor vitae dui. Cras erat libero, porta a eros ac, tempus consectetur est."),this.h()},l(i){s=n(i,"P",{});var m=p(s);o=n(m,"IMG",{src:!0,alt:!0}),m.forEach(t),f=w(i),d=n(i,"P",{});var z=p(d);l=v(z,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque orci nec facilisis iaculis. Sed accumsan placerat dolor. Donec sollicitudin nisi sit amet sodales molestie. Maecenas sit amet dolor nulla. Fusce sed elit et erat consequat dignissim. Nunc eu erat felis. Mauris pretium, arcu eu dapibus tempor, mauris eros tempor tortor, eu tincidunt erat libero sit amet mi. Phasellus eu libero mollis, finibus lacus eget, sollicitudin nulla."),z.forEach(t),E=w(i),b=n(i,"P",{});var M=p(b);L=v(M,"Here\u2019s a random Svelte component thrown into my MDsveX markdown:"),M.forEach(t),_=w(i),y=n(i,"H2",{});var O=p(y);q=v(O,"Example heading"),O.forEach(t),k=w(i),I=n(i,"P",{});var G=p(I);F=v(G,"In lectus erat, maximus sed pulvinar eu, elementum vehicula mi. Maecenas nec dui urna. Nunc at magna purus. Cras facilisis, purus in dignissim egestas, ante ligula malesuada leo, quis malesuada dolor tortor vitae mauris. Morbi auctor mauris nibh, ut sodales tortor volutpat in. Donec aliquet ex eget ullamcorper semper. Proin vel libero at nulla gravida blandit. Maecenas odio massa, pretium blandit lectus ac, vehicula ultrices justo. Suspendisse libero dolor, tristique quis laoreet vel, placerat vel nisl. Nunc et venenatis nunc, vitae fringilla risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus consectetur pellentesque ipsum, in hendrerit lectus ultricies quis. Morbi ultrices, elit nec lacinia vulputate, dolor nibh commodo justo, quis dictum nisi nulla vel mi."),G.forEach(t),H=w(i),D=n(i,"H2",{});var B=p(D);U=v(B,"Another example heading"),B.forEach(t),V=w(i),x=n(i,"P",{});var W=p(x);$=v(W,"Nullam nisl risus, pellentesque at enim id, molestie tristique purus. Aliquam ultricies, sem eu rutrum posuere, augue libero commodo nisi, et aliquam massa mi vitae nunc. In sodales, lorem vitae pellentesque lacinia, est velit condimentum orci, in vestibulum lorem est eget nisi. Quisque varius eget risus mattis rutrum. Sed tellus nisl, egestas a ligula et, finibus sollicitudin mauris. Ut sit amet scelerisque purus, luctus auctor leo. Nullam enim velit, tincidunt sed venenatis non, fringilla ut lacus. Morbi diam nulla, luctus non orci at, maximus rhoncus est."),W.forEach(t),N=w(i),T=n(i,"P",{});var Q=p(T);A=v(Q,"Ut quis leo rhoncus, aliquet sapien at, venenatis lectus. Nunc mattis vestibulum sapien. Donec quis vestibulum ex. Vivamus condimentum dui gravida pulvinar feugiat. Duis posuere, lacus eu cursus gravida, magna ex lobortis sapien, non finibus orci justo at orci. Nulla sit amet ligula a lorem aliquam consequat. Sed vehicula lacus nec ipsum efficitur, vel volutpat sem blandit. Curabitur nunc nunc, commodo sed ultrices id, dignissim ac orci. Nunc semper lectus et orci faucibus, et suscipit nisl consequat. Phasellus malesuada nisl a risus ultricies, vitae pretium libero vulputate. Nullam at neque ut enim mattis dapibus porttitor vitae dui. Cras erat libero, porta a eros ac, tempus consectetur est."),Q.forEach(t),this.h()},h(){ce(o.src,g=me+"/favicon.png")||C(o,"src",g),C(o,"alt","test alt text")},m(i,m){a(i,s,m),c(s,o),a(i,f,m),a(i,d,m),c(d,l),a(i,E,m),a(i,b,m),c(b,L),a(i,_,m),a(i,y,m),c(y,q),a(i,k,m),a(i,I,m),c(I,F),a(i,H,m),a(i,D,m),c(D,U),a(i,V,m),a(i,x,m),c(x,$),a(i,N,m),a(i,T,m),c(T,A)},p:j,i:j,o:j,d(i){i&&t(s),i&&t(f),i&&t(d),i&&t(E),i&&t(b),i&&t(_),i&&t(y),i&&t(k),i&&t(I),i&&t(H),i&&t(D),i&&t(V),i&&t(x),i&&t(N),i&&t(T)}}}const Qe={title:"Welcome to my blog!",description:"I love to write about Svelte and all the cool things that you can build with it.",author:"Mehdi Vasigh",date:"2021-04-21",published:!0};class Xe extends ae{constructor(s){super();le(this,s,null,Ge,oe,{})}}var Je=Object.freeze(Object.defineProperty({__proto__:null,default:Xe,metadata:Qe},Symbol.toStringTag,{value:"Module"}));function Ke(S){let s,o,g=S[1].title+"",f,d,l,E;var b=S[0];function L(_){return{}}return b&&(l=new b(L())),{c(){s=u("div"),o=u("h1"),f=h(g),d=P(),l&&Ie(l.$$.fragment),this.h()},l(_){s=n(_,"DIV",{class:!0});var y=p(s);o=n(y,"H1",{});var q=p(o);f=v(q,g),q.forEach(t),d=w(y),l&&He(l.$$.fragment,y),y.forEach(t),this.h()},h(){C(s,"class","post-content svelte-1r9bln8")},m(_,y){a(_,s,y),c(s,o),c(o,f),c(s,d),l&&De(l,s,null),E=!0},p(_,[y]){if((!E||y&2)&&g!==(g=_[1].title+"")&&Ve(f,g),b!==(b=_[0])){if(l){We();const q=l;xe(q.$$.fragment,1,0,()=>{Le(q,1)}),Ne()}b?(l=new b(L()),Ie(l.$$.fragment),Te(l.$$.fragment,1),De(l,s,null)):l=null}},i(_){E||(l&&Te(l.$$.fragment,_),E=!0)},o(_){l&&xe(l.$$.fragment,_),E=!1},d(_){_&&t(s),l&&Le(l)}}}const Me={"../../lib/posts/esp8266-leds.svelte.md":$e,"../../lib/posts/second-post.svelte.md":Oe,"../../lib/posts/welcome-to-my-blog.svelte.md":Je};let ke=[];for(let S in Me){const s=Me[S],o=Ce(S);ke.push({post:s,slug:o})}function tt({params:S}){const{slug:s}=S,o=ke.find(g=>g.slug.toLowerCase()===s.toLowerCase()&&g.published!==!1);return o?{props:{page:o.post.default,metadata:o.post.metadata}}:{status:404,error:new Error("Post could not be found")}}function Re(S,s,o){let{page:g}=s,{metadata:f}=s;return S.$$set=d=>{"page"in d&&o(0,g=d.page),"metadata"in d&&o(1,f=d.metadata)},[g,f]}class it extends ae{constructor(s){super();le(this,s,Re,Ke,oe,{page:0,metadata:1})}}export{it as default,tt as load};
