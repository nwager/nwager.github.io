import{F as M,S as R,i as D,s as F,G as T,e as y,t as b,c as w,a as k,h as $,d as v,b as d,H as P,g as j,I as h,k as O,m as W,J,j as L,n as q,K as V,L as B,M as Q,x as U,y as X,z as Y,N as Z,O as x,P as ee,r as z,p as C,C as te}from"../chunks/index-b588d774.js";import{b as S}from"../chunks/paths-396f020f.js";const se=()=>{const t=M("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session,updated:t.updated}},ae={subscribe(t){return se().page.subscribe(t)}},ne=640;function G(t,e,a){const o=t.slice();return o[5]=e[a][0],o[6]=e[a][1],o}function K(t){let e,a=t[5]+"",o,f;return{c(){e=y("a"),o=b(a),this.h()},l(s){e=w(s,"A",{href:!0,class:!0});var c=k(e);o=$(c,a),c.forEach(v),this.h()},h(){d(e,"href",f=t[6]),d(e,"class","svelte-1lkdt1t"),P(e,"active",t[2].url.pathname===t[6])},m(s,c){j(s,e,c),h(e,o)},p(s,c){c&12&&P(e,"active",s[2].url.pathname===s[6])},d(s){s&&v(e)}}}function re(t){let e,a,o,f,s,c;T(t[4]);let u=Object.entries(t[3]),l=[];for(let n=0;n<u.length;n+=1)l[n]=K(G(t,u,n));return{c(){e=y("div"),a=y("a"),o=b(t[1]),f=O();for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=w(n,"DIV",{id:!0,class:!0});var i=k(e);a=w(i,"A",{class:!0,href:!0});var r=k(a);o=$(r,t[1]),r.forEach(v),f=W(i);for(let m=0;m<l.length;m+=1)l[m].l(i);i.forEach(v),this.h()},h(){d(a,"class","title-name svelte-1lkdt1t"),d(a,"href",S+"/"),d(e,"id","navbar"),d(e,"class","svelte-1lkdt1t")},m(n,i){j(n,e,i),h(e,a),h(a,o),h(e,f);for(let r=0;r<l.length;r+=1)l[r].m(e,null);s||(c=J(window,"resize",t[4]),s=!0)},p(n,[i]){if(i&2&&L(o,n[1]),i&12){u=Object.entries(n[3]);let r;for(r=0;r<u.length;r+=1){const m=G(n,u,r);l[r]?l[r].p(m,i):(l[r]=K(m),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=u.length}},i:q,o:q,d(n){n&&v(e),V(l,n),s=!1,c()}}}function le(t,e,a){let o,f;B(t,ae,l=>a(2,f=l));const s={Projects:`${S}/`,About:`${S}/about`};let c;function u(){a(0,c=window.innerWidth)}return t.$$.update=()=>{t.$$.dirty&1&&a(1,o=c>=ne?"Noah Wager":"NW")},[c,o,f,s,u]}class oe extends R{constructor(e){super();D(this,e,le,re,F,{})}}function ie(t){let e,a,o,f,s,c,u,l,n,i,r,m,E;a=new oe({});const A=t[1].default,p=Q(A,t,t[0],null);return{c(){e=y("main"),U(a.$$.fragment),o=O(),p&&p.c(),f=O(),s=y("footer"),c=b(`Powered by\xA0
    `),u=y("a"),l=b("SvelteKit"),n=b(`
    . Hosted on\xA0
    `),i=y("a"),r=b("Github"),m=b(`
    .`),this.h()},l(_){e=w(_,"MAIN",{class:!0});var g=k(e);X(a.$$.fragment,g),o=W(g),p&&p.l(g),f=W(g),s=w(g,"FOOTER",{class:!0});var N=k(s);c=$(N,`Powered by\xA0
    `),u=w(N,"A",{href:!0,target:!0,rel:!0});var H=k(u);l=$(H,"SvelteKit"),H.forEach(v),n=$(N,`
    . Hosted on\xA0
    `),i=w(N,"A",{href:!0,target:!0,rel:!0});var I=k(i);r=$(I,"Github"),I.forEach(v),m=$(N,`
    .`),N.forEach(v),g.forEach(v),this.h()},h(){d(u,"href","https://kit.svelte.dev/"),d(u,"target","_blank"),d(u,"rel","noopener"),d(i,"href","https://github.com/nwager/nwager.github.io"),d(i,"target","_blank"),d(i,"rel","noopener"),d(s,"class","svelte-clyqs5"),d(e,"class","svelte-clyqs5")},m(_,g){j(_,e,g),Y(a,e,null),h(e,o),p&&p.m(e,null),h(e,f),h(e,s),h(s,c),h(s,u),h(u,l),h(s,n),h(s,i),h(i,r),h(s,m),E=!0},p(_,[g]){p&&p.p&&(!E||g&1)&&Z(p,A,_,_[0],E?ee(A,_[0],g,null):x(_[0]),null)},i(_){E||(z(a.$$.fragment,_),z(p,_),E=!0)},o(_){C(a.$$.fragment,_),C(p,_),E=!1},d(_){_&&v(e),te(a),p&&p.d(_)}}}function ce(t,e,a){let{$$slots:o={},$$scope:f}=e;return t.$$set=s=>{"$$scope"in s&&a(0,f=s.$$scope)},[f,o]}class fe extends R{constructor(e){super();D(this,e,ce,ie,F,{})}}export{fe as default};