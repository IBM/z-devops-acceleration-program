"use strict";(self.webpackChunkdap_docs=self.webpackChunkdap_docs||[]).push([[6328],{2944:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var s=t(7624),n=t(2172);const o={},l="Designing the build strategy",d={id:"build-strategy",title:"Designing the build strategy",description:"The build step contains all the steps to compile and link the source files into executable code. This page focuses on the different build strategies to support build scenarios at different phases of application development, and points to the relevant sections within the shared sample scripts via IBM's  zAppBuild repository.",source:"@site/docs/build-strategy.md",sourceDirName:".",slug:"/build-strategy",permalink:"/z-devops-acceleration-program/docs/build-strategy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Appendix",permalink:"/z-devops-acceleration-program/docs/branching-appendix"},next:{title:"Architecting the pipeline strategy",permalink:"/z-devops-acceleration-program/docs/pipeline-strategy"}},a={},r=[{value:"User build",id:"user-build",level:2},{value:"Pipeline build",id:"pipeline-build",level:2},{value:"Scope of pipeline builds",id:"scope-of-pipeline-builds",level:3},{value:"Full build",id:"full-build",level:4},{value:"Impact build",id:"impact-build",level:4},{value:"Impact calculation for dependency-based builds",id:"impact-calculation-for-dependency-based-builds",level:5},{value:"User-defined build scope",id:"user-defined-build-scope",level:4},{value:"Strategies for orchestrated builds",id:"strategies-for-orchestrated-builds",level:3},{value:"Resources",id:"resources",level:2}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",ul:"ul",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"designing-the-build-strategy",children:"Designing the build strategy"}),"\n",(0,s.jsxs)(i.p,{children:["The build step contains all the steps to compile and link the source files into executable code. This page focuses on the different build strategies to support build scenarios at different phases of application development, and points to the relevant sections within the shared sample scripts via IBM's  ",(0,s.jsx)(i.a,{href:"https://github.com/IBM/dbb-zappbuild",children:"zAppBuild repository"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"There are several different types of possible builds. At a high level, there is a user build, which is a build done by a developer on a single program, and a pipeline build, which will build the single or multiple changes pushed to the Git server."}),"\n",(0,s.jsx)(i.p,{children:"Due to the nature of mainframe languages, source files need to be associated to a build type. For the build process, it is important to know what type of processing the file needs so that the correct build process can be associated with it. The correlation can be tracked through a fixed mapping list, through a folder organization, or a file extension."}),"\n",(0,s.jsxs)(i.p,{children:["Within the zAppBuild samples on GitHub, a mapping in the file ",(0,s.jsx)(i.code,{children:"file.properties"})," provides the association of the file to a certain build script."]}),"\n",(0,s.jsx)(i.h2,{id:"user-build",children:"User build"}),"\n",(0,s.jsx)(i.p,{children:"In an early development phase, developers need the ability to build the single program they are working on, as well as the unit test programs being created."}),"\n",(0,s.jsx)(i.p,{children:"The following integrated development environment (IDE) tools provide an option to enable the developer to compile a selected program in an easy and fast way, without the need to commit or push the change to the repository, while still using the same build options defined for the pipeline build. The purpose is to build fast for the personal testing scenario:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.ibm.com/docs/en/developer-for-zos",children:"IBM Developer for z/OS (IDz)"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.ibm.com/docs/en/cloud-paks/z-modernization-stack/2023.2?topic=code-option-1-developing-wazi-vs",children:"Wazi for Visual Studio Code"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.ibm.com/docs/en/cloud-paks/z-modernization-stack/2023.2?topic=code-option-2-developing-wazi-dev-spaces",children:"Wazi for Dev Spaces"})}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Additional information about performing a user build can be found in the documentation for ",(0,s.jsx)(i.a,{href:"https://www.ibm.com/docs/en/developer-for-zos/16.0?topic=zos-starting-user-build",children:"IBM Dependency Based Build"})," and for the IDEs listed above."]}),"\n",(0,s.jsx)(i.h2,{id:"pipeline-build",children:"Pipeline build"}),"\n",(0,s.jsx)(i.p,{children:"A pipeline build is generally a build of a set of changes (but could also be a build of a single change), that have been pushed to the Git server. It produces the official binaries, outputs that can be packaged and deployed to different environments, including production. By having the clear definition of what went into each build and the official build outputs, this ensures there are audit records."}),"\n",(0,s.jsx)(i.h3,{id:"scope-of-pipeline-builds",children:"Scope of pipeline builds"}),"\n",(0,s.jsx)(i.p,{children:"The continuous integration/continuous delivery (CI/CD) pipeline can kick off builds for many different scenarios, providing different overrides for each. The build scripts need to handle all these scenarios. Examples of the multiple possible build scenarios include a full build, a dependency build, and a scoped build."}),"\n",(0,s.jsx)(i.p,{children:"A pipeline build is also possible for the short-lived topic (or feature) branches. However, the binaries resulting from this particular scenario cannot go to production because they typically lack a review and approval process."}),"\n",(0,s.jsx)(i.h4,{id:"full-build",children:"Full build"}),"\n",(0,s.jsx)(i.p,{children:"A full build compiles the full defined configuration. The full list of source files is provided as input from the pipeline to the build scripts. One strategy is to allow the specification of the build type in the pipeline orchestrator, as demonstrated in the following screenshot of a Jenkins sample pipeline. The build script would then need to handle this input as the build type."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Jenkins build parameterization",src:t(5344).c+"",width:"671",height:"270"})}),"\n",(0,s.jsx)(i.h4,{id:"impact-build",children:"Impact build"}),"\n",(0,s.jsx)(i.p,{children:"Instead of a full build, most builds are dependency-based impact builds, only building the changed files and the files that depend on (or are impacted by) those changed files. However, there are different qualities of defining the scope of an impact build, which is reflected in the impact calculation phase of a build."}),"\n",(0,s.jsx)(i.h5,{id:"impact-calculation-for-dependency-based-builds",children:"Impact calculation for dependency-based builds"}),"\n",(0,s.jsx)(i.p,{children:"The easiest strategy is to only build the modified files. How to calculate this depends on the scenario. If it is a topic branch build, this can simply be the modified files identified in the Git commit. If this is a release build, you can use a diff of the current baseline to the previous successful build baseline to calculate the modifications."}),"\n",(0,s.jsx)(i.p,{children:"The next consideration is if you want to include the directly impacted files in the list of buildable files. This calculation for direct dependencies occurs on the source file level. If a copybook is changed, all files using this copybook are directly impacted. This level of impact calculation is managed by the IBM Dependency Based Build server. The server contains a collection representing all direct dependencies in a configuration. Your build script needs to query the dependency-based build server to retrieve the list of impacted files and pass this along to the build script. The use cases can vary. If you want to automatically rebuild programs including a modified copybook, you should pursue the strategy above. Instead of rebuilding all dependent programs, you might want to provide a function for the user to select which, if any, of these impacted files should be rebuilt."}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"ImpactUtilities.groovy"})," sample script for IBM Dependency Based Build in the public ",(0,s.jsx)(i.a,{href:"https://github.com/IBM/dbb-zappbuild",children:"zAppBuild GitHub"})," repository provides an example of this impact calculation."]}),"\n",(0,s.jsx)(i.h4,{id:"user-defined-build-scope",children:"User-defined build scope"}),"\n",(0,s.jsx)(i.p,{children:"While dependency-based impact builds cover strategies with a good level of automation for the build process, the user-defined build scope provides full flexibility to the user. It is up to the user to provide the list of files being considered in the build. The list could also reference a work item and its related changes. As a variation, the list can include the files from where the impact calculation should be performed."}),"\n",(0,s.jsx)(i.p,{children:"A file containing the build list is stored as part of the repository."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"User-defined build list",src:t(4960).c+"",width:"610",height:"213"})}),"\n",(0,s.jsx)(i.p,{children:"Similar to the build scripts, we recommend storing the user-defined build list as part of the Git repository. Additionally, you need to consider a parameterized Jenkins job including the relevant logic, which can serve all three build types: full build, dependency-based impact build, and user-defined build."}),"\n",(0,s.jsx)(i.h3,{id:"strategies-for-orchestrated-builds",children:"Strategies for orchestrated builds"}),"\n",(0,s.jsx)(i.p,{children:"As we now have shown, there are different possible build scenarios. It is important to select the right build types for your setup. Using a mixture, depending on the level, should serve your needs. At each given level the choices will be limited, with the most flexibility at the development level. If you intend to maintain the traditional library population strategy, you can implement user builds to build development activities within the development stage and set up a dependency-based impact build in the integration stage to ensure consistency across the application."}),"\n",(0,s.jsx)(i.p,{children:"It is important to recognize that by moving to Git and using an artifact repository for outputs, you are no longer tied to a library structure. You can now use the same build configuration strategy while pulling any already-built parts out of the artifact repository."}),"\n",(0,s.jsx)(i.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(i.p,{children:["This page contains reformatted excerpts from ",(0,s.jsx)(i.a,{href:"https://www.ibm.com/support/pages/develop-mainframe-software-opensource-source-code-managers-and-ibm-dependency-based-build",children:"Develop Mainframe Software with OpenSource Source code managers and IBM Dependency Based Build"}),"."]})]})}function p(e={}){const{wrapper:i}={...(0,n.M)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5344:(e,i,t)=>{t.d(i,{c:()=>s});const s=t.p+"assets/images/jenkins-parameter-63f683b6aedd26fac7c616b63965028d.png"},4960:(e,i,t)=>{t.d(i,{c:()=>s});const s=t.p+"assets/images/user-defined-build-list-4d7539d6648837b6e6e113f9f882ca81.png"},2172:(e,i,t)=>{t.d(i,{I:()=>d,M:()=>l});var s=t(1504);const n={},o=s.createContext(n);function l(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);