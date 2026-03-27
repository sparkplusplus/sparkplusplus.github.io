---
sidebar_position: 4
title: SparkApp and SparkETLApp
---

SparkPlusPlus has two application entrypoints:

- `SparkApp[C]` for custom runtime control
- `SparkETLApp[C]` for framework-managed ETL jobs

## Core Contract

For `SparkApp`, you implement:

- `appName`
- `configClass`
- `run(ctx)`

For `SparkETLApp`, you typically implement:

- `appName`
- `configClass`
- `transform(ctx, inputs)`

You can also override:

- `validateConfig(config)`
- `configureSpark(builder, config)`
- `beforeSparkStart(config, args, logger)`
- `extract(ctx)`
- `load(ctx, outputs)`

## Example

This example reads `customers` and `orders`, joins them, and writes a curated `customer_orders` dataset in Delta format.

```scala
import io.github.sparkplusplus._
import io.github.sparkplusplus.app.{AppContext, SparkApp, SparkETLApp}
import org.apache.spark.sql.{DataFrame, SparkSession}
import io.github.sparkplusplus.io.{InputDatasetConfig, OutputDatasetConfig}
import org.apache.spark.sql.functions.{col, lower, trim}

final case class OrdersConfig(
  inputs: Seq[InputDatasetConfig],
  outputs: Seq[OutputDatasetConfig],
  sparkConfig: Map[String, String] = Map.empty
) extends SparkApp.WithInputDatasets with SparkApp.WithOutputDatasets with SparkApp.HasSparkConfig

object OrdersJob extends SparkETLApp[OrdersConfig] {
  override protected def appName: String = "orders-job"

  override protected def configClass: Class[OrdersConfig] = classOf[OrdersConfig]

  override protected def configureSpark(
    builder: SparkSession.Builder,
    config: OrdersConfig
  ): SparkSession.Builder = {
    builder
      .config("spark.sql.extensions", "io.delta.sql.DeltaSparkSessionExtension")
  }

  override protected def transform(
    ctx: AppContext[OrdersConfig],
    inputs: Map[String, DataFrame]
  ): Map[String, DataFrame] = {
    val customers = inputs("customers")
      .select(
        col("customer_id"),
        trim(col("customer_name")).alias("customer_name"),
        col("customer_segment")
      )

    val orders = inputs("orders")
      .select(
        col("order_id"),
        col("customer_id"),
        lower(trim(col("order_status"))).alias("order_status"),
        col("order_total"),
        col("created_at")
      )
      .dedup("order_id")

    val customerOrders = orders
      .join(customers, Seq("customer_id"), "left")

    Map("customer_orders" -> customerOrders)
  }
}
```

Example YAML:

```yaml
inputs:
  - name: customers
    path: s3://lakehouse/raw/customers
    format: parquet
  - name: orders
    path: s3://lakehouse/raw/orders
    format: parquet
outputs:
  - name: customer_orders
    path: s3://lakehouse/silver/customer_orders
    format: delta
    mode: overwrite
    partitionBy:
      - order_date
    repartition: 200
sparkConfig:
  spark.sql.shuffle.partitions: "200"
  spark.sql.session.timeZone: UTC
```

In this example, `sparkConfig` is applied automatically to the Spark session before `configureSpark(...)` runs.
The `inputs` and `outputs` sections are also discovered automatically and made available through `ctx.readInput(...)` and `ctx.writeOutput(...)`.

## Runtime Sequence

When `main(args)` runs, SparkPlusPlus:

1. parses CLI args and requires `--config`
2. loads YAML into your config type
3. validates config
4. creates a logger
5. builds the `SparkSession`
6. calls `run(ctx)` or orchestrates `extract -> transform -> load`
7. stops Spark in a `finally` block
