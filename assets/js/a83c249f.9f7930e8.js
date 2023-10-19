"use strict";(self.webpackChunkdap_docs=self.webpackChunkdap_docs||[]).push([[602],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8034:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={},r="Architecting the pipeline strategy",s={unversionedId:"pipeline-strategy",id:"pipeline-strategy",title:"Architecting the pipeline strategy",description:"Building, packaging, and deploying in a pipeline",source:"@site/docs/pipeline-strategy.md",sourceDirName:".",slug:"/pipeline-strategy",permalink:"/zDevOps-Acceleration/z-devops-acceleration-program/docs/pipeline-strategy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Designing the build strategy",permalink:"/zDevOps-Acceleration/z-devops-acceleration-program/docs/build-strategy"},next:{title:"Outlining the deployment strategy",permalink:"/zDevOps-Acceleration/z-devops-acceleration-program/docs/deployment-strategy"}},l={},p=[{value:"Building, packaging, and deploying in a pipeline",id:"building-packaging-and-deploying-in-a-pipeline",level:2},{value:"Package content and layout",id:"package-content-and-layout",level:2},{value:"Package strategy and scope",id:"package-strategy-and-scope",level:2},{value:"Specialty of Mainframe Packages",id:"specialty-of-mainframe-packages",level:2},{value:"Resources",id:"resources",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecting-the-pipeline-strategy"},"Architecting the pipeline strategy"),(0,i.kt)("h2",{id:"building-packaging-and-deploying-in-a-pipeline"},"Building, packaging, and deploying in a pipeline"),(0,i.kt)("p",null,"A continuous integration/continuous delivery (CI/CD) pipeline removes the manual tasks of defining a package. This task is now fully automated and occurs once the application is built."),(0,i.kt)("p",null,"It is typical to have multiple packages, with each package being expected to have passed automated quality gate testing. Not all packages will make it to production due to discovered defects."),(0,i.kt)("p",null,"Because the creation of a package most likely occurs at the application component level, the source code management (SCM) layout also has an impact on the packaging."),(0,i.kt)("p",null,"Technically, a package is mainly composed of a list of binaries or files. However, it also includes metadata for the deployment manager. Using the metadata and a defined process, the deployment manager knows how to treat each element of the package during rollout."),(0,i.kt)("p",null,"It is important, especially for build outputs on mainframes, to keep track of each\u2019s element type. For example, during the deployment phase, a CICS program will require different handling than a plain batch program. The same applies for programs using Db2. Therefore, the metadata associated with each artifact should provide a \u201cdeploy type\u201d.  This type indicates the nature of the artifact and is used to drive the appropriate process when deploying the artifact."),(0,i.kt)("h2",{id:"package-content-and-layout"},"Package content and layout"),(0,i.kt)("p",null,"It is imperative that you consider build outputs as part of your package. Examples of these items are highlighted in yellow in the following image. However, it is equally important to also consider the application-specific configuration artifacts (items highlighted in blue). Doing so will help teams avoid a flood of change requests, limit constant back and forth communication, and will enable the continued use of deployment automation.\nApplication-specific configurations should be treated as source code, in the same way you manage your application source code (although, not everything needs to end up in a single package; we can also consider configuration and application packages). The following image shows a list of package items that are typical in the mainframe domain."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example of typical package items for a mainframe application",src:a(4326).Z,width:"450",height:"471"})),(0,i.kt)("p",null,"The package is represented in an archive format such as ",(0,i.kt)("inlineCode",{parentName:"p"},".tar")," (common in the UNIX world). This format is consistent with distributed applications, where teams usually work with full application packages in archives such as a WAR or a JAR file."),(0,i.kt)("p",null,"In all cases, the package consists of two items:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The actual binaries and files produced by the build manager"),(0,i.kt)("li",{parentName:"ul"},"A manifest describing the package's contents (that is, metadata)")),(0,i.kt)("p",null,"For mainframe applications, a package will contain executables required to run your application, such as program objects, DBRM, JCL, and control cards \u2013 as well as a manifest file. An example of package contents in a typical mainframe application package is shown in the following image."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example of package contents in a typical mainframe application package",src:a(1984).Z,width:"297",height:"212"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The package can also carry listings or debug files which you use during debugging. By doing so, you ensure that your listing files\u2019 version matches the version of your binary.")),(0,i.kt)("h2",{id:"package-strategy-and-scope"},"Package strategy and scope"),(0,i.kt)("p",null,"Package creation occurs after a build. Here, binaries are created, but other files are also produced during the build process. The build process takes inputs from source files stored in one or several Git repositories. Usually, when several repositories are involved, one repository will be responsible for providing the parts to build (that is, programs), while the other repositories provide additional files (for example, shared copybooks). The scope of the build, derived from the scope of the main Git repository used during the build, defines the possible content of the package."),(0,i.kt)("p",null,'We need to distinguish between a "full package" \u2013 containing all executables and configuration files belonging to an application component \u2013 and a "partial package" \u2013 containing just the updated executables and configurations. You might be familiar with "incremental packages"; oftentimes, this term may be used interchangeably with the partial package term.'),(0,i.kt)("p",null,"Partial packages can be divided into two types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Delta packages" are produced immediately after each build'),(0,i.kt)("li",{parentName:"ul"},'"Cumulative packages" include outputs produced by several builds.  ')),(0,i.kt)("p",null,"Mainframe applications typically work with incremental updates of the execution environment using partial packages."),(0,i.kt)("p",null,"As you might have seen already, there are many factors you will need to consider when selecting your strategy. As a practical exercise, we will walk through the following mainframe scenario using delta packages. In this scenario, summarized in the following figure, there are several execution environments in our system, and they are not updated at the same pace."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The build is incremental and produces a partial package containing the newly built artifacts."),(0,i.kt)("li",{parentName:"ul"},"The CI/CD pipeline automatically deploys the package produced by the build in a Test environment. We might see some tests failing, so developers iterate."),(0,i.kt)("li",{parentName:"ul"},"The build runs three times. It produces three packages. Each of them is deployed in Test. However, QA is not updated yet."),(0,i.kt)("li",{parentName:"ul"},"The next phase of tests is performed in the QA environment, when a first level of validation has occurred in Test.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A packaging scenario where execution environments are not updated at the same pace",src:a(8002).Z,width:"760",height:"259"})),(0,i.kt)("p",null,"Currently, most mainframe development practices only work within a static and fixed set of known execution environments. Introducing a new execution environment is, today, a significant task in mainframe shops. It prohibits provisioning of test environments for specific projects and/or sprints; a requirement for most agile teams."),(0,i.kt)("p",null,"In contrast, when provisioning capabilities are applied to your mainframe CI/CD pipeline, it becomes possible to make execution environments available more dynamically. A new test environment could be provisioned and used on-demand, and then recycled when the feature\u2019s test has been completed."),(0,i.kt)("p",null,"You may have noticed that the deployment pipeline has several types of execution environments to manage. At times, you will encounter long running, existing environments (that is, those that are updated but not at the same time), and also \u201cfresh\u201d environments - those that are either empty or need to be significantly updated."),(0,i.kt)("p",null,"In the first case (existing execution environments), we see that the environment is updated regularly by the deployment manager. Here it is easy and convenient to work with increments as each increment is deployed."),(0,i.kt)("p",null,'In the second case ("fresh" execution environments), the environment is updated less frequently or sometimes later in the CI/CD process. In this case, working with increments now requires an understanding of the last deployed increment, and the retrieval and the deployment of all increments until the desired state is achieved (in our example, package 1, 2, and 3). In some cases, packages will overlap, although the deployment manager might be smart enough to deploy only the latest version of an artifact.'),(0,i.kt)("p",null,"In that latter case (\u201cfresh\u201d execution environments), working with partial packages is even more challenging. We miss out on more than just the latest packages; we miss out on some (if not all) significant history too. Thus, it becomes useful to maintain the complete content of the application, along with complete configuration scripts (for example, CICS declarations, full DDL). If a sound knowledge of the environment\u2019s inventory is maintained, then as we deploy, it will be possible to correctly calculate and apply the delta."),(0,i.kt)("p",null,"We can now examine the two packaging options that we have identified and relate them to the different IBM Dependency Based Build types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Strategy: Partial packages",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Contains the outputs of a DBB impact build. The build has identified the impacted elements by querying the collection in the IBM Dependency Based Build server."))),(0,i.kt)("li",{parentName:"ul"},"Strategy: Full packages",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Contains all the outputs of an application configuration. The content either needs to be determined through a full build, a simulation build, or an application descriptor. The application descriptor defines the entire scope of an application and its outputs.")))),(0,i.kt)("h2",{id:"specialty-of-mainframe-packages"},"Specialty of Mainframe Packages"),(0,i.kt)("p",null,"Due to the nature of mainframe deployments, there is a need to capture additional metadata, such as the type of the object, for each binary in the package. We call this type of metadata the \u201cdeploy type\u201d. It gives explicit criteria to follow a series of steps that are appropriate for the artifact to deploy."),(0,i.kt)("p",null,"There is thus a need for a manifest file. This file describes the contents of the application package and adds meta information to each of its artifacts. This information will then also be used by the deployment manager."),(0,i.kt)("p",null,"Additionally, the manifest file captures traceability information about the configuration used to create the package - in particular, a Git hash to trace back to the actual version of the source code. The manifest file will also capture the package type: full or partial."),(0,i.kt)("p",null,"The limits of which environment a package may or may not go is another piece of meta-information that the manifest of a package should contain."),(0,i.kt)("p",null,"The format of the manifest is more of a secondary consideration: it can be ",(0,i.kt)("inlineCode",{parentName:"p"},".yaml"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".json"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".xml"),", and so on.  Considering the direction of containers with Kubernetes using Helm charts and OpenShift templates using ",(0,i.kt)("inlineCode",{parentName:"p"},".yaml"),", using ",(0,i.kt)("inlineCode",{parentName:"p"},".yaml")," for the metadata will make it more consistent with other industry work and make it clearly understandable by z/OS and non z/OS developers. The following image shows a sample schema of an application package manifest."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A sample schema of an application package manifest",src:a(7181).Z,width:"556",height:"339"})),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,"This page contains reformatted excerpts from ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/support/pages/packaging-and-deployment-strategies-open-and-modern-cicd-pipeline-focusing-mainframe-software-development"},"Packaging and Deployment Strategies in an Open and Modern CI/CD Pipeline focusing on Mainframe Software Development"),"."))}u.isMDXComponent=!0},7181:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app-package-manifest-f06c73d992f0fcd207adf12156d49509.png"},1984:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/package-contents-b42e2d8bb6daee5a931681e3eca9fc98.png"},4326:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/package-items-322ec94f3303acc9f9fd6062ad8f0ff7.png"},8002:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/package-strategy-scenario-3c23c57f017dc0a7b2b98c67f8031f76.png"}}]);