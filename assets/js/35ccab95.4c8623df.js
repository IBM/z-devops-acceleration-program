"use strict";(self.webpackChunkdap_docs=self.webpackChunkdap_docs||[]).push([[174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},o="Appendix",p={unversionedId:"branching-appendix",id:"branching-appendix",title:"Appendix",description:"Development process variations",source:"@site/docs/branching-appendix.md",sourceDirName:".",slug:"/branching-appendix",permalink:"/z-devops-acceleration-program/docs/branching-appendix",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Supporting pipeline design and implementation",permalink:"/z-devops-acceleration-program/docs/branching-model-supporting-pipeline"},next:{title:"Designing the build strategy",permalink:"/z-devops-acceleration-program/docs/build-strategy"}},l={},s=[{value:"Development process variations",id:"development-process-variations",level:2},{value:"Working with overlapping releases",id:"working-with-overlapping-releases",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"appendix"},"Appendix"),(0,a.kt)("h2",{id:"development-process-variations"},"Development process variations"),(0,a.kt)("h3",{id:"working-with-overlapping-releases"},"Working with overlapping releases"),(0,a.kt)("p",null,"In traditional mainframe development workflows, teams follow a practice of overlapping releases. In that situation, the team leverages the ",(0,a.kt)("em",{parentName:"p"},"main")," and ",(0,a.kt)("em",{parentName:"p"},"epic")," branches following a rolling wave pattern: The team decides which commit/tag of the main codeline will be used to baseline the overlapping release -- most likely when the previous release moves into its release stabilization phase. The development phase of the subsequent release then occurs on the epic branch and is merged back into main when entering the stabilization phase. This leads to the below composition of the ",(0,a.kt)("em",{parentName:"p"},"main")," and ",(0,a.kt)("em",{parentName:"p"},"epic")," workflow:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Git-based development process with overlapping release development",src:n(4998).Z,width:"1605",height:"710"})))}m.isMDXComponent=!0},4998:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image24-609a45f17f812bfc5ce1fbe5a3d4adc8.png"}}]);