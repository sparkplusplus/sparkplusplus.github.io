---
title: "Catalyst Optimizer"
sidebar_position: 6
id: catalyst-optimizer
description: Prophecy deployment is flexible and supports multiple mechanisms
tags:
  - overview
  - spark-internals
---

What is Catalyst optimizer
==========================

An optimizer that automatically finds out the most efficient plan to execute data operations specified in the user’s program.

It “translates” transformations used to build the Dataset to physical plan of execution. Thus, it’s similar to [DAG scheduler](http://www.waitingforcode.com/apache-spark/directed-acyclic-graph-in-spark/read#dag_scheduler) used to create physical plan of execution of RDD.

It is precious to Dataset in terms of performance. Since it understands the structure of used data and operations made on it, the optimizer can make some decisions helping to reduce time execution

How it works
============

Let’s first understand the terminology used in understanding the optimizer

*   **logical plan** — series of algebraic or language constructs, as for example: _SELECT_, _GROUP BY_ or _UNION_ keywords in SQL. It’s usually represented as a tree where nodes are the constructs.
*   **physical plan** — similar to logical because also represented as a tree. But the difference is that physical plan concerns low level operations.
*   **unoptimized/optimized plans** — a plan is considered as unoptimized when optimizer hasn’t worked on it yet. The plan becomes optimized when optimizer passed on it and made some optimizations (e.g.: merging **filter()** methods, replacing some instructions by another ones, most performant).

So, it helps to move from unoptimized logical query plan to optimized physical plan, achieving that in below steps:

![how_it_works.png](/PNGfigures/catalyst//how_it_works.png)



1.  Optimizer tries to optimize logical query plan through predefined rule-based optimizations. The optimization can consists on:

*   predicate or projection pushdown — helps to eliminate data not respecting preconditions earlier in the computation.
*   rearrange filter
*   conversion of decimals operations to long integer operations
*   replacement of some RegEx expressions by Java’s methods startsWith(String) or contains(String)
*   if-else clauses simplification

2\. Optimized logical plan is created.

3\. Optimizer constructs multiple physical plans from optimized logical plan. A physical plan defines how data will be computed. The plans are also optimized. The optimization can concern: merging different **filter()**, sending predicate/projection pushdown directly to datasource to eliminate some data at data source level.

4\. Optimizer determines which physical plan has the lowest cost of execution and choses it as the physical plan used for the computation. CO also has a concept of metrics used to estimate the cost of plans.

5\. Optimizer generates bytecode for the best physical plan. The generation is made thanks to Scala’s feature called _quasiquotes_. This step is optimized by _cost-based optimization_

6\. Once a physical plan is defined, it’s executed and retrieved data is put to Dataset.

Example :
=========

Let’s understand how Catalyst optimizer works for a given query

Trees
=====

A tree is the main data type in the catalyst. A tree contains node object. For each node, there is a node. A node can have one or more children. New nodes are defined as subclasses of TreeNode class. These objects are immutable in nature. The objects can be manipulated using functional transformation.

![1.png](/PNGfigures/catalyst/1.png)


![2.png](/PNGfigures/catalyst/2.png)


![3.png](/PNGfigures/catalyst/3.png)


![4.png](/PNGfigures/catalyst/4.png)


![5.png](/PNGfigures/catalyst/5.png)


![6.png](/PNGfigures/catalyst/6.png)


![7.png](/PNGfigures/catalyst/7.png)


![8.png](/PNGfigures/catalyst/8.png)


![9.png](/PNGfigures/catalyst/9.png)


![10.png](/PNGfigures/catalyst/10.png)


![11.png](/PNGfigures/catalyst/11.png)





By performing these transformations, the optimizer improves the execution times of relational queries and frees the developer from focusing on the semantics of their application instead of its performance.

Catalyst makes use of Scala’s powerful features such as pattern matching and runtime metaprogramming to allow developers to concisely specify complex relational optimizations.**
