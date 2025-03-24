"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[292],{88:(e,a,t)=>{t.d(a,{d:()=>i});var r=t(5155),o=t(2115),n=t(4884),c=t(3999);let i=o.forwardRef((e,a)=>{let{className:t,cornerRadius:o,...i}=e,s=void 0!==o?Math.min(o,12):12;return(0,r.jsx)(n.bL,{className:(0,c.cn)("peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input hover:data-[state=checked]:bg-primary-hover hover:data-[state=unchecked]:bg-muted-hover",t),style:{height:"".concat(24,"px"),width:"".concat(43.2,"px"),borderRadius:"".concat(s,"px")},...i,ref:a,children:(0,r.jsx)(n.zi,{className:(0,c.cn)("pointer-events-none block bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-0px)] data-[state=unchecked]:translate-x-0"),style:{width:"".concat(20,"px"),height:"".concat(20,"px"),borderRadius:void 0!==o?"".concat(Math.min(.8*o,10),"px"):"".concat(10,"px")}})})});i.displayName=n.bL.displayName},2714:(e,a,t)=>{t.d(a,{J:()=>l});var r=t(5155),o=t(2115),n=t(968),c=t(2085),i=t(3999);let s=(0,c.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),l=o.forwardRef((e,a)=>{let{className:t,...o}=e;return(0,r.jsx)(n.b,{ref:a,className:(0,i.cn)(s(),t),...o})});l.displayName=n.b.displayName},3580:(e,a,t)=>{t.d(a,{dj:()=>d});var r=t(2115);let o=0,n=new Map,c=e=>{if(n.has(e))return;let a=setTimeout(()=>{n.delete(e),h({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,a)},i=(e,a)=>{switch(a.type){case"ADD_TOAST":return{...e,toasts:[a.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===a.toast.id?{...e,...a.toast}:e)};case"DISMISS_TOAST":{let{toastId:t}=a;return t?c(t):e.toasts.forEach(e=>{c(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===t||void 0===t?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===a.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==a.toastId)}}},s=[],l={toasts:[]};function h(e){l=i(l,e),s.forEach(e=>{e(l)})}function p(e){let{...a}=e,t=(o=(o+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>h({type:"DISMISS_TOAST",toastId:t});return h({type:"ADD_TOAST",toast:{...a,id:t,open:!0,onOpenChange:e=>{e||r()}}}),{id:t,dismiss:r,update:e=>h({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function d(){let[e,a]=r.useState(l);return r.useEffect(()=>(s.push(a),()=>{let e=s.indexOf(a);e>-1&&s.splice(e,1)}),[e]),{...e,toast:p,dismiss:e=>h({type:"DISMISS_TOAST",toastId:e})}}},3999:(e,a,t)=>{t.d(a,{cn:()=>n});var r=t(2596),o=t(9688);function n(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,o.QP)((0,r.$)(a))}},4803:(e,a,t)=>{t.d(a,{E2:()=>n,EE:()=>T,K6:()=>c,Kk:()=>g,LM:()=>b,N8:()=>i,Ob:()=>h,Sf:()=>d,Sz:()=>x,VM:()=>r,Vm:()=>f,YL:()=>s,fW:()=>l,g8:()=>p,lH:()=>y,lO:()=>o,qY:()=>E});let r=(e,a)=>{let t=[];for(let r=0;r<=100;r++)try{if(0===r)t.push({tone:0,color:"#000000",hct:{h:e,c:0,t:0}});else if(100===r)t.push({tone:100,color:"#FFFFFF",hct:{h:e,c:0,t:100}});else{let o=g(e,a,r);t.push({tone:r,color:o,hct:{h:e,c:a,t:r}})}}catch(e){console.error("Error generating color for tone ".concat(r,":"),e),t.push({tone:r,color:"#000000",hct:{h:0,c:0,t:0}})}return t},o=(e,a)=>{let t=[];for(let r=0;r<=100;r++)try{if(0===r)t.push({tone:0,color:"#000000",hct:{h:e,c:0,t:0}});else if(100===r)t.push({tone:100,color:"#FFFFFF",hct:{h:e,c:0,t:100}});else{let o=g(e,a,r);t.push({tone:r,color:o,hct:{h:e,c:a,t:r}})}}catch(e){console.error("Error generating neutral color for tone ".concat(r,":"),e),t.push({tone:r,color:"#000000",hct:{h:0,c:0,t:0}})}return t},n=e=>{let a=Number.parseInt((e=e.replace(/^#/,"")).slice(0,2),16);return{r:a,g:Number.parseInt(e.slice(2,4),16),b:Number.parseInt(e.slice(4,6),16)}},c=(e,a,t)=>{let r=Math.max(e/=255,a/=255,t/=255),o=Math.min(e,a,t),n,c,i=(r+o)/2;if(r===o)n=c=0;else{let s=r-o;switch(c=i>.5?s/(2-r-o):s/(r+o),r){case e:n=(a-t)/s+6*(a<t);break;case a:n=(t-e)/s+2;break;case t:n=(e-a)/s+4;break;default:n=0}n/=6}return{h:Math.round(360*n),s:Math.round(100*c),l:Math.round(100*i)}},i=(e,a,t)=>{let r=e/255,o=a/255,n=t/255,c=1-Math.max(r,o,n);return{c:Math.round(100*(1===c?0:Math.max(0,Math.min(1,(1-r-c)/(1-c))))),m:Math.round(100*(1===c?0:Math.max(0,Math.min(1,(1-o-c)/(1-c))))),y:Math.round(100*(1===c?0:Math.max(0,Math.min(1,(1-n-c)/(1-c))))),k:Math.round(100*c)}},s=(e,a,t)=>{let r,o,n;if(e/=360,t/=100,0==(a/=100))r=o=n=t;else{let c=(e,a,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6)?e+(a-e)*6*t:t<.5?a:t<2/3?e+(a-e)*(2/3-t)*6:e,i=t<.5?t*(1+a):t+a-t*a,s=2*t-i;r=c(s,i,e+1/3),o=c(s,i,e),n=c(s,i,e-1/3)}return{r:Math.round(255*r),g:Math.round(255*o),b:Math.round(255*n)}},l=(e,a,t,r)=>({r:Math.round(255*(1-(e/=100))*(1-(r/=100))),g:Math.round(255*(1-(a/=100))*(1-r)),b:Math.round(255*(1-(t/=100))*(1-r))}),h=(e,a,t)=>"#"+[e,a,t].map(e=>{let a=e.toString(16);return 1===a.length?"0"+a:a}).join(""),p=e=>{let a=n(e),t=c(a.r,a.g,a.b);return"".concat(t.h," ").concat(t.s,"% ").concat(t.l,"%")},d=(e,a,t)=>{let r,o,n;if(e/=360,t/=100,0==(a/=100))r=o=n=t;else{let c=(e,a,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6)?e+(a-e)*6*t:t<.5?a:t<2/3?e+(a-e)*(2/3-t)*6:e,i=t<.5?t*(1+a):t+a-t*a,s=2*t-i;r=c(s,i,e+1/3),o=c(s,i,e),n=c(s,i,e-1/3)}let c=e=>{let a=Math.round(255*e).toString(16);return 1===a.length?"0"+a:a};return"#".concat(c(r)).concat(c(o)).concat(c(n)).toUpperCase()},g=(e,a,t)=>d(e,Math.min(100,1.5*a),t);function u(e,a,t,r,o){var n,c,i,s;return{color:y(e,a),hct:{h:void 0!==r?r:(null===(c=e[0])||void 0===c?void 0:null===(n=c.hct)||void 0===n?void 0:n.h)||0,c:void 0!==o?o:((null===(s=e[0])||void 0===s?void 0:null===(i=s.hct)||void 0===i?void 0:i.c)||0)*(a>50?.8:1),t:a},source:t?"neutral":"brand",sourceTone:a}}let y=(e,a)=>a<=0?"#000000":a>=100?"#FFFFFF":e.reduce((e,t)=>Math.abs(t.tone-a)<Math.abs(e.tone-a)?t:e,e[0]).color,m=(e,a,t)=>{let r=e/255,o=a/255,n=t/255;return .2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},f=e=>{let{r:a,g:t,b:r}=n(e),o=m(a,t,r);return v(o,1)>=v(o,0)},v=(e,a)=>(Math.max(e,a)+.05)/(Math.min(e,a)+.05),M=e=>f(e)?"#FCFCFC":"#0A0A0A",b=(e,a,t)=>{let r=Math.min(98,Math.max(80,90+(t-50)*.4)),o=Math.max(2,Math.min(20,10-(t-50)*.4)),i=n(a),s=c(i.r,i.g,i.b),l={h:s.h,c:Math.min(100,1.4*s.s),t:s.l},h=M(a);return{light:{background:u(e,Math.max(2,r),!0),foreground:u(e,8,!0),surface:{DEFAULT:u(e,Math.max(2,Math.min(98,r+2)),!0),foreground:u(e,8,!0),hover:u(e,Math.max(2,Math.min(98,r-2)),!0),active:u(e,Math.max(2,Math.min(98,r-4)),!0)},primary:{DEFAULT:{color:a,hct:l,source:"brand",sourceTone:t},foreground:{color:h,hct:null,source:null,sourceTone:null},hover:{color:a+"E6",hct:{...l,c:Math.max(0,l.c-5)},source:"brand",sourceTone:t},active:{color:a+"CC",hct:{...l,c:Math.max(0,l.c-10)},source:"brand",sourceTone:t}},secondary:{DEFAULT:u(e,Math.max(2,Math.min(98,r-4)),!0),foreground:u(e,8,!0),hover:u(e,Math.max(2,Math.min(98,r-6)),!0),active:u(e,Math.max(2,Math.min(98,r-8)),!0)},muted:{DEFAULT:u(e,Math.max(2,Math.min(98,r-4)),!0),foreground:u(e,38,!0),hover:u(e,Math.max(2,Math.min(98,r-8)),!0),active:u(e,Math.max(2,Math.min(98,r-10)),!0)},accent:{DEFAULT:u(e,Math.max(2,Math.min(98,r-4)),!0),foreground:u(e,8,!0),hover:u(e,Math.max(2,Math.min(98,r-6)),!0),active:u(e,Math.max(2,Math.min(98,r-8)),!0)},border:{DEFAULT:u(e,Math.max(2,Math.min(98,r-10)),!0),strong:u(e,Math.max(2,Math.min(98,r-14)),!0),light:u(e,Math.max(2,Math.min(98,r-6)),!0)},input:u(e,Math.max(2,Math.min(98,r-10)),!0),ring:{color:a,hct:l,source:"brand",sourceTone:t}},dark:{background:u(e,Math.min(98,o),!0),foreground:u(e,98,!0),surface:{DEFAULT:u(e,Math.min(98,Math.max(2,o+2)),!0),foreground:u(e,98,!0),hover:u(e,Math.min(98,Math.max(2,o+4)),!0),active:u(e,Math.min(98,Math.max(2,o+6)),!0)},primary:{DEFAULT:{color:a,hct:l,source:"brand",sourceTone:t},foreground:{color:h,hct:null,source:null,sourceTone:null},hover:{color:a+"E6",hct:{...l,c:Math.max(0,l.c-5)},source:"brand",sourceTone:t},active:{color:a+"CC",hct:{...l,c:Math.max(0,l.c-10)},source:"brand",sourceTone:t}},secondary:{DEFAULT:u(e,Math.min(98,Math.max(2,o+14)),!0),foreground:u(e,98,!0),hover:u(e,Math.min(98,Math.max(2,o+18)),!0),active:u(e,Math.min(98,Math.max(2,o+22)),!0)},muted:{DEFAULT:u(e,Math.min(98,Math.max(2,o+14)),!0),foreground:u(e,70,!0),hover:u(e,Math.min(98,Math.max(2,o+18)),!0),active:u(e,Math.min(98,Math.max(2,o+22)),!0)},accent:{DEFAULT:u(e,Math.min(98,Math.max(2,o+14)),!0),foreground:u(e,98,!0),hover:u(e,Math.min(98,Math.max(2,o+18)),!0),active:u(e,Math.min(98,Math.max(2,o+22)),!0)},border:{DEFAULT:u(e,Math.min(98,Math.max(2,o+22)),!0),strong:u(e,Math.min(98,Math.max(2,o+30)),!0),light:u(e,Math.min(98,Math.max(2,o+14)),!0)},input:u(e,Math.min(98,Math.max(2,o+22)),!0),ring:{color:a,hct:l,source:"brand",sourceTone:t}}}};function x(e,a,t,r,o){var i;let s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1.333;return[...function(e,a,t){let r=[];e.forEach(e=>{let a=n(e.color),t=c(a.r,a.g,a.b);r.push({name:"brand-".concat(e.tone),value:e.color,description:"Brand color at ".concat(e.tone,"% tone"),category:"colors",type:"color",hct:{h:t.h,c:Math.min(100,1.4*t.s),t:e.tone},sourceTone:e.tone})}),a.forEach(e=>{let a=n(e.color),t=c(a.r,a.g,a.b);r.push({name:"neutral-".concat(e.tone),value:e.color,description:"Neutral color at ".concat(e.tone,"% tone"),category:"colors",type:"color",hct:{h:t.h,c:Math.min(100,1.4*t.s),t:e.tone},sourceTone:e.tone})});let o=b(a,t,50).light;function i(e,a,t,r){return{name:e,value:a,description:t,category:"semantic",type:"color",scaleSource:(null==r?void 0:r.source)||null,sourceTone:(null==r?void 0:r.sourceTone)||null,hct:(null==r?void 0:r.hct)||null}}return r.push(i("background","var(--background)","Background color for pages",o.background),i("foreground","var(--foreground)","Text color on background",o.foreground),i("surface","var(--surface)","Surface component background color",o.surface.DEFAULT),i("surface-foreground","var(--surface-foreground)","Text color on surface components",o.surface.foreground),i("surface-hover","var(--surface-hover)","Surface hover state",o.surface.hover),i("surface-active","var(--surface-active)","Surface active/pressed state",o.surface.active),i("primary","var(--primary)","Primary action color",o.primary.DEFAULT),i("primary-foreground","var(--primary-foreground)","Text color on primary backgrounds",o.primary.foreground),i("primary-hover","var(--primary-hover)","Primary hover state",o.primary.hover),i("primary-active","var(--primary-active)","Primary active/pressed state",o.primary.active),i("secondary","var(--secondary)","Secondary action color",o.secondary.DEFAULT),i("secondary-foreground","var(--secondary-foreground)","Text color on secondary backgrounds",o.secondary.foreground),i("secondary-hover","var(--secondary-hover)","Secondary hover state",o.secondary.hover),i("secondary-active","var(--secondary-active)","Secondary active/pressed state",o.secondary.active),i("muted","var(--muted)","Muted background color",o.muted.DEFAULT),i("muted-foreground","var(--muted-foreground)","Muted text color",o.muted.foreground),i("muted-hover","var(--muted-hover)","Muted hover state",o.muted.hover),i("muted-active","var(--muted-active)","Muted active/pressed state",o.muted.active),i("accent","var(--accent)","Accent background color",o.accent.DEFAULT),i("accent-foreground","var(--accent-foreground)","Text color on accent backgrounds",o.accent.foreground),i("accent-hover","var(--accent-hover)","Accent hover state",o.accent.hover),i("accent-active","var(--accent-active)","Accent active/pressed state",o.accent.active),i("border","var(--border)","Border color",o.border.DEFAULT),i("border-strong","var(--border-strong)","Strong border color for emphasis",o.border.strong),i("border-light","var(--border-light)","Light border color for subtle separators",o.border.light),i("input","var(--input)","Input border color",o.input),i("ring","var(--ring)","Focus ring color",o.ring)),r}(e,a,t),...function(e){let a=Math.max(4,Math.round(.25*e));return[{name:"spacing-0",value:"0px",description:"No spacing",category:"spacing",type:"spacing"},{name:"spacing-1",value:"".concat(a,"px"),description:"Extra small spacing",category:"spacing",type:"spacing"},{name:"spacing-2",value:"".concat(2*a,"px"),description:"Small spacing",category:"spacing",type:"spacing"},{name:"spacing-3",value:"".concat(3*a,"px"),description:"Medium spacing",category:"spacing",type:"spacing"},{name:"spacing-4",value:"".concat(4*a,"px"),description:"Large spacing",category:"spacing",type:"spacing"},{name:"spacing-5",value:"".concat(6*a,"px"),description:"Extra large spacing",category:"spacing",type:"spacing"},{name:"spacing-6",value:"".concat(8*a,"px"),description:"2x large spacing",category:"spacing",type:"spacing"},{name:"spacing-7",value:"".concat(12*a,"px"),description:"3x large spacing",category:"spacing",type:"spacing"},{name:"spacing-8",value:"".concat(16*a,"px"),description:"4x large spacing",category:"spacing",type:"spacing"}]}(r),...function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1.333;return[{name:"font-family",value:"var(--font-family)",description:"Base font family for text",category:"typography",type:"typography"},{name:"font-mono",value:"var(--font-mono)",description:"Monospace font family for code",category:"typography",type:"typography"},{name:"heading-large",value:"var(--heading-large)",description:"Large heading size (h1)",category:"typography",type:"typography"},{name:"heading-medium",value:"var(--heading-medium)",description:"Medium heading size (h2)",category:"typography",type:"typography"},{name:"heading-small",value:"var(--heading-small)",description:"Small heading size (h3)",category:"typography",type:"typography"},{name:"body-large",value:"var(--body-large)",description:"Large body text size",category:"typography",type:"typography"},{name:"body-medium",value:"var(--body-medium)",description:"Medium body text size (default)",category:"typography",type:"typography"},{name:"body-small",value:"var(--body-small)",description:"Small body text size",category:"typography",type:"typography"},{name:"line-height",value:"var(--line-height)",description:"Base line height",category:"typography",type:"typography"},{name:"font-weight-light",value:"var(--font-weight-light)",description:"Light font weight (300)",category:"typography",type:"typography"},{name:"font-weight-regular",value:"var(--font-weight-regular)",description:"Regular font weight (400)",category:"typography",type:"typography"},{name:"font-weight-medium",value:"var(--font-weight-medium)",description:"Medium font weight (500)",category:"typography",type:"typography"},{name:"font-weight-semibold",value:"var(--font-weight-semibold)",description:"Semibold font weight (600)",category:"typography",type:"typography"},{name:"font-weight-bold",value:"var(--font-weight-bold)",description:"Bold font weight (700)",category:"typography",type:"typography"},{name:"letter-spacing-tight",value:"var(--letter-spacing-tight)",description:"Tight letter spacing",category:"typography",type:"typography"},{name:"letter-spacing-normal",value:"var(--letter-spacing-normal)",description:"Normal letter spacing",category:"typography",type:"typography"},{name:"letter-spacing-wide",value:"var(--letter-spacing-wide)",description:"Wide letter spacing",category:"typography",type:"typography"},{name:"heading-xl",value:"var(--heading-xl)",description:"Extra large heading size (h1+)",category:"typography",type:"typography"},{name:"heading-xs",value:"var(--heading-xs)",description:"Extra small heading size (h4)",category:"typography",type:"typography"},{name:"body-xl",value:"var(--body-xl)",description:"Extra large body text size",category:"typography",type:"typography"},{name:"body-xs",value:"var(--body-xs)",description:"Extra small body text size",category:"typography",type:"typography"},{name:"typography-ratio",value:a.toString(),description:"Typographic scale ratio (".concat(a.toFixed(3),")"),category:"typography",type:"typography"}]}(o,s,l),...(i=0,[{name:"radius",value:"var(--radius)",description:"Default border radius",category:"radius",type:"radius"},{name:"inner-radius",value:"var(--inner-radius)",description:"Inner element border radius",category:"radius",type:"radius"},{name:"card-padding",value:"var(--card-padding)",description:"Card padding",category:"spacing",type:"spacing"},{name:"spacing",value:"var(--spacing)",description:"Base spacing unit",category:"spacing",type:"spacing"}])]}function T(e){let a=":root {\n";return e.forEach(e=>{if(e.value.startsWith("var(")){let t=e.value.substring(4,e.value.length-1);a+="  ".concat(t,": /* Dynamic value */;\n")}else a+="  --".concat(e.name,": ").concat(e.value,";\n")}),a+="}\n"}function E(e){let a="module.exports = {\n";a+="  theme: {\n",a+="    extend: {\n";let t=e.filter(e=>"color"===e.type),r=e.filter(e=>"spacing"===e.type),o=e.filter(e=>"typography"===e.type),n=e.filter(e=>"radius"===e.type);return t.length>0&&(a+="      colors: {\n",t.forEach(e=>{a+="        '".concat(e.name.replace("color-",""),"': 'var(--").concat(e.name,")',\n")}),a+="      },\n"),r.length>0&&(a+="      spacing: {\n",r.forEach(e=>{a+="        '".concat(e.name.replace("spacing-",""),"': 'var(--").concat(e.name,")',\n")}),a+="      },\n"),n.length>0&&(a+="      borderRadius: {\n",n.forEach(e=>{a+="        '".concat(e.name.replace("radius-",""),"': 'var(--").concat(e.name,")',\n")}),a+="      },\n"),o.length>0&&(a+="      fontFamily: {\n",o.filter(e=>e.name.includes("font-family")||e.name.includes("font-mono")).forEach(e=>{a+="        '".concat(e.name.replace("font-",""),"': 'var(--").concat(e.name,")',\n")}),a+="      },\n",a+="      fontSize: {\n",o.filter(e=>e.name.includes("heading-")||e.name.includes("body-")).forEach(e=>{a+="        '".concat(e.name,"': 'var(--").concat(e.name,")',\n")}),a+="      },\n",a+="      fontWeight: {\n",o.filter(e=>e.name.includes("font-weight-")).forEach(e=>{a+="        '".concat(e.name.replace("font-weight-",""),"': 'var(--").concat(e.name,")',\n")}),a+="      },\n",a+="      letterSpacing: {\n",o.filter(e=>e.name.includes("letter-spacing-")).forEach(e=>{a+="        '".concat(e.name.replace("letter-spacing-",""),"': 'var(--").concat(e.name,")',\n")}),a+="      },\n",a+="      lineHeight: {\n",o.filter(e=>e.name.includes("line-height")).forEach(e=>{a+="        'base': 'var(--".concat(e.name,")',\n")}),a+="      },\n"),a+="    },\n",a+="  },\n",a+="};\n"}},9959:(e,a,t)=>{function r(e){if(document.querySelector('link[href*="'.concat(e,'"]')))return;let a=document.createElement("link");a.href="https://fonts.googleapis.com/css2?family=".concat(e,":wght@300;400;500;600;700&display=swap"),a.rel="stylesheet",document.head.appendChild(a)}function o(e){document.documentElement.style.setProperty("--font-family","'".concat(e.replace(/\+/g," "),"', sans-serif")),document.documentElement.style.setProperty("--font-mono",e.includes("Mono")?"'".concat(e.replace(/\+/g," "),"', monospace"):"'Roboto Mono', monospace")}async function n(){try{let e=await fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAOES8EmKhuJEnsn9kS1XKBpxxp-TgN8Jc");if(!e.ok)throw Error("Failed to fetch Google Fonts");return(await e.json()).items}catch(e){return console.error("Error fetching Google Fonts:",e),[]}}t.d(a,{Az:()=>i,FT:()=>s,Fd:()=>r,UK:()=>o,e9:()=>c,j3:()=>n});let c=[{family:"Roboto",category:"sans-serif"},{family:"Open Sans",category:"sans-serif"},{family:"Lato",category:"sans-serif"},{family:"Montserrat",category:"sans-serif"},{family:"Roboto Condensed",category:"sans-serif"},{family:"Source Sans Pro",category:"sans-serif"},{family:"Oswald",category:"sans-serif"},{family:"Raleway",category:"sans-serif"},{family:"Roboto Mono",category:"monospace"},{family:"Merriweather",category:"serif"},{family:"Poppins",category:"sans-serif"},{family:"Noto Sans",category:"sans-serif"},{family:"Ubuntu",category:"sans-serif"},{family:"Roboto Slab",category:"serif"},{family:"Playfair Display",category:"serif"},{family:"Lora",category:"serif"},{family:"PT Sans",category:"sans-serif"},{family:"Nunito",category:"sans-serif"},{family:"Work Sans",category:"sans-serif"},{family:"Noto Serif",category:"serif"}];function i(e){return e.replace(/\s+/g,"+")}function s(e){return e.replace(/\+/g," ")}}}]);