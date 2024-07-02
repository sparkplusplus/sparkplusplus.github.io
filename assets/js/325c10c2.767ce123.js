"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[812],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||s;return a?i.createElement(h,r(r({ref:t},c),{},{components:a})):i.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:n,r[1]=o;for(var p=2;p<s;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4094:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var i=a(7462),n=(a(7294),a(3905));const s={title:"Catalyst Optimizer",sidebar_position:6,id:"catalyst-optimizer",description:"Prophecy deployment is flexible and supports multiple mechanisms",tags:["overview","spark-internals"]},r="What is Catalyst optimizer",o={unversionedId:"spark-internals/plans/catalyst-optimizer",id:"spark-internals/plans/catalyst-optimizer",title:"Catalyst Optimizer",description:"Prophecy deployment is flexible and supports multiple mechanisms",source:"@site/docs/spark-internals/plans/CatalystOptimizer.md",sourceDirName:"spark-internals/plans",slug:"/spark-internals/plans/catalyst-optimizer",permalink:"/spark-internals/plans/catalyst-optimizer",draft:!1,editUrl:"https://github.com/sparkplusplus/sparkplusplus.github.io/edit/main/docs/spark-internals/plans/CatalystOptimizer.md",tags:[{label:"overview",permalink:"/tags/overview"},{label:"spark-internals",permalink:"/tags/spark-internals"}],version:"current",sidebarPosition:6,frontMatter:{title:"Catalyst Optimizer",sidebar_position:6,id:"catalyst-optimizer",description:"Prophecy deployment is flexible and supports multiple mechanisms",tags:["overview","spark-internals"]},sidebar:"defaultSidebar",previous:{title:"Spark Physical Plan",permalink:"/spark-internals/plans/spark-physical-plan"},next:{title:"Shuffle Details",permalink:"/spark-internals/shuffle-details"}},l={},p=[],c={toc:p},m="wrapper";function d(e){let{components:t,...s}=e;return(0,n.kt)(m,(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-catalyst-optimizer"},"What is Catalyst optimizer"),(0,n.kt)("p",null,"An optimizer that automatically finds out the most efficient plan to execute data operations specified in the user\u2019s program."),(0,n.kt)("p",null,"It \u201ctranslates\u201d transformations used to build the Dataset to physical plan of execution. Thus, it\u2019s similar to ",(0,n.kt)("a",{parentName:"p",href:"http://www.waitingforcode.com/apache-spark/directed-acyclic-graph-in-spark/read#dag_scheduler"},"DAG scheduler")," used to create physical plan of execution of RDD."),(0,n.kt)("p",null,"It is precious to Dataset in terms of performance. Since it understands the structure of used data and operations made on it, the optimizer can make some decisions helping to reduce time execution"),(0,n.kt)("h1",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"Let\u2019s first understand the terminology used in understanding the optimizer"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"logical plan")," \u2014 series of algebraic or language constructs, as for example: ",(0,n.kt)("em",{parentName:"li"},"SELECT"),", ",(0,n.kt)("em",{parentName:"li"},"GROUP BY")," or ",(0,n.kt)("em",{parentName:"li"},"UNION")," keywords in SQL. It\u2019s usually represented as a tree where nodes are the constructs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"physical plan")," \u2014 similar to logical because also represented as a tree. But the difference is that physical plan concerns low level operations."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"unoptimized/optimized plans")," \u2014 a plan is considered as unoptimized when optimizer hasn\u2019t worked on it yet. The plan becomes optimized when optimizer passed on it and made some optimizations (e.g.: merging ",(0,n.kt)("strong",{parentName:"li"},"filter()")," methods, replacing some instructions by another ones, most performant).")),(0,n.kt)("p",null,"So, it helps to move from unoptimized logical query plan to optimized physical plan, achieving that in below steps:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"how_it_works.png",src:a(7043).Z,width:"1286",height:"649"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Optimizer tries to optimize logical query plan through predefined rule-based optimizations. The optimization can consists on:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"predicate or projection pushdown \u2014 helps to eliminate data not respecting preconditions earlier in the computation."),(0,n.kt)("li",{parentName:"ul"},"rearrange filter"),(0,n.kt)("li",{parentName:"ul"},"conversion of decimals operations to long integer operations"),(0,n.kt)("li",{parentName:"ul"},"replacement of some RegEx expressions by Java\u2019s methods startsWith(String) or contains(String)"),(0,n.kt)("li",{parentName:"ul"},"if-else clauses simplification")),(0,n.kt)("p",null,"2","."," Optimized logical plan is created."),(0,n.kt)("p",null,"3","."," Optimizer constructs multiple physical plans from optimized logical plan. A physical plan defines how data will be computed. The plans are also optimized. The optimization can concern: merging different ",(0,n.kt)("strong",{parentName:"p"},"filter()"),", sending predicate/projection pushdown directly to datasource to eliminate some data at data source level."),(0,n.kt)("p",null,"4","."," Optimizer determines which physical plan has the lowest cost of execution and choses it as the physical plan used for the computation. CO also has a concept of metrics used to estimate the cost of plans."),(0,n.kt)("p",null,"5","."," Optimizer generates bytecode for the best physical plan. The generation is made thanks to Scala\u2019s feature called ",(0,n.kt)("em",{parentName:"p"},"quasiquotes"),". This step is optimized by ",(0,n.kt)("em",{parentName:"p"},"cost-based optimization")),(0,n.kt)("p",null,"6","."," Once a physical plan is defined, it\u2019s executed and retrieved data is put to Dataset."),(0,n.kt)("h1",{id:"example-"},"Example :"),(0,n.kt)("p",null,"Let\u2019s understand how Catalyst optimizer works for a given query"),(0,n.kt)("h1",{id:"trees"},"Trees"),(0,n.kt)("p",null,"A tree is the main data type in the catalyst. A tree contains node object. For each node, there is a node. A node can have one or more children. New nodes are defined as subclasses of TreeNode class. These objects are immutable in nature. The objects can be manipulated using functional transformation."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1.png",src:a(5441).Z,width:"720",height:"379"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2.png",src:a(4683).Z,width:"720",height:"384"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"3.png",src:a(6350).Z,width:"720",height:"379"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"4.png",src:a(6223).Z,width:"720",height:"372"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"5.png",src:a(4391).Z,width:"720",height:"357"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"6.png",src:a(6557).Z,width:"720",height:"377"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"7.png",src:a(3523).Z,width:"720",height:"361"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"8.png",src:a(3478).Z,width:"720",height:"394"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"9.png",src:a(8503).Z,width:"720",height:"383"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"10.png",src:a(6409).Z,width:"720",height:"393"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"11.png",src:a(6389).Z,width:"720",height:"397"})),(0,n.kt)("p",null,"By performing these transformations, the optimizer improves the execution times of relational queries and frees the developer from focusing on the semantics of their application instead of its performance."),(0,n.kt)("p",null,"Catalyst makes use of Scala\u2019s powerful features such as pattern matching and runtime metaprogramming to allow developers to concisely specify complex relational optimizations.**"))}d.isMDXComponent=!0},5441:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/1-872f00de84c5158b86471783c79772df.png"},6409:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/10-82d463a3861046006c8e814b4a5ab09a.png"},6389:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/11-7dea02aa06d489c8b9a5c04435340425.png"},4683:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/2-71b45cdd27da326081552f32ce9f3af8.png"},6350:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/3-c1761078bf36896346eefb53f9de79cf.png"},6223:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/4-f740dc4d2af249bf2b3b119d21a19c1e.png"},4391:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/5-ee4c2c47077396c18fc0e914713d79d8.png"},6557:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/6-633a82de583b0ac89fcc41cd4c88c782.png"},3523:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/7-92418a2183247ea519385ce8b63d062a.png"},3478:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/8-76f90401cbfb08bccd4f9a9a10784a21.png"},8503:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/9-92d5499e1161907cd59a0fb33081bbc2.png"},7043:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/how_it_works-9c2a33eefb4703bc76102316885de269.png"}}]);