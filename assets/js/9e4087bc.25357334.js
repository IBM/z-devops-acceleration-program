"use strict";(self.webpackChunkdap_docs=self.webpackChunkdap_docs||[]).push([[7028],{6140:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});a(1504);var r=a(6016),t=a(4357),i=a(5008),c=a(6920),n=a(6448),l=a(7624);function d(e){let{year:s,posts:a}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.c,{as:"h3",id:s,children:s}),(0,l.jsx)("ul",{children:a.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(r.c,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function h(e){let{years:s}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:s.map(((e,s)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(d,{...e})},s)))})})})}function o(e){let{archive:s}=e;const a=(0,t.G)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,t.G)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),d=function(e){const s=e.reduce(((e,s)=>{const a=s.metadata.date.split("-")[0],r=e.get(a)??[];return e.set(a,[s,...r])}),new Map);return Array.from(s,(e=>{let[s,a]=e;return{year:s,posts:a}}))}(s.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.U7,{title:a,description:r}),(0,l.jsxs)(c.c,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(n.c,{as:"h1",className:"hero__title",children:a}),(0,l.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,l.jsx)("main",{children:d.length>0&&(0,l.jsx)(h,{years:d})})]})]})}}}]);