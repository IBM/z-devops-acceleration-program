"use strict";(self.webpackChunkdap_docs=self.webpackChunkdap_docs||[]).push([[869],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(i),h=o,f=u["".concat(s,".").concat(h)]||u[h]||c[h]||a;return i?n.createElement(f,l(l({ref:t},p),{},{components:i})):n.createElement(f,l({ref:t},p))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,l=new Array(a);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:o,l[1]=r;for(var d=2;d<a;d++)l[d]=i[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8160:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=i(7462),o=(i(7294),i(3905));const a={},l="Designing the build strategy",r={unversionedId:"build-strategy",id:"build-strategy",title:"Designing the build strategy",description:"The build step contains all the steps to compile and link the source files into executable code. This page focuses on the different build strategies to support build scenarios at different phases of application development, and points to the relevant sections within the shared sample scripts via IBM's  zAppBuild repository.",source:"@site/docs/build-strategy.md",sourceDirName:".",slug:"/build-strategy",permalink:"/z-devops-acceleration-program/docs/build-strategy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Defining dependency management",permalink:"/z-devops-acceleration-program/docs/dependency-management"},next:{title:"Architecting the pipeline strategy",permalink:"/z-devops-acceleration-program/docs/pipeline-strategy"}},s={},d=[{value:"User build",id:"user-build",level:2},{value:"Pipeline build",id:"pipeline-build",level:2},{value:"Scope of pipeline builds",id:"scope-of-pipeline-builds",level:3},{value:"Full build",id:"full-build",level:4},{value:"Impact build",id:"impact-build",level:4},{value:"Impact calculation for dependency-based builds",id:"impact-calculation-for-dependency-based-builds",level:5},{value:"User-defined build scope",id:"user-defined-build-scope",level:4},{value:"Strategies for orchestrated builds",id:"strategies-for-orchestrated-builds",level:3},{value:"Resources",id:"resources",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"designing-the-build-strategy"},"Designing the build strategy"),(0,o.kt)("p",null,"The build step contains all the steps to compile and link the source files into executable code. This page focuses on the different build strategies to support build scenarios at different phases of application development, and points to the relevant sections within the shared sample scripts via IBM's  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IBM/dbb-zappbuild"},"zAppBuild repository"),"."),(0,o.kt)("p",null,"There are several different types of possible builds. At a high level, there is a user build, which is a build done by a developer on a single program, and a pipeline build, which will build the single or multiple changes pushed to the Git server."),(0,o.kt)("p",null,"Due to the nature of mainframe languages, source files need to be associated to a build type. For the build process, it is important to know what type of processing the file needs so that the correct build process can be associated with it. The correlation can be tracked through a fixed mapping list, through a folder organization, or a file extension."),(0,o.kt)("p",null,"Within the zAppBuild samples on GitHub, a mapping in the file ",(0,o.kt)("inlineCode",{parentName:"p"},"file.properties")," provides the association of the file to a certain build script."),(0,o.kt)("h2",{id:"user-build"},"User build"),(0,o.kt)("p",null,"In an early development phase, developers need the ability to build the single program they are working on, as well as the unit test programs being created."),(0,o.kt)("p",null,"The following integrated development environment (IDE) tools provide an option to enable the developer to compile a selected program in an easy and fast way, without the need to commit or push the change to the repository, while still using the same build options defined for the pipeline build. The purpose is to build fast for the personal testing scenario:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/developer-for-zos"},"IBM Developer for z/OS (IDz)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/cloud-paks/z-modernization-stack/2023.2?topic=code-option-1-developing-wazi-vs"},"Wazi for Visual Studio Code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/cloud-paks/z-modernization-stack/2023.2?topic=code-option-2-developing-wazi-dev-spaces"},"Wazi for Dev Spaces"))),(0,o.kt)("p",null,"Additional information about performing a user build can be found in the documentation for ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/developer-for-zos/16.0?topic=zos-starting-user-build"},"IBM Dependency Based Build")," and for the IDEs listed above."),(0,o.kt)("h2",{id:"pipeline-build"},"Pipeline build"),(0,o.kt)("p",null,"A pipeline build is generally a build of a set of changes (but could also be a build of a single change), that have been pushed to the Git server. It produces the official binaries, outputs that can be packaged and deployed to different environments, including production. By having the clear definition of what went into each build and the official build outputs, this ensures there are audit records."),(0,o.kt)("h3",{id:"scope-of-pipeline-builds"},"Scope of pipeline builds"),(0,o.kt)("p",null,"The continuous integration/continuous delivery (CI/CD) pipeline can kick off builds for many different scenarios, providing different overrides for each. The build scripts need to handle all these scenarios. Examples of the multiple possible build scenarios include a full build, a dependency build, and a scoped build."),(0,o.kt)("p",null,"A pipeline build is also possible for the short-lived topic (or feature) branches. However, the binaries resulting from this particular scenario cannot go to production because they typically lack a review and approval process."),(0,o.kt)("h4",{id:"full-build"},"Full build"),(0,o.kt)("p",null,"A full build compiles the full defined configuration. The full list of source files is provided as input from the pipeline to the build scripts. One strategy is to allow the specification of the build type in the pipeline orchestrator, as demonstrated in the following screenshot of a Jenkins sample pipeline. The build script would then need to handle this input as the build type."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Jenkins build parameterization",src:i(6794).Z,width:"671",height:"270"})),(0,o.kt)("h4",{id:"impact-build"},"Impact build"),(0,o.kt)("p",null,"Instead of a full build, most builds are dependency-based impact builds, only building the changed files and the files that depend on (or are impacted by) those changed files. However, there are different qualities of defining the scope of an impact build, which is reflected in the impact calculation phase of a build."),(0,o.kt)("h5",{id:"impact-calculation-for-dependency-based-builds"},"Impact calculation for dependency-based builds"),(0,o.kt)("p",null,"The easiest strategy is to only build the modified files. How to calculate this depends on the scenario. If it is a topic branch build, this can simply be the modified files identified in the Git commit. If this is a release build, you can use a diff of the current baseline to the previous successful build baseline to calculate the modifications."),(0,o.kt)("p",null,"The next consideration is if you want to include the directly impacted files in the list of buildable files. This calculation for direct dependencies occurs on the source file level. If a copybook is changed, all files using this copybook are directly impacted. This level of impact calculation is managed by the IBM Dependency Based Build server. The server contains a collection representing all direct dependencies in a configuration. Your build script needs to query the dependency-based build server to retrieve the list of impacted files and pass this along to the build script. The use cases can vary. If you want to automatically rebuild programs including a modified copybook, you should pursue the strategy above. Instead of rebuilding all dependent programs, you might want to provide a function for the user to select which, if any, of these impacted files should be rebuilt."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ImpactUtilities.groovy")," sample script for IBM Dependency Based Build in the public ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IBM/dbb-zappbuild"},"zAppBuild GitHub")," repository provides an example of this impact calculation."),(0,o.kt)("h4",{id:"user-defined-build-scope"},"User-defined build scope"),(0,o.kt)("p",null,"While dependency-based impact builds cover strategies with a good level of automation for the build process, the user-defined build scope provides full flexibility to the user. It is up to the user to provide the list of files being considered in the build. The list could also reference a work item and its related changes. As a variation, the list can include the files from where the impact calculation should be performed."),(0,o.kt)("p",null,"A file containing the build list is stored as part of the repository."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"User-defined build list",src:i(7385).Z,width:"610",height:"213"})),(0,o.kt)("p",null,"Similar to the build scripts, we recommend storing the user-defined build list as part of the Git repository. Additionally, you need to consider a parameterized Jenkins job including the relevant logic, which can serve all three build types: full build, dependency-based impact build, and user-defined build."),(0,o.kt)("h3",{id:"strategies-for-orchestrated-builds"},"Strategies for orchestrated builds"),(0,o.kt)("p",null,"As we now have shown, there are different possible build scenarios. It is important to select the right build types for your setup. Using a mixture, depending on the level, should serve your needs. At each given level the choices will be limited, with the most flexibility at the development level. If you intend to maintain the traditional library population strategy, you can implement user builds to build development activities within the development stage and set up a dependency-based impact build in the integration stage to ensure consistency across the application."),(0,o.kt)("p",null,"It is important to recognize that by moving to Git and using an artifact repository for outputs, you are no longer tied to a library structure. You can now use the same build configuration strategy while pulling any already-built parts out of the artifact repository."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"This page contains reformatted excerpts from ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/support/pages/develop-mainframe-software-opensource-source-code-managers-and-ibm-dependency-based-build"},"Develop Mainframe Software with OpenSource Source code managers and IBM Dependency Based Build"),"."))}c.isMDXComponent=!0},6794:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jenkins-parameter-63f683b6aedd26fac7c616b63965028d.png"},7385:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/user-defined-build-list-4d7539d6648837b6e6e113f9f882ca81.png"}}]);