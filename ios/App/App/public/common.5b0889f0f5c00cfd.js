"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1320:(M,w,l)=>{l.d(w,{c:()=>a});var d=l(1308),m=l(7864),u=l(1898);const a=(r,n)=>{let e,t;const s=(c,p,g)=>{if(typeof document>"u")return;const _=document.elementFromPoint(c,p);_&&n(_)?_!==e&&(h(),i(_,g)):h()},i=(c,p)=>{e=c,t||(t=e);const g=e;(0,d.c)(()=>g.classList.add("ion-activated")),p()},h=(c=!1)=>{if(!e)return;const p=e;(0,d.c)(()=>p.classList.remove("ion-activated")),c&&t!==e&&e.click(),e=void 0};return(0,u.createGesture)({el:r,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>s(c.currentX,c.currentY,m.a),onMove:c=>s(c.currentX,c.currentY,m.b),onEnd:()=>{h(!0),(0,m.h)(),t=void 0}})}},2225:(M,w,l)=>{l.d(w,{g:()=>d});const d=(n,e,t,s,i)=>u(n[1],e[1],t[1],s[1],i).map(h=>m(n[0],e[0],t[0],s[0],h)),m=(n,e,t,s,i)=>i*(3*e*Math.pow(i-1,2)+i*(-3*t*i+3*t+s*i))-n*Math.pow(i-1,3),u=(n,e,t,s,i)=>r((s-=i)-3*(t-=i)+3*(e-=i)-(n-=i),3*t-6*e+3*n,3*e-3*n,n).filter(c=>c>=0&&c<=1),r=(n,e,t,s)=>{if(0===n)return((n,e,t)=>{const s=e*e-4*n*t;return s<0?[]:[(-e+Math.sqrt(s))/(2*n),(-e-Math.sqrt(s))/(2*n)]})(e,t,s);const i=(3*(t/=n)-(e/=n)*e)/3,h=(2*e*e*e-9*e*t+27*(s/=n))/27;if(0===i)return[Math.pow(-h,1/3)];if(0===h)return[Math.sqrt(-i),-Math.sqrt(-i)];const c=Math.pow(h/2,2)+Math.pow(i/3,3);if(0===c)return[Math.pow(h/2,.5)-e/3];if(c>0)return[Math.pow(-h/2+Math.sqrt(c),1/3)-Math.pow(h/2+Math.sqrt(c),1/3)-e/3];const p=Math.sqrt(Math.pow(-i/3,3)),g=Math.acos(-h/(2*Math.sqrt(Math.pow(-i/3,3)))),_=2*Math.pow(p,1/3);return[_*Math.cos(g/3)-e/3,_*Math.cos((g+2*Math.PI)/3)-e/3,_*Math.cos((g+4*Math.PI)/3)-e/3]}},5062:(M,w,l)=>{l.d(w,{i:()=>d});const d=m=>m&&""!==m.dir?"rtl"===m.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(M,w,l)=>{l.r(w),l.d(w,{startFocusVisible:()=>a});const d="ion-focused",u=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],a=r=>{let n=[],e=!0;const t=r?r.shadowRoot:document,s=r||document.body,i=E=>{n.forEach(v=>v.classList.remove(d)),E.forEach(v=>v.classList.add(d)),n=E},h=()=>{e=!1,i([])},c=E=>{e=u.includes(E.key),e||i([])},p=E=>{if(e&&void 0!==E.composedPath){const v=E.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));i(v)}},g=()=>{t.activeElement===s&&i([])};return t.addEventListener("keydown",c),t.addEventListener("focusin",p),t.addEventListener("focusout",g),t.addEventListener("touchstart",h),t.addEventListener("mousedown",h),{destroy:()=>{t.removeEventListener("keydown",c),t.removeEventListener("focusin",p),t.removeEventListener("focusout",g),t.removeEventListener("touchstart",h),t.removeEventListener("mousedown",h)},setFocus:i}}},7626:(M,w,l)=>{l.d(w,{C:()=>r,a:()=>u,d:()=>a});var d=l(5861),m=l(5730);const u=function(){var n=(0,d.Z)(function*(e,t,s,i,h,c){var p;if(e)return e.attachViewToDom(t,s,h,i);if(!(c||"string"==typeof s||s instanceof HTMLElement))throw new Error("framework delegate is missing");const g="string"==typeof s?null===(p=t.ownerDocument)||void 0===p?void 0:p.createElement(s):s;return i&&i.forEach(_=>g.classList.add(_)),h&&Object.assign(g,h),t.appendChild(g),yield new Promise(_=>(0,m.c)(g,_)),g});return function(t,s,i,h,c,p){return n.apply(this,arguments)}}(),a=(n,e)=>{if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},r=()=>{let n,e;return{attachViewToDom:function(){var i=(0,d.Z)(function*(h,c,p={},g=[]){var _,E;if(n=h,c){const f="string"==typeof c?null===(_=n.ownerDocument)||void 0===_?void 0:_.createElement(c):c;g.forEach(o=>f.classList.add(o)),Object.assign(f,p),n.appendChild(f),yield new Promise(o=>(0,m.c)(f,o))}else if(n.children.length>0&&!n.children[0].classList.contains("ion-delegate-host")){const o=null===(E=n.ownerDocument)||void 0===E?void 0:E.createElement("div");o.classList.add("ion-delegate-host"),g.forEach(y=>o.classList.add(y)),o.append(...n.children),n.appendChild(o)}const v=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),n.parentNode.insertBefore(e,n),v.appendChild(n),n});return function(c,p){return i.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&e&&(e.parentNode.insertBefore(n,e),e.remove()),Promise.resolve())}}},7864:(M,w,l)=>{l.d(w,{a:()=>a,b:()=>r,c:()=>u,d:()=>e,h:()=>n});const d={getEngine(){var t;const s=window;return s.TapticEngine||(null===(t=s.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&s.Capacitor.Plugins.Haptics},available(){var t;const s=window;return!!this.getEngine()&&("web"!==(null===(t=s.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const s=this.getEngine();if(!s)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;s.impact({style:i})},notification(t){const s=this.getEngine();if(!s)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;s.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},m=()=>d.available(),u=()=>{m()&&d.selection()},a=()=>{m()&&d.selectionStart()},r=()=>{m()&&d.selectionChanged()},n=()=>{m()&&d.selectionEnd()},e=t=>{m()&&d.impact(t)}},109:(M,w,l)=>{l.d(w,{a:()=>d,b:()=>c,c:()=>e,d:()=>p,e:()=>C,f:()=>n,g:()=>g,h:()=>u,i:()=>m,j:()=>o,k:()=>y,l:()=>t,m:()=>i,n:()=>_,o:()=>s,p:()=>r,q:()=>a,r:()=>f,s:()=>D,t:()=>h,u:()=>E,v:()=>v});const d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},9888:(M,w,l)=>{l.d(w,{s:()=>d});const d=t=>{try{if(t instanceof e)return t.value;if(!a()||"string"!=typeof t||""===t)return t;if(t.includes("onload="))return"";const s=document.createDocumentFragment(),i=document.createElement("div");s.appendChild(i),i.innerHTML=t,n.forEach(g=>{const _=s.querySelectorAll(g);for(let E=_.length-1;E>=0;E--){const v=_[E];v.parentNode?v.parentNode.removeChild(v):s.removeChild(v);const f=u(v);for(let o=0;o<f.length;o++)m(f[o])}});const h=u(s);for(let g=0;g<h.length;g++)m(h[g]);const c=document.createElement("div");c.appendChild(s);const p=c.querySelector("div");return null!==p?p.innerHTML:c.innerHTML}catch(s){return console.error(s),""}},m=t=>{if(t.nodeType&&1!==t.nodeType)return;if(typeof NamedNodeMap<"u"&&!(t.attributes instanceof NamedNodeMap))return void t.remove();for(let i=t.attributes.length-1;i>=0;i--){const h=t.attributes.item(i),c=h.name;if(!r.includes(c.toLowerCase())){t.removeAttribute(c);continue}const p=h.value,g=t[c];(null!=p&&p.toLowerCase().includes("javascript:")||null!=g&&g.toLowerCase().includes("javascript:"))&&t.removeAttribute(c)}const s=u(t);for(let i=0;i<s.length;i++)m(s[i])},u=t=>null!=t.children?t.children:t.childNodes,a=()=>{var t;const s=window,i=null===(t=null==s?void 0:s.Ionic)||void 0===t?void 0:t.config;return!i||(i.get?i.get("sanitizerEnabled",!0):!0===i.sanitizerEnabled||void 0===i.sanitizerEnabled)},r=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"];class e{constructor(s){this.value=s}}},8416:(M,w,l)=>{l.d(w,{I:()=>r,a:()=>i,b:()=>n,c:()=>p,d:()=>_,f:()=>h,g:()=>s,i:()=>t,p:()=>g,r:()=>E,s:()=>c});var d=l(5861),m=l(5730),u=l(4147);const r="ion-content",n=".ion-content-scroll-host",e=`${r}, ${n}`,t=v=>"ION-CONTENT"===v.tagName,s=function(){var v=(0,d.Z)(function*(f){return t(f)?(yield new Promise(o=>(0,m.c)(f,o)),f.getScrollElement()):f});return function(o){return v.apply(this,arguments)}}(),i=v=>v.querySelector(n)||v.querySelector(e),h=v=>v.closest(e),c=(v,f)=>t(v)?v.scrollToTop(f):Promise.resolve(v.scrollTo({top:0,left:0,behavior:f>0?"smooth":"auto"})),p=(v,f,o,y)=>t(v)?v.scrollByPoint(f,o,y):Promise.resolve(v.scrollBy({top:o,left:f,behavior:y>0?"smooth":"auto"})),g=v=>(0,u.a)(v,r),_=v=>{if(t(v)){const o=v.scrollY;return v.scrollY=!1,o}return v.style.setProperty("overflow","hidden"),!0},E=(v,f)=>{t(v)?v.scrollY=f:v.style.removeProperty("overflow")}},5234:(M,w,l)=>{l.r(w),l.d(w,{KEYBOARD_DID_CLOSE:()=>m,KEYBOARD_DID_OPEN:()=>d,copyVisualViewport:()=>f,keyboardDidClose:()=>g,keyboardDidOpen:()=>c,keyboardDidResize:()=>p,resetKeyboardAssist:()=>e,setKeyboardClose:()=>h,setKeyboardOpen:()=>i,startKeyboardAssist:()=>t,trackViewportChanges:()=>v});const d="ionKeyboardDidShow",m="ionKeyboardDidHide";let a={},r={},n=!1;const e=()=>{a={},r={},n=!1},t=o=>{s(o),o.visualViewport&&(r=f(o.visualViewport),o.visualViewport.onresize=()=>{v(o),c()||p(o)?i(o):g(o)&&h(o)})},s=o=>{o.addEventListener("keyboardDidShow",y=>i(o,y)),o.addEventListener("keyboardDidHide",()=>h(o))},i=(o,y)=>{_(o,y),n=!0},h=o=>{E(o),n=!1},c=()=>!n&&a.width===r.width&&(a.height-r.height)*r.scale>150,p=o=>n&&!g(o),g=o=>n&&r.height===o.innerHeight,_=(o,y)=>{const C=new CustomEvent(d,{detail:{keyboardHeight:y?y.keyboardHeight:o.innerHeight-r.height}});o.dispatchEvent(C)},E=o=>{const y=new CustomEvent(m);o.dispatchEvent(y)},v=o=>{a=Object.assign({},r),r=f(o.visualViewport)},f=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},9852:(M,w,l)=>{l.d(w,{c:()=>m});var d=l(3457);const m=u=>{let a,r,n;const e=()=>{a=()=>{n=!0,u&&u(!0)},r=()=>{n=!1,u&&u(!1)},null==d.w||d.w.addEventListener("keyboardWillShow",a),null==d.w||d.w.addEventListener("keyboardWillHide",r)};return e(),{init:e,destroy:()=>{null==d.w||d.w.removeEventListener("keyboardWillShow",a),null==d.w||d.w.removeEventListener("keyboardWillHide",r),a=r=void 0},isKeyboardVisible:()=>n}}},7741:(M,w,l)=>{l.d(w,{S:()=>m});const m={bubbles:{dur:1e3,circles:9,fn:(u,a,r)=>{const n=u*a/r-u+"ms",e=2*Math.PI*a/r;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(u,a,r)=>{const n=a/r,e=u*n-u+"ms",t=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(u,a)=>({r:6,style:{left:9-9*a+"px","animation-delay":-110*a+"ms"}})},lines:{dur:1e3,lines:8,fn:(u,a,r)=>({y1:14,y2:26,style:{transform:`rotate(${360/r*a+(a<r/2?180:-180)}deg)`,"animation-delay":u*a/r-u+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(u,a,r)=>({y1:12,y2:20,style:{transform:`rotate(${360/r*a+(a<r/2?180:-180)}deg)`,"animation-delay":u*a/r-u+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(u,a,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":u*a/r-u+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(u,a,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":u*a/r-u+"ms"}})}}},6659:(M,w,l)=>{l.r(w),l.d(w,{createSwipeBackGesture:()=>r});var d=l(5730),m=l(5062),u=l(1898);l(4349);const r=(n,e,t,s,i)=>{const h=n.ownerDocument.defaultView;let c=(0,m.i)(n);const g=o=>c?-o.deltaX:o.deltaX;return(0,u.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(c=(0,m.i)(n),(o=>{const{startX:D}=o;return c?D>=h.innerWidth-50:D<=50})(o)&&e()),onStart:t,onMove:o=>{const D=g(o)/h.innerWidth;s(D)},onEnd:o=>{const y=g(o),D=h.innerWidth,C=y/D,L=(o=>c?-o.velocityX:o.velocityX)(o),O=L>=0&&(L>.2||y>D/2),x=(O?1-C:C)*D;let b=0;if(x>5){const k=x/Math.abs(L);b=Math.min(k,540)}i(O,C<=0?.01:(0,d.l)(0,C,.9999),b)}})}},581:(M,w,l)=>{l.d(w,{e:()=>r});var d=l(6895),m=l(433),u=l(4556),a=l(8256);let r=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[d.ez,m.u5,u.Pc]}),n})()},5830:(M,w,l)=>{l.d(w,{s:()=>a});var d=l(8256),m=l(529),u=l(5888);let a=(()=>{class r{constructor(e,t){this.http=e,this.constants=t}saveReceipt(e){let t=Object.assign({},e);return t.text="",this.http.post(this.constants.gatewayHost+this.constants.apiUrlPath,t,{observe:"response"})}}return r.\u0275fac=function(e){return new(e||r)(d.LFG(m.eN),d.LFG(u.a))},r.\u0275prov=d.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);