"use strict";(self.webpackChunkdap_docs=self.webpackChunkdap_docs||[]).push([[4132],{3512:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(7624),s=n(2172);const o={},r="Build",l={id:"build",title:"Build",description:"The Build component of a continuous integration/continuous delivery (CI/CD) pipeline converts the source code into executable binaries. It supports multiple platforms and languages. In mainframe environments, it includes understanding dependencies, compile, link-edit, and unit test. The build can include the inspection of code quality to perform automated validation against a set of coding rules. In some cases, code quality inspection could also be a component of its own in the pipeline.",source:"@site/docs/build.md",sourceDirName:".",slug:"/build",permalink:"/z-devops-acceleration-program/docs/build",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Source code management",permalink:"/z-devops-acceleration-program/docs/scm"},next:{title:"Artifact repository",permalink:"/z-devops-acceleration-program/docs/artifact-repository"}},a={},d=[{value:"DBB features",id:"dbb-features",level:2},{value:"zAppBuild features",id:"zappbuild-features",level:2},{value:"zAppBuild introduction",id:"zappbuild-introduction",level:2},{value:"zAppBuild architecture",id:"zappbuild-architecture",level:3},{value:"<code>dbb-zappbuild</code> folder structure overview",id:"dbb-zappbuild-folder-structure-overview",level:4},{value:"<code>application-conf</code> overview",id:"application-conf-overview",level:4},{value:"Resources",id:"resources",level:2}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"build",children:"Build"}),"\n",(0,t.jsx)(i.p,{children:"The Build component of a continuous integration/continuous delivery (CI/CD) pipeline converts the source code into executable binaries. It supports multiple platforms and languages. In mainframe environments, it includes understanding dependencies, compile, link-edit, and unit test. The build can include the inspection of code quality to perform automated validation against a set of coding rules. In some cases, code quality inspection could also be a component of its own in the pipeline."}),"\n",(0,t.jsx)(i.p,{children:'While many of the steps in the DevOps flow for mainframe applications can be performed using the same tooling used by other development teams, the build step in particular needs to remain on z/OS. Therefore, in the IBM Z DevOps solution, this step is primarily handled by IBM Dependency Based Build (DBB). DBB has intelligent build capabilities where it can not only compile and link z/OS programs to produce executable binaries, but it can also perform different types of builds to support the various steps in an application development workflow. This includes the ability to  perform an "impact build", where DBB will only build programs that have changed since the last successful build and the files impacted by those changes, saving time and resources during the development process.'}),"\n",(0,t.jsxs)(i.p,{children:["DBB is a set of APIs based on open-source Groovy and adapted to z/OS. This enables you to easily incorporate your z/OS application builds into the same automated CI/CD pipeline used by other teams. It is possible to use DBB as a basis to ",(0,t.jsx)(i.a,{href:"https://www.ibm.com/docs/en/dbb/2.0?topic=apis-tutorial-writing-your-first-build-script",children:"write your own build scripts"}),", but we recommend starting with the ",(0,t.jsx)(i.a,{href:"https://github.com/IBM/dbb-zappbuild",children:"zAppBuild framework"})," to provide a template for your build, and then customizing it as necessary for your enterprise and applications."]}),"\n",(0,t.jsx)(i.p,{children:"The zAppBuild framework helps facilitate the adoption of DBB APIs for your enterprise and applications. Rather than writing your own Groovy scripts to interact with the DBB APIs, you can fill in properties to define your build options for zAppBuild, and then let zAppBuild invoke DBB to perform your builds."}),"\n",(0,t.jsx)(i.h2,{id:"dbb-features",children:"DBB features"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Perform builds on z/OS and persist build results"}),"\n",(0,t.jsx)(i.li,{children:"Persist metadata about the builds, which can then be used in subsequent automated CI/CD pipeline steps, as well as informing future DBB builds"}),"\n",(0,t.jsx)(i.li,{children:"Can be run from the command line interface, making it easy to integrate into an automated CI/CD pipeline"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"zappbuild-features",children:"zAppBuild features"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Framework template facilitates leveraging DBB APIs to build z/OS applications, letting you focus on defining the build's properties separately from the logic to perform the build"}),"\n",(0,t.jsx)(i.li,{children:"High-level enterprise-wide settings that can be set for all z/OS application builds"}),"\n",(0,t.jsx)(i.li,{children:"Application-level settings for any necessary overrides in individual application builds"}),"\n",(0,t.jsxs)(i.li,{children:["Includes out-of-the-box support for the following languages:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"COBOL"}),"\n",(0,t.jsx)(i.li,{children:"PL/I"}),"\n",(0,t.jsx)(i.li,{children:"BMS and MFS"}),"\n",(0,t.jsx)(i.li,{children:"Link Cards"}),"\n",(0,t.jsx)(i.li,{children:"PSB, DBD"}),"\n",(0,t.jsxs)(i.li,{children:["See zAppBuild's ",(0,t.jsx)(i.a,{href:"https://github.com/IBM/dbb-zappbuild/tree/main#supported-languages",children:"Supported Languages"})," for a full list of out-of-the-box supported languages."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["Supported build actions:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:'Single program ("User Build"): Build a single program in the application'}),"\n",(0,t.jsx)(i.li,{children:"List of programs: Build a list of programs provided by a text file"}),"\n",(0,t.jsx)(i.li,{children:"Full build: Build all programs (or buildable files) of an application"}),"\n",(0,t.jsx)(i.li,{children:"Impact build: Build only the programs impacted by source files that have changed since the last successful build"}),"\n",(0,t.jsx)(i.li,{children:"Scan only: Skip the actual building and only scan source files for dependency data"}),"\n",(0,t.jsxs)(i.li,{children:["Additional supported build actions are listed in zAppBuild's ",(0,t.jsx)(i.a,{href:"https://github.com/IBM/dbb-zappbuild/tree/main#build-scope",children:"Build Scope"})," documentation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"zappbuild-introduction",children:"zAppBuild introduction"}),"\n",(0,t.jsx)(i.p,{children:"zAppBuild is a free, generic mainframe application build framework that customers can extend to meet their DevOps needs. It is available under the Apache 2.0 license, and is a sample to get you started with building Git-based source code on z/OS UNIX System Services (z/OS UNIX). It is made up of property files to configure the build behavior, and Groovy scripts that invoke the DBB toolkit APIs."}),"\n",(0,t.jsx)(i.p,{children:"Build properties can span across all applications (enterprise-level), one application (application-level), or individual programs. Properties that cross all applications are managed by administrators and define enterprise-wide settings such as the PDS name of the compiler, data set allocation attributes, and more. Application- and program-level properties are typically managed within the application repository itself."}),"\n",(0,t.jsxs)(i.p,{children:['The zAppBuild framework is invoked either by a developer using the "User Build" capability in their integrated development environment (IDE), or by an automated CI/CD pipeline. It supports different ',(0,t.jsx)(i.a,{href:"https://github.com/IBM/dbb-zappbuild#build-scope",children:"build types"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["The main script of zAppBuild, ",(0,t.jsx)(i.code,{children:"build.groovy"}),", initializes the build environment, identifies what to build, and invokes language scripts. This triggers the utilities and DBB APIs to then produce runtime artifacts. The build process also creates logs and an artifact manifest (",(0,t.jsx)(i.code,{children:"BuildReport.json"}),") for deployment processes coordinated by the deployment manager."]}),"\n",(0,t.jsx)(i.p,{children:"The following chart provides a high-level summary of the steps that zAppBuild performs during a build:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"zAppBuild workflow",src:n(7864).c+"",width:"1914",height:"1080"})}),"\n",(0,t.jsx)(i.h3,{id:"zappbuild-architecture",children:"zAppBuild architecture"}),"\n",(0,t.jsxs)(i.p,{children:["The zAppBuild framework is split into two parts. The core build framework, called ",(0,t.jsx)(i.code,{children:"dbb-zappbuild"}),", is a Git repository that contains the build scripts and stores enterprise-level settings. It resides in a permanent location on the z/OS UNIX file system (in addition to the central Git repository). It is typically owned and controlled by the central build team."]}),"\n",(0,t.jsxs)(i.p,{children:["The other part of zAppBuild is the ",(0,t.jsx)(i.code,{children:"application-conf"})," folder that resides within each application repository to provide application-level settings to the central build framework. These settings are owned, maintained, and updated by the application team."]}),"\n",(0,t.jsxs)(i.h4,{id:"dbb-zappbuild-folder-structure-overview",children:[(0,t.jsx)(i.code,{children:"dbb-zappbuild"})," folder structure overview"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"build-conf"})," contains the following enterprise-level property files:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"build.properties"})," defines DBB initilization properties, including location and of the DBB metadata store (for storing dependency information) and more."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"dataset.properties"})," describes system datasets such as the PDS name of the COBOL compiler or libraries used for the subsystem. You must update this properties file with your site\u2019s data set names."]}),"\n",(0,t.jsx)(i.li,{children:"Several language-specific property files that define the compiler or link-editor/binder program names, system libraries, and general system-level properties for COBOL, Assembler, and other languages."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"languages"})," contains Groovy scripts used to build programs. For example, ",(0,t.jsx)(i.code,{children:"Cobol.groovy"})," is called by ",(0,t.jsx)(i.code,{children:"build.groovy"})," to compile the COBOL source codes. The application source code is mapped by its file extension to the language script in ",(0,t.jsx)(i.code,{children:"application-conf/file.properties"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"samples"})," contains an ",(0,t.jsx)(i.code,{children:"application-conf"})," template folder and a reference sample application, MortgageApplication."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"utilities"})," contains helper scripts used by ",(0,t.jsx)(i.code,{children:"build.groovy"})," and other scripts to calculate the build list."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"build.groovy"})," is the main build script of zAppBuild. It takes several required command line parameters to customize the build process."]}),"\n"]}),"\n",(0,t.jsxs)(i.h4,{id:"application-conf-overview",children:[(0,t.jsx)(i.code,{children:"application-conf"})," overview"]}),"\n",(0,t.jsx)(i.p,{children:"This folder is located within the application's repository, and defines application-level properties such as the following:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"application.properties"})," defines various directory rules, default Git branch, impact resolution rules such as the copybook lookup rules, and more."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"file.properties"})," maps files to the language scripts in ",(0,t.jsx)(i.code,{children:"dbb-zappbuild/languages"}),", and provides file-level property overrides."]}),"\n",(0,t.jsxs)(i.li,{children:["Property files for further customization of the language script processing. For example, ",(0,t.jsx)(i.code,{children:"Cobol.properties"})," is one of the language properties files to define compiler and link-edit options, among other properties."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["The following diagram illustrates how zAppBuild's application- and enterprise-level configurations feed into its build scripts to generate build artifacts from an application repository:\n",(0,t.jsx)(i.img,{alt:"zAppBuild architecture",src:n(7076).c+"",width:"1919",height:"1080"})]}),"\n",(0,t.jsx)(i.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.ibm.com/docs/en/dbb/2.0",children:"IBM documentation for DBB"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://ibm.github.io/mainframe-downloads/Training/dbb-self-paced-learning.html",children:"IBM Dependency Based Build Fundamentals course"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"This page contains reformatted excerpts from the following documents:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.ibm.com/support/pages/node/6457275",children:"DBB zAppBuild Introduction and Custom Version Maintenance Strategy"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.ibm.com/support/pages/packaging-and-deployment-strategies-open-and-modern-cicd-pipeline-focusing-mainframe-software-development",children:"Packaging and Deployment Strategies in an Open and Modern CI/CD Pipeline focusing on Mainframe Software Development"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},7076:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/zappbuild-architecture-343b552117239ab3e5adac9baccf6e42.png"},7864:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/zappbuild-workflow-f8a5f3caf14fc0c36d02ff2072eb2c33.png"},2172:(e,i,n)=>{n.d(i,{I:()=>l,M:()=>r});var t=n(1504);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);