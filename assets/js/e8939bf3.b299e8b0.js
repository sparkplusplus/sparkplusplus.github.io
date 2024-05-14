"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=i,m=d["".concat(p,".").concat(k)]||d[k]||h[k]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={title:"Cache And Checkpoint",sidebar_position:6,id:"cache-and-checkpoint",description:"Prophecy deployment is flexible and supports multiple mechanisms",tags:["overview","spark-internals"]},r=void 0,l={unversionedId:"spark-internals/cache-and-checkpoint",id:"spark-internals/cache-and-checkpoint",title:"Cache And Checkpoint",description:"Prophecy deployment is flexible and supports multiple mechanisms",source:"@site/docs/spark-internals/CacheAndCheckpoint.md",sourceDirName:"spark-internals",slug:"/spark-internals/cache-and-checkpoint",permalink:"/spark-internals/cache-and-checkpoint",draft:!1,tags:[{label:"overview",permalink:"/tags/overview"},{label:"spark-internals",permalink:"/tags/spark-internals"}],version:"current",sidebarPosition:6,frontMatter:{title:"Cache And Checkpoint",sidebar_position:6,id:"cache-and-checkpoint",description:"Prophecy deployment is flexible and supports multiple mechanisms",tags:["overview","spark-internals"]},sidebar:"defaultSidebar",previous:{title:"Architecture",permalink:"/spark-internals/architecture"},next:{title:"Broadcast",permalink:"/spark-internals/broadcast"}},p={},s=[{value:"cache()",id:"cache",level:2},{value:"Checkpoint",id:"checkpoint",level:2},{value:"Discussion",id:"discussion",level:2},{value:"Example",id:"example",level:2}],c={toc:s},d="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cache")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"persist"),") is an important feature which does not exist in Hadoop. It makes Spark much faster to reuse a data set, e.g. iterative algorithm in machine learning, interactive data exploration, etc. Different from Hadoop MapReduce jobs, Spark's logical/physical plan can be very large, so the computing chain could be too long that it takes lots of time to compute RDD. If, unfortunately, some errors or exceptions occur during the execution of a task, the whole computing chain needs to be re-executed, which is considerably expensive. Therefore, we need to ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint")," some time-consuming RDDs. Thus, even if the following RDD goes wrong, it can continue with the data retrieved from checkpointed RDDs."),(0,i.kt)("h2",{id:"cache"},"cache()"),(0,i.kt)("p",null,"Let's take the ",(0,i.kt)("inlineCode",{parentName:"p"},"GroupByTest")," in chapter Overview as an example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"FlatMappedRDD")," has been cached, so job 1 can just start with ",(0,i.kt)("inlineCode",{parentName:"p"},"FlatMappedRDD"),", since ",(0,i.kt)("inlineCode",{parentName:"p"},"cache()")," makes the repeated data get shared by jobs of the same application."),(0,i.kt)("p",null,"Logical plan\uff1a\n",(0,i.kt)("img",{alt:"deploy",src:n(6851).Z,width:"1656",height:"1172"}),"\nPhysical plan\uff1a\n",(0,i.kt)("img",{alt:"deploy",src:n(6805).Z,width:"820",height:"705"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: What kind of RDD needs to be cached ?")),(0,i.kt)("p",null,"Those which will be repeatedly computed and are not too large."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: How to cache an RDD ?")),(0,i.kt)("p",null,"Just do a ",(0,i.kt)("inlineCode",{parentName:"p"},"rdd.cache()")," in driver program, where ",(0,i.kt)("inlineCode",{parentName:"p"},"rdd")," is the RDD accessible to users, e.g. RDD produced by ",(0,i.kt)("inlineCode",{parentName:"p"},"transformation()"),", but some RDD produced by Spark (not user) during the execution of a transformation can not be cached by user, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"ShuffledRDD"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MapPartitionsRDD")," during ",(0,i.kt)("inlineCode",{parentName:"p"},"reduceByKey()"),", etc."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: How does Spark cache RDD ?")),(0,i.kt)("p",null,"We can just make a guess. Intuitively, when a task gets the first record of an RDD, it will test if this RDD should be cached. If so, the first record and all the following records will be sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"blockManager"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"memoryStore"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"memoryStore")," can not hold all the records, ",(0,i.kt)("inlineCode",{parentName:"p"},"diskStore")," will be used instead."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The implementation is similar to what we can guess, but the difference is that")," Spark will test whether the RDD should be cached or not just before computing the first partition. If the RDD should be cached, the partition will be computed and cached into memory. ",(0,i.kt)("inlineCode",{parentName:"p"},"cache")," only uses memory. Writing to disk is called ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint"),"."),(0,i.kt)("p",null,"After calling ",(0,i.kt)("inlineCode",{parentName:"p"},"rdd.cache()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"rdd")," becomes ",(0,i.kt)("inlineCode",{parentName:"p"},"persistRDD")," whose ",(0,i.kt)("inlineCode",{parentName:"p"},"storageLevel")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"MEMORY_ONLY"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"persistRDD")," will tell ",(0,i.kt)("inlineCode",{parentName:"p"},"driver")," that it needs to be persisted."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cache",src:n(9666).Z,width:"1093",height:"1112"})),(0,i.kt)("p",null,"The above can be found in the following source code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"rdd.iterator()\n=> SparkEnv.get.cacheManager.getOrCompute(thisRDD, split, context, storageLevel)\n=> key = RDDBlockId(rdd.id, split.index)\n=> blockManager.get(key)\n=> computedValues = rdd.computeOrReadCheckpoint(split, context)\n      if (isCheckpointed) firstParent[T].iterator(split, context)\n      else compute(split, context)\n=> elements = new ArrayBuffer[Any]\n=> elements ++= computedValues\n=> updatedBlocks = blockManager.put(key, elements, tellMaster = true)\n")),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"rdd.iterator()")," is called to compute some partitions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"rdd"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"blockId")," will be used to indicate which partition to cache, where ",(0,i.kt)("inlineCode",{parentName:"p"},"blockId")," is of ",(0,i.kt)("inlineCode",{parentName:"p"},"RDDBlockId")," type which is different from other data types in ",(0,i.kt)("inlineCode",{parentName:"p"},"memoryStore")," like ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"task"),". And then, partitions in ",(0,i.kt)("inlineCode",{parentName:"p"},"blockManger")," will be checked to see whether they are checkpointed. If so, it will say that the task has already been executed, no more computation is needed for this partition. The ",(0,i.kt)("inlineCode",{parentName:"p"},"elements")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrayBuffer")," will take all records of the partition from the check point. If not, the partition will be computed first, then all its records will be put into ",(0,i.kt)("inlineCode",{parentName:"p"},"elements"),". Finally, ",(0,i.kt)("inlineCode",{parentName:"p"},"elements")," will be submitted to ",(0,i.kt)("inlineCode",{parentName:"p"},"blockManager")," for caching."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"blockManager")," saves ",(0,i.kt)("inlineCode",{parentName:"p"},"elements")," (partition) into ",(0,i.kt)("inlineCode",{parentName:"p"},"LinkedHashMap[BlockId, Entry]")," inside ",(0,i.kt)("inlineCode",{parentName:"p"},"memoryStore"),". If partition is bigger than ",(0,i.kt)("inlineCode",{parentName:"p"},"memoryStore"),"'s capacity (60% heap size), then just return by saying not being able to hold the data. If the size is ok, it will then drop some RDD partitions which was cached earlier in order to create space for the new incoming partitions. If the created space is enough, the new partition will be put into ",(0,i.kt)("inlineCode",{parentName:"p"},"LinkedHashMap"),'; if not, return by saying not enough space again. It is worth mentioning that the old partitions which belong to the RDD of the new partitions will not be dropped. Ideally, "first cached, first dropped".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: How to read cached RDD ?")),(0,i.kt)("p",null,"When a cached RDD is being recomputed (in next job), ",(0,i.kt)("inlineCode",{parentName:"p"},"task")," will read ",(0,i.kt)("inlineCode",{parentName:"p"},"blockManager")," directly from ",(0,i.kt)("inlineCode",{parentName:"p"},"memoryStore"),". Specifically, during the computation of some RDD partitions (by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"rdd.iterator()"),"), ",(0,i.kt)("inlineCode",{parentName:"p"},"blockManager")," will be asked whether they are cached or not. If the partition is cached in local, ",(0,i.kt)("inlineCode",{parentName:"p"},"blockManager.getLocal()")," will be called to read data from ",(0,i.kt)("inlineCode",{parentName:"p"},"memoryStore"),". If the partition was cached on the other nodes, ",(0,i.kt)("inlineCode",{parentName:"p"},"blockManager.getRemote()")," will be called. See below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cacheRead",src:n(3824).Z,width:"1843",height:"2481"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"the storage location of cached partition:")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"blockManager")," of the node on which a partition is cached will notify the ",(0,i.kt)("inlineCode",{parentName:"p"},"blockManagerMasterActor")," on master by saying that an RDD partition is cached. This information will be stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"blockLocations: HashMap")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"blockMangerMasterActor"),". When a task needs a cached RDD, it will send ",(0,i.kt)("inlineCode",{parentName:"p"},"blockManagerMaster.getLocations(blockId)")," request to driver to get the partition's location, and the driver will lookup ",(0,i.kt)("inlineCode",{parentName:"p"},"blockLocations")," to send back location info."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Read cached partition from the other nodes:")," a task gets cached partition's location info, and then it sends ",(0,i.kt)("inlineCode",{parentName:"p"},"getBlock(blockId)")," request to the target node via ",(0,i.kt)("inlineCode",{parentName:"p"},"connectionManager"),". The target node retrieves and sends back the cached partition from the ",(0,i.kt)("inlineCode",{parentName:"p"},"memoryStore")," of the local ",(0,i.kt)("inlineCode",{parentName:"p"},"blockManager"),"."),(0,i.kt)("h2",{id:"checkpoint"},"Checkpoint"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: What kind of RDD needs checkpoint ?")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the computation takes a long time"),(0,i.kt)("li",{parentName:"ul"},"the computing chain is too long"),(0,i.kt)("li",{parentName:"ul"},"depends too many RDDs")),(0,i.kt)("p",null,"Actually, saving the output of ",(0,i.kt)("inlineCode",{parentName:"p"},"ShuffleMapTask")," on local disk is also ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint"),", but it is just for data output of partition."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: When to checkpoint ?")),(0,i.kt)("p",null,"As mentioned above, every time a computed partition needs to be cached, it is cached into memory. However, ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint")," does not follow the same principle. Instead, it waits until the end of a job, and launches another job to finish ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint"),". ",(0,i.kt)("strong",{parentName:"p"},"An RDD which needs to be checkpointed will be computed twice; thus it is suggested to do a ",(0,i.kt)("inlineCode",{parentName:"strong"},"rdd.cache()")," before ",(0,i.kt)("inlineCode",{parentName:"strong"},"rdd.checkpoint()")),". In this case, the second job will not recompute the RDD. Instead, it will just read cache. In fact, Spark offers ",(0,i.kt)("inlineCode",{parentName:"p"},"rdd.persist(StorageLevel.DISK_ONLY)")," method, like caching on disk. Thus, it caches RDD on disk during its first computation, but this kind of ",(0,i.kt)("inlineCode",{parentName:"p"},"persist")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint")," are different, we will discuss the difference later."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: How to implement checkpoint ?")),(0,i.kt)("p",null,"Here is the procedure:"),(0,i.kt)("p",null,"RDD will be: ","[ Initialized --\x3e marked for checkpointing --\x3e checkpointing in progress --\x3e checkpointed ]",". In the end, it will be checkpointed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Initialized")),(0,i.kt)("p",null,"On driver side, after ",(0,i.kt)("inlineCode",{parentName:"p"},"rdd.checkpoint()")," is called, the RDD will be managed by ",(0,i.kt)("inlineCode",{parentName:"p"},"RDDCheckpointData"),". User should set the storage path for check point (on hdfs)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"marked for checkpointing")),(0,i.kt)("p",null,"After initialization, ",(0,i.kt)("inlineCode",{parentName:"p"},"RDDCheckpointData")," will mark RDD ",(0,i.kt)("inlineCode",{parentName:"p"},"MarkedForCheckpoint"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"checkpointing in progress")),(0,i.kt)("p",null,"When a job is finished, ",(0,i.kt)("inlineCode",{parentName:"p"},"finalRdd.doCheckpoint()")," will be called. ",(0,i.kt)("inlineCode",{parentName:"p"},"finalRDD")," scans the computing chain backward. When meeting an RDD which needs to be checkpointed, the RDD will be marked ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckpointingInProgress"),", and then the configuration files (for writing to hdfs), like core-site.xml, will be broadcast to ",(0,i.kt)("inlineCode",{parentName:"p"},"blockManager")," of the other work nodes. After that, a job will be launched to finish ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"rdd.context.runJob(rdd, CheckpointRDD.writeToFile(path.toString, broadcastedConf))\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"checkpointed")),(0,i.kt)("p",null,"After the job finishes checkpoint, it will clean all the dependencies of the RDD and set the RDD to checkpointed. Then, ",(0,i.kt)("strong",{parentName:"p"},"add a supplementary dependency and set the parent RDD as ",(0,i.kt)("inlineCode",{parentName:"strong"},"CheckpointRDD")),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpointRDD")," will be used in the future to read checkpoint files from file system and then generate RDD partitions"),(0,i.kt)("p",null,"What's interesting is the following:"),(0,i.kt)("p",null,"Two ",(0,i.kt)("inlineCode",{parentName:"p"},"RDD"),"s are checkpointed in driver program, but only the ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," (see code below) is successfully checkpointed. Not sure whether it is a bug or only that the downstream RDD will be intentionally checkpointed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val data1 = Array[(Int, Char)]((1, 'a'), (2, 'b'), (3, 'c'),\n    (4, 'd'), (5, 'e'), (3, 'f'), (2, 'g'), (1, 'h'))\nval pairs1 = sc.parallelize(data1, 3)\n\nval data2 = Array[(Int, Char)]((1, 'A'), (2, 'B'), (3, 'C'), (4, 'D'))\nval pairs2 = sc.parallelize(data2, 2)\n\npairs2.checkpoint\n\nval result = pairs1.join(pairs2)\nresult.checkpoint\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: How to read checkpointed RDD ?")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"runJob()")," will call ",(0,i.kt)("inlineCode",{parentName:"p"},"finalRDD.partitions()")," to determine how many tasks there will be. ",(0,i.kt)("inlineCode",{parentName:"p"},"rdd.partitions()")," checks if the RDD has been checkpointed via ",(0,i.kt)("inlineCode",{parentName:"p"},"RDDCheckpointData")," which manages checkpointed RDD. If yes, return the partitions of the RDD (",(0,i.kt)("inlineCode",{parentName:"p"},"Array[Partition]"),"). When ",(0,i.kt)("inlineCode",{parentName:"p"},"rdd.iterator()")," is called to compute RDD's partition, ",(0,i.kt)("inlineCode",{parentName:"p"},"computeOrReadCheckpoint(split: Partition)")," is also called to check if the RDD is checkpointed. If yes, the parent RDD's ",(0,i.kt)("inlineCode",{parentName:"p"},"iterator()"),", a.k.a ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckpointRDD.iterator()")," will be called. ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckpointRDD")," reads files on file system to produce RDD partition. ",(0,i.kt)("strong",{parentName:"p"},"That's why a parent ",(0,i.kt)("inlineCode",{parentName:"strong"},"CheckpointRDD")," is added to checkpointed rdd trickly.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: the difference between ",(0,i.kt)("inlineCode",{parentName:"strong"},"cache")," and ",(0,i.kt)("inlineCode",{parentName:"strong"},"checkpoint")," ?")),(0,i.kt)("p",null,"Here is the an answer from Tathagata Das:"),(0,i.kt)("p",null,"There is a significant difference between cache and checkpoint. Cache materializes the RDD and keeps it in memory (and/or disk). But the lineage\uff08computing chain\uff09of RDD (that is, seq of operations that generated the RDD) will be remembered, so that if there are node failures and parts of the cached RDDs are lost, they can be regenerated. However, ",(0,i.kt)("strong",{parentName:"p"},"checkpoint saves the RDD to an HDFS file and actually forgets the lineage completely.")," This allows long lineages to be truncated and the data to be saved reliably in HDFS, which is naturally fault tolerant by replication."),(0,i.kt)("p",null,"Furthermore, ",(0,i.kt)("inlineCode",{parentName:"p"},"rdd.persist(StorageLevel.DISK_ONLY)")," is also different from ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint"),". Through the former can persist RDD partitions to disk, the partitions are managed by ",(0,i.kt)("inlineCode",{parentName:"p"},"blockManager"),". Once driver program finishes, which means the thread where ",(0,i.kt)("inlineCode",{parentName:"p"},"CoarseGrainedExecutorBackend")," lies in stops, ",(0,i.kt)("inlineCode",{parentName:"p"},"blockManager")," will stop, the RDD cached to disk will be dropped (local files used by ",(0,i.kt)("inlineCode",{parentName:"p"},"blockManager")," will be deleted). But ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint")," will persist RDD to HDFS or local directory. If not removed manually, they will always be on disk, so they can be used by the next driver program."),(0,i.kt)("h2",{id:"discussion"},"Discussion"),(0,i.kt)("p",null,"When Hadoop MapReduce executes a job, it keeps persisting data (writing to HDFS) at the end of every task and every job. When executing a task, it keeps swapping between memory and disk, back and forth. The problem of Hadoop is that task needs to be re-executed if any error occurs, e.g. shuffle stopped by errors will have only half of the data persisted on disk, and then the persisted data will be recomputed for the next run of shuffle. Spark's advantage is that, when error occurs, the next run will read data from checkpoint, but the downside is that checkpoint needs to execute the job twice."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"package internals\n\nimport org.apache.spark.SparkContext\nimport org.apache.spark.SparkContext._\nimport org.apache.spark.SparkConf\n\nobject groupByKeyTest {\n\n   def main(args: Array[String]) {\n    val conf = new SparkConf().setAppName(\"GroupByKey\").setMaster(\"local\")\n    val sc = new SparkContext(conf)\n    sc.setCheckpointDir(\"/Users/xulijie/Documents/data/checkpoint\")\n\n    val data = Array[(Int, Char)]((1, 'a'), (2, 'b'),\n                                     (3, 'c'), (4, 'd'),\n                                     (5, 'e'), (3, 'f'),\n                                     (2, 'g'), (1, 'h')\n                                    )\n    val pairs = sc.parallelize(data, 3)\n\n    pairs.checkpoint\n    pairs.count\n\n    val result = pairs.groupByKey(2)\n\n    result.foreachWith(i => i)((x, i) => println(\"[PartitionIndex \" + i + \"] \" + x))\n\n    println(result.toDebugString)\n   }\n}\n")))}h.isMDXComponent=!0},6851:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/JobRDD-2ac83fd5c3d77ff9b158e587230bd4c3.png"},6805:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/PhysicalView-69faf6d3360a89fc4d9f4e80856f2888.png"},9666:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cache-f1201421e00a855077962323b9a88693.png"},3824:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cacheRead-eb42792e537b28213369e35f00649843.png"}}]);