"use strict";(self.webpackChunkdap_docs=self.webpackChunkdap_docs||[]).push([[9882],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1916:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="Manual migration",l={unversionedId:"manual-migration",id:"manual-migration",title:"Manual migration",description:"Manual migration of source data from z/OS to Git is generally not recommended, as it tends to be slower, more tedious, and prone to human error. However, it is possible, and can be done several ways, including the following:",source:"@site/docs/manual-migration.md",sourceDirName:".",slug:"/manual-migration",permalink:"/z-devops-acceleration-program/docs/manual-migration",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"SCLM-to-Git Migration Tool",permalink:"/z-devops-acceleration-program/docs/sclm-git-migration-tool"},next:{title:"Implementing pipeline actions",permalink:"/z-devops-acceleration-program/docs/implementing-pipeline-actions"}},c={},s=[],p={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manual-migration"},"Manual migration"),(0,o.kt)("p",null,"Manual migration of source data from z/OS to Git is generally not recommended, as it tends to be slower, more tedious, and prone to human error. However, it is possible, and can be done several ways, including the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the files to z/OS UNIX System Services (z/OS UNIX) via the Interactive System Productivity Facility (ISPF)."),(0,o.kt)("li",{parentName:"ul"},"Copy the files to z/OS UNIX via IBM Developer for z/OS (IDz).",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Drag and drop members from IDz's Remote System Explorer (RSE) to a local project.")))),(0,o.kt)("p",null,"Although manual migration is not recommended, if you do proceed with it, then it is important to remember that you must also manually create the ",(0,o.kt)("inlineCode",{parentName:"p"},".gitattributes")," file used for code page translation between z/OS and the Git server, and also manually detect and manage code page conversion issues."))}u.isMDXComponent=!0}}]);