"use strict";(self.webpackChunkdap_docs=self.webpackChunkdap_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"category","label":"Overview","items":[{"type":"link","label":"IBM Z DevOps solution","href":"/z-devops-acceleration-program/docs/ibm-z-devops-solution","docId":"ibm-z-devops-solution"},{"type":"category","label":"CI/CD for z/OS applications","items":[{"type":"link","label":"Introduction to CI/CD for z/OS","href":"/z-devops-acceleration-program/docs/intro-cicd-zos","docId":"intro-cicd-zos"},{"type":"link","label":"Integrated development environment","href":"/z-devops-acceleration-program/docs/ide","docId":"ide"},{"type":"link","label":"Source code management","href":"/z-devops-acceleration-program/docs/scm","docId":"scm"},{"type":"link","label":"Build","href":"/z-devops-acceleration-program/docs/build","docId":"build"},{"type":"link","label":"Artifact repository","href":"/z-devops-acceleration-program/docs/artifact-repository","docId":"artifact-repository"},{"type":"link","label":"Deployment manager","href":"/z-devops-acceleration-program/docs/deployment-manager","docId":"deployment-manager"},{"type":"link","label":"Pipeline orchestrator","href":"/z-devops-acceleration-program/docs/pipeline-orchestrator","docId":"pipeline-orchestrator"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true},{"type":"category","label":"Getting started","items":[{"type":"link","label":"Understanding the journey to a CI/CD pipeline","href":"/z-devops-acceleration-program/docs/journey-to-cicd","docId":"journey-to-cicd"},{"type":"link","label":"Installing and configuring your tools","href":"/z-devops-acceleration-program/docs/install-configure","docId":"install-configure"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Tutorials","items":[{"type":"link","label":"Tutorial","href":"/z-devops-acceleration-program/docs/tutorial","docId":"tutorial"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Designing the CI/CD pipeline","items":[{"type":"link","label":"Planning repository layouts","href":"/z-devops-acceleration-program/docs/repository-layouts","docId":"repository-layouts"},{"type":"link","label":"Defining dependency management","href":"/z-devops-acceleration-program/docs/dependency-management","docId":"dependency-management"},{"type":"category","label":"Git branching for mainframe development","items":[{"type":"link","label":"Introduction to branching models","href":"/z-devops-acceleration-program/docs/branching-models","docId":"branching-models"},{"type":"link","label":"Git branching model for mainframe development","href":"/z-devops-acceleration-program/docs/git-branching-model-for-mainframe-dev","docId":"git-branching-model-for-mainframe-dev"},{"type":"link","label":"Supporting pipeline design and implementation","href":"/z-devops-acceleration-program/docs/branching-model-supporting-pipeline","docId":"branching-model-supporting-pipeline"},{"type":"link","label":"Appendix","href":"/z-devops-acceleration-program/docs/branching-appendix","docId":"branching-appendix"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Designing the build strategy","href":"/z-devops-acceleration-program/docs/build-strategy","docId":"build-strategy"},{"type":"link","label":"Architecting the pipeline strategy","href":"/z-devops-acceleration-program/docs/pipeline-strategy","docId":"pipeline-strategy"},{"type":"link","label":"Outlining the deployment strategy","href":"/z-devops-acceleration-program/docs/deployment-strategy","docId":"deployment-strategy"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Migrating data from z/OS to Git","items":[{"type":"link","label":"Introduction to migrating data","href":"/z-devops-acceleration-program/docs/intro-migrating-data","docId":"intro-migrating-data"},{"type":"link","label":"Managing code page conversion","href":"/z-devops-acceleration-program/docs/managing-code-page-conversion","docId":"managing-code-page-conversion"},{"type":"category","label":"Methods for migrating data","items":[{"type":"link","label":"DBB Migration Tool","href":"/z-devops-acceleration-program/docs/dbb-migration-tool","docId":"dbb-migration-tool"},{"type":"link","label":"SCLM-to-Git Migration Tool","href":"/z-devops-acceleration-program/docs/sclm-git-migration-tool","docId":"sclm-git-migration-tool"},{"type":"link","label":"Manual migration","href":"/z-devops-acceleration-program/docs/manual-migration","docId":"manual-migration"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true},{"type":"category","label":"Implementing CI/CD","items":[{"type":"link","label":"Implementing pipeline actions","href":"/z-devops-acceleration-program/docs/implementing-pipeline-actions","docId":"implementing-pipeline-actions"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Resources","items":[{"type":"link","label":"DBB documentation","href":"https://www.ibm.com/docs/en/dbb"},{"type":"link","label":"DBB community samples repository","href":"https://github.com/IBM/dbb"},{"type":"link","label":"zAppBuild repository","href":"https://github.com/IBM/dbb-zappbuild"},{"type":"link","label":"Discover and plan for z/OS hybrid applications","href":"https://www.ibm.com/support/z-content-solutions/discovery-plan/"},{"type":"link","label":"CI for the z/OS DevOps experience","href":"https://www.ibm.com/support/z-content-solutions/developer-experience-hybrid-cloud-z/"}],"collapsed":true,"collapsible":true}]},"docs":{"artifact-repository":{"id":"artifact-repository","title":"Artifact repository","description":"Once building occurs, the pipeline then publishes and stores the build outputs as a package in the artifact repository. This package contains any artifact that will need to be deployed, such as load modules, DBRMs, DDL, and the configuration files for the subsystems. Importantly, the package also contains the build artifacts\' metadata and other necessary pieces of information that enable any changes to be traced back to the version control system. Depending on the system, the package can be a WAR, EAR files, a Windows installer package, among others. The artifact repository can also be used as the publishing platform to store intermediate files needed in the build phase.","sidebar":"docsSidebar"},"branching-appendix":{"id":"branching-appendix","title":"Appendix","description":"Development process variations","sidebar":"docsSidebar"},"branching-model-supporting-pipeline":{"id":"branching-model-supporting-pipeline","title":"Supporting pipeline design and implementation","description":"This page details the technical implementation of the different continuous integration/continuous delivery (CI/CD) pipeline types used in the Git branching model for mainframe development. If a branching model workflow demands a specific configuration, it will be covered within the same section.","sidebar":"docsSidebar"},"branching-models":{"id":"branching-models","title":"Introduction to branching models","description":"Git branching models are patterns to enable development teams using Git to manage their code in a streamlined manner. Since Git is established as a de facto standard for source code management (SCM) in the developer community, several approaches were designed to fulfill developers\' requirements and manage the application source code lifecycle, with advantages and drawbacks depending on use cases. Based on the experience gained designing branching strategies, the pages in this section describe a blueprint implementation of a mainline-based development approach for mainframe applications using feature branches with an early integration pattern. This setup leverages a standardized development toolset based on an enterprise-wide Git provider and a continuous integration/continuous delivery (CI/CD) toolchain.","sidebar":"docsSidebar"},"build":{"id":"build","title":"Build","description":"The Build component of a continuous integration/continuous delivery (CI/CD) pipeline converts the source code into executable binaries. It supports multiple platforms and languages. In mainframe environments, it includes understanding dependencies, compile, link-edit, and unit test. The build can include the inspection of code quality to perform automated validation against a set of coding rules. In some cases, code quality inspection could also be a component of its own in the pipeline.","sidebar":"docsSidebar"},"build-strategy":{"id":"build-strategy","title":"Designing the build strategy","description":"The build step contains all the steps to compile and link the source files into executable code. This page focuses on the different build strategies to support build scenarios at different phases of application development, and points to the relevant sections within the shared sample scripts via IBM\'s  zAppBuild repository.","sidebar":"docsSidebar"},"dbb-migration-tool":{"id":"dbb-migration-tool","title":"DBB Migration Tool","description":"DBB Migration Tool overview","sidebar":"docsSidebar"},"dependency-management":{"id":"dependency-management","title":"Defining dependency management","description":"An IT system is developed by many teams and composed of different applications driven by the line of businesses and consumers. Applications need to interact to provide the overall system and interact through defined interfaces. Using well-defined interfaces allows the parts of the application to be worked on independently without necessarily requiring a change in other parts of the system. This application separation is visible and clear in a modern source code management (SCM) system, allowing clear identification of each of the distributed applications. However, in most traditional library managers, the applications all share a set of common libraries, so it is much more difficult to create the isolation.","sidebar":"docsSidebar"},"deployment-manager":{"id":"deployment-manager","title":"Deployment manager","description":"The deployment manager is responsible for understanding the execution environments and maintains an inventory of the environment\u2019s deployed content. It is used to rollout application packages. For many runtimes, copying artifacts is not enough to actually make them executable. There are numerous installation steps to perform.  A good example of this would be a CICS NEWCOPY/PHASE-IN, or, when DB2 is involved, a bind against the database of the environment.","sidebar":"docsSidebar"},"deployment-strategy":{"id":"deployment-strategy","title":"Outlining the deployment strategy","description":"Introducing deployment managers","sidebar":"docsSidebar"},"git-branching-model-for-mainframe-dev":{"id":"git-branching-model-for-mainframe-dev","title":"Git branching model for mainframe development","description":"As Git became the de facto version control system in today\'s IT world, new terminologies such as \\"repositories\\", \\"branches\\", and \\"merges\\" arose. By agreeing upon a central Git server to integrate and consolidate changes, development teams were able to collaborate more efficiently and effectively. Building upon the open-source vanilla Git implementation, popular Git providers including GitHub, GitLab, and Bitbucket have implemented additional workflow features to facilitate a secure and stable development process. These include features such as pull requests (sometimes referred to as \\"merge requests\\") to support coordination with Git in larger teams. The term \\"pull request\\" will be used throughout this page to designate the operation of reviewing and merging one branch into another.","sidebar":"docsSidebar"},"ibm-z-devops-solution":{"id":"ibm-z-devops-solution","title":"IBM Z DevOps solution","description":"What is IBM Z DevOps?","sidebar":"docsSidebar"},"ide":{"id":"ide","title":"Integrated development environment","description":"An integrated development environment (IDE) provides check-out and check-in capabilities to the source code management (SCM) system. Typically, it supports the language and coding practices of the developer, enables building the modified code within the sandbox, and drives unit tests as part of the coding phase.","sidebar":"docsSidebar"},"implementing-pipeline-actions":{"id":"implementing-pipeline-actions","title":"Implementing pipeline actions","description":"The following guides for common pipeline orchestrators are available to help you get started with implementing your continuous integration/continuous delivery (CI/CD) pipeline.","sidebar":"docsSidebar"},"install-configure":{"id":"install-configure","title":"Installing and configuring your tools","description":"Installation/set-up instructions and links to installation documentation for specific products. Git, DBB, and zAppBuild are required. Generally, most enterprises will pick one technology from each component category, although sometimes more than one IDE option is selected (depending on developer preference).","sidebar":"docsSidebar"},"intro-cicd-zos":{"id":"intro-cicd-zos","title":"Introduction to CI/CD for z/OS","description":"Introduction to CI/CD","sidebar":"docsSidebar"},"intro-migrating-data":{"id":"intro-migrating-data","title":"Introduction to migrating data","description":"Introduction to migrating data","sidebar":"docsSidebar"},"journey-to-cicd":{"id":"journey-to-cicd","title":"Understanding the journey to a CI/CD pipeline","description":"What is involved in the migration effort from green screen to CI/CD?","sidebar":"docsSidebar"},"managing-code-page-conversion":{"id":"managing-code-page-conversion","title":"Managing code page conversion","description":"Introduction","sidebar":"docsSidebar"},"manual-migration":{"id":"manual-migration","title":"Manual migration","description":"Manual migration of source data from z/OS to Git is generally not recommended, as it tends to be slower, more tedious, and prone to human error. However, it is possible, and can be done several ways, including the following:","sidebar":"docsSidebar"},"pipeline-orchestrator":{"id":"pipeline-orchestrator","title":"Pipeline orchestrator","description":"Also known as the CI (Continuous Integration) Orchestrator - This is where automation happens. The CI Orchestrator provides connectors to version control, build systems, and packaging and deployment. Its goal is to remove manual and repetitive tasks as much as possible. It also drives the building of the application package, includes automated unit tests, and publishes the results in an artifact repository to make them available to the provisioning and deployment practices.","sidebar":"docsSidebar"},"pipeline-strategy":{"id":"pipeline-strategy","title":"Architecting the pipeline strategy","description":"Building, packaging, and deploying in a pipeline","sidebar":"docsSidebar"},"repository-layouts":{"id":"repository-layouts","title":"Planning repository layouts","description":"Because the traditionally large and monolithic nature of enterprise applications can slow down development both at the organizational level and the individual developer level, many enterprises take the migration to Git as an opportunity to examine how they can break their monolithic applications down into more agile functional Git repositories. The repository layout in the source code management (SCM) component of the continuous integration/continuous delivery (CI/CD) pipeline affects other pipeline components in several ways:","sidebar":"docsSidebar"},"sclm-git-migration-tool":{"id":"sclm-git-migration-tool","title":"SCLM-to-Git Migration Tool","description":"Introduction","sidebar":"docsSidebar"},"scm":{"id":"scm","title":"Source code management","description":"A source code management (SCM) tool manages and stores different versions of your application configuration such as source code files, application-specific configuration data, test cases, and more. It provides capabilities to isolate different development activities and enables parallel development.","sidebar":"docsSidebar"},"tutorial":{"id":"tutorial","title":"Tutorial","description":"If you are new to DevOps for z/OS applications, you might want to explore the workflow and tooling without having to first install and configure an entire technology stack on your own environment. IBM Z Systems software trials (also known as IBM Z Trial) allows you try out a variety of IBM Z software experiences in a provisioned environment for free, meaning you can get right to learning the important points. The following IBM Z Trial experiences are particularly relevant to DevOps and CI/CD pipelines for z/OS applications:","sidebar":"docsSidebar"}}}')}}]);