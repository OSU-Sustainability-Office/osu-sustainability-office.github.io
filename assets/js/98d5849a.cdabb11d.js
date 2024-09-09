"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[637],{167:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var r=a(3289);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(a),c=i,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||n;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<n;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8717:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=a(3830),i=a(2056),n=(a(3289),a(167)),o=["components"],l={title:"Cloudwatch / Upload Missing Data",description:"Overview of Cloudwatch and SNS Email Alerts"},s=void 0,u={unversionedId:"cloudwatch",id:"cloudwatch",title:"Cloudwatch / Upload Missing Data",description:"Overview of Cloudwatch and SNS Email Alerts",source:"@site/docs/cloudwatch.md",sourceDirName:".",slug:"/cloudwatch",permalink:"/docs/cloudwatch",draft:!1,editUrl:"https://github.com/OSU-Sustainability-Office/osu-sustainability-office.github.io/edit/main/website/docs/cloudwatch.md",tags:[],version:"current",frontMatter:{title:"Cloudwatch / Upload Missing Data",description:"Overview of Cloudwatch and SNS Email Alerts"},sidebar:"Docusaurus",previous:{title:"Git",permalink:"/docs/git"},next:{title:"Adding Meters / Buildings",permalink:"/docs/adding_meters_buildings"}},d={},p=[{value:"Metric Filter",id:"metric-filter",level:2},{value:"Alarm",id:"alarm",level:2},{value:"Simple Notification Service (SNS)",id:"simple-notification-service-sns",level:2},{value:"SQL Debugging / Upload Missing Data",id:"sql-debugging--upload-missing-data",level:2}],m={toc:p};function c(e){var t=e.components,a=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Recurring Task"),': You may get occasional emails about a "TimeoutError" after following the steps below, which indicates that a Solar Meter has failed to upload',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"In that case, see ",(0,n.kt)("a",{parentName:"li",href:"./cloudwatch#sql-debugging--upload-missing-data"},"below"),' for what to do in case you get a "TimeoutError" email'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Frequency"),": Not sure, the scraper seems pretty reliable now with latest updates. Previously, once every 2 weeks ish")))),(0,n.kt)("h2",{id:"metric-filter"},"Metric Filter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to Cloudwatch > Log Groups > Log Group you want to add Metric Filter for > Metric Filters > Create New Metric Filter",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Follow existing filters here as an example if in doubt")))),(0,n.kt)("h2",{id:"alarm"},"Alarm"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cloudwatch > Alarms > Create a New Alarm",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Follow existing alarms here as an example if in doubt"),(0,n.kt)("li",{parentName:"ul"},'NOTE: When creating a new alarm, the metric filter will only be detected if the filter was applied to "new data" (so to speak) since the filter was created',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The CRON jobs are set up in AWS ECS are set to 24 or 48 hour intervals by default, so you may want to temporarily set the Scheduled Task in ECS to be 5 minutes to speed up development"),(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"webscraper_tutorial#clusters"},"this page for more info on ECS Scheduled Tasks")),(0,n.kt)("li",{parentName:"ul"},"Remember to set the Scheduled Task back to original time interval once you've set the alarm up and verified it works"),(0,n.kt)("li",{parentName:"ul"},"Note that the Scheduled Task's \"cycle\" is based on when you last updated it. If you last updated the Scheduled Task to run every 24 hours at 2 AM, it will run at 2 AM every day. So, it may better to set the alarm during the daytime so you don't get emailed at weird times"))))),(0,n.kt)("li",{parentName:"ul"},'The amount of time it takes for an alarm to go from "In alarm" to "Insufficient data" is defined by what you have set the "period" of the alarm as. In general, it takes 3 periods for the alarm state to reset',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'This is important because if you set the "period" too high, the alarm will never reset itself and will stay in the alarmed state permanently'),(0,n.kt)("li",{parentName:"ul"},"Since the two jobs tracked by Cloudwatch (solar meter uploads vs regular meter uploads) are only run every 24 and 48 hours respectively, it is usually safe to leave the alarm period as 1 hour")))),(0,n.kt)("h2",{id:"simple-notification-service-sns"},"Simple Notification Service (SNS)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Topics > Click Number Hyperlink > email-forwarder",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Add your email (OSU student or student worker email) to the list to get emailed"),(0,n.kt)("li",{parentName:"ul"},"Brandon and Lety (managers) do NOT want to be emailed about this (asked), so leave their names off. You can email Lety directly if a new meter has an outage"))),(0,n.kt)("li",{parentName:"ul"},"You will get emails for:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Solar Webscraper (SEC). Alert emails are labeled ",(0,n.kt)("inlineCode",{parentName:"li"},"TimeoutError")," Job runs daily, you will only get an email if there is an upload error / timeout"),(0,n.kt)("li",{parentName:"ul"},"Meter Outage Checker (check-acq). Alert emails are labeled ",(0,n.kt)("inlineCode",{parentName:"li"},"3Or4DaysOutage"),". Job runs every 2 days, you will only get an email if there if a new meter has been down for 3 or 4 days (to prevent email spam for meters that are constantly down)"),(0,n.kt)("li",{parentName:"ul"},"See below for what to do in case you get emails about the two things baove"))),(0,n.kt)("li",{parentName:"ul"},"You can set up a custom email rule in Outlook via ",(0,n.kt)("inlineCode",{parentName:"li"},"right click email")," > ",(0,n.kt)("inlineCode",{parentName:"li"},"rules")," > ",(0,n.kt)("inlineCode",{parentName:"li"},"create a new rule"),", to avoid cluttering your inbox")),(0,n.kt)("h2",{id:"sql-debugging--upload-missing-data"},"SQL Debugging / Upload Missing Data"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you get a missed meter upload notification (TimeoutError) email or otherwise notice some missing or incorrect data for the Solar Panel buildings (",(0,n.kt)("a",{parentName:"p",href:"https://dashboard.sustainability.oregonstate.edu/#/building/30/2"},"SEC Solar")," and ",(0,n.kt)("a",{parentName:"p",href:"https://dashboard.sustainability.oregonstate.edu/#/building/42/2"},"OSU Operations"),"), then insert the missing data via MySQL workbench"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Check the ",(0,n.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/12dCdA5E5e6qPgkSYehqOcX_zVy9YztFF/view?usp=sharing"},(0,n.kt)("inlineCode",{parentName:"a"},".env"))," file (must be OSU employee to see) for automated-jobs to reference where to log in for solar panel data. Clicking on one of the building names on the Plants page after you log in will bring up a table with daily and monthly data, including historical data"),(0,n.kt)("li",{parentName:"ul"},"Most of the fields should be pretty self explanatory to insert into the Solar_Meters table in MySQL workbench, but for the time_seconds value, reference the playcode below for how to get the Unix timestamp"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Review the ",(0,n.kt)("a",{parentName:"p",href:"database"},"database")," document for general instructions / tips for how to insert or update etc. data to the Solar_Meters table")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It can be useful to sort by ",(0,n.kt)("inlineCode",{parentName:"p"},"time_seconds")," (just click the ",(0,n.kt)("inlineCode",{parentName:"p"},"time_seconds")," column after running ",(0,n.kt)("inlineCode",{parentName:"p"},"SELECT * from Solar_Meters"),") to keep track of the data entries in order, especially if you had to at some point retroactively insert missing data into the database")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Refer to ",(0,n.kt)("a",{parentName:"p",href:"database"},"Database")," document for more detailed instrutions on how to insert or update any missing data")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rest should be pretty self-explanatory. Remember that the ",(0,n.kt)("inlineCode",{parentName:"p"},"energy_change")," value of ",(0,n.kt)("inlineCode",{parentName:"p"},"OSU_Operations_Total")," = ",(0,n.kt)("inlineCode",{parentName:"p"},"energy_change")," of ",(0,n.kt)("inlineCode",{parentName:"p"},"OSU Operations")," + ",(0,n.kt)("inlineCode",{parentName:"p"},"energy_change")," of ",(0,n.kt)("inlineCode",{parentName:"p"},"OSU Operations Lube Shop")," in the portal website linked in the ",(0,n.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/12dCdA5E5e6qPgkSYehqOcX_zVy9YztFF/view?usp=sharing"},(0,n.kt)("inlineCode",{parentName:"a"},".env"))," file"))))}c.isMDXComponent=!0}}]);