---
sidebar_position: 1
title: Intro to Spark Internals
sidebar_label: Intro
---

This series discuss the design and implementation of Apache Spark, with focuses on its design principles, execution mechanisms, system architecture and performance optimization. 
In addition, there's some comparisons with Hadoop MapReduce in terms of design and implementation. 

There are many ways to discuss a computer system. Here, We've chosen a **problem-driven** approach.  
Firstly one concrete problem is introduced, then it gets analyzed step by step. We'll start from a typical Spark example job and then discuss all the related important system modules. 
I believe that this approach is better than diving into each module right from the beginning.

The target audiences of this series are geeks who want to have a deeper understanding of Apache Spark as well as other distributed computing frameworks.

I'll try my best to keep this documentation up to date with Spark since it's a fast evolving project with an active community. 
The documentation's main version is in sync with Spark's version. The additional number at the end represents the documentation's update version.

For more academic oriented discussion, please check out Matei's PHD thesis and other related papers.
