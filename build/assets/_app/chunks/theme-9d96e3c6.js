import{n as t,s as n}from"./stores-bccdb558.js";const s=[];function e(e,o=t){let c;const l=[];function i(t){if(n(e,t)&&(e=t,c)){const t=!s.length;for(let n=0;n<l.length;n+=1){const t=l[n];t[1](),s.push(t,e)}if(t){for(let t=0;t<s.length;t+=2)s[t][0](s[t+1]);s.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(n,s=t){const r=[n,s];return l.push(r),1===l.length&&(c=o(i)||t),n(e),()=>{const t=l.indexOf(r);-1!==t&&l.splice(t,1),0===l.length&&(c(),c=null)}}}}const o=e("light");export{o as t,e as w};