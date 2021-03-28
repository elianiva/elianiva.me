import{S as e,i as a,s as o,o as t,p as r,r as n,u as s,v as h,x as i,y as c,z as p,w as l,e as f,t as g,a as u,f as m,g as d,k as v,d as w,c as y,h as k,j as E,l as b}from"../../../chunks/stores-7ca13020.js";import{P as I}from"../../../chunks/post-303fcdeb.js";import{U as $}from"../../../chunks/Update-a504eac1.js";import"../../../chunks/ProgressButton-a8599f0a.js";import"../../../chunks/theme-0c5a7997.js";function A(e){let a,o;return{c(){a=f("p"),o=g("I made a new once since the old one is too minimal. Here’s the new one.")},l(e){a=m(e,"P",{});var t=d(a);o=v(t,"I made a new once since the old one is too minimal. Here’s the new one."),t.forEach(w)},m(e,t){E(e,a,t),b(a,o)},d(e){e&&w(a)}}}function x(e){let a,o,t,r,n;return{c(){a=f("p"),o=g("I simplified my previous startpage by removing the icons and changing the font and the background. I also added a random sentence at the top so I will always memorise a word everytime I open a newtab page. There’s also a link to "),t=f("a"),r=g("jisho.org"),n=g(" in case I got interested on that word."),this.h()},l(e){a=m(e,"P",{});var s=d(a);o=v(s,"I simplified my previous startpage by removing the icons and changing the font and the background. I also added a random sentence at the top so I will always memorise a word everytime I open a newtab page. There’s also a link to "),t=m(s,"A",{href:!0,rel:!0});var h=d(t);r=v(h,"jisho.org"),h.forEach(w),n=v(s," in case I got interested on that word."),s.forEach(w),this.h()},h(){k(t,"href","https://jisho.org"),k(t,"rel","nofollow")},m(e,s){E(e,a,s),b(a,o),b(a,t),b(t,r),b(a,n)},d(e){e&&w(a)}}}function P(e){let a,o,t,h,l,I,P,j,C,T,M,H,L,O,S,_,q,Y,D,F,G,U,N,B,R,J,K,W,z,Z,Q,V,X,ee,ae,oe,te,re,ne,se,he,ie,ce,pe,le,fe,ge,ue,me,de,ve,we,ye,ke,Ee,be,Ie,$e,Ae,xe,Pe,je,Ce,Te,Me,He,Le,Oe,Se,_e,qe,Ye,De,Fe,Ge,Ue,Ne,Be,Re,Je,Ke,We,ze,Ze,Qe,Ve,Xe,ea,aa,oa,ta,ra,na,sa,ha,ia,ca,pa,la,fa,ga,ua,ma,da,va,wa,ya,ka,Ea,ba,Ia,$a,Aa,xa,Pa,ja,Ca,Ta,Ma,Ha,La,Oa,Sa,_a,qa,Ya,Da,Fa,Ga,Ua,Na,Ba,Ra,Ja,Ka,Wa,za,Za,Qa,Va,Xa,eo,ao,oo,to,ro,no,so,ho,io,co,po,lo,fo,go,uo,mo,vo,wo,yo,ko,Eo,bo,Io,$o,Ao,xo,Po,jo,Co,To,Mo,Ho,Lo,Oo,So,_o,qo,Yo;return Oa=new $({props:{date:"17-10-2020",$$slots:{default:[A]},$$scope:{ctx:e}}}),Ra=new $({props:{date:"26-02-2021",$$slots:{default:[x]},$$scope:{ctx:e}}}),{c(){a=f("h1"),o=f("a"),t=g("Table of Content"),h=u(),l=f("ul"),I=f("li"),P=f("p"),j=f("a"),C=g("Introduction"),T=u(),M=f("li"),H=f("p"),L=f("a"),O=g("Making the extension"),S=u(),_=f("ul"),q=f("li"),Y=f("a"),D=g("Prerequisite"),F=u(),G=f("li"),U=f("a"),N=g("Preparing the project"),B=u(),R=f("li"),J=f("a"),K=g("Making the page"),W=u(),z=f("li"),Z=f("a"),Q=g("Applying the homepage"),V=u(),X=f("li"),ee=f("p"),ae=f("a"),oe=g("Conclusion"),te=u(),re=f("h1"),ne=f("a"),se=g("Introduction"),he=u(),ie=f("p"),ce=g("Well, I’ve been wanting to make my own homepage or newtab page. I thought this kind of thing is only possible in firefox. You might have seen some cool custom firefox startpage like "),pe=f("a"),le=g("this one"),fe=g(". Turns out, if you want a custom newtab page on chrome, you have to make an extension for that. Fortunately, it is super simple."),ge=u(),ue=f("h1"),me=f("a"),de=g("Making the extension"),ve=u(),we=f("h2"),ye=f("a"),ke=g("Prerequisite"),Ee=u(),be=f("p"),Ie=g("Before we start, we must prepare several things."),$e=u(),Ae=f("ul"),xe=f("li"),Pe=g("Basic knowledge of HTML, CSS and JS (JS isn’t required though, it’s optional)."),je=u(),Ce=f("li"),Te=g("Text editor"),Me=u(),He=f("li"),Le=g("Chrome based browser (duh? obviously)"),Oe=u(),Se=f("h2"),_e=f("a"),qe=g("Preparing the project"),Ye=u(),De=f("p"),Fe=g("First thing first, make a directory with the name of your choice anywhere you prefer. I’ll have mine at "),Ge=f("code"),Ue=g("~/codes/chrome-page"),Ne=g(". Then inside that directory, create a "),Be=f("code"),Re=g("manifest.json"),Je=g(" file. Fill it with this."),Ke=u(),We=f("pre"),ze=u(),Ze=f("p"),Qe=g("If you want to know this file even more, "),Ve=f("a"),Xe=g("google has it covered"),ea=g(" for you. The important part here is the "),aa=f("code"),oa=g("chrome_url_overrides.newtab"),ta=g(" field. You should point that to an HTML file that you want to make as a startpage."),ra=u(),na=f("h2"),sa=f("a"),ha=g("Making the page"),ia=u(),ca=f("p"),pa=g("Honestly, nothing much to tell here. You can go as overkill as you want for a startpage or just go ahead and pick one from the internet. I suggest you to go to "),la=f("a"),fa=g("r/startpage"),ga=g(" subreddit for a start. Here’s mine."),ua=u(),ma=f("p"),da=f("img"),wa=u(),ya=f("p"),ka=g("It’s super simple, I just set some vim-like shortcut (prefixed with colon) like "),Ea=f("code"),ba=g(":o"),Ia=g(" to open a new website, "),$a=f("code"),Aa=g(":s"),xa=g(" to do google search, "),Pa=f("code"),ja=g(":gh"),Ca=g(" to open github, etc. If you want mine, you can get it "),Ta=f("a"),Ma=g("here"),Ha=g("."),La=u(),r(Oa.$$.fragment),Sa=u(),_a=f("p"),qa=f("img"),Da=u(),Fa=f("p"),Ga=g("You can get it "),Ua=f("a"),Na=g("here"),Ba=u(),r(Ra.$$.fragment),Ja=u(),Ka=f("p"),Wa=f("img"),Za=u(),Qa=f("p"),Va=g("You can get this new one "),Xa=f("a"),eo=g("here"),ao=g(" and I have an API that serves random word "),oo=f("a"),to=g("here"),ro=g("."),no=u(),so=f("h2"),ho=f("a"),io=g("Applying the homepage"),co=u(),po=f("p"),lo=g("To apply the homepage that you’ve made, go ahead to "),fo=f("code"),go=g("chrome://extensions"),uo=g(" and activate "),mo=f("strong"),vo=g("Developer Mode"),wo=g(" at the top right corner. A new menu should appeared. Click on the button that says "),yo=f("strong"),ko=g("Load Unpacked"),Eo=g(". A file manager will appear, go ahead and navigate to your project directory and click "),bo=f("strong"),Io=g("OK"),$o=g(" or "),Ao=f("strong"),xo=g("Choose"),Po=g(" or whatever your file manager gives you. New extension should appear with the name that you choose earlier on "),jo=f("code"),Co=g("manifest.json"),To=g(". Activate it and that’s it, your custom startpage should appear whenever you open a new tab."),Mo=u(),Ho=f("h1"),Lo=f("a"),Oo=g("Conclusion"),So=u(),_o=f("p"),qo=g("Making a custom startpage for google chrome isn’t that hard. I thought it requires some weird trick or something but it’s not. Hope you find this post useful and see ya later, have a nice day! ツ"),this.h()},l(e){a=m(e,"H1",{id:!0});var r=d(a);o=m(r,"A",{href:!0});var s=d(o);t=v(s,"Table of Content"),s.forEach(w),r.forEach(w),h=y(e),l=m(e,"UL",{});var i=d(l);I=m(i,"LI",{});var c=d(I);P=m(c,"P",{});var p=d(P);j=m(p,"A",{href:!0});var f=d(j);C=v(f,"Introduction"),f.forEach(w),p.forEach(w),c.forEach(w),T=y(i),M=m(i,"LI",{});var g=d(M);H=m(g,"P",{});var u=d(H);L=m(u,"A",{href:!0});var k=d(L);O=v(k,"Making the extension"),k.forEach(w),u.forEach(w),S=y(g),_=m(g,"UL",{});var E=d(_);q=m(E,"LI",{});var b=d(q);Y=m(b,"A",{href:!0});var $=d(Y);D=v($,"Prerequisite"),$.forEach(w),b.forEach(w),F=y(E),G=m(E,"LI",{});var A=d(G);U=m(A,"A",{href:!0});var x=d(U);N=v(x,"Preparing the project"),x.forEach(w),A.forEach(w),B=y(E),R=m(E,"LI",{});var va=d(R);J=m(va,"A",{href:!0});var Ya=d(J);K=v(Ya,"Making the page"),Ya.forEach(w),va.forEach(w),W=y(E),z=m(E,"LI",{});var za=d(z);Z=m(za,"A",{href:!0});var Yo=d(Z);Q=v(Yo,"Applying the homepage"),Yo.forEach(w),za.forEach(w),E.forEach(w),g.forEach(w),V=y(i),X=m(i,"LI",{});var Do=d(X);ee=m(Do,"P",{});var Fo=d(ee);ae=m(Fo,"A",{href:!0});var Go=d(ae);oe=v(Go,"Conclusion"),Go.forEach(w),Fo.forEach(w),Do.forEach(w),i.forEach(w),te=y(e),re=m(e,"H1",{id:!0});var Uo=d(re);ne=m(Uo,"A",{href:!0});var No=d(ne);se=v(No,"Introduction"),No.forEach(w),Uo.forEach(w),he=y(e),ie=m(e,"P",{});var Bo=d(ie);ce=v(Bo,"Well, I’ve been wanting to make my own homepage or newtab page. I thought this kind of thing is only possible in firefox. You might have seen some cool custom firefox startpage like "),pe=m(Bo,"A",{href:!0,rel:!0});var Ro=d(pe);le=v(Ro,"this one"),Ro.forEach(w),fe=v(Bo,". Turns out, if you want a custom newtab page on chrome, you have to make an extension for that. Fortunately, it is super simple."),Bo.forEach(w),ge=y(e),ue=m(e,"H1",{id:!0});var Jo=d(ue);me=m(Jo,"A",{href:!0});var Ko=d(me);de=v(Ko,"Making the extension"),Ko.forEach(w),Jo.forEach(w),ve=y(e),we=m(e,"H2",{id:!0});var Wo=d(we);ye=m(Wo,"A",{href:!0});var zo=d(ye);ke=v(zo,"Prerequisite"),zo.forEach(w),Wo.forEach(w),Ee=y(e),be=m(e,"P",{});var Zo=d(be);Ie=v(Zo,"Before we start, we must prepare several things."),Zo.forEach(w),$e=y(e),Ae=m(e,"UL",{});var Qo=d(Ae);xe=m(Qo,"LI",{});var Vo=d(xe);Pe=v(Vo,"Basic knowledge of HTML, CSS and JS (JS isn’t required though, it’s optional)."),Vo.forEach(w),je=y(Qo),Ce=m(Qo,"LI",{});var Xo=d(Ce);Te=v(Xo,"Text editor"),Xo.forEach(w),Me=y(Qo),He=m(Qo,"LI",{});var et=d(He);Le=v(et,"Chrome based browser (duh? obviously)"),et.forEach(w),Qo.forEach(w),Oe=y(e),Se=m(e,"H2",{id:!0});var at=d(Se);_e=m(at,"A",{href:!0});var ot=d(_e);qe=v(ot,"Preparing the project"),ot.forEach(w),at.forEach(w),Ye=y(e),De=m(e,"P",{});var tt=d(De);Fe=v(tt,"First thing first, make a directory with the name of your choice anywhere you prefer. I’ll have mine at "),Ge=m(tt,"CODE",{});var rt=d(Ge);Ue=v(rt,"~/codes/chrome-page"),rt.forEach(w),Ne=v(tt,". Then inside that directory, create a "),Be=m(tt,"CODE",{});var nt=d(Be);Re=v(nt,"manifest.json"),nt.forEach(w),Je=v(tt," file. Fill it with this."),tt.forEach(w),Ke=y(e),We=m(e,"PRE",{class:!0}),d(We).forEach(w),ze=y(e),Ze=m(e,"P",{});var st=d(Ze);Qe=v(st,"If you want to know this file even more, "),Ve=m(st,"A",{href:!0,rel:!0});var ht=d(Ve);Xe=v(ht,"google has it covered"),ht.forEach(w),ea=v(st," for you. The important part here is the "),aa=m(st,"CODE",{});var it=d(aa);oa=v(it,"chrome_url_overrides.newtab"),it.forEach(w),ta=v(st," field. You should point that to an HTML file that you want to make as a startpage."),st.forEach(w),ra=y(e),na=m(e,"H2",{id:!0});var ct=d(na);sa=m(ct,"A",{href:!0});var pt=d(sa);ha=v(pt,"Making the page"),pt.forEach(w),ct.forEach(w),ia=y(e),ca=m(e,"P",{});var lt=d(ca);pa=v(lt,"Honestly, nothing much to tell here. You can go as overkill as you want for a startpage or just go ahead and pick one from the internet. I suggest you to go to "),la=m(lt,"A",{href:!0,rel:!0});var ft=d(la);fa=v(ft,"r/startpage"),ft.forEach(w),ga=v(lt," subreddit for a start. Here’s mine."),lt.forEach(w),ua=y(e),ma=m(e,"P",{});var gt=d(ma);da=m(gt,"IMG",{src:!0,alt:!0}),gt.forEach(w),wa=y(e),ya=m(e,"P",{});var ut=d(ya);ka=v(ut,"It’s super simple, I just set some vim-like shortcut (prefixed with colon) like "),Ea=m(ut,"CODE",{});var mt=d(Ea);ba=v(mt,":o"),mt.forEach(w),Ia=v(ut," to open a new website, "),$a=m(ut,"CODE",{});var dt=d($a);Aa=v(dt,":s"),dt.forEach(w),xa=v(ut," to do google search, "),Pa=m(ut,"CODE",{});var vt=d(Pa);ja=v(vt,":gh"),vt.forEach(w),Ca=v(ut," to open github, etc. If you want mine, you can get it "),Ta=m(ut,"A",{href:!0,rel:!0});var wt=d(Ta);Ma=v(wt,"here"),wt.forEach(w),Ha=v(ut,"."),ut.forEach(w),La=y(e),n(Oa.$$.fragment,e),Sa=y(e),_a=m(e,"P",{});var yt=d(_a);qa=m(yt,"IMG",{src:!0,alt:!0}),yt.forEach(w),Da=y(e),Fa=m(e,"P",{});var kt=d(Fa);Ga=v(kt,"You can get it "),Ua=m(kt,"A",{href:!0,rel:!0});var Et=d(Ua);Na=v(Et,"here"),Et.forEach(w),kt.forEach(w),Ba=y(e),n(Ra.$$.fragment,e),Ja=y(e),Ka=m(e,"P",{});var bt=d(Ka);Wa=m(bt,"IMG",{src:!0,alt:!0}),bt.forEach(w),Za=y(e),Qa=m(e,"P",{});var It=d(Qa);Va=v(It,"You can get this new one "),Xa=m(It,"A",{href:!0,rel:!0});var $t=d(Xa);eo=v($t,"here"),$t.forEach(w),ao=v(It," and I have an API that serves random word "),oo=m(It,"A",{href:!0,rel:!0});var At=d(oo);to=v(At,"here"),At.forEach(w),ro=v(It,"."),It.forEach(w),no=y(e),so=m(e,"H2",{id:!0});var xt=d(so);ho=m(xt,"A",{href:!0});var Pt=d(ho);io=v(Pt,"Applying the homepage"),Pt.forEach(w),xt.forEach(w),co=y(e),po=m(e,"P",{});var jt=d(po);lo=v(jt,"To apply the homepage that you’ve made, go ahead to "),fo=m(jt,"CODE",{});var Ct=d(fo);go=v(Ct,"chrome://extensions"),Ct.forEach(w),uo=v(jt," and activate "),mo=m(jt,"STRONG",{});var Tt=d(mo);vo=v(Tt,"Developer Mode"),Tt.forEach(w),wo=v(jt," at the top right corner. A new menu should appeared. Click on the button that says "),yo=m(jt,"STRONG",{});var Mt=d(yo);ko=v(Mt,"Load Unpacked"),Mt.forEach(w),Eo=v(jt,". A file manager will appear, go ahead and navigate to your project directory and click "),bo=m(jt,"STRONG",{});var Ht=d(bo);Io=v(Ht,"OK"),Ht.forEach(w),$o=v(jt," or "),Ao=m(jt,"STRONG",{});var Lt=d(Ao);xo=v(Lt,"Choose"),Lt.forEach(w),Po=v(jt," or whatever your file manager gives you. New extension should appear with the name that you choose earlier on "),jo=m(jt,"CODE",{});var Ot=d(jo);Co=v(Ot,"manifest.json"),Ot.forEach(w),To=v(jt,". Activate it and that’s it, your custom startpage should appear whenever you open a new tab."),jt.forEach(w),Mo=y(e),Ho=m(e,"H1",{id:!0});var St=d(Ho);Lo=m(St,"A",{href:!0});var _t=d(Lo);Oo=v(_t,"Conclusion"),_t.forEach(w),St.forEach(w),So=y(e),_o=m(e,"P",{});var qt=d(_o);qo=v(qt,"Making a custom startpage for google chrome isn’t that hard. I thought it requires some weird trick or something but it’s not. Hope you find this post useful and see ya later, have a nice day! ツ"),qt.forEach(w),this.h()},h(){k(o,"href","#table-of-content"),k(a,"id","table-of-content"),k(j,"href","#introduction"),k(L,"href","#making-the-extension"),k(Y,"href","#prerequisite"),k(U,"href","#preparing-the-project"),k(J,"href","#making-the-page"),k(Z,"href","#applying-the-homepage"),k(ae,"href","#conclusion"),k(ne,"href","#introduction"),k(re,"id","introduction"),k(pe,"href","https://www.reddit.com/r/startpages/comments/hfuoqg/a_simple_startpage_i_have_been_working_on"),k(pe,"rel","nofollow"),k(me,"href","#making-the-extension"),k(ue,"id","making-the-extension"),k(ye,"href","#prerequisite"),k(we,"id","prerequisite"),k(_e,"href","#preparing-the-project"),k(Se,"id","preparing-the-project"),k(We,"class","language-json"),k(Ve,"href","https://developer.chrome.com/extensions/manifest"),k(Ve,"rel","nofollow"),k(sa,"href","#making-the-page"),k(na,"id","making-the-page"),k(la,"href","https://reddit.com/r/startpage"),k(la,"rel","nofollow"),da.src!==(va="/assets/post/chrome-custom-newtab/old.png")&&k(da,"src","/assets/post/chrome-custom-newtab/old.png"),k(da,"alt","old startpage"),k(Ta,"href","https://github.com/elianiva/dotfiles/blob/master/misc/codes/chrome-page"),k(Ta,"rel","nofollow"),qa.src!==(Ya="/assets/post/chrome-custom-newtab/new.png")&&k(qa,"src","/assets/post/chrome-custom-newtab/new.png"),k(qa,"alt","new startpage"),k(Ua,"href","https://github.com/elianiva/dotfiles/blob/master/misc/codes/startpage"),k(Ua,"rel","nofollow"),Wa.src!==(za="/assets/post/chrome-custom-newtab/newer.webp")&&k(Wa,"src","/assets/post/chrome-custom-newtab/newer.webp"),k(Wa,"alt","newer startpage"),k(Xa,"href","https://github.com/elianiva/dotfiles/blob/master/codes/startpage"),k(Xa,"rel","nofollow"),k(oo,"href","https://github.com/elianiva/random-jp-api"),k(oo,"rel","nofollow"),k(ho,"href","#applying-the-homepage"),k(so,"id","applying-the-homepage"),k(Lo,"href","#conclusion"),k(Ho,"id","conclusion")},m(e,r){E(e,a,r),b(a,o),b(o,t),E(e,h,r),E(e,l,r),b(l,I),b(I,P),b(P,j),b(j,C),b(l,T),b(l,M),b(M,H),b(H,L),b(L,O),b(M,S),b(M,_),b(_,q),b(q,Y),b(Y,D),b(_,F),b(_,G),b(G,U),b(U,N),b(_,B),b(_,R),b(R,J),b(J,K),b(_,W),b(_,z),b(z,Z),b(Z,Q),b(l,V),b(l,X),b(X,ee),b(ee,ae),b(ae,oe),E(e,te,r),E(e,re,r),b(re,ne),b(ne,se),E(e,he,r),E(e,ie,r),b(ie,ce),b(ie,pe),b(pe,le),b(ie,fe),E(e,ge,r),E(e,ue,r),b(ue,me),b(me,de),E(e,ve,r),E(e,we,r),b(we,ye),b(ye,ke),E(e,Ee,r),E(e,be,r),b(be,Ie),E(e,$e,r),E(e,Ae,r),b(Ae,xe),b(xe,Pe),b(Ae,je),b(Ae,Ce),b(Ce,Te),b(Ae,Me),b(Ae,He),b(He,Le),E(e,Oe,r),E(e,Se,r),b(Se,_e),b(_e,qe),E(e,Ye,r),E(e,De,r),b(De,Fe),b(De,Ge),b(Ge,Ue),b(De,Ne),b(De,Be),b(Be,Re),b(De,Je),E(e,Ke,r),E(e,We,r),We.innerHTML='<code class="language-json"><span class="token punctuation">&#123;</span>\n  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Startpage"</span><span class="token punctuation">,</span>\n  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"My personal custom startpage"</span><span class="token punctuation">,</span>\n  <span class="token property">"manifest_version"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n  <span class="token property">"chrome_url_overrides"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n    <span class="token property">"newtab"</span><span class="token operator">:</span> <span class="token string">"index.html"</span>\n  <span class="token punctuation">&#125;</span>\n<span class="token punctuation">&#125;</span></code>',E(e,ze,r),E(e,Ze,r),b(Ze,Qe),b(Ze,Ve),b(Ve,Xe),b(Ze,ea),b(Ze,aa),b(aa,oa),b(Ze,ta),E(e,ra,r),E(e,na,r),b(na,sa),b(sa,ha),E(e,ia,r),E(e,ca,r),b(ca,pa),b(ca,la),b(la,fa),b(ca,ga),E(e,ua,r),E(e,ma,r),b(ma,da),E(e,wa,r),E(e,ya,r),b(ya,ka),b(ya,Ea),b(Ea,ba),b(ya,Ia),b(ya,$a),b($a,Aa),b(ya,xa),b(ya,Pa),b(Pa,ja),b(ya,Ca),b(ya,Ta),b(Ta,Ma),b(ya,Ha),E(e,La,r),s(Oa,e,r),E(e,Sa,r),E(e,_a,r),b(_a,qa),E(e,Da,r),E(e,Fa,r),b(Fa,Ga),b(Fa,Ua),b(Ua,Na),E(e,Ba,r),s(Ra,e,r),E(e,Ja,r),E(e,Ka,r),b(Ka,Wa),E(e,Za,r),E(e,Qa,r),b(Qa,Va),b(Qa,Xa),b(Xa,eo),b(Qa,ao),b(Qa,oo),b(oo,to),b(Qa,ro),E(e,no,r),E(e,so,r),b(so,ho),b(ho,io),E(e,co,r),E(e,po,r),b(po,lo),b(po,fo),b(fo,go),b(po,uo),b(po,mo),b(mo,vo),b(po,wo),b(po,yo),b(yo,ko),b(po,Eo),b(po,bo),b(bo,Io),b(po,$o),b(po,Ao),b(Ao,xo),b(po,Po),b(po,jo),b(jo,Co),b(po,To),E(e,Mo,r),E(e,Ho,r),b(Ho,Lo),b(Lo,Oo),E(e,So,r),E(e,_o,r),b(_o,qo),Yo=!0},p(e,a){const o={};1&a&&(o.$$scope={dirty:a,ctx:e}),Oa.$set(o);const t={};1&a&&(t.$$scope={dirty:a,ctx:e}),Ra.$set(t)},i(e){Yo||(i(Oa.$$.fragment,e),i(Ra.$$.fragment,e),Yo=!0)},o(e){c(Oa.$$.fragment,e),c(Ra.$$.fragment,e),Yo=!1},d(e){e&&w(a),e&&w(h),e&&w(l),e&&w(te),e&&w(re),e&&w(he),e&&w(ie),e&&w(ge),e&&w(ue),e&&w(ve),e&&w(we),e&&w(Ee),e&&w(be),e&&w($e),e&&w(Ae),e&&w(Oe),e&&w(Se),e&&w(Ye),e&&w(De),e&&w(Ke),e&&w(We),e&&w(ze),e&&w(Ze),e&&w(ra),e&&w(na),e&&w(ia),e&&w(ca),e&&w(ua),e&&w(ma),e&&w(wa),e&&w(ya),e&&w(La),p(Oa,e),e&&w(Sa),e&&w(_a),e&&w(Da),e&&w(Fa),e&&w(Ba),p(Ra,e),e&&w(Ja),e&&w(Ka),e&&w(Za),e&&w(Qa),e&&w(no),e&&w(so),e&&w(co),e&&w(po),e&&w(Mo),e&&w(Ho),e&&w(So),e&&w(_o)}}}function j(e){let a,o;const f=[C];let g={$$slots:{default:[P]},$$scope:{ctx:e}};for(let r=0;r<f.length;r+=1)g=t(g,f[r]);return a=new I({props:g}),{c(){r(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){s(a,e,t),o=!0},p(e,[o]){const t=0&o?h(f,[l(C)]):{};1&o&&(t.$$scope={dirty:o,ctx:e}),a.$set(t)},i(e){o||(i(a.$$.fragment,e),o=!0)},o(e){c(a.$$.fragment,e),o=!1},d(e){p(a,e)}}}const C={title:"Making You Own Custom Startpage For Chrome",date:"2020-09-15T00:00:00.000Z",desc:"An attempt of creating a custom startpage so that I don't get bored whenever I open a new tab on chrome.",tags:["website"]};export default class extends e{constructor(e){super(),a(this,e,null,j,o,{})}}export{C as metadata};