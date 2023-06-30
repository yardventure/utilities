"use strict";var S=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var J=Object.getOwnPropertyNames;var U=Object.prototype.hasOwnProperty;var X=(t,e)=>{for(var r in e)S(t,r,{get:e[r],enumerable:!0})},H=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of J(e))!U.call(t,s)&&s!==r&&S(t,s,{get:()=>e[s],enumerable:!(n=A(e,s))||n.enumerable});return t};var z=t=>H(S({},"__esModule",{value:!0}),t);var tt={};X(tt,{Box:()=>F,Button:()=>v,Flex:()=>P,Grid:()=>W,Text:()=>G});module.exports=z(tt);var R=require("react/jsx-runtime"),K=()=>(0,R.jsx)("div",{className:`
        loader-8us4IE
      `}),k=K;var w=(t,e)=>{if(e){if(t.lg)return t.lg.map(r=>m(r)).join(" ");if(t.sm)return t.sm.map(r=>m(r)).join(" ")}else return t.sm?t.sm.map(r=>m(r)).join(" "):"0"},c=(t,e)=>{if(e){if(t.lg==0)return"0";if(t.lg)return m(t.lg);if(t.sm)return m(t.sm)}else return t.sm?m(t.sm):"0"},N=(t,e)=>e?t.lg==0?t.lg:t.lg||t.sm:t.sm?t.sm:"0",m=t=>`${t/10}rem`;var x=require("react/jsx-runtime"),O=({as:t,buttonColor:e,textColor:r,href:n,external:s,variant:o="",buttonHeight:i=56,buttonWidth:u,borderRadius:d=8,shadow:p=!1,border:h,loading:l=!1,disabled:f=!1,startIcon:a,endIcon:b,className:y="",hint:C,transform:B,children:Q,onClick:I})=>{let _=()=>{if(!f&&I){I();return}},$={};if(u&&($.width=m(u)),i&&($.height=m(i)),d&&($.borderRadius=m(d)),n&&I)throw new Error("Please provider either href or onClick");return(0,x.jsx)("button",{style:$,className:`
        button-8us4IE
        button-8us4IE-buttonColor-${e}
        button-8us4IE-textColor-${r}
        ${o?`button-8us4IE-variant-${o}`:""}
        ${h?"button-8us4IE-border":""}
        ${p?"button-8us4IE-shadow":""}
        ${l?"button-8us4IE-loading":""}
        ${B?`button-8us4IE-transform-${B}`:""}
        ${y}
      `,disabled:l||f,onClick:_,children:(0,x.jsxs)(V,{as:t,href:n,target:s?"_blank":"_self",children:[a,Q,C&&(0,x.jsx)("span",{className:"button-8us4IE__hint",children:C}),b,l&&(0,x.jsx)(k,{})]})})},V=({as:t,href:e,target:r,children:n})=>{let s=t;if(t&&!e||!t&&e)throw new Error("Please provide both - as and href props");return e?(0,x.jsx)(s,{href:e,target:r,className:"button-8us4IE-link",children:n}):(0,x.jsx)("div",{className:"button-8us4IE-link",children:n})},v=O;var E=require("react");function g(t){let[e,r]=(0,E.useState)(!1);return(0,E.useEffect)(()=>{let n=window.matchMedia(`(min-width: ${t}px)`);n.matches!==e&&r(n.matches);let s=()=>{r(n.matches)};return n.addEventListener("change",s),()=>n.removeEventListener("change",s)},[e,t]),e}var D=require("react/jsx-runtime"),Y=({children:t,display:e="flex",alignItems:r,justifyContent:n,flexDirection:s="row",wrap:o,columnGap:i,rowGap:u,fullHeight:d,fullWidth:p,className:h="",spacing:l,center:f,onClick:a})=>{let b=g(1168),y={};return i&&(y.columnGap=c(i,b)),u&&(y.rowGap=c(u,b)),l&&(y.marginBottom=c(l,b)),(0,D.jsx)("div",{className:`
        flex-8us4IE
        flex-8us4IE-${e}
        flex-8us4IE-${`alignItems-${r}`}
        flex-8us4IE-${`justifyContent-${n}`}
        flex-8us4IE-${`flexDirection-${s}`}
        ${o?"flex-8us4IE-wrap":""}
        ${d?"flex-8us4IE-fullHeight":""}
        ${p?"flex-8us4IE-fullWidth":""}
        ${f?"flex-8us4IE-center":""}
        ${h}
      `,style:y,onClick:()=>{a&&a()},role:a?"button":"",children:t})},P=Y;var T=require("react/jsx-runtime"),Z=({children:t,backgroundColor:e="",padding:r,borderRadius:n,borderWidth:s,border:o="",opacity:i=100,shadow:u,overflow:d="visible",className:p="",spacing:h,onClick:l})=>{let f=g(1168),a={overflow:d};return r&&(a.padding=w(r,f)),n&&(a.borderRadius=w(n,f)),h&&(a.marginBottom=c(h,f)),s&&(a.borderWidth=m(s)),(0,T.jsx)("div",{className:`
        box-8us4IE 
        ${e?`box-8us4IE-backgroundColor-${e}-${i}`:""}
        ${o?`box-8us4IE-border-${o}`:""}
        ${u?`box-8us4IE-shadow-${u}`:""}
        ${p}
      `,style:a,onClick:()=>{l&&l()},role:l?"button":"",children:t})},F=Z;var M=require("react/jsx-runtime"),j=({tagName:t,mobile:e=!1,transform:r,decoration:n,fontWeight:s,variant:o,color:i,className:u="",align:d,spacing:p,fontFamily:h,children:l})=>{let f=g(1168),a=t,b={};return p&&(b.marginBottom=c(p,f)),s&&(b.fontWeight=s.toString()),(0,M.jsx)(a,{style:b,className:`
        text-8us4IE
        text-8us4IE-variant-${o}
        text-8us4IE-fontFamily-${h}
        ${i?`text-8us4IE-color-${i}`:""}
        ${d?`text-8us4IE-align-${d}`:""}
        ${e?"text-8us4IE-mobile":""}
        ${r?`text-8us4IE-transform-${r}`:""}
        ${n?`text-8us4IE-decoration-${n}`:""}
        ${u}
      `,children:l})},G=j;var L=require("react/jsx-runtime"),q=({children:t,column:e,gutter:r,className:n="",spacing:s})=>{let o=g(1168),i={};return s&&(i.marginBottom=c(s,o)),(0,L.jsx)("div",{className:`
        grid-8us4IE
        grid-8us4IE-${N(e,o)}-${N(r,o)}
        ${n}
      `,style:i,children:t})},W=q;0&&(module.exports={Box,Button,Flex,Grid,Text});
