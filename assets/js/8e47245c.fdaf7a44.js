"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[890],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return t?n.createElement(m,l(l({ref:a},c),{},{components:t})):n.createElement(m,l({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=h;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3455:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const i={title:"Overview",sidebar_position:2,id:"Overview",description:"Prophecy deployment is flexible and supports multiple mechanisms",tags:["overview","spark-internals"]},l=void 0,o={unversionedId:"spark-internals/Overview",id:"spark-internals/Overview",title:"Overview",description:"Prophecy deployment is flexible and supports multiple mechanisms",source:"@site/docs/spark-internals/1-Overview.md",sourceDirName:"spark-internals",slug:"/spark-internals/Overview",permalink:"/spark-internals/Overview",draft:!1,tags:[{label:"overview",permalink:"/tags/overview"},{label:"spark-internals",permalink:"/tags/spark-internals"}],version:"current",sidebarPosition:2,frontMatter:{title:"Overview",sidebar_position:2,id:"Overview",description:"Prophecy deployment is flexible and supports multiple mechanisms",tags:["overview","spark-internals"]},sidebar:"defaultSidebar",previous:{title:"Architecture",permalink:"/spark-internals/"},next:{title:"Job Logical Plan",permalink:"/spark-internals/job_logical_plan"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Deployment Diagram",id:"deployment-diagram",level:2},{value:"Example Spark Job",id:"example-spark-job",level:2},{value:"Logical Plan",id:"logical-plan",level:2},{value:"Physical Plan",id:"physical-plan",level:2},{value:"Discussion",id:"discussion",level:2}],c={toc:p},u="wrapper";function d(e){let{components:a,...i}=e;return(0,r.kt)(u,(0,n.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Firstly we'll have a look at Spark's deployment. The question here is: ",(0,r.kt)("strong",{parentName:"p"},"after a successful deployment, what are the services launched by each node of the cluster?")),(0,r.kt)("h2",{id:"deployment-diagram"},"Deployment Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"deploy",src:t(8557).Z,width:"3012",height:"2374"})),(0,r.kt)("p",null,"We can see from the diagram:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There's Master node and Worker node in the cluster, they are equivalent to Hadoop's Master and Slave node"),(0,r.kt)("li",{parentName:"ul"},"Master node has a Master daemon process, managing all worker nodes"),(0,r.kt)("li",{parentName:"ul"},"Worker node has a Worker daemon process, responsible for communicating with the master node and for managing local executors"),(0,r.kt)("li",{parentName:"ul"},'In the official document, the Driver is explained as "The process running the main() function of the application and creating the SparkContext". The application is the user\'s program (driver program), such as WordCount.scala. If the driver program is running on the Master node, for example if we run the this on the Master node')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"./bin/run-example SparkPi 10\n")),(0,r.kt)("p",null,"Then the SparkPi program will be the Driver on the Master node. In case of a YARN cluster, the Driver may be scheduled to a Worker node (for example Worker node 2 in the diagram). If the driver program is run on a local PC, such as running from within Eclipse with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val sc = new SparkContext("spark://master:7077", "AppName")\n')),(0,r.kt)("p",null,"Then the driver program will be on the local machine. However this is not a recommended way of running Spark since the local machine may not be in the same network with the Worker nodes, which will slow down the communication between the driver and the executors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There may have one or multiple ExecutorBackend processes in each Worker node, each one possesses an Executor instance. Each Executor object maintains a thread pool. Each task runs on a thread.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each application has one driver and multiple executors. All tasks within the same executor belongs to the same application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Standalone deployment mode, ExecutorBackend is instantiated as CoarseGrainedExecutorBackend"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"In my cluster there's only one CoarseGrainedExecutorBackend process on each worker and I didn't manage to configure multiple instances of it (my guess is that there'll be multiple CoarseGrainedExecutorBackend process when when multiple applications are running, need to be confirmed).\nCheck this blog (in Chinese) ",(0,r.kt)("a",{parentName:"p",href:"http://blog.csdn.net/oopsoom/article/details/38763985"},"Summary on Spark Executor Driver Resource Scheduling")," by ",(0,r.kt)("a",{parentName:"p",href:"http://weibo.com/oopsoom"},"@OopsOutOfMemory")," if you want to know more about the relation between Worker and Executor."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Worker controls the CoarseGrainedExecutorBackend by using a ExecutorRunner"))),(0,r.kt)("p",null,"After the deployment diagram, we'll examine an example job to see how a Spark job is created and executed."),(0,r.kt)("h2",{id:"example-spark-job"},"Example Spark Job"),(0,r.kt)("p",null,"The example here is the GroupByTest application under the examples package in Spark. We assume that the application is run on the Master node, with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"/* Usage: GroupByTest [numMappers] [numKVPairs] [valSize] [numReducers] */\n\nbin/run-example GroupByTest 100 10000 1000 36\n")),(0,r.kt)("p",null,"The code of this application is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'package org.apache.spark.examples\n\nimport java.util.Random\n\nimport org.apache.spark.{SparkConf, SparkContext}\nimport org.apache.spark.SparkContext._\n\n/**\n  * Usage: GroupByTest [numMappers] [numKVPairs] [valSize] [numReducers]\n  */\nobject GroupByTest {\n  def main(args: Array[String]) {\n    val sparkConf = new SparkConf().setAppName("GroupBy Test")\n    var numMappers = 100\n    var numKVPairs = 10000\n    var valSize = 1000\n    var numReducers = 36\n\n    val sc = new SparkContext(sparkConf)\n\n    val pairs1 = sc.parallelize(0 until numMappers, numMappers).flatMap { p =>\n      val ranGen = new Random\n      var arr1 = new Array[(Int, Array[Byte])](numKVPairs)\n      for (i <- 0 until numKVPairs) {\n        val byteArr = new Array[Byte](valSize)\n        ranGen.nextBytes(byteArr)\n        arr1(i) = (ranGen.nextInt(Int.MaxValue), byteArr)\n      }\n      arr1\n    }.cache\n    // Enforce that everything has been calculated and in cache\n    pairs1.count\n\n    println(pairs1.groupByKey(numReducers).count)\n\n    sc.stop()\n  }\n}\n\n')),(0,r.kt)("p",null,"After reading the code, we should have an idea about how the data get transformed:\n",(0,r.kt)("img",{alt:"deploy",src:t(7311).Z,width:"3224",height:"1966"})),(0,r.kt)("p",null,"This is not a complicated application, let's estimate the data size and the result:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Initialize SparkConf"),(0,r.kt)("li",{parentName:"ol"},"Initialize numMappers=100, numKVPairs=10,000, valSize=1000, numReducers= 36"),(0,r.kt)("li",{parentName:"ol"},"Initialize SparkContext. This is an important step, the SparkContext contains objectes and actors that are needed for the creation of a driver"),(0,r.kt)("li",{parentName:"ol"},"For each mapper, a ",(0,r.kt)("inlineCode",{parentName:"li"},"arr1: Array[(Int, Byte[])]")," is created, with a length of numKVPairs. Each byte array's size is valSize, a randomly generated integer. We may estimate ",(0,r.kt)("inlineCode",{parentName:"li"},"Size(arr1) = numKVPairs * (4 + valSize) = 10MB"),", and we have ",(0,r.kt)("inlineCode",{parentName:"li"},"Size(pairs1) = numMappers * Size(arr1) \uff1d1000MB")),(0,r.kt)("li",{parentName:"ol"},"Each mapper is instructed to cache its ",(0,r.kt)("inlineCode",{parentName:"li"},"arr1")," array into the memory"),(0,r.kt)("li",{parentName:"ol"},"Then an action, count(), is applied to compute the size of ",(0,r.kt)("inlineCode",{parentName:"li"},"arr1")," for all mappers, the result is ",(0,r.kt)("inlineCode",{parentName:"li"},"numMappers * numKVPairs = 1,000,000"),". This action triggers the caching of ",(0,r.kt)("inlineCode",{parentName:"li"},"arr1"),"s"),(0,r.kt)("li",{parentName:"ol"},"groupByKey operation is executed on ",(0,r.kt)("inlineCode",{parentName:"li"},"pairs1")," which is already cached. The reducer number (or partition number) is numReducers. Theoretically, if hash(key) is well distributed, each reducer receives ",(0,r.kt)("inlineCode",{parentName:"li"},"numMappers * numKVPairs / numReducer \uff1d 27,777")," pairs of (Int, Array","[Byte]","), with a size of ",(0,r.kt)("inlineCode",{parentName:"li"},"Size(pairs1) / numReducer = 27MB")),(0,r.kt)("li",{parentName:"ol"},"Reducer aggregates the records with the same Int key, the result is ",(0,r.kt)("inlineCode",{parentName:"li"},"(Int, List(Byte[], Byte[], ..., Byte[]))")),(0,r.kt)("li",{parentName:"ol"},"Finally a count action sums up the record number in each reducer, the final result is actually the number of distinct integers in ",(0,r.kt)("inlineCode",{parentName:"li"},"paris1"))),(0,r.kt)("h2",{id:"logical-plan"},"Logical Plan"),(0,r.kt)("p",null,"The actual execution process of an application is more complicated than the above diagram. Generally speaking, a logical plan (or data dependency graph) will be created, then a physical plan (in the form of a DAG) will be generated. After that, concrete tasks will be generated and executed. Let's check the logical plan of this application:"),(0,r.kt)("p",null,"A call of function ",(0,r.kt)("inlineCode",{parentName:"p"},"RDD.toDebugString")," will return the logical plan:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"  MapPartitionsRDD[3] at groupByKey at GroupByTest.scala:51 (36 partitions)\n    ShuffledRDD[2] at groupByKey at GroupByTest.scala:51 (36 partitions)\n      FlatMappedRDD[1] at flatMap at GroupByTest.scala:38 (100 partitions)\n        ParallelCollectionRDD[0] at parallelize at GroupByTest.scala:38 (100 partitions)\n")),(0,r.kt)("p",null,"We can also draw a diagram:\n",(0,r.kt)("img",{alt:"deploy",src:t(7450).Z,width:"1656",height:"1172"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notice that the ",(0,r.kt)("inlineCode",{parentName:"p"},"data in the partition")," blocks shows the final result of the partitions, this does not necessarily mean that all these data resides in the memory in the same time")),(0,r.kt)("p",null,"So we could conclude:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User initiated an array from 0 to 99: ",(0,r.kt)("inlineCode",{parentName:"li"},"0 until numMappers")),(0,r.kt)("li",{parentName:"ul"},"parallelize() generate the initial ParallelCollectionRDD, each partititon contains an integer i"),(0,r.kt)("li",{parentName:"ul"},"FlatMappedRDD is generated by calling a transformation method (flatMap) on the ParallelCollectionRDD. Each partition of the FlatMappedRDD contains an ",(0,r.kt)("inlineCode",{parentName:"li"},"Array[(Int, Array[Byte])]")),(0,r.kt)("li",{parentName:"ul"},"When the first count() executes, this action executes on each partition, the results are sent to the driver and are summed up in the driver"),(0,r.kt)("li",{parentName:"ul"},"Since the FlatMappedRDD is cached in memory, so its partitions are colored differently"),(0,r.kt)("li",{parentName:"ul"},"groupByKey() generates the following 2 RDDs (ShuffledRDD and MapPartitionsRDD), we'll see in later chapters why it is the case"),(0,r.kt)("li",{parentName:"ul"},"Usually we see a ShuffleRDD if the job needs a shuffle. Its relation with the former RDD is similar to the relation between the output of mappers and the input of reducers in Hadoop"),(0,r.kt)("li",{parentName:"ul"},"MapPartitionRDD contains groupByKey()'s result"),(0,r.kt)("li",{parentName:"ul"},"Each value in MapPartitionRDD (",(0,r.kt)("inlineCode",{parentName:"li"},"Array[Byte]"),") is converted to ",(0,r.kt)("inlineCode",{parentName:"li"},"Iterable")),(0,r.kt)("li",{parentName:"ul"},"The last count() action is executed in the same way as we explained above")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We can see that the logical plan describes the data flow of the application: the transformations that are applied to the data, the intermediate RDDs and the dependency between these RDDs.")),(0,r.kt)("h2",{id:"physical-plan"},"Physical Plan"),(0,r.kt)("p",null,"As we've found out, the logical plan is about the dependency of data, not the actual execution of tasks. This is a main difference compared to Hadoop. In Hadoop, user handles directly the physical tasks: mapper tasks for applying operations on partitions and reducers tasks for aggregation. This is because in Hadoop, the data flow is pre-defined and fixed, user just fills in the map() and reduce() function. While in Spark, the data flow is very flexible and could be complicated, so it's difficult to simply combine together the concept of  data dependency and the physical tasks. For this reason, Spark separates the data flow and the actual task execution process, and has algorithms to transform a logical plan into a physical plan. We'll discuss this transformation in later chapter."),(0,r.kt)("p",null,"For the example job, let's draw its physical DAG:\n",(0,r.kt)("img",{alt:"deploy",src:t(4874).Z,width:"820",height:"705"})),(0,r.kt)("p",null,"We can see that the GroupByTest application generates 2 jobs, the first job is triggered by the first action (that is ",(0,r.kt)("inlineCode",{parentName:"p"},"pairs1.count()"),"). Let's check this first job:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The job contains only 1 stage (now we only need to know that there's a concept called stage, we'll see it in detail in later chapters)"),(0,r.kt)("li",{parentName:"ul"},"Stage 0 has 100 ResultTask"),(0,r.kt)("li",{parentName:"ul"},"Each task computes flatMap, generating FlatMappedRDD, then executes the action (",(0,r.kt)("inlineCode",{parentName:"li"},"count()"),"), count the record number in each partition. For example in partition 99 there's only 9 records."),(0,r.kt)("li",{parentName:"ul"},"Since ",(0,r.kt)("inlineCode",{parentName:"li"},"pairs1")," is instructed to be cached, the tasks will cache the partitions of FlatMappedRDD inside the executor's memory space."),(0,r.kt)("li",{parentName:"ul"},"After the tasks' execution, drive collects the results of tasks and sums them up"),(0,r.kt)("li",{parentName:"ul"},"Job 0 completes")),(0,r.kt)("p",null,"The second job is triggered by ",(0,r.kt)("inlineCode",{parentName:"p"},"pairs1.groupByKey(numReducers).count"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There's 2 stages in this job"),(0,r.kt)("li",{parentName:"ul"},"Stage 0 contains 100 ShuffleMapTask, each task reads a part of ",(0,r.kt)("inlineCode",{parentName:"li"},"paris1")," from the cache, partitions it, and write the partition results on local disk. For example, the task will place the a record ",(0,r.kt)("inlineCode",{parentName:"li"},"(1, Array(...))")," in the bucket of key 1 and store it on the disk. This step is similar to the partitioning of mappers in Hadoop"),(0,r.kt)("li",{parentName:"ul"},"Stage 1 contains 36 ResultTask, each task fetches and shuffles the data that it need to process. It does aggregation in the same time as fetching data and the mapPartitions() operation, then count() is applied to get the result. For example the ResultTask responsible for bucket 3 will fetch all data of bucket 3 from the workers and aggregates them locally"),(0,r.kt)("li",{parentName:"ul"},"After the tasks' execution, drive collects the results of tasks and sum them up"),(0,r.kt)("li",{parentName:"ul"},"Job 1 completes")),(0,r.kt)("p",null,"We can see that the physical plan is not simple. An Spark application can contain multiple jobs, each job could have multiple stages, and each stage has multiple tasks. ",(0,r.kt)("strong",{parentName:"p"},"Later we'll see how the jobs are defined as well as how the stages and tasks are created")),(0,r.kt)("h2",{id:"discussion"},"Discussion"),(0,r.kt)("p",null,"So now we have a basic knowledge about a Spark job's creation and execution. We also discussed the cache feature of Spark.\nIn the following chapters we'll discuss in detail the key steps related to job creation and execution, including:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"logical plan generation"),(0,r.kt)("li",{parentName:"ol"},"physical plan generation"),(0,r.kt)("li",{parentName:"ol"},"Job submission and scheduling"),(0,r.kt)("li",{parentName:"ol"},"Task's creation, execution and result handling"),(0,r.kt)("li",{parentName:"ol"},"How shuffle is done in Spark"),(0,r.kt)("li",{parentName:"ol"},"Cache mechanism"),(0,r.kt)("li",{parentName:"ol"},"Broadcast mechanism")))}d.isMDXComponent=!0},7450:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/JobRDD-2ac83fd5c3d77ff9b158e587230bd4c3.png"},4874:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/PhysicalView-69faf6d3360a89fc4d9f4e80856f2888.png"},7311:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/UserView-56b0f82856c7778f390c99a1e372594b.png"},8557:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/deploy-d09ea8cbea191b94ef3fa1a6947f82e0.png"}}]);