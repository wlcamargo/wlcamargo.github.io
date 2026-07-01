# Modern Data Stack: dbt + Dremio + Power BI

Building a modern analytics platform on open-source components is more practical than ever. In this post I walk through the stack used in my repo
[`engineering-python-dbt-dremio-pbi`](https://github.com/wlcamargo/engineering-python-dbt-dremio-pbi).

## The pieces

- **Python** for ingestion and orchestration
- **dbt** for SQL-first transformations and tests
- **Dremio** as the lakehouse query engine sitting on top of object storage
- **Power BI** as the semantic + visualization layer

## Why this combination?

dbt gives you **modularity, lineage and tests** for free. Dremio sits between your raw files (Parquet / Iceberg) and the BI tool, exposing them as queryable virtual datasets with sub-second response times via reflections. Power BI consumes those datasets natively.

## Pipeline shape

```
raw files (S3 / MinIO)
        │
        ▼
   Dremio (sources → views → reflections)
        │
        ▼
     dbt (staging → marts)
        │
        ▼
    Power BI (DirectQuery)
```

## Takeaways

- Keep raw ingestion **idempotent** — never trust source quality.
- Treat dbt as your **code-defined warehouse**: every business metric is reviewable in Git.
- Use Dremio reflections to **pre-materialize** heavy aggregations for the dashboard layer.

Check the full repo for `dbt_project.yml`, sample models and the docker-compose used during development. Walkthrough video coming on
[my YouTube channel](https://www.youtube.com/@wallacecamargo1043).

---

## Resources

- 🐙 **GitHub repo:** [wlcamargo/engineering-python-dbt-dremio-pbi](https://github.com/wlcamargo/engineering-python-dbt-dremio-pbi)
- 📺 **Watch on YouTube:** [Projeto end to end de engenharia de dados (Python, dbt, Dremio, Power BI)](https://www.youtube.com/watch?v=eiM05UZy-ag)
- 📺 More videos: [@wallacecamargo1043](https://www.youtube.com/@wallacecamargo1043)
