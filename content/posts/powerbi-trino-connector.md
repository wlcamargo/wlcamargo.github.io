# Connecting Power BI to Trino

Trino is a great federated query engine — but plugging it into Power BI took some custom work. That's what
[`powerbi-trino-connector`](https://github.com/wlcamargo/powerbi-trino-connector) solves.

## The problem

Power BI doesn't ship with a native Trino connector. You can hit Trino via a generic ODBC driver, but you lose Power Query's folding behaviour and authentication is awkward.

## The approach

Build a **Power Query M extension** (`.mez` file) that:

1. Authenticates against Trino (basic auth or JWT)
2. Exposes catalogs and schemas as navigation tables
3. Folds simple filters and aggregations back into SQL

## Why it matters

Trino lets you query S3 / Hive / Iceberg / Postgres / MongoDB **from a single endpoint**. Combine that with Power BI's modelling layer and you get a real virtual lakehouse — no ETL into a separate warehouse just to power dashboards.

## Trade-offs

- **Latency**: every visual is a SQL round-trip. Use Trino's query result cache or Dremio reflections if needed.
- **Concurrency**: Trino was designed for analytics, not OLTP — size your coordinator accordingly.
- **Direct Query only**: Import mode partially defeats the purpose; stick to Direct Query unless your dataset is tiny.

## Try it

The repo has step-by-step instructions for signing and installing the custom connector. Open an issue if you hit anything strange.

---

## Resources

- 🐙 **GitHub repo:** [wlcamargo/powerbi-trino-connector](https://github.com/wlcamargo/powerbi-trino-connector)
- 📺 **Watch on YouTube:** [Como conectar o Power BI no Trino](https://www.youtube.com/watch?v=4eWgjd1Etrw)
- 📺 More videos: [@wallacecamargo1043](https://www.youtube.com/@wallacecamargo1043)
