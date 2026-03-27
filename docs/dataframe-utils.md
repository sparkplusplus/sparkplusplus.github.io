---
sidebar_position: 7
title: DataFrame Utilities
---

SparkPlusPlus also includes a utility layer for common `DataFrame` tasks.

## Available Helpers

- `dedup`
- `addRowNumber`
- `countNulls`
- `getBasicStats`
- `renameColumns`
- `flattenFields`
- `makeColumnNamesAvroCompliant`

## Object API

```scala
import io.github.sparkplusplus.DataFrameUtils

val deduped = DataFrameUtils.dedup(df, Seq("order_id"))
```

## Implicit Extension API

```scala
import io.github.sparkplusplus._

val deduped = df.dedup("order_id")
val numbered = df.addRowNumber("row_id", "created_at")
```

Use these helpers as conveniences inside your Spark apps, not as a replacement for clear transformation code.
