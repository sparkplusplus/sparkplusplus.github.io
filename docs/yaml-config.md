---
sidebar_position: 5
title: YAML Config
---

SparkPlusPlus expects application config to come from a YAML file passed with `--config`.

## CLI Pattern

```bash
spark-submit \
  --class example.OrdersJob \
  your-app.jar \
  --config conf/orders.yaml \
  --env dev
```

Arguments that are not consumed by SparkPlusPlus remain available through `ctx.args`.

## Example Config

```yaml
inputs:
  - name: customers
    path: s3://lakehouse/raw/customers
    format: parquet
    filter: is_active = true
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

## Input and Output Rules

Each input entry must define:

- `name`
- `path`
- `format`

Inputs may additionally define:

- `schemaPath`
- `schemaJson`
- `filter`
- `options`

Each output entry must define:

- `name`
- `path`
- `format`

Outputs may additionally define:

- `mode`
- `partitionBy`
- `repartition`
- `coalesce`
- `options`

SparkPlusPlus validates these combinations before the application starts.

Validation highlights:

- names must be unique within `inputs`
- names must be unique within `outputs`
- names must also be unique across both sections
- `schemaPath` and `schemaJson` cannot be used together
- `repartition` and `coalesce` cannot be used together
- blank filters fail fast

## Config Concepts

- `partitionBy` controls how an output dataset is physically written.
- `repartition` and `coalesce` control how many Spark partitions are present before the write.
- `spark.sql.shuffle.partitions` is a Spark session setting, not an output dataset property.

Keep Spark execution tuning in `sparkConfig`. Keep dataset-specific write behavior in the matching `outputs` entry.

## Applying Spark Session Config

If your config case class exposes a `sparkConfig: Map[String, String]` field, SparkPlusPlus will automatically apply those entries to the `SparkSession.Builder` before your app-specific `configureSpark(...)` hook runs.

This is useful for settings such as:

- shuffle partitions
- timezone
- Delta-related Spark settings
- serializer and SQL behavior flags

## Supported Shapes

The loader currently supports:

- case classes
- nested case classes
- lists and sequences
- `Map[String, T]`
- `Option[T]`
- default constructor values

## Validation Behavior

- unknown YAML fields fail fast
- missing required fields fail fast
- optional fields map to `None` when omitted
- default parameter values are used when defined in the case class
- `sparkConfig` maps can be supplied in YAML and are added to the Spark session automatically
- duplicate dataset names fail fast
- invalid dataset field combinations fail fast
