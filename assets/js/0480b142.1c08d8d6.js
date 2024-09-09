"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[836],{167:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(3289);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7638:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(3830),a=r(2056),i=(r(3289),r(167)),o=["components"],l={title:"FAQ / HELP ME",description:"Quick fixes for some common issues"},s=void 0,u={unversionedId:"faq",id:"faq",title:"FAQ / HELP ME",description:"Quick fixes for some common issues",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/OSU-Sustainability-Office/osu-sustainability-office.github.io/edit/main/website/docs/faq.md",tags:[],version:"current",frontMatter:{title:"FAQ / HELP ME",description:"Quick fixes for some common issues"},sidebar:"Docusaurus",previous:{title:"Backend Pre-Reqs",permalink:"/docs/backend_prereqs"},next:{title:"More Specific Documentation",permalink:"/docs/specific"}},p={},c=[{value:"Important",id:"important",level:2},{value:"Command Line",id:"command-line",level:2},{value:"Git",id:"git",level:2},{value:"AWS",id:"aws",level:2},{value:"MySQL",id:"mysql",level:2},{value:"Credentials",id:"credentials",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"important"},"Important"),(0,i.kt)("p",null,"This document assumes you have already gone through the ",(0,i.kt)("a",{parentName:"p",href:"frontend_prereqs"},"frontend prereqs")," and ",(0,i.kt)("a",{parentName:"p",href:"backend_prereqs"},"backend prereqs")," docs."),(0,i.kt)("p",null,"If you haven't already, please read through and follow those instructions first before returning; this is a ",(0,i.kt)("strong",{parentName:"p"},"condensed")," document written for quick help and not a thorough manual."),(0,i.kt)("h2",{id:"command-line"},"Command Line"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run serve")," for frontend"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sam local start-api")," for backend",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"As a general rule of thumb, you need to have Docker Desktop open in the background to run backend locally"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/OSU-Sustainability-Office/automated-jobs"},"automated-jobs")," will use syntax ",(0,i.kt)("inlineCode",{parentName:"li"},"node <filename.js>")),(0,i.kt)("li",{parentName:"ul"},"This wiki can be compiled with ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn start")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run format")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn format")," (for wiki) are for auto-formatting code"),(0,i.kt)("li",{parentName:"ul"},"For more specific info, see the ",(0,i.kt)("inlineCode",{parentName:"li"},"README.md")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," of the individual repos as seen ",(0,i.kt)("a",{parentName:"li",href:"getting_started#active-projects"},"here"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note that some projects host separate ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," for backend folders"))),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"frontend_prereqs"},"frontend prereqs")," and ",(0,i.kt)("a",{parentName:"li",href:"backend_prereqs"},"backend prereqs")," docs also; they are written mostly for energy-dashboard but should apply to most other Vue applications we use")),(0,i.kt)("h2",{id:"git"},"Git"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"git"},"See the Git doc"))),(0,i.kt)("h2",{id:"aws"},"AWS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AWS Login Link: ",(0,i.kt)("a",{parentName:"li",href:"https://login.oregonstate.edu/apps/aws/"},"https://login.oregonstate.edu/apps/aws/"))),(0,i.kt)("p",null,"Important AWS Services for OSU SO (non-exhaustive)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cloudwatch (logs and alerts)"),(0,i.kt)("li",{parentName:"ul"},"ECS / ECR (webscrapers)"),(0,i.kt)("li",{parentName:"ul"},"SNS (handles email alerts)"),(0,i.kt)("li",{parentName:"ul"},"AWS Lambda (backend serverless stuff)"),(0,i.kt)("li",{parentName:"ul"},"S3 (file storage, serverless buckets)"),(0,i.kt)("li",{parentName:"ul"},"SAM (serverless framework general info, important for deployment and github actions stuff) - ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/serverless/sam/"},"https://aws.amazon.com/serverless/sam/"))),(0,i.kt)("h2",{id:"mysql"},"MySQL"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"backend_prereqs#mysql-workbench"},"backend prereqs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3schools.com/sql/default.asp"},"https://www.w3schools.com/sql/default.asp")," is your friend"),(0,i.kt)("li",{parentName:"ul"},"You will need this for:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudwatch"},"Solar data missed upload")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"kilowatt_crackdown"},"Creating new Kilowatt Campaign")),(0,i.kt)("li",{parentName:"ul"},"Anything else touching the database"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"See ",(0,i.kt)("a",{parentName:"strong",href:"database"},"Database document")," for more detailed info"))),(0,i.kt)("h2",{id:"credentials"},"Credentials"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://drive.google.com/drive/u/1/folders/1geuKCp-aTIrde2WdJkE3f_L2TsF46_O3"},"Credentials Folder"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Need to be OSU SO employee to see this link")))))}d.isMDXComponent=!0}}]);