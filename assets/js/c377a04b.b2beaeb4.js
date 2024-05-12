"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1,title:"Intro to Spark Internals",sidebar_label:"Intro"},o=void 0,s={unversionedId:"index",id:"index",title:"Intro to Spark Internals",description:"This series discuss the design and implementation of Apache Spark, with focuses on its design principles, execution mechanisms, system architecture and performance optimization.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Intro to Spark Internals",sidebar_label:"Intro"},sidebar:"defaultSidebar",next:{title:"Architecture",permalink:"/spark-internals/"}},c={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This series discuss the design and implementation of Apache Spark, with focuses on its design principles, execution mechanisms, system architecture and performance optimization.\nIn addition, there's some comparisons with Hadoop MapReduce in terms of design and implementation. "),(0,i.kt)("p",null,"There are many ways to discuss a computer system. Here, We've chosen a ",(0,i.kt)("strong",{parentName:"p"},"problem-driven")," approach.",(0,i.kt)("br",{parentName:"p"}),"\n","Firstly one concrete problem is introduced, then it gets analyzed step by step. We'll start from a typical Spark example job and then discuss all the related important system modules.\nI believe that this approach is better than diving into each module right from the beginning."),(0,i.kt)("p",null,"The target audiences of this series are geeks who want to have a deeper understanding of Apache Spark as well as other distributed computing frameworks."),(0,i.kt)("p",null,"I'll try my best to keep this documentation up to date with Spark since it's a fast evolving project with an active community.\nThe documentation's main version is in sync with Spark's version. The additional number at the end represents the documentation's update version."),(0,i.kt)("p",null,"For more academic oriented discussion, please check out Matei's PHD thesis and other related papers."))}d.isMDXComponent=!0}}]);