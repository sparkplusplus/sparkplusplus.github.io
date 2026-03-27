---
title: Advanced customer_orders with Schema and Curated Output
---

This version of `customer_orders` builds on the basic end-to-end example and adds two common production needs:

- schema-controlled input loading
- cleaner curated output columns before the Delta write

The repository includes a runnable Maven sample for this flow under `samples/customer-orders`. That sample defaults to local Parquet output so it can run without extra Delta Lake packages, while keeping the same business transformation shape shown here.

## Goal

- input datasets: `customers` and `orders`
- output dataset: `customer_orders`
- output format: Delta
- objective: join customer master data with orders and publish a curated analytics-ready table
- extra requirement: keep input parsing deterministic and clean the output shape before publishing

## When to Use This Pattern

Use this version when:

- CSV or JSON inputs should not rely on schema inference
- raw source columns need cleanup before publishing
- the published table should follow a cleaner naming standard
- you want to flatten nested business structures before writing

## Example App

```scala
import io.github.sparkplusplus._
import io.github.sparkplusplus.app.{AppContext, SparkApp, SparkETLApp}
import io.github.sparkplusplus.io.{InputDatasetConfig, OutputDatasetConfig}
import org.apache.spark.sql.{DataFrame, SparkSession}
import org.apache.spark.sql.functions.{col, lower, struct, to_date, trim}

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
        struct(
          col("customer_id"),
          col("customer_name"),
          col("customer_segment")
        ).alias("customer"),
        struct(
          col("order_status"),
          col("order_total"),
          col("order_date")
        ).alias("order")
      )
      .flattenFields()
      .makeColumnNamesAvroCompliant()

    Map("customer_orders" -> customerOrders)
  }
}
```

## Example YAML

```yaml
inputs:
  - name: customers
    path: s3://lakehouse/raw/customers.json
    format: json
    schemaPath: schemas/customers.json
    filter: customer_status = 'ACTIVE'
  - name: orders
    path: s3://lakehouse/raw/orders.csv
    format: csv
    options:
      header: "true"
      delimiter: ","
    schemaPath: schemas/orders.json
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

## What Is Different from the Basic Example

- input schemas are fixed with `schemaPath`
- the `customers` input is filtered at read time through config
- input formats can differ across datasets
- the output is reshaped through nested business structs
- `flattenFields()` converts nested structs into stable top-level columns
- `makeColumnNamesAvroCompliant()` normalizes final column names before writing

## Typical Final Output Columns

- `order_id`
- `customer_customer_id`
- `customer_customer_name`
- `customer_customer_segment`
- `order_order_status`
- `order_order_total`
- `order_order_date`

This version is useful when raw datasets are messy but you still want a small app with predictable IO behavior.
