"use strict";(self.webpackChunkdap_docs=self.webpackChunkdap_docs||[]).push([[89],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>u});var o=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=o.createContext({}),s=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=s(t.components);return o.createElement(l.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},g=o.forwardRef((function(t,e){var r=t.components,a=t.mdxType,n=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=s(r),g=a,u=m["".concat(l,".").concat(g)]||m[g]||d[g]||n;return r?o.createElement(u,i(i({ref:e},p),{},{components:r})):o.createElement(u,i({ref:e},p))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=r.length,i=new Array(n);i[0]=g;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[m]="string"==typeof t?t:a,i[1]=c;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1832:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var o=r(7462),a=(r(7294),r(3905));const n={title:"Introduction to migrating data"},i="Migrating data from z/OS to Git",c={unversionedId:"intro-migrating-data",id:"intro-migrating-data",title:"Introduction to migrating data",description:"Introduction to migrating data",source:"@site/docs/intro-migrating-data.md",sourceDirName:".",slug:"/intro-migrating-data",permalink:"/zDevOps-Acceleration/z-devops-acceleration-program/docs/intro-migrating-data",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction to migrating data"},sidebar:"docsSidebar",previous:{title:"Outlining the deployment strategy",permalink:"/zDevOps-Acceleration/z-devops-acceleration-program/docs/deployment-strategy"},next:{title:"Managing code page conversion",permalink:"/zDevOps-Acceleration/z-devops-acceleration-program/docs/managing-code-page-conversion"}},l={},s=[{value:"Introduction to migrating data",id:"introduction-to-migrating-data",level:2},{value:"Steps for migrating data from z/OS to Git",id:"steps-for-migrating-data-from-zos-to-git",level:2}],p={toc:s},m="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,o.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrating-data-from-zos-to-git"},"Migrating data from z/OS to Git"),(0,a.kt)("h2",{id:"introduction-to-migrating-data"},"Introduction to migrating data"),(0,a.kt)("p",null,"Migrating your source code data from z/OS to Git is one of the first steps in implementing a modern CI/CD pipeline. Once you have planned your to-be Git repository layouts, you can use the steps in the following section to migrate your data from z/OS to Git. During the migration process, it is important to be aware of potential issues with migrating non-printable or non-roundtrippable characters, and to have a plan for how to handle them if you encounter them. You can read more about how to handle these characters in ",(0,a.kt)("a",{parentName:"p",href:"/zDevOps-Acceleration/z-devops-acceleration-program/docs/managing-code-page-conversion"},"Managing code page conversion"),"."),(0,a.kt)("h2",{id:"steps-for-migrating-data-from-zos-to-git"},"Steps for migrating data from z/OS to Git"),(0,a.kt)("p",null,"At a high level, the steps for migrating data from z/OS to Git are as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Unload the source code from the legacy version control system to PDS libraries: Legacy version control systems often store data in a proprietary format, which IBM's Dependency Based Build (DBB) cannot directly access. Therefore, the source code should first be unloaded to PDS libraries.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Load files from PDS libraries to a Git repository on z/OS UNIX System Services (z/OS UNIX) using one of the following methods:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zDevOps-Acceleration/z-devops-acceleration-program/docs/dbb-migration-tool"},"DBB migration tool"),": The DBB migration tool is provided with DBB, and is the most commonly-used method for migrating data from z/OS to Git."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zDevOps-Acceleration/z-devops-acceleration-program/docs/sclm-git-migration-tool"},"SCLM-to-Git migration tool"),": You can use the SCLM-to-Git migration tool if you are moving away from SCLM as your current library manager."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zDevOps-Acceleration/z-devops-acceleration-program/docs/manual-migration"},"Manual migration"),": Manual migration of source code from z/OS to Git is possible, but is generally not recommended since it tends to be slower, more tedious, and prone to human error."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once your code is in z/OS UNIX, you can use Git to push it up to your central Git provider."))))}d.isMDXComponent=!0}}]);