"use strict";(self.webpackChunkdap_docs=self.webpackChunkdap_docs||[]).push([[7436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"IBM Z DevOps solution"},i="IBM Z DevOps solution overview",s={unversionedId:"ibm-z-devops-solution",id:"ibm-z-devops-solution",title:"IBM Z DevOps solution",description:"What is IBM Z DevOps?",source:"@site/docs/ibm-z-devops-solution.md",sourceDirName:".",slug:"/ibm-z-devops-solution",permalink:"/z-devops-acceleration-program/docs/ibm-z-devops-solution",draft:!1,tags:[],version:"current",frontMatter:{title:"IBM Z DevOps solution"},sidebar:"docsSidebar",next:{title:"Introduction to CI/CD for z/OS",permalink:"/z-devops-acceleration-program/docs/intro-cicd-zos"}},l={},p=[{value:"What is IBM Z DevOps?",id:"what-is-ibm-z-devops",level:2},{value:"IBM Z DevOps Acceleration Program",id:"ibm-z-devops-acceleration-program",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ibm-z-devops-solution-overview"},"IBM Z DevOps solution overview"),(0,o.kt)("h2",{id:"what-is-ibm-z-devops"},"What is IBM Z DevOps?"),(0,o.kt)("p",null,"IBM Z DevOps is a solution for z/OS application modernization that includes a Git-based continuous integration/continuous delivery (CI/CD) pipeline. This pipeline consists of several key components such as Git for source code management and IBM Dependency Based Build (DBB), which empower mainframe application teams to participate in modern DevOps processes using industry-standard and open source tools."),(0,o.kt)("p",null,"The components that make up the IBM Z DevOps solution are loosely coupled and highly customizable, allowing you to implement a CI/CD pipeline that maximizes the tools and processes shared by your distributed and mainframe teams."),(0,o.kt)("p",null,"There are multiple advantages to adopting a standardized CI/CD pipeline across your enterprise:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Equip developers for productivity"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Open source tools such as Git, Jenkins, and Artifactory have become the de facto industry standard for powering continuous integration and continuous delivery in the enterprise. These tools support today's best practices and provide advanced functionality in version control, automation, and more."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Collaborate and communicate more effectively across the enterprise"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Standardizing the CI/CD pipeline and development workflows where possible between distributed and mainframe teams makes it easier to communicate and collaborate across the enterprise. This is especially beneficial for hybrid applications, which consist of both mainframe and distributed components."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enable modern approaches such as DevOps and Agile for mainframe applications"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Industry-standard tools such as version control with Git and automation with CI/CD pipelines enable smaller, high-quality development increments and deliverables. This lets your z/OS application teams respond faster and more effectively to changing market pressures or customer needs, while also building towards a larger development goal."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Reduce the overhead of onboarding the next generation of z/OS application developers."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Newer developers are likely to be more familiar with industry-standard tools, and being able to use these technologies in the z/OS workplace lowers the entry barrier for them to get started with contributions to the team.")))),(0,o.kt)("p",null,"This documentation site aims to help your enterprise succeed in the journey from legacy development processes and library managers to a modern CI/CD pipeline."),(0,o.kt)("h2",{id:"ibm-z-devops-acceleration-program"},"IBM Z DevOps Acceleration Program"),(0,o.kt)("p",null,"The IBM Z DevOps Acceleration Program (DAP) can help your enterprise get started on the journey to adopt this modern and agile approach to z/OS applications. DAP is a no charge value-add early adoption program designed to partner with clients during four distinct stages that are necessary for any DevOps transformation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Value Stream Assessment"),(0,o.kt)("li",{parentName:"ul"},"Training"),(0,o.kt)("li",{parentName:"ul"},"Deployment"),(0,o.kt)("li",{parentName:"ul"},"Adoption")),(0,o.kt)("p",null,"To learn what's involved in migrating your z/OS applications to the IBM Z DevOps solution, see ",(0,o.kt)("a",{parentName:"p",href:"/z-devops-acceleration-program/docs/journey-to-cicd"},"Understanding the migration effort"),"."),(0,o.kt)("p",null,"To learn more about the CI/CD pipeline itself for z/OS applications, see the ",(0,o.kt)("a",{parentName:"p",href:"/z-devops-acceleration-program/docs/intro-cicd-zos"},"CI/CD pipeline introduction"),"."))}u.isMDXComponent=!0}}]);