---
title: Use Case Examples
sidebar_position: 1
---

This section shows practical SparkPlusPlus jobs built around common data engineering patterns.

Current examples:

- [End-to-end `customer_orders`](./end-to-end-customer-orders.md)
- [Advanced `customer_orders` with schema and curated output](./customer-orders.md)

These two pages are intentionally different:

- `End-to-End Customer Orders`
  - best starting point
  - shows the full flow with the smallest useful app
- `Advanced customer_orders`
  - adds schema-controlled input and extra output cleanup
  - useful when moving from a proof of concept to a production-style job

Both examples keep the same framework shape:

- `inputs` and `outputs` in YAML
- `SparkETLApp` entrypoint
- Spark session settings from `sparkConfig`
- application logic focused on joins, transforms, and returning named outputs

The repository also contains a runnable standalone sample project at `samples/customer-orders` for teams that want the use case as a complete Maven application instead of only markdown snippets.
