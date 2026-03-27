---
title: Contributing
sidebar_position: 1
---

This guide is for contributors who want to improve SparkPlusPlus itself, including the Scala framework, tests, docs site, and release automation.

## Areas You Can Contribute To

- framework APIs such as `SparkApp`, config loading, and utilities
- test coverage for framework and Spark-backed helpers
- docs and use-case examples
- build, publishing, and GitHub Actions improvements

## Local Setup

### Framework

Use Java 17 and Maven.

```bash
mvn test
mvn package
```

For Scala 2.13:

```bash
mvn test -Pscala-2.13
mvn package -Pscala-2.13
```

### Docs Site

This repository is the docs site source.

```bash
npm install
npm run start
```

To validate a production build:

```bash
npm run build
```

## Contribution Workflow

1. Fork or branch from `main`.
2. Make focused changes.
3. Run the relevant local checks.
4. Open a pull request with a clear summary of behavior changes.

Keep changes narrow when possible. Framework behavior, docs, and release automation can be reviewed faster when they are not mixed into one large PR without a reason.

## Testing Expectations

- add or update unit tests when framework behavior changes
- update docs examples when public APIs or config shapes change
- keep Spark-backed integration tests separate from pure framework tests

In restricted environments, local Spark tests may not run if Spark cannot bind ports. The repo already separates those tests accordingly.

## Docs Contributions

If you change a public API, also update:

- the main docs under `/docs/`
- the use-case examples under `/use-cases/` when relevant
- README examples if they no longer match the framework

## CI and Automation

Current GitHub Actions cover:

- docs build
- docs deploy to GitHub Pages

Contributors changing workflows should keep docs and deployment concerns focused on this repository. Framework build and release automation live in the main `sparkplusplus` repository.

## Release and Publishing Notes

SparkPlusPlus publishes Scala-specific Maven coordinates:

- `sparkplusplus_2.12`
- `sparkplusplus_2.13`

The repo keeps `sparkplusplus_2.12` as the baseline artifact id and switches to `sparkplusplus_2.13` only during the release workflow for Scala 2.13 publishing. If you change publishing logic, preserve that behavior unless you intentionally redesign the release model.

For deeper release details, refer to the repository’s `dev/` publishing notes.
