---
sidebar_position: 9
title: Publishing and Releases
---

SparkPlusPlus publishes Maven artifacts for Scala `2.12` and `2.13`.

## Coordinates

- `io.github.sparkplusplus:sparkplusplus_2.12`
- `io.github.sparkplusplus:sparkplusplus_2.13`

## Release Flow

The repo includes GitHub Actions for:

- Maven build and test on pushes and pull requests
- Sonatype publishing on tag pushes

## Notes

- the root `pom.xml` keeps a constant baseline artifact id for safer Central publishing
- Scala `2.13` publishing swaps the artifact id during the release workflow
- publishing configuration details live in the repo under `dev/`

Public users of SparkPlusPlus usually only need the dependency coordinates and released versions, not the internal release mechanics.
