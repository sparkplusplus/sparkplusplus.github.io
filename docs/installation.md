---
sidebar_position: 3
title: Installation
---

## Maven

Add SparkPlusPlus to your project:

```xml
<dependency>
  <groupId>io.github.sparkplusplus</groupId>
  <artifactId>sparkplusplus_2.12</artifactId>
  <version>0.0.1-SNAPSHOT</version>
</dependency>
```

Spark itself should usually stay as a provided dependency:

```xml
<dependency>
  <groupId>org.apache.spark</groupId>
  <artifactId>spark-sql_2.12</artifactId>
  <version>3.4.1</version>
  <scope>provided</scope>
</dependency>
```

## Scala Versions

The project is set up to support Scala `2.12` and `2.13` through Maven profiles.

## Build Locally

```bash
mvn test
mvn package
```

For Scala `2.13`:

```bash
mvn test -Pscala-2.13
mvn package -Pscala-2.13
```
