"use strict";(self.webpackChunkdap_docs=self.webpackChunkdap_docs||[]).push([[1160],{9068:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=t(7624),i=t(2172);const a={title:"Introduction to CI/CD for z/OS"},s="CI/CD for z/OS applications",r={id:"intro-cicd-zos",title:"Introduction to CI/CD for z/OS",description:"Introduction to CI/CD",source:"@site/docs/intro-cicd-zos.md",sourceDirName:".",slug:"/intro-cicd-zos",permalink:"/z-devops-acceleration-program/docs/intro-cicd-zos",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Introduction to CI/CD for z/OS"},sidebar:"docsSidebar",previous:{title:"IBM Z DevOps solution",permalink:"/z-devops-acceleration-program/docs/ibm-z-devops-solution"},next:{title:"Integrated development environment",permalink:"/z-devops-acceleration-program/docs/ide"}},l={},c=[{value:"Introduction to CI/CD",id:"introduction-to-cicd",level:2},{value:"Applying CI/CD to z/OS applications",id:"applying-cicd-to-zos-applications",level:2},{value:"Day in the life of a developer",id:"day-in-the-life-of-a-developer",level:3},{value:"Components of a CI/CD pipeline for z/OS applications",id:"components-of-a-cicd-pipeline-for-zos-applications",level:3},{value:"How do you select what tool to use for each component?",id:"how-do-you-select-what-tool-to-use-for-each-component",level:4},{value:"What does it mean to work with a CI/CD pipeline?",id:"what-does-it-mean-to-work-with-a-cicd-pipeline",level:3},{value:"Resources",id:"resources",level:2}];function d(e){const o={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"cicd-for-zos-applications",children:"CI/CD for z/OS applications"}),"\n",(0,n.jsx)(o.h2,{id:"introduction-to-cicd",children:"Introduction to CI/CD"}),"\n",(0,n.jsx)(o.p,{children:'CI/CD a development process that empowers enterprises to develop and deliver higher quality software more frequently. The "CI" in "CI/CD" stands for "continuous integration", while the "CD" can stand for either "continuous delivery" and/or "continuous deployment".'}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:'"Continuous integration" means that new code is merged into the shared code base at more frequent intervals (for example, daily or weekly). This allows for more frequent builds of the code base, enabling more frequent automated testing against the application builds, which can help identify integration issues earlier in the development cycle, when they are easier to fix, and subsequently reduce issues closer to release.'}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:'"Continous delivery" is when the changes to an application are automatically tested and uploaded (delivered) to a repository, where it can then be deployed to different environments. This practice can reduce time to deployment due to the integration of continuous testing and development, and can thus reduce the cost of development without compromising quality. Although the deployment itself is automated, manual approval is still required to authorize the deployment.'}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:'"Continuous deployment" is when the changes to an application are automatically deployed to a production environment for use by your customers. It is considered to be one step further than continuous delivery, and might or might not be implemented depending on business needs. With continuous deployment, the developers and automated tests in production-like test environments are trusted enough that the new code is considered approved when it passes the tests. Deployment no longer requires manual approval and is also automated to speed the time to customer value.'}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["CI/CD is powered by a set of tools that automates processes in the software development lifecycle. As a whole, the CI/CD pipeline can enable teams to adopt Agile and DevOps workflows so that application teams can deliver changes more frequently and reliably, and respond more efficiently to feedback from operations. For this reason, CI/CD is considered a best practice in today's industry standards. IBM's general ",(0,n.jsx)(o.a,{href:"https://www.ibm.com/topics/devops",children:"DevOps"})," page provides additional information on CI/CD in the context of DevOps."]}),"\n",(0,n.jsx)(o.h2,{id:"applying-cicd-to-zos-applications",children:"Applying CI/CD to z/OS applications"}),"\n",(0,n.jsxs)(o.p,{children:["Legacy z/OS development tools and processes have traditionally made it difficult for z/OS applications to participate in modern CI/CD pipelines. However, the IBM Z DevOps solution allows you to integrate z/OS applications into the same CI/CD pipelines used by teams developing non-mainframe applications. That means z/OS teams can now leverage the same modern, industry standard, open source technologies for integrated development environments (IDEs), version control, automation, and more. You can learn more about how IBM supports DevOps for the mainframe at the ",(0,n.jsx)(o.a,{href:"https://www.ibm.com/z/devops",children:"IBM Z DevOps"})," and ",(0,n.jsx)(o.a,{href:"https://www.ibm.com/support/z-content-solutions/developer-experience-hybrid-cloud-z/",children:"hybrid cloud continuous integration"})," pages."]}),"\n",(0,n.jsxs)(o.p,{children:["The defining components of the IBM Z DevOps solution are Git-based source code management and the IBM Dependency Based Build (DBB) tool. When these components are integrated together with other industry-standard ",(0,n.jsx)(o.a,{href:"#components-of-a-cicd-pipeline-for-zos-applications",children:"CI/CD pipeline tools"}),", the developer workflow looks something like the ",(0,n.jsx)(o.a,{href:"#day-in-the-life-of-a-developer",children:"Day in the life of a developer"})," described in the following section."]}),"\n",(0,n.jsx)(o.h3,{id:"day-in-the-life-of-a-developer",children:"Day in the life of a developer"}),"\n",(0,n.jsx)(o.p,{children:"With the IBM Z DevOps CI/CD pipeline in place, an application developer would typically use the following (or similar) workflow when completing a development task (for example, a bugfix or feature enhancement):"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Tip:"})," The IBM Z DevOps CI/CD pipeline is based on Git as the source code management tool. If you are new to Git and its concepts (such as branches and pull/merge requests), you can check out the ",(0,n.jsx)(o.a,{href:"/z-devops-acceleration-program/docs/scm",children:"Source code management"})," page to get familiar with the terminology so you can better understand the workflow below."]}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"The developer will start by cloning or pulling a copy of the application code from a central Git repository down to her local workstation."}),"\n",(0,n.jsx)(o.li,{children:"She can then create a new personal branch of that code for her specific task. This will allow her to work on the task in isolation, in parallel with her team, without having to worry about other development activities disturbing her work."}),"\n",(0,n.jsx)(o.li,{children:"Once she has made her code changes that she is ready to test, she can use IBM's Dependency Based Build (DBB) tool to build the program so that she can test it individually and verify that her fix works and does not cause regressions."}),"\n",(0,n.jsx)(o.li,{children:"Once she is happy with her changes, she can commit them to her personal branch of code, and then push her personal branch with her code changes to the central Git repository."}),"\n",(0,n.jsxs)(o.li,{children:["Now, she can open a pull request to have the changes in her personal branch of code be merged into the shared, common branch of code for her team. Her team has set up an automated pipeline to run builds of the code in the pull request, which also include tests and code scans.","\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"This is also the point at which her team has an approvals process where she can add teammates to review her changes and approve them before merging them into their common branch of code."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.li,{children:"Once her pull request is approved and her changes are merged into the common branch of code, the personal branch of code where she originally did her development work can be deleted, and a full or impact pipeline build can run on the common branch of code to move the changes forward or associate them with a release."}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"components-of-a-cicd-pipeline-for-zos-applications",children:"Components of a CI/CD pipeline for z/OS applications"}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.a,{href:"#day-in-the-life-of-a-developer",children:"developer's workflow"})," in the previous section is enabled by CI/CD pipeline tooling, the major components of which are summarized in this section. The following image depicts steps in the CI/CD pipeline with two different colors, yellow and green. Yellow steps highlight the steps performed by the developer, while green steps are performed by the pipeline. For the developer, their steps include check-out and check-in of code, but also include triggering of a pipeline job. Developer-level operations end at this point."]}),"\n",(0,n.jsx)(o.p,{children:"All subsequent steps, in green, are performed by the pipeline. These steps include building, publishing to an artifact repository, and deploying to an execution environment."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Main components of a CI/CD pipeline for z/OS applications",src:t(20).c+"",width:"1843",height:"914"})}),"\n",(0,n.jsx)(o.p,{children:"You can click on each component in the following list to learn more about it and see common technology options:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsxs)(o.strong,{children:[(0,n.jsx)(o.a,{href:"/z-devops-acceleration-program/docs/ide",children:"Integrated development environment (IDE)"}),":"]})," The IDE is what the developer uses to check out and edit her code, as well it check it back into the version control system. Many modern editors have features that enhance development capabilities, such as syntax highlighting, code completion, outline view navigation, and variable lookups, as well as integrations such as debugging and unit testing."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsxs)(o.strong,{children:[(0,n.jsx)(o.a,{href:"/z-devops-acceleration-program/docs/scm",children:"Source code management (SCM, Version control)"}),":"]})," The SCM is used to store and manage different versions of source code files, as well as application configuration files, test cases, and more. This is what enables the application development team to do parallel development. The IBM Z DevOps solution is based on Git as the SCM. For more information about Git and why it is paramount to the IBM Z DevOps solution, as well as an explanation of the Git concepts, see the ",(0,n.jsx)(o.a,{href:"/z-devops-acceleration-program/docs/scm",children:"SCM"})," documentation."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsxs)(o.strong,{children:[(0,n.jsx)(o.a,{href:"/z-devops-acceleration-program/docs/build",children:"Build"}),":"]})," The build component takes care of understanding dependencies, and then compiling and linking programs to produce the executable binaries such as load modules and DBRMs. When running this component, you can also integrate automated steps for unit testing and code quality inspection (although these are sometimes considered as separate components in the CI/CD pipeline). In the IBM Z DevOps solution, the build is handled by IBM Dependency Based Build (DBB), which has intelligent build capabilities that enable you to perform different types of build to support various steps in your workflow. Some examples of these build types include single-program user builds, full application builds, and impact builds."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsxs)(o.strong,{children:[(0,n.jsx)(o.a,{href:"/z-devops-acceleration-program/docs/artifact-repository",children:"Artifact repository"}),":"]}),' Once the build component has created the executable binaries, they are packaged together and uploaded into the artifact repository, along with metadata to help trace those binaries back to the source. This component is crucial for decoupling the source code management from the runtime environments, enabling the key DevOps practice of "Build once, deploy many".']}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsxs)(o.strong,{children:[(0,n.jsx)(o.a,{href:"/z-devops-acceleration-program/docs/deployment-manager",children:"Deployment manager"}),":"]})," The deployment manager is the tool that rolls out the application packages. When it is time to deploy the application, the deployment manager downloads the package from the artifact repository and uploads the contents to the target libraries. If there are other steps to perform, such as installation steps like CICS NEWCOPY or PHASE-IN, or a bind step when DB2 is involved, the deployment manager also handles those. Importantly, it also keeps track of the inventory of execution environments so that you can know what each environment is running."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsxs)(o.strong,{children:[(0,n.jsx)(o.a,{href:"/z-devops-acceleration-program/docs/pipeline-orchestrator",children:"Pipeline orchestrator"}),":"]})," The pipeline orchestrator oversees all the automated processes in the pipeline. This component integrates the steps from the different tools together and ensures they all run in the correct order."]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Although it might seem CI/CD requires developers to learn and work with a lot of different tools, they are primarily just working with the IDE for code editing, the SCM for version control, and performing some individual user builds. Once development gets to point where they want to integrate their code changes into their team's shared codebase, the pipeline is largely automated via the pipeline orchestrator. This means that once the CI/CD pipeline is in place, if the developer has to interact with any of the automated components at all, they would mostly just be checking a dashboard or status, performing any intentionally manual approval steps, and/or verifying the results of the pipeline job."}),"\n",(0,n.jsx)(o.h4,{id:"how-do-you-select-what-tool-to-use-for-each-component",children:"How do you select what tool to use for each component?"}),"\n",(0,n.jsx)(o.p,{children:"You will find for many of the CI/CD pipeline components, multiple tools are available to perform the functionality. However, to reap the benefits of standardization across the enterprise, we generally recommend that clients pick the option that other parts of their organization are already using. Popular tooling options for each component in this section are listed on the respective component's dedicated page, although it should be noted that these lists are not necessarily all-inclusive. For some more common combinations of technologies, the IBM Z DevOps Acceleration Team has produced detailed documentation on the setup and implementation."}),"\n",(0,n.jsx)(o.h3,{id:"what-does-it-mean-to-work-with-a-cicd-pipeline",children:"What does it mean to work with a CI/CD pipeline?"}),"\n",(0,n.jsx)(o.p,{children:"The CI/CD pipeline building block components supply facilities to the development and delivery teams, such as:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Isolation capabilities to reduce coordination efforts in larger groups"}),"\n",(0,n.jsx)(o.li,{children:"Integration workflows and traceability from tasks to code changes, binaries, and deliveries"}),"\n",(0,n.jsx)(o.li,{children:"Standardized development practices across teams and platforms"}),"\n",(0,n.jsx)(o.li,{children:"Automation of build, packaging, and deployment tasks"}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["When it comes to isolation techniques, we refer to the branching strategies for the version control system. When using Git, branches are created to allow parallel development of the code, with each branch dedicated to a particular purpose, such as stable integration of the team's code or an individual developer's work on a hotfix or new feature. Developers can now integrate and share changes with the team through the enterprise's central Git provider. Accordingly, additional workflows like merge or pull requests for code review and approvals are expected to be used. These concepts are further introduced in the ",(0,n.jsx)(o.a,{href:"/z-devops-acceleration-program/docs/scm",children:"SCM"})," component overview page."]}),"\n",(0,n.jsx)(o.p,{children:"Compared to a library manager, which relies on concatenation for compilation and linking, Git and its branches provide complete isolation and remove dependencies on the areas under current development by other development teams. The developer therefore works within the scope of the entire application. This also implies that a branch does not represent the contents of an execution environment. The branch is in fact fully decoupled from the environment via the artifact repository, ensuring a complete separation of the build and deployment phases. This decoupling enables developers to adopt previously impossible provisioning practices such as spinning up an isolated test execution environment with the push of a button."}),"\n",(0,n.jsx)(o.p,{children:"Defining an application package in a CI/CD pipeline will be different from the largely manual ad-hoc approaches seen in traditional mainframe library managers. With a CI/CD pipeline, the outputs of the build process are preconfigured to automatically be packaged together upon generation. These application packages are the inputs to the deployment manager, and the deployment manager is responsible for the installation of the packages to the execution environment."}),"\n",(0,n.jsx)(o.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(o.p,{children:["This page contains reformatted excerpts from ",(0,n.jsx)(o.a,{href:"https://www.ibm.com/support/pages/packaging-and-deployment-strategies-open-and-modern-cicd-pipeline-focusing-mainframe-software-development",children:"Packaging and Deployment Strategies in an Open and Modern CI/CD Pipeline focusing on Mainframe Software Development"}),"."]})]})}function h(e={}){const{wrapper:o}={...(0,i.M)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},20:(e,o,t)=>{t.d(o,{c:()=>n});const n=t.p+"assets/images/pipeline-big-picture-3f78a057a1caadf29d4dc63381c86327.png"},2172:(e,o,t)=>{t.d(o,{I:()=>r,M:()=>s});var n=t(1504);const i={},a=n.createContext(i);function s(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);