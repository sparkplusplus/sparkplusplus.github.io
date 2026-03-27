---
sidebar_position: 8
title: Testing
---

The repository currently separates framework tests from Spark-backed integration tests.

## Current Model

- pure unit tests cover `SparkApp` argument parsing, config loading, and lifecycle behavior
- Spark integration tests cover `DataFrameUtils`

## Practical Note

In restricted environments, local Spark tests may fail if Spark cannot bind ports. For that reason, the Spark-backed tests are tagged separately and excluded from the default `mvn test` path in constrained environments.

## Recommended Testing Strategy for Apps

- unit test config validation and small helper logic
- integration test transformations with local Spark where the environment supports it
- keep YAML examples in docs and tests aligned
