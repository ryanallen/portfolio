(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1046:(e,t,a)=>{Promise.resolve().then(a.bind(a,1626))},1626:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>L});var r=a(5155),n=a(5565),i=a(8173),l=a.n(i),s=a(3848);let o={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.22,1,.36,1]}}},d={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},c={initial:{scale:1,x:0},hover:{scale:1.05,x:5,transition:{duration:.3,ease:[.22,1,.36,1]}},tap:{scale:.98,x:2,transition:{duration:.15,ease:[.22,1,.36,1]}}};function m(e){let{media:t,headline:a,subheadline:n,buttonText:i,buttonLink:l,className:o="",aspectRatio:d="aspect-[16/9]"}=e;return(0,r.jsxs)(s.P.div,{className:"flex flex-col h-full rounded-[28px] bg-[#080C0E] border-4 border-border-dark ".concat(o),whileHover:{y:-5},transition:{duration:.3,ease:[.22,1,.36,1]},children:[(0,r.jsx)("div",{className:"w-full ".concat(d," rounded-t-[24px] border-b-4 border-border-dark overflow-hidden"),children:t}),(0,r.jsxs)("div",{className:"flex flex-col flex-grow p-4 sm:p-6",children:[(0,r.jsx)("h3",{className:"font-outfit font-bold text-lg md:text-xl lg:text-2xl tracking-tight",children:a}),(0,r.jsx)("p",{className:"font-montserrat font-normal text-sm sm:text-base lg:text-xl mt-3 sm:mt-4 leading-relaxed",children:n}),(0,r.jsx)("div",{className:"flex-grow"}),i&&l&&(0,r.jsx)("div",{className:"mt-4 sm:mt-6",children:(0,r.jsx)(s.P.a,{href:l,target:"_blank",className:"inline-block text-accent-primary border-4 border-accent-primary px-4 sm:px-6 py-2 sm:py-2.5 rounded-full no-underline font-outfit font-semibold text-sm leading-5 transition-all duration-100 ease-out hover:border-accent-primaryHover hover:bg-[#021F28]",whileHover:"hover",whileTap:"tap",variants:c,rel:"noreferrer",children:i})})]})]})}function h(e){let{quote:t,reviewerName:a,reviewerInfo:n,reviewerImage:i}=e;return(0,r.jsx)(s.P.div,{className:"flex flex-col h-full rounded-[28px] bg-[#F7FAFB] border-4 border-border-light",whileHover:{y:-5},transition:{duration:.3,ease:[.22,1,.36,1]},children:(0,r.jsxs)("div",{className:"flex flex-col font-montserrat p-4 sm:p-6 h-full",children:[(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("span",{className:"font-outfit font-extrabold text-2xl text-text-dark",children:'"'}),(0,r.jsx)("p",{className:"font-montserrat font-normal text-xs sm:text-sm lg:text-base leading-relaxed text-text-dark",children:t})]}),(0,r.jsx)("div",{className:"w-20 h-px bg-background-reviews my-3 py-px"}),(0,r.jsx)("div",{className:"hidden md:block md:flex-grow"}),(0,r.jsx)("div",{className:"mt-3 md:mt-4",children:(0,r.jsxs)("div",{className:"flex gap-3 sm:gap-4 items-center",children:[(0,r.jsx)(s.P.div,{className:"flex-shrink-0 bg-cover bg-center w-8 sm:w-10 h-8 sm:h-10 rounded-full",style:{backgroundImage:"url(".concat(i,")")},whileHover:{scale:1.1},transition:{duration:.2}}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-outfit font-bold text-sm sm:text-base lg:text-lg tracking-tight text-text-dark",children:a}),(0,r.jsx)("p",{className:"font-inter text-xs sm:text-sm lg:text-base text-[#41484B]",children:n})]})]})})]})})}function x(e){let{children:t,className:a="",delay:n=0,staggerItems:i=!1}=e;return(0,r.jsx)(s.P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:i?d:o,transition:{delay:n},className:a,children:t})}function u(e){let{children:t,className:a="",index:n=0}=e;return(0,r.jsx)(s.P.div,{variants:{hidden:{opacity:0,y:20,scale:.98},visible:{opacity:1,y:0,scale:1,transition:{duration:.5,ease:[.22,1,.36,1],delay:.1*n}}},className:a,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},children:t})}var p=a(2115),g=a(7468),f=a(4420),b=a(405),v=a(3160),y=a(5683),w=a(8532);function j(e){let{onClick:t,className:a="",size:n=24,color:i="#FFFFFF"}=e,l={initial:{y:0,opacity:0},animate:{y:[0,-10,0],opacity:1,scale:[1,1.1,1],transition:{y:{duration:1.5,repeat:Number.POSITIVE_INFINITY,repeatType:"loop",ease:"easeInOut"},scale:{duration:1.5,repeat:Number.POSITIVE_INFINITY,repeatType:"loop",ease:"easeInOut",delay:.2},opacity:{duration:.5,ease:"easeIn"}}}};return(0,r.jsx)(s.P.div,{className:"cursor-pointer flex items-center justify-center ".concat(a),onClick:t,initial:"initial",animate:"animate",variants:l,whileHover:{scale:1.1},whileTap:{scale:.95},children:(0,r.jsx)(w.A,{size:n,color:i,strokeWidth:2})})}function k(e){let{children:t,backgroundImage:a,className:i=""}=e,l=(0,p.useRef)(null),[o,d]=(0,p.useState)(!1),{scrollYProgress:c}=(0,g.L)({target:l,offset:["start start","end start"]}),m=(0,f.d)(0),h=(0,f.d)(0),x=(0,b.z)(m,{stiffness:100,damping:15}),u=(0,b.z)(h,{stiffness:100,damping:15}),w=(0,v.G)(x,[-.5,.5],["30px","-30px"]),k=(0,v.G)(u,[-.5,.5],["30px","-30px"]),N=(0,v.G)(u,[-.5,.5],[1.25,1.05]),I=(0,v.G)(c,[0,1],["0%","30%"]),P=(0,v.G)(c,[0,.5],[1,0]);(0,v.G)(c,[0,.5],[1.1,1.2]);let E=(0,v.G)(c,[0,.1],[1,0]);return(0,p.useEffect)(()=>{let e=setTimeout(()=>{d(!0)},100);return()=>clearTimeout(e)},[]),(0,r.jsxs)("div",{ref:l,className:"relative overflow-hidden h-screen ".concat(i),onMouseMove:e=>{if(!l.current)return;let t=l.current.getBoundingClientRect(),a=(e.clientX-t.left)/t.width-.5,r=(e.clientY-t.top)/t.height-.5;m.set(a),h.set(r)},children:[(0,r.jsx)(y.N,{children:o&&(0,r.jsx)(s.P.div,{initial:{opacity:0,scale:1.2},animate:{opacity:1,scale:1.1},exit:{opacity:0},transition:{opacity:{duration:.8,ease:[.22,1,.36,1]},scale:{duration:1.2,ease:[.22,1,.36,1]}},className:"absolute inset-0",children:(0,r.jsx)(s.P.div,{style:{x:w,y:k,scale:N},className:"absolute inset-0 w-full h-full",children:(0,r.jsx)(s.P.div,{style:{y:I},className:"w-full h-full",children:(0,r.jsx)(n.default,{src:a||"/placeholder.svg",alt:"Ryan Allen in his studio",fill:!0,priority:!0,className:"object-cover",sizes:"100vw"})})})})}),(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/50 to-background-dark/80"}),(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-background-dark/60 via-transparent to-background-dark/60"}),(0,r.jsx)(s.P.div,{initial:{opacity:0},animate:{opacity:o?.15:0},transition:{delay:.5,duration:1},className:"absolute inset-0 bg-[#55D8EA]/10 mix-blend-overlay"}),(0,r.jsxs)(s.P.div,{style:{opacity:P},className:"relative z-10 h-full flex flex-col justify-center items-start px-6 sm:px-10 md:px-20 lg:px-24 xl:px-30 2xl:px-80",children:[t,(0,r.jsx)(s.P.div,{className:"absolute bottom-24 sm:bottom-20 md:bottom-12 left-1/2 transform -translate-x-1/2",style:{opacity:E},initial:{opacity:0},animate:{opacity:1},transition:{delay:3,duration:.8},children:(0,r.jsx)(j,{onClick:()=>{if(!l.current)return;let e=l.current.nextElementSibling;e&&window.scrollTo({top:e.offsetTop,behavior:"smooth"})},size:36,color:"#55D8EA",className:"bg-background-dark/30 backdrop-blur-sm rounded-full p-2 shadow-lg pulse"})})]})]})}function N(e){let{text:t,className:a="",once:n=!0,delay:i=0,speed:l=.05,tag:o="p",children:d,continuous:c=!1}=e,m=t.split(" "),h={hidden:{opacity:0,y:20,filter:"blur(5px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",damping:12,stiffness:100}}},x=e=>({y:[0,-2,0],transition:{delay:.05*e,duration:2.5,ease:"easeInOut",repeat:Number.POSITIVE_INFINITY,repeatType:"reverse"}});return(0,r.jsx)(s.P.div,{className:"overflow-hidden",variants:{hidden:{opacity:0},visible:function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],{opacity:1,transition:{staggerChildren:l,delayChildren:i,ease:[.22,1,.36,1]}}}},initial:"hidden",whileInView:"visible",viewport:{once:n},children:(0,r.jsxs)(o,{className:a,children:[m.map((e,t)=>(0,r.jsx)(s.P.span,{className:"inline-block mr-1",variants:h,animate:c?x(t):void 0,children:e},t)),d]})})}function I(e){let{text:t,className:a="",delay:n=0,highlightColor:i="rgba(85, 216, 234, 0.1)",continuous:l=!1,showHighlight:o=!0}=e,d=t.split(" "),c={hidden:{opacity:0,y:20,filter:"blur(5px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",damping:12,stiffness:100}}},m={y:[0,-4,0],transition:{duration:3,ease:"easeInOut",repeat:Number.POSITIVE_INFINITY,repeatType:"reverse"}},h={hidden:{width:"0%",opacity:0},visible:{width:"100%",opacity:1,transition:{duration:.5,ease:[.22,1,.36,1]}}};return(0,r.jsx)(s.P.div,{className:"overflow-hidden",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:n}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:(0,r.jsx)("div",{className:a,children:d.map((e,t)=>(0,r.jsxs)("div",{className:"inline-block mr-2 relative",children:[o&&i&&(0,r.jsx)(s.P.div,{className:"absolute bottom-0 left-0 h-[8px] -z-10",style:{backgroundColor:i},variants:h}),(0,r.jsx)(s.P.span,{className:"inline-block",variants:c,animate:l?m:void 0,custom:t,transition:l?{delay:.1*t,duration:3,repeat:Number.POSITIVE_INFINITY,repeatType:"reverse"}:void 0,children:e})]},t))})})}function P(){let{scrollYProgress:e}=(0,g.L)();return(0,r.jsx)(s.P.div,{className:"fixed top-0 left-0 right-0 h-1 bg-accent-primary z-50",style:{scaleX:e,transformOrigin:"0%"}})}function E(e){let{text:t,className:a="",delay:n=0}=e,i=t.split(" "),l={hidden:{opacity:0,y:10,filter:"blur(3px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",damping:12,stiffness:100}}};return(0,r.jsx)(s.P.div,{className:"overflow-hidden",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:n}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:(0,r.jsxs)("div",{className:"relative ".concat(a),children:[i.map((e,t)=>(0,r.jsx)(s.P.span,{className:"inline-block mr-2",variants:l,children:e},t)),(0,r.jsx)(s.P.div,{className:"absolute -bottom-2 left-0 h-[2px] bg-accent-primary",variants:{hidden:{width:"0%",opacity:0},visible:{width:"40px",opacity:1,transition:{duration:.5,ease:[.22,1,.36,1]}}}})]})})}var M=a(8586);function T(e){let{imageUrl:t,headline:a,subheadline:i,buttonText:l,buttonLink:o,className:d="",index:c=0}=e,m=(0,p.useRef)(null),h=(0,M.W)(m,{once:!0,amount:.3}),x=a.split(" "),u=i.split(" "),g={hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.3,staggerChildren:.04}}},f={hidden:{opacity:0,y:20,filter:"blur(5px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{duration:.5,ease:[.22,1,.36,1]}}};return(0,r.jsx)(s.P.div,{ref:m,className:"".concat(d),variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.5,delay:.15*c,when:"beforeChildren",staggerChildren:.2}}},initial:"hidden",animate:h?"visible":"hidden",children:(0,r.jsxs)(s.P.div,{className:"flex flex-col h-full rounded-[28px] bg-[#080C0E] border-4 border-border-dark overflow-hidden",variants:{hidden:{opacity:0,scale:.95,borderColor:"rgba(37, 48, 52, 0)"},visible:{opacity:1,scale:1,borderColor:"rgba(37, 48, 52, 1)",transition:{duration:.8,ease:[.22,1,.36,1]}}},children:[(0,r.jsx)(s.P.div,{className:"w-full aspect-[16/9] rounded-t-[24px] border-b-4 border-border-dark overflow-hidden relative",variants:{hidden:{opacity:0,scale:1.1,filter:"blur(10px) brightness(0.8)"},visible:{opacity:1,scale:1,filter:"blur(0px) brightness(1)",transition:{duration:1.2,ease:[.22,1,.36,1],delay:.6}}},children:(0,r.jsx)(n.default,{src:t||"/placeholder.svg",alt:a,fill:!0,className:"object-cover object-center",sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",priority:!0})}),(0,r.jsxs)("div",{className:"flex flex-col flex-grow p-4 sm:p-6",children:[(0,r.jsx)(s.P.div,{className:"font-outfit font-bold text-lg md:text-xl lg:text-2xl text-white tracking-tight",variants:g,children:x.map((e,t)=>(0,r.jsx)(s.P.span,{className:"inline-block mr-1",variants:f,children:e},"headline-".concat(t)))}),(0,r.jsx)(s.P.div,{className:"font-montserrat font-normal text-sm sm:text-base lg:text-xl mt-3 sm:mt-4 text-white leading-relaxed",variants:g,children:u.map((e,t)=>(0,r.jsx)(s.P.span,{className:"inline-block mr-1",variants:f,children:e},"subheadline-".concat(t)))}),(0,r.jsx)("div",{className:"flex-grow"}),l&&o&&(0,r.jsx)(s.P.div,{className:"mt-4 sm:mt-6",variants:f,children:(0,r.jsx)("a",{href:o,target:"_blank",className:"inline-block text-accent-primary border-4 border-accent-primary px-4 sm:px-6 py-2 sm:py-2.5 rounded-full no-underline font-outfit font-semibold text-sm leading-5 transition-all duration-100 ease-out hover:border-accent-primaryHover hover:bg-[#021F28]",rel:"noreferrer",children:l})})]})]})})}function C(){let[e,t]=(0,p.useState)(null);return(0,p.useEffect)(()=>{let e=e=>{let a=e.target;a.classList.contains("brand-link-ea")?t("ea"):a.classList.contains("brand-link-lexus")?t("lexus"):a.classList.contains("brand-link-transamerica")?t("transamerica"):a.classList.contains("brand-link-mcgraw")?t("mcgraw"):a.classList.contains("brand-link-godaddy")?t("godaddy"):a.classList.contains("brand-link-spectrum")?t("spectrum"):a.classList.contains("brand-link-jeff")&&t("jeff")},a=()=>{t(null)},r=document.querySelectorAll(".brand-link-ea, .brand-link-lexus, .brand-link-transamerica, .brand-link-mcgraw, .brand-link-godaddy, .brand-link-spectrum, .brand-link-jeff");return r.forEach(t=>{t.addEventListener("mouseenter",e),t.addEventListener("mouseleave",a)}),()=>{r.forEach(t=>{t.removeEventListener("mouseenter",e),t.removeEventListener("mouseleave",a)})}},[]),(0,r.jsx)("div",{className:"brands-container absolute inset-0 overflow-hidden pointer-events-none rounded-xl"})}let F=(e,t,a)=>{let r="",n=2*Math.PI/(2*e);for(let i=0;i<2*e;i++){let e=i%2==0?a:t,l=e*Math.cos(i*n-Math.PI/2),s=e*Math.sin(i*n-Math.PI/2);0===i?r+="M ".concat(l," ").concat(s," "):r+="L ".concat(l," ").concat(s," ")}return r+"Z"};function S(){let[e,t]=(0,p.useState)([]),a=(0,p.useRef)(null),[n,i]=(0,p.useState)(!1),l=()=>{let e=["#55D8EA","#73E4F5","#15667E","#DAE1E3","#FFFFFF"];return e[Math.floor(Math.random()*e.length)]};return(0,p.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[r]=e;if(r.isIntersecting&&!n){i(!0);let e=a.current;if(!e)return;let{width:r,height:n}=e.getBoundingClientRect(),s=[];for(let e=0;e<60;e++)s.push({id:e,size:30*Math.random()+15,x:Math.random()*r,y:n+50,color:l(),delay:.5*Math.random(),duration:3*Math.random()+2,rotation:720*Math.random()-360,points:Math.floor(2*Math.random())+5});t(s),setTimeout(()=>{if(!a.current)return;let e=[];for(let t=0;t<40;t++)e.push({id:t+60,size:30*Math.random()+15,x:Math.random()*r,y:n+50,color:l(),delay:.5*Math.random(),duration:3*Math.random()+2,rotation:720*Math.random()-360,points:Math.floor(2*Math.random())+5});t(t=>[...t,...e])},800),setTimeout(()=>{if(!a.current)return;let e=[];for(let t=0;t<30;t++)e.push({id:t+60+40,size:30*Math.random()+15,x:Math.random()*r,y:n+50,color:l(),delay:.5*Math.random(),duration:3*Math.random()+2,rotation:720*Math.random()-360,points:Math.floor(2*Math.random())+5});t(t=>[...t,...e])},1600)}},{threshold:.2});return a.current&&e.observe(a.current),()=>{a.current&&e.unobserve(a.current)}},[n]),(0,r.jsx)("div",{ref:a,className:"absolute inset-0 overflow-hidden pointer-events-none z-10",children:e.map(e=>(0,r.jsx)(s.P.div,{initial:{x:e.x,y:e.y,rotate:0,opacity:0,scale:.5},animate:{x:e.x+(600*Math.random()-300),y:-100-500*Math.random(),rotate:e.rotation,opacity:[0,1,.8,0],scale:[.5,1.2,1,.8]},transition:{duration:e.duration,delay:e.delay,ease:[.1,.4,.7,.9]},style:{position:"absolute",width:e.size,height:e.size},children:(0,r.jsx)("svg",{viewBox:"-10 -10 20 20",xmlns:"http://www.w3.org/2000/svg",style:{width:"100%",height:"100%"},children:(0,r.jsx)("path",{d:F(e.points,4,10),fill:e.color,stroke:"rgba(255, 255, 255, 0.8)",strokeWidth:"0.5"})})},e.id))})}function A(e){let{children:t}=e,[a,n]=(0,p.useState)(!1),i=(0,p.useRef)(null),l=(0,p.useRef)(null),s=(0,p.useRef)(null),[o,d]=(0,p.useState)(0),c=()=>{s.current&&d(s.current.offsetHeight)};return(0,p.useEffect)(()=>{let e=i.current,t=s.current;if(!e||!t)return;c();let a=document.createElement("div");a.style.position="absolute",a.style.top="0",a.style.left="0",a.style.width="100%",a.style.height="1px",a.style.pointerEvents="none",e.prepend(a),l.current=new IntersectionObserver(e=>{let[t]=e;!t.isIntersecting&&window.scrollY>10?n(!0):n(!1)},{threshold:0,rootMargin:"-10px 0px 0px 0px"}),l.current.observe(a);let r=()=>{window.scrollY<=5&&n(!1)};return window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",c),window.addEventListener("orientationchange",c),()=>{l.current&&l.current.disconnect(),a.remove(),window.removeEventListener("scroll",r),window.removeEventListener("resize",c),window.removeEventListener("orientationchange",c)}},[]),(0,r.jsxs)("div",{ref:i,className:"relative",children:[(0,r.jsx)("div",{ref:s,className:"bg-background-light w-full transition-all duration-200 ".concat(a?"fixed top-0 left-0 right-0 shadow-md":"relative"),style:{zIndex:10},children:t}),a&&(0,r.jsx)("div",{style:{height:"".concat(o,"px")},"aria-hidden":"true",className:"w-full"})]})}function R(e){let{children:t,backgroundColor:a}=e;return(0,r.jsx)("div",{className:"relative z-20",style:{backgroundColor:a||"transparent",position:"relative",marginTop:"-1px"},children:t})}function z(e){let{className:t="",count:a=80,colors:n=["#AEEDF7","#73E4F5","#D3F7FE"]}=e,i=(0,p.useRef)(null),[l,o]=(0,p.useState)([]),[d,c]=(0,p.useState)({width:0,height:0}),[m,h]=(0,p.useState)(!1),{scrollYProgress:x}=(0,g.L)({target:i,offset:["start end","end start"]}),u=(0,v.G)(x,[0,1],["0%","10%"]);return(0,p.useEffect)(()=>{h(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&4>=(navigator.hardwareConcurrency||4))},[]),(0,p.useEffect)(()=>{if(!i.current)return;let e=()=>{if(!i.current)return;let{width:e,height:t}=i.current.getBoundingClientRect();c({width:e,height:t}),o(Array.from({length:m?Math.floor(a/2):a}).map((a,r)=>({id:r,x:Math.random()*e,y:Math.random()*t,size:20*Math.random()+6,color:n[Math.floor(Math.random()*n.length)],delay:3*Math.random(),duration:8*Math.random()+10,opacity:.6*Math.random()+.2,depth:Math.random()})))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[a,m,n]),(0,r.jsx)("div",{ref:i,className:"absolute inset-0 overflow-hidden pointer-events-none w-full h-full ".concat(t),"aria-hidden":"true",children:(0,r.jsx)(s.P.div,{style:{y:u},className:"w-full h-full",children:l.map(e=>(0,r.jsx)(s.P.div,{className:"absolute rounded-full",style:{left:e.x,top:e.y,width:e.size,height:e.size,backgroundColor:e.color,opacity:e.opacity,zIndex:Math.floor(5*e.depth),filter:"blur(".concat(2*e.depth,"px)")},animate:{y:[0,-50*e.depth-30,0],x:[0,(60*Math.random()-30)*e.depth,0],scale:[1,1+.4*e.depth,1],opacity:[e.opacity,e.opacity+.15,e.opacity]},transition:{y:{duration:e.duration,delay:e.delay,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"},x:{duration:1.2*e.duration,delay:e.delay,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"},scale:{duration:.8*e.duration,delay:e.delay,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"},opacity:{duration:.6*e.duration,delay:e.delay,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}},e.id))})})}function L(){return(0,r.jsxs)("main",{className:"overflow-x-hidden",children:[(0,r.jsx)(P,{}),(0,r.jsx)(k,{backgroundImage:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ryanallen-bg.jpg-nfzifpAlRvrmpkOx6NKj0vMt7xEPWN.jpeg",children:(0,r.jsxs)("div",{className:"flex flex-col text-text-light w-full",children:[(0,r.jsx)(N,{text:"Designer — Ryan Allen",className:"font-montserrat font-medium uppercase text-xl lg:text-2xl tracking-wide",delay:1.2,speed:.08,tag:"h1",continuous:!0}),(0,r.jsxs)("div",{className:"flex flex-col self-start gap-2.5 lg:gap-5 max-w-md lg:max-w-lg mt-4 md:mt-6",children:[(0,r.jsx)(I,{text:"Identifying and Solving Important Problems",className:"font-outfit font-bold text-3xl lg:text-5xl leading-tight tracking-tight",delay:1.5,highlightColor:"rgba(85, 216, 234, 0.1)",continuous:!0,showHighlight:!1}),(0,r.jsx)(N,{text:"Ryan Allen is designing for the next generation of startups, the world's biggest brands, and everyone in between",className:"font-montserrat font-normal text-base lg:text-xl leading-relaxed",delay:2,speed:.03,tag:"p"})]}),(0,r.jsxs)(s.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:2.5,duration:.8,ease:[.22,1,.36,1]},className:"flex flex-wrap gap-4 mt-6 md:mt-10",children:[(0,r.jsx)(s.P.a,{href:"https://www.linkedin.com/in/ryanallencom/",className:"inline-block self-start bg-accent-primary text-text-dark px-7 py-3.5 rounded-full no-underline font-outfit font-semibold text-base leading-5 transition-all duration-100 ease-out hover:bg-accent-primaryHover",whileHover:"hover",whileTap:"tap",variants:c,target:"_blank",rel:"noreferrer",children:"Connect on Linkedin"}),(0,r.jsx)(s.P.a,{href:"https://bsky.app/profile/ryanallen.com",className:"inline-block self-start text-accent-primary border-4 border-accent-primary px-7 py-3 rounded-full no-underline font-outfit font-semibold text-base leading-5 transition-all duration-100 ease-out hover:border-accent-primaryHover hover:bg-[#021F28]",whileHover:"hover",whileTap:"tap",variants:c,target:"_blank",rel:"noreferrer",children:"Connect on Bsky"})]})]})}),(0,r.jsx)(A,{children:(0,r.jsxs)("div",{className:"flex flex-col bg-background-light text-text-dark w-full transition-all duration-200 ease-out relative",children:[(0,r.jsx)(z,{count:80,colors:["#AEEDF7","#73E4F5","#D3F7FE"]}),(0,r.jsxs)("div",{className:"flex flex-col mx-6 sm:mx-10 md:mx-20 lg:mx-24 xl:mx-30 2xl:mx-80 my-16 md:my-24 lg:my-28 gap-10 lg:gap-16",children:[(0,r.jsx)(x,{children:(0,r.jsx)(E,{text:"Brands worked with",className:"font-montserrat font-medium uppercase text-xl lg:text-2xl tracking-wide"})}),(0,r.jsx)(x,{delay:.2,children:(0,r.jsxs)("div",{className:"brands-section relative p-6 md:p-10 overflow-hidden inline-block max-w-4xl rounded-xl bg-transparent backdrop-blur-[2px] transition-all duration-300 hover:bg-background-light/70 hover:backdrop-blur-md border-0",children:[(0,r.jsxs)("p",{className:"font-outfit font-bold text-2xl md:text-3xl lg:text-4xl max-w-4xl relative z-10 tracking-tight",children:[(0,r.jsx)(l(),{href:"https://www.ea.com/",target:"_blank",rel:"noreferrer",className:"text-text-dark underline decoration-2 transition-colors duration-300 brand-link-ea",children:"Electronic Arts"}),",",(0,r.jsxs)(l(),{href:"https://www.lexus.com/",target:"_blank",rel:"noreferrer",className:"text-text-dark underline decoration-2 transition-colors duration-300 brand-link-lexus",children:[" ","Lexus"]}),",",(0,r.jsxs)(l(),{href:"https://www.transamerica.com/",target:"_blank",rel:"noreferrer",className:"text-text-dark underline decoration-2 transition-colors duration-300 brand-link-transamerica",children:[" ","Transamerica"]}),",",(0,r.jsxs)(l(),{href:"https://www.mheducation.com/",target:"_blank",rel:"noreferrer",className:"text-text-dark underline decoration-2 transition-colors duration-300 brand-link-mcgraw",children:[" ","McGraw Hill"]}),",",(0,r.jsxs)(l(),{href:"https://www.godaddy.com/",target:"_blank",rel:"noreferrer",className:"text-text-dark underline decoration-2 transition-colors duration-300 brand-link-godaddy",children:[" ","GoDaddy"]}),",",(0,r.jsxs)(l(),{href:"https://corporate.charter.com/",target:"_blank",rel:"noreferrer",className:"text-text-dark underline decoration-2 transition-colors duration-300 brand-link-spectrum",children:[" ","Charter / Spectrum"]}),",",(0,r.jsxs)(l(),{href:"https://www.jeffgordonchildrensfoundation.org/",target:"_blank",rel:"noreferrer",className:"text-text-dark underline decoration-2 transition-colors duration-300 brand-link-jeff",children:[" ","Jeff Gordon Children's Foundation"]}),", and more"]}),(0,r.jsx)(C,{})]})})]})]})}),(0,r.jsx)(R,{backgroundColor:"#0A0F11",children:(0,r.jsx)("div",{className:"flex flex-col text-text-light w-full",children:(0,r.jsxs)("div",{className:"flex flex-col mx-6 sm:mx-10 md:mx-20 lg:mx-24 xl:mx-30 2xl:mx-80 my-16 md:my-24 lg:my-28 gap-10 lg:gap-16",children:[(0,r.jsx)(x,{children:(0,r.jsx)(E,{text:"Case Studies",className:"font-montserrat font-medium uppercase text-xl lg:text-2xl tracking-wide"})}),(0,r.jsx)(x,{staggerItems:!0,children:(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr",children:[(0,r.jsx)(u,{children:(0,r.jsx)(m,{media:(0,r.jsx)("video",{className:"w-full h-full object-cover",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",disablePictureInPicture:!0,disableRemotePlayback:!0,children:(0,r.jsx)("source",{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/godaddy-desert-zUm784O1gs8jSl8ShPJRGOgS5XRuVU.mp4",type:"video/mp4"})}),headline:"New Responsive Navigation for GoDaddy",subheadline:"Increased accuracy for global customers across all devices by 45% when browsing through navigation.",buttonText:"Explore Case Study",buttonLink:"https://medium.com/ryan-allen/godaddy-site-navigation-information-architecture-update-889f299d1417"})}),(0,r.jsx)(u,{index:1,children:(0,r.jsx)(m,{media:(0,r.jsx)("video",{className:"w-full h-full object-cover",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",disablePictureInPicture:!0,disableRemotePlayback:!0,children:(0,r.jsx)("source",{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lexus-bGVtZwjix61OG3MYoE9XgGTDrDkZqG.mp4",type:"video/mp4"})}),headline:"Augmented Reality App for Lexus",subheadline:"Won a Gold ADDY for designing a mobile AR experience for the new Lexus IS.",buttonText:"Explore Case Study",buttonLink:"https://medium.com/ryan-allen/lexus-is-ipad-and-web-app-shipped-f7229024d00f"})}),(0,r.jsx)(u,{index:2,children:(0,r.jsx)(m,{media:(0,r.jsx)("video",{className:"w-full h-full object-cover",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",disablePictureInPicture:!0,disableRemotePlayback:!0,children:(0,r.jsx)("source",{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spectrum-wLkXCVHzg97Z5q0osgSsszVT1IkFVY.mp4",type:"video/mp4"})}),headline:"Biometric Monitoring App",subheadline:"Transformed a new cross-company healthcare initiative from zero to one.",buttonText:"Explore Case Study",buttonLink:"https://medium.com/ryan-allen/designing-a-groundbreaking-healthcare-app-for-a-global-telcom-leader-adaecce778ea"})})]})})]})})}),(0,r.jsx)(R,{backgroundColor:"var(--background-medium)",children:(0,r.jsx)("div",{className:"flex flex-col text-text-light w-full","data-section":"achievements",children:(0,r.jsxs)("div",{className:"flex flex-col mx-6 sm:mx-10 md:mx-20 lg:mx-24 xl:mx-30 2xl:mx-80 my-16 md:my-24 lg:my-28 gap-10 lg:gap-16",children:[(0,r.jsx)(x,{children:(0,r.jsx)(E,{text:"Achievements Unlocked",className:"font-montserrat font-medium uppercase text-xl lg:text-2xl tracking-wide"})}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr",children:[(0,r.jsx)(T,{imageUrl:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trophies.jpg-WVhp7Ynj2jdZPaPibcykw9UUNwCF4k.jpeg",headline:"#1 Most Downloaded Apps",subheadline:"Designed and managed development of multiple original #1 top free and #1 top paid apps in the Apple, Google, and Microsoft mobile app stores.",index:0}),(0,r.jsx)(T,{imageUrl:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ferrari.jpg-VjgNrxmTvWyfUnk9knaW1OEvQ3Fsl4.jpeg",headline:"Most Innovative Product",subheadline:"Won 'Most Innovative Product' at SEMA for a color changing vehicle lighting system.",index:1}),(0,r.jsx)(T,{imageUrl:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medal.jpg-HUgHkwC9Nc0ThMVUzc4aesBj8Gub16.jpeg",headline:"Gold ADDY",subheadline:"Won a Phoenix Gold ADDY for designing a mobile and web augmented reality app for Lexus.",index:2}),(0,r.jsx)(T,{imageUrl:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mcgraw-hill.jpg-SOkDnEdNpmsa5voVfsCZV8AYJYI778.jpeg",headline:"Published Illustrator",subheadline:"Over 100 hand-drawn illustrations published by McGraw Hill.",index:3}),(0,r.jsx)(T,{imageUrl:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/howard-stern.jpg-14uy9DmLmFEk1lo5wUnXtmNgz3gpEU.jpeg",headline:"Howard Stern Show Guest",subheadline:"Had multiple live appearances on the Howard Stern Show to promote one of the top apps I designed.",index:4}),(0,r.jsx)(T,{imageUrl:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gdc-best-in-play.jpg-pO0hSXXlTTJmcjxtLociun0Y2AG0ud.jpeg",headline:"Best in GDC Play",subheadline:"Won 'Best in GDC Play' for game design on an iPad mobile game.",index:5})]})]})})}),(0,r.jsx)(R,{backgroundColor:"transparent",children:(0,r.jsxs)("div",{className:"flex flex-col w-full relative",style:{backgroundImage:"url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-social-proof.jpg-EybrLvFhmA0gTroeQJn9TFTjVUIUPa.jpeg)",backgroundRepeat:"repeat",backgroundSize:"400px"},children:[(0,r.jsx)(S,{}),(0,r.jsxs)("div",{className:"flex flex-col mx-6 sm:mx-10 md:mx-20 lg:mx-24 xl:mx-30 2xl:mx-80 my-16 md:my-24 lg:my-28 gap-10 lg:gap-16",children:[(0,r.jsx)(x,{children:(0,r.jsx)(E,{text:"Recommendations",className:"font-montserrat font-medium uppercase text-xl lg:text-2xl tracking-wide text-text-dark"})}),(0,r.jsx)(x,{staggerItems:!0,delay:.2,children:(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto md:auto-rows-fr",children:[(0,r.jsx)(u,{children:(0,r.jsx)(h,{quote:"Working with Ryan has been one of the more enjoyable times in my professional career. Being assigned to work on the same team, we worked closely together from ideation to completion on a number of projects. Ryan is focused and driven to provide the best final product possible using the tools provided. When we found gaps in our capabilities, Ryan was the driver in finding smart solutions. He uses strong research skills and tenacity to find a workaround to any blockers we would encounter. He takes the initiative to work with other teams to create new tools and processes that would help us both short and long-term. Ryan persistently strives for excellence in his work and it is contagious to those he works with - myself included. I would highly recommend him to anyone looking for someone that will go above and beyond.",reviewerName:"Steven Phillips",reviewerInfo:"Senior Manager, CRO April 24,2019, Steven worked with Ryan in the same group",reviewerImage:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reviewer-img__steven.jpg-FtVoQnLvTo2YQOsK0xxWx9AORmga1U.jpeg"})}),(0,r.jsx)(u,{index:1,children:(0,r.jsx)(h,{quote:"More than two years ago, Ryan took a chance and hired me at GoDaddy. As my first manager, he helped me understand the company's working process and always made me feel welcome. He is innovative, organized, and always open to ideas and suggestions. He has made me improve in many professional areas and taught me about UX research and multi-tasking skills. A wonderful sense of humor in combination with deep empathy enabled him to lift my spirits in exceptionally stressful situations. It was a pleasure to be managed by him as he has exceptional expertise in leadership, coaching, and motivation.",reviewerName:"Summer Tong Sun",reviewerInfo:"UX Designer at Amazon | Organizer of UXperience Seattle | ADPlist mentor January 14, 2022 Summer Tong reported directly to Ryan",reviewerImage:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reviewer-img__summer.jpg-BtiN7qPXRtejZXp5YZUKrUv6K4dc3e.jpeg"})}),(0,r.jsx)(u,{index:2,children:(0,r.jsx)(h,{quote:"Ryan was amazing through the discovery process as we observed customer needs and iterated together. For fun, we always made bets on design concepts, and Ryan always won. His forward-thinking and ability to adapt to any product are wonderful. Thank you Ryan!",reviewerName:"Brett Rogers",reviewerInfo:"Sr. Director Product Management at Charter Communications August 26, 2023, Brett managed Ryan directly",reviewerImage:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reviewer-img__brett.jpg-aYEGGFUeY9s9AZZuvbfJpQqysjX1Sw.jpeg"})})]})}),(0,r.jsx)(x,{delay:.4,children:(0,r.jsx)(s.P.a,{href:"https://www.linkedin.com/in/ryanallencom/",target:"_blank",className:"inline-block self-start bg-[#15667E] text-background-light px-7 py-3.5 rounded-full no-underline font-outfit font-semibold text-base leading-5 transition-all duration-100 ease-out hover:bg-accent-secondaryHover",whileHover:"hover",whileTap:"tap",variants:c,rel:"noreferrer",children:"More on LinkedIn"})})]})]})}),(0,r.jsx)(R,{backgroundColor:"var(--background-medium)",children:(0,r.jsx)("div",{className:"flex flex-col text-text-light w-full",children:(0,r.jsxs)("div",{className:"flex flex-col mx-6 sm:mx-10 md:mx-20 lg:mx-24 xl:mx-30 2xl:mx-80 my-16 md:my-24 lg:my-28 gap-10 lg:gap-16",children:[(0,r.jsx)(x,{children:(0,r.jsx)(E,{text:"Articles & Personal Works",className:"font-montserrat font-medium uppercase text-xl lg:text-2xl tracking-wide"})}),(0,r.jsx)(x,{staggerItems:!0,delay:.2,children:(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-fr",children:[(0,r.jsx)(u,{children:(0,r.jsx)(m,{media:(0,r.jsx)("div",{className:"relative w-full h-full",children:(0,r.jsx)(n.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/workstation.jpg-iFv7IX9Z7rteJOirl1JSgS9kZeFVca.jpeg",alt:"Minimalist workspace with iMac, keyboard, and plants",fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw",className:"object-cover object-center",priority:!0})}),headline:"Art & Design Articles",subheadline:"Explore my writings on art and design",buttonText:"Explore Articles",buttonLink:"https://medium.com/@ryanallen_com",aspectRatio:"aspect-[4/3]"})}),(0,r.jsx)(u,{index:1,children:(0,r.jsx)(m,{media:(0,r.jsx)("div",{className:"relative w-full h-full",children:(0,r.jsx)(n.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imrsn.jpg-gVUBKsNKb4SQJ04d9qFyudxtipsA2t.jpeg",alt:"Artistic underwater portrait with surreal elements",fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw",className:"object-cover object-center",priority:!0})}),headline:"AI Image Generation",subheadline:"Explore my A.I. images at imrsn.com",buttonText:"Explore Images",buttonLink:"http://www.imrsn.com",aspectRatio:"aspect-square"})})]})})]})})}),(0,r.jsx)(R,{backgroundColor:"var(--background-light)",children:(0,r.jsx)("div",{className:"flex flex-col text-text-dark w-full",children:(0,r.jsxs)("div",{className:"flex flex-col mx-6 sm:mx-10 md:mx-20 lg:mx-24 xl:mx-30 2xl:mx-80 my-16 md:my-24 lg:my-28 gap-10 lg:gap-16",children:[(0,r.jsx)(x,{children:(0,r.jsx)(E,{text:"Colophon",className:"font-montserrat font-medium uppercase text-xl lg:text-2xl tracking-wide"})}),(0,r.jsxs)(x,{delay:.2,children:[(0,r.jsx)(s.P.a,{href:"https://github.com/ryanallen/portfolio",target:"_blank",className:"font-montserrat font-bold text-text-dark underline decoration-2 decoration-[#AEEDF7] text-base lg:text-xl transition-all duration-100 ease-out hover:text-accent-secondary hover:decoration-accent-secondary",whileHover:"hover",whileTap:"tap",variants:c,rel:"noreferrer",children:"Design + Dev: Ryan Allen. See it on Github →"}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-4 mt-8",children:[(0,r.jsx)(s.P.a,{href:"https://www.linkedin.com/in/ryanallencom/",className:"inline-block self-start bg-[#15667E] text-background-light px-7 py-3.5 rounded-full no-underline font-outfit font-semibold text-base leading-5 transition-all duration-100 ease-out hover:bg-accent-secondaryHover",whileHover:"hover",whileTap:"tap",variants:c,target:"_blank",rel:"noreferrer",children:"Connect on LinkedIn"}),(0,r.jsx)(s.P.a,{href:"https://bsky.app/profile/ryanallen.com",className:"inline-block self-start text-[#15667E] border-4 border-[#15667E] px-7 py-3 rounded-full no-underline font-outfit font-semibold text-base leading-5 transition-all duration-300 ease-out hover:bg-[#D3F7FE]",whileHover:"hover",whileTap:"tap",variants:c,target:"_blank",rel:"noreferrer",children:"Connect on Bsky"})]})]})]})})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[525,775,441,517,358],()=>t(1046)),_N_E=e.O()}]);