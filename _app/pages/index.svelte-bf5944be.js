import{S as B,i as F,s as K,e as k,c as I,a as w,d as p,R as Y,b as m,T as C,U as T,g as j,I as b,k as $,m as E,J as M,V as O,t as A,h as P,L as H,W as X,K as x,w as J,x as W,y as G,q as V,o as q,B as R,X as ne,n as le,p as oe}from"../chunks/vendor-0db7a702.js";import{H as ce,C as ue}from"../chunks/Header-424fa40d.js";import{b as U}from"../chunks/paths-28a87002.js";function he(n,e){return(n%e+e)%e}function Z(n,e,s){const a=n.slice();return a[8]=e[s],a[10]=s,a}function z(n,e,s){const a=n.slice();return a[11]=e[s],a[10]=s,a}function Q(n){let e,s,a,l,o,i;return{c(){e=k("a"),s=k("img"),this.h()},l(r){e=I(r,"A",{class:!0,href:!0,rel:!0,target:!0,style:!0});var t=w(e);s=I(t,"IMG",{src:!0,alt:!0,class:!0}),t.forEach(p),this.h()},h(){Y(s.src,a=""+(U+"/"+n[11]))||m(s,"src",a),m(s,"alt","Carousel"),m(s,"class","svelte-68pox6"),m(e,"class",l=""+(C(T({active:n[10]==n[2]}))+" svelte-68pox6")),m(e,"href",o=`${U}/${n[11]}`),m(e,"rel","external noopener"),m(e,"target","_blank"),m(e,"style",i=n[1]?"":"pointer-events:none")},m(r,t){j(r,e,t),b(e,s)},p(r,t){t&1&&!Y(s.src,a=""+(U+"/"+r[11]))&&m(s,"src",a),t&4&&l!==(l=""+(C(T({active:r[10]==r[2]}))+" svelte-68pox6"))&&m(e,"class",l),t&1&&o!==(o=`${U}/${r[11]}`)&&m(e,"href",o),t&2&&i!==(i=r[1]?"":"pointer-events:none")&&m(e,"style",i)},d(r){r&&p(e)}}}function fe(n){let e,s,a,l,o,i,r,t,c,u,_,y=n[0],v=[];for(let f=0;f<y.length;f+=1)v[f]=ee(Z(n,y,f));return{c(){e=k("div"),s=k("div"),a=k("div"),l=$(),o=k("div"),i=k("div"),r=$(),t=k("div");for(let f=0;f<v.length;f+=1)v[f].c();this.h()},l(f){e=I(f,"DIV",{class:!0});var h=w(e);s=I(h,"DIV",{class:!0});var d=w(s);a=I(d,"DIV",{class:!0}),w(a).forEach(p),d.forEach(p),l=E(h),o=I(h,"DIV",{class:!0});var g=w(o);i=I(g,"DIV",{class:!0}),w(i).forEach(p),g.forEach(p),r=E(h),t=I(h,"DIV",{class:!0});var D=w(t);for(let S=0;S<v.length;S+=1)v[S].l(D);D.forEach(p),h.forEach(p),this.h()},h(){m(a,"class","icon icon-chevron-left svelte-68pox6"),m(s,"class","carousel-button prev svelte-68pox6"),m(i,"class","icon icon-chevron-right svelte-68pox6"),m(o,"class","carousel-button next svelte-68pox6"),m(t,"class","indicator-container svelte-68pox6"),m(e,"class",c=""+(C(T("carousel-ui",{hidden:n[3]}))+" svelte-68pox6"))},m(f,h){j(f,e,h),b(e,s),b(s,a),b(e,l),b(e,o),b(o,i),b(e,r),b(e,t);for(let d=0;d<v.length;d+=1)v[d].m(t,null);u||(_=[M(s,"click",function(){O(n[5](n[2]-1))&&n[5](n[2]-1).apply(this,arguments)}),M(o,"click",function(){O(n[5](n[2]+1))&&n[5](n[2]+1).apply(this,arguments)})],u=!0)},p(f,h){if(n=f,h&37){y=n[0];let d;for(d=0;d<y.length;d+=1){const g=Z(n,y,d);v[d]?v[d].p(g,h):(v[d]=ee(g),v[d].c(),v[d].m(t,null))}for(;d<v.length;d+=1)v[d].d(1);v.length=y.length}h&8&&c!==(c=""+(C(T("carousel-ui",{hidden:n[3]}))+" svelte-68pox6"))&&m(e,"class",c)},d(f){f&&p(e),H(v,f),u=!1,X(_)}}}function ee(n){let e,s,a=n[10]+1+"",l,o,i,r,t;return{c(){e=k("div"),s=k("div"),l=A(a),o=$(),this.h()},l(c){e=I(c,"DIV",{class:!0});var u=w(e);s=I(u,"DIV",{class:!0});var _=w(s);l=P(_,a),_.forEach(p),o=E(u),u.forEach(p),this.h()},h(){m(s,"class","graphic svelte-68pox6"),m(e,"class",i=""+(C(T("indicator",{active:n[10]==n[2]}))+" svelte-68pox6"))},m(c,u){j(c,e,u),b(e,s),b(s,l),b(e,o),r||(t=M(e,"click",n[5](n[10])),r=!0)},p(c,u){n=c,u&4&&i!==(i=""+(C(T("indicator",{active:n[10]==n[2]}))+" svelte-68pox6"))&&m(e,"class",i)},d(c){c&&p(e),r=!1,t()}}}function me(n){let e,s,a,l,o=n[0],i=[];for(let t=0;t<o.length;t+=1)i[t]=Q(z(n,o,t));let r=n[4]>1&&fe(n);return{c(){e=k("div");for(let t=0;t<i.length;t+=1)i[t].c();s=$(),r&&r.c(),this.h()},l(t){e=I(t,"DIV",{class:!0});var c=w(e);for(let u=0;u<i.length;u+=1)i[u].l(c);s=E(c),r&&r.l(c),c.forEach(p),this.h()},h(){m(e,"class","carousel svelte-68pox6")},m(t,c){j(t,e,c);for(let u=0;u<i.length;u+=1)i[u].m(e,null);b(e,s),r&&r.m(e,null),a||(l=[M(e,"mouseleave",n[6]),M(e,"mouseenter",n[7])],a=!0)},p(t,[c]){if(c&7){o=t[0];let u;for(u=0;u<o.length;u+=1){const _=z(t,o,u);i[u]?i[u].p(_,c):(i[u]=Q(_),i[u].c(),i[u].m(e,s))}for(;u<i.length;u+=1)i[u].d(1);i.length=o.length}t[4]>1&&r.p(t,c)},i:x,o:x,d(t){t&&p(e),H(i,t),r&&r.d(),a=!1,X(l)}}}function de(n,e,s){let{images:a}=e,{linkImages:l=!1}=e,o=0;const i=a.length;let r=!0;const t=_=>y=>{s(2,o=_),s(2,o=he(o,i))},c=()=>s(3,r=!0),u=()=>s(3,r=!1);return n.$$set=_=>{"images"in _&&s(0,a=_.images),"linkImages"in _&&s(1,l=_.linkImages)},[a,l,o,r,i,t,c,u]}class ge extends B{constructor(e){super();F(this,e,de,me,K,{images:0,linkImages:1})}}function te(n,e,s){const a=n.slice();return a[5]=e[s][0],a[6]=e[s][1],a}function se(n){let e,s=n[5]+"",a,l;return{c(){e=k("a"),a=A(s),this.h()},l(o){e=I(o,"A",{href:!0,target:!0,rel:!0,class:!0});var i=w(e);a=P(i,s),i.forEach(p),this.h()},h(){m(e,"href",l=n[6]),m(e,"target","_blank"),m(e,"rel","noopener"),m(e,"class","svelte-17ki5bq")},m(o,i){j(o,e,i),b(e,a)},p:x,d(o){o&&p(e)}}}function pe(n){let e,s,a,l,o,i,r,t,c,u,_,y;s=new ge({props:{images:n[2]}});let v=n[3],f=[];for(let h=0;h<v.length;h+=1)f[h]=se(te(n,v,h));return{c(){e=k("div"),J(s.$$.fragment),a=$(),l=k("div"),o=k("h2"),i=A(n[0]),r=$(),t=k("p"),c=A(n[1]),u=$(),_=k("div");for(let h=0;h<f.length;h+=1)f[h].c();this.h()},l(h){e=I(h,"DIV",{class:!0});var d=w(e);W(s.$$.fragment,d),a=E(d),l=I(d,"DIV",{class:!0});var g=w(l);o=I(g,"H2",{class:!0});var D=w(o);i=P(D,n[0]),D.forEach(p),r=E(g),t=I(g,"P",{class:!0});var S=w(t);c=P(S,n[1]),S.forEach(p),u=E(g),_=I(g,"DIV",{class:!0});var N=w(_);for(let L=0;L<f.length;L+=1)f[L].l(N);N.forEach(p),g.forEach(p),d.forEach(p),this.h()},h(){m(o,"class","svelte-17ki5bq"),m(t,"class",""+(C("description")+" svelte-17ki5bq")),m(_,"class","link-container svelte-17ki5bq"),m(l,"class","text-container svelte-17ki5bq"),m(e,"class","project svelte-17ki5bq")},m(h,d){j(h,e,d),G(s,e,null),b(e,a),b(e,l),b(l,o),b(o,i),b(l,r),b(l,t),b(t,c),b(l,u),b(l,_);for(let g=0;g<f.length;g+=1)f[g].m(_,null);y=!0},p(h,[d]){if(d&8){v=h[3];let g;for(g=0;g<v.length;g+=1){const D=te(h,v,g);f[g]?f[g].p(D,d):(f[g]=se(D),f[g].c(),f[g].m(_,null))}for(;g<f.length;g+=1)f[g].d(1);f.length=v.length}},i(h){y||(V(s.$$.fragment,h),y=!0)},o(h){q(s.$$.fragment,h),y=!1},d(h){h&&p(e),R(s),H(f,h)}}}function _e(n,e,s){let{project:a}=e,{title:l,description:o,images:i,links:r}=a;return n.$$set=t=>{"project"in t&&s(4,a=t.project)},[l,o,i,r,a]}class ve extends B{constructor(e){super();F(this,e,_e,pe,K,{project:4})}}const ae=[{title:"Matterport UI Panel",description:"I interned at Matterport in summer 2021, where I worked on the front-end web-app team. I was able to write and push code to the production codebase, and one of my additions was the new title panel. Previously, the title was a small box in the top corner, so it was redesigned to fit with the style of the other panels.",images:["images/matterport/mp-menu-marked-1024.jpg"],links:[["View this model","https://my.matterport.com/show/?m=CRg23STmKZp"]]},{title:"React + ThreeJS Demo",description:"I created a website using Create React App and ThreeJS to practice using React and WebGL. It's a simple website meant to demonstrate the integration of a dynamic ThreeJS scene with functional UI elements. The scene features a whale swimming in circles through randomly-positioned rings, accompanied by overlayed text, links, and a contact form.",images:["images/matterport/mp-menu-marked-1024.jpg"],links:[["Website","https://nwager.github.io/react-threejs/"],["GitHub","https://github.com/nwager/react-threejs"]]},{title:"DIY Fume Extractor",description:"I designed a case for a fan and carbon filter in Fusion 360 and then 3D-printed it. My DIY soldering station needed ventilation, and it just so happens that used computer fans are fairly inexpensive.",images:["images/fume-extractor/fume-ext-face-1024.jpg","images/fume-extractor/fume-ext-rear-1024.jpg","images/fume-extractor/fume-ext-disas-1024.jpg","images/fume-extractor/fume-ext-halfdisas-1024.jpg"],links:[["More info","https://github.com/nwager/3dp-fume-extractor-case/"]]},{title:"Pi Day 2021",description:"This project was a small celebration of Pi Day on 3/14/2021. It illustrates the limiting behavior of the Archimedes method of approximating pi, which involves calculating the circumference of a regular polygon inscribed in a circle. As the number of sides increases, the circumference approaches that of the circle, from which pi can be extracted.",images:["images/pi-day/pi-day-cap-1024.jpg"],links:[["Website","https://nwager.github.io/pi-day-2021/"],["GitHub","https://github.com/nwager/pi-day-2021"]]},{title:"Music Maker",description:"This is a virtual synth I put together using HTML/CSS/JS for my Personal Learning Experience in my junior year Theory of Knowledge class. My objective was to learn a JavaScript project, and a synth seemed to adequately combine my interest in music and programming.",images:["images/music-maker/music-maker-cap-1024.jpg"],links:[["Website","https://nwager.github.io/music-maker/"],["GitHub","https://github.com/nwager/music-maker"]]},{title:"CS IA - Circular Motion",description:"IA stands for Internal Assessment, which is a large project required by the International Baccalaureate. For my CS IA in senior year, I made a website containing simulations of uniform circular motion using JS canvas. As well as programming, the project included design processes and documentation.",images:["images/circular-motion/csia-circle-1024.jpg","images/circular-motion/csia-turntable-1024.jpg","images/circular-motion/csia-angled-string-1024.jpg","images/circular-motion/csia-recording.gif"],links:[["Website","https://nwager.github.io/CircularMotion/"],["GitHub","https://github.com/nwager/CircularMotion"]]}];function ie(n,e,s){const a=n.slice();return a[0]=e[s],a}function re(n){let e,s;return e=new ve({props:{project:n[0]}}),{c(){J(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,l){G(e,a,l),s=!0},p:x,i(a){s||(V(e.$$.fragment,a),s=!0)},o(a){q(e.$$.fragment,a),s=!1},d(a){R(e,a)}}}function be(n){let e,s,a=ae,l=[];for(let i=0;i<a.length;i+=1)l[i]=re(ie(n,a,i));const o=i=>q(l[i],1,1,()=>{l[i]=null});return{c(){e=k("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=I(i,"DIV",{id:!0});var r=w(e);for(let t=0;t<l.length;t+=1)l[t].l(r);r.forEach(p),this.h()},h(){m(e,"id","projects")},m(i,r){j(i,e,r);for(let t=0;t<l.length;t+=1)l[t].m(e,null);s=!0},p(i,r){if(r&0){a=ae;let t;for(t=0;t<a.length;t+=1){const c=ie(i,a,t);l[t]?(l[t].p(c,r),V(l[t],1)):(l[t]=re(c),l[t].c(),V(l[t],1),l[t].m(e,null))}for(le(),t=a.length;t<l.length;t+=1)o(t);oe()}},i(i){if(!s){for(let r=0;r<a.length;r+=1)V(l[r]);s=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)q(l[r]);s=!1},d(i){i&&p(e),H(l,i)}}}function ke(n){let e,s,a,l,o,i;return a=new ce({props:{header:"Projects"}}),o=new ue({props:{$$slots:{default:[be]},$$scope:{ctx:n}}}),{c(){e=$(),s=k("section"),J(a.$$.fragment),l=$(),J(o.$$.fragment),this.h()},l(r){ne('[data-svelte="svelte-1lcysb6"]',document.head).forEach(p),e=E(r),s=I(r,"SECTION",{});var c=w(s);W(a.$$.fragment,c),l=E(c),W(o.$$.fragment,c),c.forEach(p),this.h()},h(){document.title="Noah Wager - Projects"},m(r,t){j(r,e,t),j(r,s,t),G(a,s,null),b(s,l),G(o,s,null),i=!0},p(r,[t]){const c={};t&8&&(c.$$scope={dirty:t,ctx:r}),o.$set(c)},i(r){i||(V(a.$$.fragment,r),V(o.$$.fragment,r),i=!0)},o(r){q(a.$$.fragment,r),q(o.$$.fragment,r),i=!1},d(r){r&&p(e),r&&p(s),R(a),R(o)}}}class je extends B{constructor(e){super();F(this,e,null,ke,K,{})}}export{je as default};
