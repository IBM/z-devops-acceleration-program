"use strict";(self.webpackChunkdap_docs=self.webpackChunkdap_docs||[]).push([[874],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(i),m=n,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return i?a.createElement(f,o(o({ref:t},d),{},{components:i})):a.createElement(f,o({ref:t},d))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=i[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},2428:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=i(7462),n=(i(7294),i(3905));const r={},o="Build",l={unversionedId:"build",id:"build",title:"Build",description:"The Build component of a continuous integration/continuous delivery (CI/CD) pipeline converts the source code into executable binaries. It supports multiple platforms and languages. In mainframe environments, it includes understanding dependencies, compile, link-edit, and unit test. The build can include the inspection of code quality to perform automated validation against a set of coding rules. In some cases, code quality inspection could also be a component of its own in the pipeline.",source:"@site/docs/build.md",sourceDirName:".",slug:"/build",permalink:"/zDevOps-Acceleration/z-devops-acceleration-program/docs/build",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Source code management",permalink:"/zDevOps-Acceleration/z-devops-acceleration-program/docs/scm"},next:{title:"Artifact repository",permalink:"/zDevOps-Acceleration/z-devops-acceleration-program/docs/artifact-repository"}},p={},s=[{value:"DBB features",id:"dbb-features",level:2},{value:"zAppBuild features",id:"zappbuild-features",level:2},{value:"zAppBuild introduction",id:"zappbuild-introduction",level:2},{value:"zAppBuild architecture",id:"zappbuild-architecture",level:3},{value:"<code>dbb-zappbuild</code> folder structure overview",id:"dbb-zappbuild-folder-structure-overview",level:4},{value:"<code>application-conf</code> overview",id:"application-conf-overview",level:4},{value:"Resources",id:"resources",level:2}],d={toc:s},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"build"},"Build"),(0,n.kt)("p",null,"The Build component of a continuous integration/continuous delivery (CI/CD) pipeline converts the source code into executable binaries. It supports multiple platforms and languages. In mainframe environments, it includes understanding dependencies, compile, link-edit, and unit test. The build can include the inspection of code quality to perform automated validation against a set of coding rules. In some cases, code quality inspection could also be a component of its own in the pipeline."),(0,n.kt)("p",null,'While many of the steps in the DevOps flow for mainframe applications can be performed using the same tooling used by distributed development teams, the build step in particular needs to remain on z/OS. Therefore, in the IBM Z DevOps solution, this step is primarily handled by IBM Dependency Based Build (DBB). DBB has intelligent build capabilities where it can not only compile and link z/OS programs to produce executable binaries, but it can also perform different types of builds to support the various steps in an application development workflow. This includes the ability to  perform an "impact build", where DBB will only build programs that have changed since the last successful build and the files impacted by those changes, saving time and resources during the development process.'),(0,n.kt)("p",null,"DBB is a set of APIs based on open-source Groovy and adapted to z/OS. This enables you to easily incorporate your z/OS application builds into the same automated CI/CD pipeline used by distributed teams. It is possible to use DBB as a basis to ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/dbb/2.0?topic=apis-tutorial-writing-your-first-build-script"},"write your own build scripts"),", but we recommend starting with the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IBM/dbb-zappbuild"},"zAppBuild framework")," to provide a template for your build, and then customizing it as necessary for your enterprise and applications."),(0,n.kt)("p",null,"The zAppBuild framework helps facilitate the adoption of DBB APIs for your enterprise and applications. Rather than writing your own Groovy scripts to interact with the DBB APIs, you can fill in properties to define your build options for zAppBuild, and then let zAppBuild invoke DBB to perform your builds."),(0,n.kt)("h2",{id:"dbb-features"},"DBB features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Perform builds on z/OS and persist build results"),(0,n.kt)("li",{parentName:"ul"},"Persist metadata about the builds, which can then be used in subsequent automated CI/CD pipeline steps, as well as informing future DBB builds"),(0,n.kt)("li",{parentName:"ul"},"Can be run from the command line interface, making it easy to integrate into an automated CI/CD pipeline")),(0,n.kt)("h2",{id:"zappbuild-features"},"zAppBuild features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Framework template facilitates leveraging DBB APIs to build z/OS applications, letting you focus on defining the build's properties separately from the logic to perform the build"),(0,n.kt)("li",{parentName:"ul"},"High-level enterprise-wide settings that can be set for all z/OS application builds"),(0,n.kt)("li",{parentName:"ul"},"Application-level settings for any necessary overrides in individual application builds"),(0,n.kt)("li",{parentName:"ul"},"Includes out-of-the-box support for the following languages:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"COBOL"),(0,n.kt)("li",{parentName:"ul"},"PL/I"),(0,n.kt)("li",{parentName:"ul"},"BMS and MFS"),(0,n.kt)("li",{parentName:"ul"},"Link Cards"),(0,n.kt)("li",{parentName:"ul"},"PSB, DBD"),(0,n.kt)("li",{parentName:"ul"},"See zAppBuild's ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IBM/dbb-zappbuild/tree/main#build-scope"},"Supported Languages")," for a full list of out-of-the-box supported languages."))),(0,n.kt)("li",{parentName:"ul"},"Supported build actions:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Single program ("User Build"): Build a single program in the application'),(0,n.kt)("li",{parentName:"ul"},"List of programs: Build a list of programs provided by a text file"),(0,n.kt)("li",{parentName:"ul"},"Full build: Build all programs (or buildable files) of an application"),(0,n.kt)("li",{parentName:"ul"},"Impact build: Build only the programs impacted by source files that have changed since the last successful build"),(0,n.kt)("li",{parentName:"ul"},"Scan only: Skip the actual building and only scan source files for dependency data"),(0,n.kt)("li",{parentName:"ul"},"Additional supported build actions are listed in zAppBuild's ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IBM/dbb-zappbuild/tree/main#build-scope"},"Build Scope")," documentation.")))),(0,n.kt)("h2",{id:"zappbuild-introduction"},"zAppBuild introduction"),(0,n.kt)("p",null,"zAppBuild is a free, generic mainframe application build framework that customers can extend to meet their DevOps needs. It is available under the Apache 2.0 license, and is a sample to get you started with building Git-based source code on z/OS UNIX System Services (z/OS UNIX). It is made up of property files to configure the build behavior, and Groovy scripts that invoke the DBB toolkit APIs."),(0,n.kt)("p",null,"Build properties can span across all applications (enterprise-level), one application (application-level), or individual programs. Properties that cross all applications are managed by administrators and define enterprise-wide settings such as the PDS name of the compiler, data set allocation attributes, and more. Application- and program-level properties are typically managed within the application repository itself."),(0,n.kt)("p",null,'The zAppBuild framework is invoked either by a developer using the "User Build" capability in their integrated development environment (IDE), or by an automated CI/CD pipeline. It supports different ',(0,n.kt)("a",{parentName:"p",href:"https://github.com/IBM/dbb-zappbuild#build-scope"},"build types"),"."),(0,n.kt)("p",null,"The main script of zAppBuild, ",(0,n.kt)("inlineCode",{parentName:"p"},"build.groovy"),", initializes the build environment, identifies what to build, and invokes language scripts. This triggers the utilities and DBB APIs to then produce runtime artifacts. The build process also creates logs and an artifact manifest (",(0,n.kt)("inlineCode",{parentName:"p"},"BuildReport.json"),") for deployment processes coordinated by the deployment manager."),(0,n.kt)("p",null,"The following chart provides a high-level summary of the steps that zAppBuild performs during a build:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"zAppBuild workflow",src:i(5436).Z,width:"1914",height:"1080"})),(0,n.kt)("h3",{id:"zappbuild-architecture"},"zAppBuild architecture"),(0,n.kt)("p",null,"The zAppBuild framework is split into two parts. The core build framework, called ",(0,n.kt)("inlineCode",{parentName:"p"},"dbb-zappbuild"),", is a Git repository that contains the build scripts and stores enterprise-level settings. It resides in a permanent location on the z/OS UNIX file system (in addition to the central Git repository). It is typically owned and controlled by the central build team."),(0,n.kt)("p",null,"The other part of zAppBuild is the ",(0,n.kt)("inlineCode",{parentName:"p"},"application-conf")," folder that resides within each application repository to provide application-level settings to the central build framework. These settings are owned, maintained, and updated by the application team."),(0,n.kt)("h4",{id:"dbb-zappbuild-folder-structure-overview"},(0,n.kt)("inlineCode",{parentName:"h4"},"dbb-zappbuild")," folder structure overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"build-conf")," contains the following enterprise-level property files:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"build.properties")," defines DBB initilization properties, including location and of the DBB metadata store (for storing dependency information) and more."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dataset.properties")," describes system datasets such as the PDS name of the COBOL compiler or libraries used for the subsystem. You must update this properties file with your site\u2019s data set names."),(0,n.kt)("li",{parentName:"ul"},"Several language-specific property files that define the compiler or link-editor/binder program names, system libraries, and general system-level properties for COBOL, Assembler, and other languages."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"languages")," contains Groovy scripts used to build programs. For example, ",(0,n.kt)("inlineCode",{parentName:"li"},"Cobol.groovy")," is called by ",(0,n.kt)("inlineCode",{parentName:"li"},"build.groovy")," to compile the COBOL source codes. The application source code is mapped by its file extension to the language script in ",(0,n.kt)("inlineCode",{parentName:"li"},"application-conf/file.properties"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"samples")," contains an ",(0,n.kt)("inlineCode",{parentName:"li"},"application-conf")," template folder and a reference sample application, MortgageApplication."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"utilities")," contains helper scripts used by ",(0,n.kt)("inlineCode",{parentName:"li"},"build.groovy")," and other scripts to calculate the build list."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"build.groovy")," is the main build script of zAppBuild. It takes several required command line parameters to customize the build process.")),(0,n.kt)("h4",{id:"application-conf-overview"},(0,n.kt)("inlineCode",{parentName:"h4"},"application-conf")," overview"),(0,n.kt)("p",null,"This folder is located within the application's repository, and defines application-level properties such as the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"application.properties")," defines various directory rules, default Git branch, impact resolution rules such as the copybook lookup rules, and more."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"file.properties")," maps files to the language scripts in ",(0,n.kt)("inlineCode",{parentName:"li"},"dbb-zappbuild/languages"),", and provides file-level property overrides."),(0,n.kt)("li",{parentName:"ul"},"Property files for further customization of the language script processing. For example, ",(0,n.kt)("inlineCode",{parentName:"li"},"Cobol.properties")," is one of the language properties files to define compiler and link-edit options, among other properties.")),(0,n.kt)("p",null,"The following diagram illustrates how zAppBuild's application- and enterprise-level configurations feed into its build scripts to generate build artifacts from an application repository:\n",(0,n.kt)("img",{alt:"zAppBuild architecture",src:i(3090).Z,width:"1919",height:"1080"})),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/dbb/2.0"},"IBM documentation for DBB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ibm.github.io/mainframe-downloads/Training/dbb-self-paced-learning.html"},"IBM Dependency Based Build Fundamentals course"))),(0,n.kt)("p",null,"This page contains reformatted excerpts from the following documents:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/support/pages/node/6457275"},"DBB zAppBuild Introduction and Custom Version Maintenance Strategy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/support/pages/packaging-and-deployment-strategies-open-and-modern-cicd-pipeline-focusing-mainframe-software-development"},"Packaging and Deployment Strategies in an Open and Modern CI/CD Pipeline focusing on Mainframe Software Development"))))}c.isMDXComponent=!0},3090:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/zappbuild-architecture-343b552117239ab3e5adac9baccf6e42.png"},5436:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/zappbuild-workflow-f8a5f3caf14fc0c36d02ff2072eb2c33.png"}}]);