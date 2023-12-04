"use strict";(self.webpackChunkdap_docs=self.webpackChunkdap_docs||[]).push([[903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const o={},a="Implementing pipeline actions",p={unversionedId:"implementing-pipeline-actions",id:"implementing-pipeline-actions",title:"Implementing pipeline actions",description:"The following guides for common pipeline orchestrators are available to help you get started with implementing your continuous integration/continuous delivery (CI/CD) pipeline.",source:"@site/docs/implementing-pipeline-actions.md",sourceDirName:".",slug:"/implementing-pipeline-actions",permalink:"/z-devops-acceleration-program/docs/implementing-pipeline-actions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Manual migration",permalink:"/z-devops-acceleration-program/docs/manual-migration"}},l={},s=[{value:"Azure Pipelines",id:"azure-pipelines",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"GitLab CI",id:"gitlab-ci",level:2},{value:"Jenkins",id:"jenkins",level:2},{value:"Common back-end scripts",id:"common-back-end-scripts",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"implementing-pipeline-actions"},"Implementing pipeline actions"),(0,r.kt)("p",null,"The following guides for common pipeline orchestrators are available to help you get started with implementing your continuous integration/continuous delivery (CI/CD) pipeline."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," These guides cover commonly-selected combinations of tools for the different CI/CD pipeline components, but they are intended as examples and are therefore not all-inclusive. If you do not see the specific technology or combination of tools your enterprise has selected, that does not necessarily mean it cannot be part of your IBM Z DevOps solution. For most tools being used on the distributed side, you can integrate it into the pipeline as long as it is compatible with z/OS application development and brings value to your enterprise."),(0,r.kt)("h2",{id:"azure-pipelines"},"Azure Pipelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ibm.com/support/pages/node/6422813"},"Azure DevOps and IBM Dependency Based Build Integration"))),(0,r.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ibm.com/support/pages/node/6517452"},"Using IBM Dependency Based Build (DBB) with Github Actions"))),(0,r.kt)("h2",{id:"gitlab-ci"},"GitLab CI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.ibm.com/tutorials/build-a-pipeline-with-gitlab-ci-dbb-and-ucd/"},"Build a pipeline with GitLab CI, IBM Dependency Based Build, and IBM UrbanCode Deploy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www-03.ibm.com/support/techdocs/atsmastr.nsf/WebIndex/WP102827"},"Integrating IBM z/OS platform in CI/CD pipelines with GitLab"))),(0,r.kt)("h2",{id:"jenkins"},"Jenkins"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.ibm.com/tutorials/build-a-pipeline-with-jenkins-dependency-based-build-and-urbancode-deploy/"},"Build a Pipeline with Jenkins, DBB and UCD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ibm.com/support/pages/node/6354897"},"Managing git credentials in Jenkins to access the central git provider")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www-03.ibm.com/support/techdocs/atsmastr.nsf/WebIndex/TD106440"},"POC Cookbook \u2013 Building a modern pipeline in Mainframe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ibm.com/support/pages/node/6355797"},"Setting up the CI Pipeline Agent on IBM Z as a Started Task"))),(0,r.kt)("h2",{id:"common-back-end-scripts"},"Common back-end scripts"),(0,r.kt)("p",null,"Each pipeline orchestrator has its specific way of defining the CI/CD configurations to coordinate pipeline actions. For instance, Jenkins has its Jenkinsfile, and GitLab CI has its ",(0,r.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml")," file. To help provide a consistent CI/CD pipeline experience regardless of your selected pipeline orchestrator, the Dependency Based Build (DBB) community repository provides a set of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IBM/dbb/tree/main/Templates/Common-Backend-Scripts"},"Common back-end scripts for pipeline implementations"),". These scripts cover orchestration tasks throughout the CI/CD pipeline, and can be run from any pipeline orchestrator by including them in the orchestrator's configuration as shell script invocations. You can learn more about how to use these common back-end scripts to simplify your pipeline configuration and setup in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IBM/dbb/blob/main/Templates/Common-Backend-Scripts/README.md"},"Common back-end scripts Readme"),"."))}m.isMDXComponent=!0}}]);