import{S as s,i as a,s as e,T as t,e as c,t as l,j as n,c as o,a as r,b as p,d,l as u,o as i,f as h,g as v,V as b,w as f,x as $}from"./stores-bccdb558.js";function x(s){let a,e,x,E,_,m,g,D,I,S;const A=s[3].default,P=t(A,s,s[2],null);return{c(){a=c("section"),e=c("div"),x=c("span"),E=l("UPDATE"),_=n(),m=c("span"),g=l(s[0]),D=n(),I=c("div"),P&&P.c(),this.h()},l(t){a=o(t,"SECTION",{class:!0});var c=r(a);e=o(c,"DIV",{class:!0});var l=r(e);x=o(l,"SPAN",{class:!0});var n=r(x);E=p(n,"UPDATE"),n.forEach(d),_=u(l),m=o(l,"SPAN",{class:!0});var i=r(m);g=p(i,s[0]),i.forEach(d),l.forEach(d),D=u(c),I=o(c,"DIV",{class:!0});var h=r(I);P&&P.l(h),h.forEach(d),c.forEach(d),this.h()},h(){i(x,"class","update__title svelte-1xo4abp"),i(m,"class","update__date svelte-1xo4abp"),i(e,"class","update__header svelte-1xo4abp"),i(I,"class","update__content svelte-1xo4abp"),i(a,"class","update svelte-1xo4abp")},m(s,t){h(s,a,t),v(a,e),v(e,x),v(x,E),v(e,_),v(e,m),v(m,g),v(a,D),v(a,I),P&&P.m(I,null),S=!0},p(s,[a]){P&&P.p&&4&a&&b(P,A,s,s[2],a,null,null)},i(s){S||(f(P,s),S=!0)},o(s){$(P,s),S=!1},d(s){s&&d(a),P&&P.d(s)}}}function E(s,a,e){let{$$slots:t={},$$scope:c}=a,{date:l=""}=a;const n=new Date(parseInt(l.substring(6,10)),parseInt(l.substring(3,5)),parseInt(l.substring(0,2))).toLocaleDateString("en-UK",{weekday:"short",year:"numeric",month:"long",day:"numeric"});return s.$$set=s=>{"date"in s&&e(1,l=s.date),"$$scope"in s&&e(2,c=s.$$scope)},[n,l,c,t]}class _ extends s{constructor(s){super(),a(this,s,E,x,e,{date:1})}}export{_ as U};