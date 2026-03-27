---
sidebar_position: 2
title: Getting Started
---

SparkPlusPlus is designed for teams that want a light framework on top of Apache Spark without introducing a full orchestration layer.

## What You Get

- `SparkETLApp[C]` as the fastest application entrypoint for common ETL jobs
- `SparkApp[C]` when you need a fully custom runtime flow
- `AppContext[C]` carrying `SparkSession`, typed config, CLI passthrough args, and logger
- YAML config decoding into Scala case classes
- simple IO through `ctx.readInput(...)` and `ctx.writeOutput(...)`
- `DataFrameUtils` and implicit DataFrame extensions

## Typical Flow

1. Define a Scala case class for your app config.
2. Extend `SparkETLApp[YourConfig]`.
3. Point the app at a YAML file with `--config`.
4. Implement business logic in `transform(ctx, inputs)`.

## First Real Use Case

A common SparkPlusPlus job looks like this:

- input datasets: `customers` and `orders`
- output table or files: `customer_orders`
- target format: Delta
- goal: join and curate datasets into a cleaner analytics table

If you want a fuller example, see [Use Case Examples](/use-cases/).

The GitHub repository also includes a runnable sample project at `samples/customer-orders` that mirrors this use case as a standalone Maven build.

## Minimal Example

```scala
import io.github.sparkplusplus.app.{AppContext, SparkApp, SparkETLApp}
import io.github.sparkplusplus.io.{InputDatasetConfig, OutputDatasetConfig}
import org.apache.spark.sql.DataFrame

final case class ExampleConfig(
  inputs: Seq[InputDatasetConfig],
  outputs: Seq[OutputDatasetConfig]
) extends SparkApp.WithInputDatasets with SparkApp.WithOutputDatasets

object ExampleJob extends SparkETLApp[ExampleConfig] {
  override protected def appName: String = "example-job"

  override protected def configClass: Class[ExampleConfig] = classOf[ExampleConfig]

  override protected def transform(
    ctx: AppContext[ExampleConfig],
    inputs: Map[String, DataFrame]
  ): Map[String, DataFrame] = {
    Map("output_orders" -> inputs("input_orders"))
  }
}
```

Matching YAML:

```yaml
inputs:
  - name: input_orders
    path: s3://bucket/raw/orders
    format: parquet
outputs:
  - name: output_orders
    path: s3://bucket/curated/orders
    format: parquet
    mode: overwrite
```
