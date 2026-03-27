---
title: End-to-End Customer Orders
sidebar_position: 2
---

This is the simplest complete SparkPlusPlus use case. It shows how a developer can move from YAML config to a curated Delta output using `SparkETLApp` plus `inputs` and `outputs`.

## Goal

- read `customers` and `orders` as input datasets
- join them into `customer_orders`
- write `customer_orders` in Delta format
- keep Spark session settings in `sparkConfig`

## Why This Page Exists

Use this page when you want the shortest realistic example of how SparkPlusPlus is supposed to feel in day-to-day development:

- inputs and outputs declared once in YAML
- app code focused on business logic
- output behavior configured without changing Scala code

## YAML

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
  spark.databricks.delta.schema.autoMerge.enabled: "true"
```

## App

```scala
import io.github.sparkplusplus._
import io.github.sparkplusplus.app.{AppContext, SparkETLApp, SparkApp}
import io.github.sparkplusplus.io.{InputDatasetConfig, OutputDatasetConfig}
import org.apache.spark.sql.{DataFrame, SparkSession}
import org.apache.spark.sql.functions.{col, lower, to_date, trim}

final case class CustomerOrdersConfig(
  inputs: Seq[InputDatasetConfig],
  outputs: Seq[OutputDatasetConfig],
  sparkConfig: Map[String, String] = Map.empty
) extends SparkApp.WithInputDatasets with SparkApp.WithOutputDatasets with SparkApp.HasSparkConfig

object CustomerOrdersApp extends SparkETLApp[CustomerOrdersConfig] {

  override protected def appName: String = "customer-orders-app"

  override protected def configClass: Class[CustomerOrdersConfig] =
    classOf[CustomerOrdersConfig]

  override protected def configureSpark(
    builder: SparkSession.Builder,
    config: CustomerOrdersConfig
  ): SparkSession.Builder = {
    builder.config("spark.sql.extensions", "io.delta.sql.DeltaSparkSessionExtension")
  }

  override protected def transform(
    ctx: AppContext[CustomerOrdersConfig],
    inputs: Map[String, DataFrame]
  ): Map[String, DataFrame] = {
    val customers = inputs("customers")
      .select(
        col("customer_id"),
        trim(col("customer_name")).alias("customer_name"),
        trim(col("customer_segment")).alias("customer_segment")
      )

    val orders = inputs("orders")
      .select(
        col("order_id"),
        col("customer_id"),
        lower(trim(col("order_status"))).alias("order_status"),
        col("order_total"),
        to_date(col("created_at")).alias("order_date")
      )
      .dedup("order_id")

    val customerOrders = orders
      .join(customers, Seq("customer_id"), "left")
      .select(
        col("order_id"),
        col("customer_id"),
        col("customer_name"),
        col("customer_segment"),
        col("order_status"),
        col("order_total"),
        col("order_date")
      )

    Map("customer_orders" -> customerOrders)
  }
}
```

## Run It

```bash
spark-submit \
  --class example.CustomerOrdersApp \
  your-app.jar \
  --config conf/customer-orders.yaml
```

## End-to-End Flow

1. SparkPlusPlus loads the YAML config.
2. `inputs` and `outputs` are validated before Spark starts.
3. `sparkConfig` entries are applied to the Spark session.
4. `SparkETLApp.extract()` reads all configured inputs.
5. `transform(...)` joins and curates the records.
6. `SparkETLApp.load()` writes the returned `customer_orders` DataFrame.

## What the Developer Gets

- input and output paths live in YAML, not in code
- output behavior such as `mode`, `partitionBy`, and `repartition` is also in YAML
- the app code only focuses on Spark transforms
- `SparkETLApp` removes most IO boilerplate
- the same app can move between environments by changing only YAML

## Result

The output dataset is written to:

```text
s3://lakehouse/silver/customer_orders
```

Typical columns in the final Delta table:

- `order_id`
- `customer_id`
- `customer_name`
- `customer_segment`
- `order_status`
- `order_total`
- `order_date`

This is the recommended starting point before moving to the more advanced customer-orders variant.
