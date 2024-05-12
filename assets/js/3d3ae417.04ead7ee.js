"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),k=r,m=c["".concat(l,".").concat(k)]||c[k]||u[k]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={title:"Architecture",sidebar_position:5,id:"architecture",description:"Prophecy deployment is flexible and supports multiple mechanisms",tags:["overview","spark-internals"]},s=void 0,o={unversionedId:"spark-internals/architecture",id:"spark-internals/architecture",title:"Architecture",description:"Prophecy deployment is flexible and supports multiple mechanisms",source:"@site/docs/spark-internals/Architecture.md",sourceDirName:"spark-internals",slug:"/spark-internals/architecture",permalink:"/spark-internals/architecture",draft:!1,tags:[{label:"overview",permalink:"/tags/overview"},{label:"spark-internals",permalink:"/tags/spark-internals"}],version:"current",sidebarPosition:5,frontMatter:{title:"Architecture",sidebar_position:5,id:"architecture",description:"Prophecy deployment is flexible and supports multiple mechanisms",tags:["overview","spark-internals"]},sidebar:"defaultSidebar",previous:{title:"Shuffle Details",permalink:"/spark-internals/shuffle-details"},next:{title:"Cache And Checkpoint",permalink:"/spark-internals/cache-and-checkpoint"}},l={},d=[{value:"Deployment diagram",id:"deployment-diagram",level:2},{value:"Job submission",id:"job-submission",level:2},{value:"Job logical plan",id:"job-logical-plan",level:3},{value:"Job physical plan",id:"job-physical-plan",level:3},{value:"Task distribution",id:"task-distribution",level:3},{value:"Job reception",id:"job-reception",level:2},{value:"Task execution",id:"task-execution",level:2},{value:"Shuffle read",id:"shuffle-read",level:2},{value:"Discussion",id:"discussion",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We talked about spark jobs in chapter 3. In this chapter, we will talk about the architecture and how master, worker, driver and executors are coordinated to finish a job."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Feel free to ",(0,r.kt)("strong",{parentName:"p"},"skip")," code if you prefer diagrams.")),(0,r.kt)("h2",{id:"deployment-diagram"},"Deployment diagram"),(0,r.kt)("p",null,"We have seen the following diagram in ",(0,r.kt)("inlineCode",{parentName:"p"},"overview")," chapter."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"deploy",src:n(7711).Z,width:"3012",height:"2374"})),(0,r.kt)("p",null,"Next, we will talk about some details about it."),(0,r.kt)("h2",{id:"job-submission"},"Job submission"),(0,r.kt)("p",null,"The diagram below illustrates how driver program (on master node) produces job, and then submits it to worker nodes."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"JobSubmission",src:n(9524).Z,width:"3049",height:"2449"})),(0,r.kt)("p",null,"Driver side behavior is equivalent to the code below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"finalRDD.action()\n=> sc.runJob()\n\n// generate job, stages and tasks\n=> dagScheduler.runJob()\n=> dagScheduler.submitJob()\n=>   dagSchedulerEventProcessActor ! JobSubmitted\n=> dagSchedulerEventProcessActor.JobSubmitted()\n=> dagScheduler.handleJobSubmitted()\n=> finalStage = newStage()\n=>   mapOutputTracker.registerShuffle(shuffleId, rdd.partitions.size)\n=> dagScheduler.submitStage()\n=>   missingStages = dagScheduler.getMissingParentStages()\n=> dagScheduler.subMissingTasks(readyStage)\n\n// add tasks to the taskScheduler\n=> taskScheduler.submitTasks(new TaskSet(tasks))\n=> fifoSchedulableBuilder.addTaskSetManager(taskSet)\n\n// send tasks\n=> sparkDeploySchedulerBackend.reviveOffers()\n=> driverActor ! ReviveOffers\n=> sparkDeploySchedulerBackend.makeOffers()\n=> sparkDeploySchedulerBackend.launchTasks()\n=> foreach task\n      CoarseGrainedExecutorBackend(executorId) ! LaunchTask(serializedTask)\n")),(0,r.kt)("p",null,"Explanation:"),(0,r.kt)("p",null,"When the following code is evaluated, the program will launch a bunch of driver communications, e.g. job's executors, threads, actors, etc. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val sc = new SparkContext(sparkConf)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This line defines the role of driver")),(0,r.kt)("h3",{id:"job-logical-plan"},"Job logical plan"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"transformation()")," in driver program builds a computing chain (a series of ",(0,r.kt)("inlineCode",{parentName:"p"},"RDD"),"). In each ",(0,r.kt)("inlineCode",{parentName:"p"},"RDD"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compute()")," function defines the computation of records for its partitions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getDependencies()")," function defines the dependency relationship across RDD partitions.")),(0,r.kt)("h3",{id:"job-physical-plan"},"Job physical plan"),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"action()")," triggers a job:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"During ",(0,r.kt)("inlineCode",{parentName:"li"},"dagScheduler.runJob()"),", different stages are defined"),(0,r.kt)("li",{parentName:"ul"},"During ",(0,r.kt)("inlineCode",{parentName:"li"},"submitStage()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ResultTasks")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ShuffleMapTasks")," needed by the stage are produced, then they are packaged in ",(0,r.kt)("inlineCode",{parentName:"li"},"TaskSet")," and sent to ",(0,r.kt)("inlineCode",{parentName:"li"},"TaskScheduler"),". If ",(0,r.kt)("inlineCode",{parentName:"li"},"TaskSet")," can be executed, tasks will be submitted to ",(0,r.kt)("inlineCode",{parentName:"li"},"sparkDeploySchedulerBackend")," which will distribute tasks.")),(0,r.kt)("h3",{id:"task-distribution"},"Task distribution"),(0,r.kt)("p",null,"After ",(0,r.kt)("inlineCode",{parentName:"p"},"sparkDeploySchedulerBackend")," gets ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskSet"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"Driver Actor")," sends serialized tasks to ",(0,r.kt)("inlineCode",{parentName:"p"},"CoarseGrainedExecutorBackend Actor")," on worker node."),(0,r.kt)("h2",{id:"job-reception"},"Job reception"),(0,r.kt)("p",null,"After receiving tasks, worker will do the following things:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"coarseGrainedExecutorBackend ! LaunchTask(serializedTask)\n=> executor.launchTask()\n=> executor.threadPool.execute(new TaskRunner(taskId, serializedTask))\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Executor packages each task into ",(0,r.kt)("inlineCode",{parentName:"strong"},"taskRunner"),", and picks a free thread to run the task. A ",(0,r.kt)("inlineCode",{parentName:"strong"},"CoarseGrainedExecutorBackend")," process has exactly one executor")),(0,r.kt)("h2",{id:"task-execution"},"Task execution"),(0,r.kt)("p",null,"The diagram below shows the execution of a task received by worker node and how driver processes task results."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TaskExecution",src:n(6134).Z,width:"3424",height:"3729"})),(0,r.kt)("p",null,"After receiving a serialized task, the executor deserializes it into a normal task, and then runs the task to get ",(0,r.kt)("inlineCode",{parentName:"p"},"directResult")," which will be sent back to driver. It is noteworthy that data package sent from ",(0,r.kt)("inlineCode",{parentName:"p"},"Actor")," can not be too big:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the result is too big (e.g. the one of ",(0,r.kt)("inlineCode",{parentName:"li"},"groupByKey"),'), it will be persisted to "memory + hard disk" and managed by ',(0,r.kt)("inlineCode",{parentName:"li"},"blockManager"),". Driver will only get ",(0,r.kt)("inlineCode",{parentName:"li"},"indirectResult")," containing the storage location. When result is needed, driver will fetch it via HTTP."),(0,r.kt)("li",{parentName:"ul"},"If the result is not too big (less than ",(0,r.kt)("inlineCode",{parentName:"li"},"spark.akka.frameSize = 10MB"),"), then it will be directly sent to driver.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Some more details about ",(0,r.kt)("inlineCode",{parentName:"strong"},"blockManager"),":")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"directResult > akka.frameSize"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"memoryStore")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockManager")," creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"LinkedHashMap")," to hold the data stored in memory whose size should be less than ",(0,r.kt)("inlineCode",{parentName:"p"},"Runtime.getRuntime.maxMemory * spark.storage.memoryFraction(default 0.6)"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"LinkedHashMap")," has no space to save the incoming data, these data will be sent to ",(0,r.kt)("inlineCode",{parentName:"p"},"diskStore")," which persists data to hard disk if the data ",(0,r.kt)("inlineCode",{parentName:"p"},"storageLevel"),' contains "disk"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"In TaskRunner.run()\n// deserialize task, run it and then send the result to \n=> coarseGrainedExecutorBackend.statusUpdate()\n=> task = ser.deserialize(serializedTask)\n=> value = task.run(taskId)\n=> directResult = new DirectTaskResult(ser.serialize(value))\n=> if( directResult.size() > akkaFrameSize() ) \n       indirectResult = blockManager.putBytes(taskId, directResult, MEMORY+DISK+SER)\n   else\n       return directResult\n=> coarseGrainedExecutorBackend.statusUpdate(result)\n=> driver ! StatusUpdate(executorId, taskId, result)\n")),(0,r.kt)("p",null,"The results produced by ",(0,r.kt)("inlineCode",{parentName:"p"},"ShuffleMapTask")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ResultTask")," are different."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ShuffleMapTask")," produces ",(0,r.kt)("inlineCode",{parentName:"p"},"MapStatus")," containing 2 parts:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"BlockManagerId")," of the task's ",(0,r.kt)("inlineCode",{parentName:"li"},"BlockManager"),": (executorId + host, port, nettyPort\uff09"),(0,r.kt)("li",{parentName:"ul"},"the size of each output ",(0,r.kt)("inlineCode",{parentName:"li"},"FileSegment")," of a task"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ResultTask")," produces the execution result of the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," on one partition\ne.g. The ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"count()")," is simply for counting the number of records in a partition. Since ",(0,r.kt)("inlineCode",{parentName:"p"},"ShuffleMapTask")," needs ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment")," for writing to disk, ",(0,r.kt)("inlineCode",{parentName:"p"},"OutputStream")," writers are needed. These writers are produced and managed by ",(0,r.kt)("inlineCode",{parentName:"p"},"blockManger")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"shuffleBlockManager")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"In task.run(taskId)\n// if the task is ShuffleMapTask\n=> shuffleMapTask.runTask(context)\n=> shuffleWriterGroup = shuffleBlockManager.forMapTask(shuffleId, partitionId, numOutputSplits)\n=> shuffleWriterGroup.writers(bucketId).write(rdd.iterator(split, context))\n=> return MapStatus(blockManager.blockManagerId, Array[compressedSize(fileSegment)])\n\n//If the task is ResultTask\n=> return func(context, rdd.iterator(split, context))\n")),(0,r.kt)("p",null,"A series of operations will be executed after driver gets a task's result:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TaskScheduler")," will be notified that the task is finished, and its result will be processed: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If it is ",(0,r.kt)("inlineCode",{parentName:"li"},"indirectResult"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"BlockManager.getRemotedBytes()")," will be invoked to fetch actual results.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If it is ",(0,r.kt)("inlineCode",{parentName:"li"},"ResultTask"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ResultHandler()")," invokes driver side computation on result (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"count()")," take ",(0,r.kt)("inlineCode",{parentName:"li"},"sum")," operation on all ResultTask)."),(0,r.kt)("li",{parentName:"ul"},"If it is ",(0,r.kt)("inlineCode",{parentName:"li"},"MapStatus")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"ShuffleMapTask"),", then ",(0,r.kt)("inlineCode",{parentName:"li"},"MapStatus")," will be put into ",(0,r.kt)("inlineCode",{parentName:"li"},"mapStatuses")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"mapOutputTrackerMaster"),", which makes it more easy to be queried during reduce shuffle."))),(0,r.kt)("li",{parentName:"ul"},"If the received task on driver is the last task in the stage, then next stage will be submitted. If the stage is already the last one, ",(0,r.kt)("inlineCode",{parentName:"li"},"dagScheduler")," will be informed that the job is finished.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"After driver receives StatusUpdate(result)\n=> taskScheduler.statusUpdate(taskId, state, result.value)\n=> taskResultGetter.enqueueSuccessfulTask(taskSet, tid, result)\n=> if result is IndirectResult\n      serializedTaskResult = blockManager.getRemoteBytes(IndirectResult.blockId)\n=> scheduler.handleSuccessfulTask(taskSetManager, tid, result)\n=> taskSetManager.handleSuccessfulTask(tid, taskResult)\n=> dagScheduler.taskEnded(result.value, result.accumUpdates)\n=> dagSchedulerEventProcessActor ! CompletionEvent(result, accumUpdates)\n=> dagScheduler.handleTaskCompletion(completion)\n=> Accumulators.add(event.accumUpdates)\n\n// If the finished task is ResultTask\n=> if (job.numFinished == job.numPartitions) \n      listenerBus.post(SparkListenerJobEnd(job.jobId, JobSucceeded))\n=> job.listener.taskSucceeded(outputId, result)\n=>    jobWaiter.taskSucceeded(index, result)\n=>    resultHandler(index, result)\n\n// If the finished task is ShuffleMapTask\n=> stage.addOutputLoc(smt.partitionId, status)\n=> if (all tasks in current stage have finished)\n      mapOutputTrackerMaster.registerMapOutputs(shuffleId, Array[MapStatus])\n      mapStatuses.put(shuffleId, Array[MapStatus]() ++ statuses)\n=> submitStage(stage)\n")),(0,r.kt)("h2",{id:"shuffle-read"},"Shuffle read"),(0,r.kt)("p",null,"In the preceding paragraph, we talked about task execution and result processing, now we will talk about how reducer (tasks needs shuffle) gets the input data. The shuffle read part in last chapter has already talked about how reducer processes input data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How does reducer know where to fetch data ?")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"readMapStatus",src:n(5906).Z,width:"3612",height:"2749"})),(0,r.kt)("p",null,"Reducer needs to know on which node the ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegments")," produced by ",(0,r.kt)("inlineCode",{parentName:"p"},"ShuffleMapTask")," of parent stage are. ",(0,r.kt)("strong",{parentName:"p"},"This kind of information is sent to driver\u2019s ",(0,r.kt)("inlineCode",{parentName:"strong"},"mapOutputTrackerMaster")," when ",(0,r.kt)("inlineCode",{parentName:"strong"},"ShuffleMapTask")," is finished. The information is also stored in ",(0,r.kt)("inlineCode",{parentName:"strong"},"mapStatuses: HashMap[stageId, Array[MapStatus]]")),". Given ",(0,r.kt)("inlineCode",{parentName:"p"},"stageId"),", we can get",(0,r.kt)("inlineCode",{parentName:"p"},"Array[MapStatus]")," which contains information about ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegments")," produced by ",(0,r.kt)("inlineCode",{parentName:"p"},"ShuffleMapTasks"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"Array(taskId)")," contains the location(",(0,r.kt)("inlineCode",{parentName:"p"},"blockManagerId"),") and the size of each ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment"),"."),(0,r.kt)("p",null,"When reducer need fetch input data, it will first invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"blockStoreShuffleFetcher")," to get input data\u2019s location (",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegments"),"). ",(0,r.kt)("inlineCode",{parentName:"p"},"blockStoreShuffleFetcher")," calls local ",(0,r.kt)("inlineCode",{parentName:"p"},"MapOutputTrackerWorker")," to do the work. ",(0,r.kt)("inlineCode",{parentName:"p"},"MapOutputTrackerWorker")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"mapOutputTrackerMasterActorRef")," to communicate with ",(0,r.kt)("inlineCode",{parentName:"p"},"mapOutputTrackerMasterActor")," in order to get ",(0,r.kt)("inlineCode",{parentName:"p"},"MapStatus"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"blockStoreShuffleFetcher")," processes ",(0,r.kt)("inlineCode",{parentName:"p"},"MapStatus")," and finds out where reducer should fetch ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment")," information, and then it stores this information in ",(0,r.kt)("inlineCode",{parentName:"p"},"blocksByAddress"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"blockStoreShuffleFetcher")," tells ",(0,r.kt)("inlineCode",{parentName:"p"},"basicBlockFetcherIterator")," to fetch ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment")," data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"rdd.iterator()\n=> rdd(e.g., ShuffledRDD/CoGroupedRDD).compute()\n=> SparkEnv.get.shuffleFetcher.fetch(shuffledId, split.index, context, ser)\n=> blockStoreShuffleFetcher.fetch(shuffleId, reduceId, context, serializer)\n=> statuses = MapOutputTrackerWorker.getServerStatuses(shuffleId, reduceId)\n\n=> blocksByAddress: Seq[(BlockManagerId, Seq[(BlockId, Long)])] = compute(statuses)\n=> basicBlockFetcherIterator = blockManager.getMultiple(blocksByAddress, serializer)\n=> itr = basicBlockFetcherIterator.flatMap(unpackBlock)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"blocksByAddress",src:n(7845).Z,width:"3379",height:"4524"})),(0,r.kt)("p",null,"After ",(0,r.kt)("inlineCode",{parentName:"p"},"basicBlockFetcherIterator")," has received the task of data retrieving, it produces several ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchRequest"),"s. ",(0,r.kt)("strong",{parentName:"p"},"Each of them contains the tasks to fetch ",(0,r.kt)("inlineCode",{parentName:"strong"},"FileSegment"),"s from several nodes. "),"According to the diagram above, we know that ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer-2")," needs to fetch ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment"),"(FS)(in white) from 3 worker nodes. The global data fetching task can be represented by ",(0,r.kt)("inlineCode",{parentName:"p"},"blockByAddress"),": 4 blocks from node 1, 3 blocks from node 2, and 4 blocks from node 3"),(0,r.kt)("p",null,"In order to accelerate data fetching process, it makes sense to divide the global tasks into sub tasks(",(0,r.kt)("inlineCode",{parentName:"p"},"fetchRequest"),"), then every task takes a thread to fetch data. Spark launches 5 parallel threads for each reducer (the same as Hadoop). Since the fetched data will be buffered into memory, one fetch is not able to take too much data (no more than ",(0,r.kt)("inlineCode",{parentName:"p"},"spark.reducer.maxMbInFlight\uff1d48MB"),"). ",(0,r.kt)("strong",{parentName:"p"},"Note that ",(0,r.kt)("inlineCode",{parentName:"strong"},"48MB")," is shared by the 5 fetch threads,")," so each sub task should take no more than ",(0,r.kt)("inlineCode",{parentName:"p"},"48MB / 5 = 9.6MB"),". In the diagram, on node 1, we have ",(0,r.kt)("inlineCode",{parentName:"p"},"size(FS0-2) + size(FS1-2) < 9.6MB, but size(FS0-2) + size(FS1-2) + size(FS2-2) > 9.6MB"),", so we should break between ",(0,r.kt)("inlineCode",{parentName:"p"},"t1-r2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"t2-r2"),". As a result, we can see 2 ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchRequest"),"s fetching data from node 1. ",(0,r.kt)("strong",{parentName:"p"},"Will there be ",(0,r.kt)("inlineCode",{parentName:"strong"},"fetchRequest")," larger than 9.6MB?")," The answer is yes. If one ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment")," is too large, it still needs to be fetched in one shot. Besides, if reducer needs some ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment"),"s already existing on the local, it will do local read. At the end of shuffle read, it will deserialize fetched ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment")," and offer record iterators to ",(0,r.kt)("inlineCode",{parentName:"p"},"RDD.compute()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"In basicBlockFetcherIterator:\n\n// generate the fetch requests\n=> basicBlockFetcherIterator.initialize()\n=> remoteRequests = splitLocalRemoteBlocks()\n=> fetchRequests ++= Utils.randomize(remoteRequests)\n\n// fetch remote blocks\n=> sendRequest(fetchRequests.dequeue()) until Size(fetchRequests) > maxBytesInFlight\n=> blockManager.connectionManager.sendMessageReliably(cmId, \n       blockMessageArray.toBufferMessage)\n=> fetchResults.put(new FetchResult(blockId, sizeMap(blockId)))\n=> dataDeserialize(blockId, blockMessage.getData, serializer)\n\n// fetch local blocks\n=> getLocalBlocks() \n=> fetchResults.put(new FetchResult(id, 0, () => iter))\n")),(0,r.kt)("p",null,"Some more details:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How does the reducer send ",(0,r.kt)("inlineCode",{parentName:"strong"},"fetchRequest")," to the target node? How does the target node process ",(0,r.kt)("inlineCode",{parentName:"strong"},"fetchRequest"),", read and send back ",(0,r.kt)("inlineCode",{parentName:"strong"},"FileSegment")," to reducer?")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fetchrequest",src:n(3750).Z,width:"3287",height:"3549"})),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"RDD.iterator()")," meets ",(0,r.kt)("inlineCode",{parentName:"p"},"ShuffleDependency"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicBlockFetcherIterator")," will be called to fetch ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment"),"s. ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicBlockFetcherIterator")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionManager")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"blockManger")," to send ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchRequest")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionManager"),"s on the other nodes. NIO is used for communication between ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionManager"),"s. On the other nodes, for example, after ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionManager")," on worker node 2 receives a message, it will forward the message to ",(0,r.kt)("inlineCode",{parentName:"p"},"blockManager"),". The latter uses ",(0,r.kt)("inlineCode",{parentName:"p"},"diskStore")," to read ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment"),"s requested by ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchRequest")," locally, they will still be sent back by ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionManager"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"FileConsolidation")," is activated, ",(0,r.kt)("inlineCode",{parentName:"p"},"diskStore")," needs the location of ",(0,r.kt)("inlineCode",{parentName:"p"},"blockId")," given by ",(0,r.kt)("inlineCode",{parentName:"p"},"shuffleBolockManager"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment")," is no more than ",(0,r.kt)("inlineCode",{parentName:"p"},"spark.storage.memoryMapThreshold = 8KB"),", then diskStore will put ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment")," into memory when reading it, otherwise, The memory mapping method in ",(0,r.kt)("inlineCode",{parentName:"p"},"FileChannel")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"RandomAccessFile")," will be used to read ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment"),", thus large ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment")," can be loaded into memory."),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicBlockFetcherIterator")," receives serialized ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegments")," from the other nodes, it will deserialize and put them in ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchResults.Queue"),". You may notice that ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"fetchResults.Queue")," is similar to ",(0,r.kt)("inlineCode",{parentName:"strong"},"softBuffer")," in ",(0,r.kt)("inlineCode",{parentName:"strong"},"Shuffle detials")," chapter.")," If the ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment"),"s needed by ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicBlockFetcherIterator")," are local, they will be found locally by ",(0,r.kt)("inlineCode",{parentName:"p"},"diskStore"),", and put in ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchResults"),". Finally, reducer reads the records from ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment")," and processes them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"After the blockManager receives the fetch request\n\n=> connectionManager.receiveMessage(bufferMessage)\n=> handleMessage(connectionManagerId, message, connection)\n\n// invoke blockManagerWorker to read the block (FileSegment)\n=> blockManagerWorker.onBlockMessageReceive()\n=> blockManagerWorker.processBlockMessage(blockMessage)\n=> buffer = blockManager.getLocalBytes(blockId)\n=> buffer = diskStore.getBytes(blockId)\n=> fileSegment = diskManager.getBlockLocation(blockId)\n=> shuffleManager.getBlockLocation()\n=> if(fileSegment < minMemoryMapBytes)\n     buffer = ByteBuffer.allocate(fileSegment)\n   else\n     channel.map(MapMode.READ_ONLY, segment.offset, segment.length)\n")),(0,r.kt)("p",null,"Every reducer has a ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicBlockFetcherIterator"),", and one ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicBlockFetcherIterator")," could, in theory, hold 48MB of ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchResults"),". As soon as one ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchResults")," is read off, some ",(0,r.kt)("inlineCode",{parentName:"p"},"FileSegment"),"s will be fetched to fill that 48MB."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"BasicBlockFetcherIterator.next()\n=> result = results.task()\n=> while (!fetchRequests.isEmpty &&\n        (bytesInFlight == 0 || bytesInFlight + fetchRequests.front.size <= maxBytesInFlight)) {\n        sendRequest(fetchRequests.dequeue())\n      }\n=> result.deserialize()\n")),(0,r.kt)("h2",{id:"discussion"},"Discussion"),(0,r.kt)("p",null,"In terms of architecture design, functionalities and modules are pretty independent. ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockManager")," is well designed, but it seems to manage too many things (data block, memory, disk and network communication)"),(0,r.kt)("p",null,"This chapter discussed how the modules of spark system are coordinated to finish a job (production, submission, execution, results collection, results computation and shuffle). A lot of code is pasted, many diagrams are drawn. More details can be found in source code, if you want."),(0,r.kt)("p",null,"If you also want to know more about ",(0,r.kt)("inlineCode",{parentName:"p"},"blockManager"),", please refer to Jerry Shao's ",(0,r.kt)("a",{parentName:"p",href:"http://jerryshao.me/architecture/2013/10/08/spark-storage-module-analysis/"},"blog")," (in Chinese)."))}u.isMDXComponent=!0},9524:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/JobSubmission-fd28d6e7596241205fd910041721be5e.png"},7845:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blocksByAddress-cfff353add27bebfabc52a61a08c8a29.png"},7711:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deploy-d09ea8cbea191b94ef3fa1a6947f82e0.png"},3750:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fetchrequest-3188c8a2e7e0a8ab2262f8907817be67.png"},5906:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/readMapStatus-aefaf8abb90ec60d64847b86c4156c51.png"},6134:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskexecution-20da904f8b9d8b468969af86ecc89eee.png"}}]);