---
sidebar_position: 6
title: Runtime and AppContext
---

`AppContext[C]` is what your `run`, `extract`, `transform`, or `load` methods receive.

## Fields

```scala
final case class AppContext[C](
  spark: SparkSession,
  config: C,
  args: Seq[String],
  logger: Logger
)
```

## IO Helpers

If your config exposes `inputs` and `outputs`, `AppContext` also gives you:

```scala
ctx.input("customers")
ctx.output("customer_orders")
ctx.readInput("customers")
ctx.writeOutput(customerOrders, "customer_orders")
```

## When to Use It

- `ctx.spark` for reads, transforms, and writes
- `ctx.config` for typed application settings
- `ctx.args` for extra runtime flags outside the framework core
- `ctx.logger` for application-level logging
- `ctx.readInput(...)` and `ctx.writeOutput(...)` for simple config-driven IO

## Hooks Around Runtime

`SparkApp` gives you a few extension points before job logic runs:

- `validateConfig` for semantic checks
- `beforeSparkStart` for startup-side checks or logging
- `configureSpark` for Spark builder customization

These hooks keep setup code out of your actual business logic.
