# Orchestrating dbt with Airflow and Snowflake

`dbt` is fantastic at modelling — but it doesn't schedule itself. In production, you almost always pair it with an orchestrator. Here's the pattern I use in
[`dbt-snowflake-airflow`](https://github.com/wlcamargo/dbt-snowflake-airflow).

## Why Airflow + dbt?

- **Airflow** handles scheduling, retries, alerting and inter-DAG dependencies.
- **dbt** handles SQL transformations, tests, snapshots and documentation.
- **Snowflake** is the compute + storage layer where models run.

## Recommended DAG shape

Don't run `dbt run` as a single task — it hides failures and kills retries.
Instead, use one of:

1. **`astronomer-cosmos`** — generates an Airflow task per dbt model.
2. **`BashOperator` + selectors** — for smaller projects, split into staging / marts / tests stages.

```python
dbt_staging = BashOperator(
    task_id="dbt_staging",
    bash_command="dbt run --select tag:staging --profiles-dir /opt/dbt",
)
dbt_tests = BashOperator(
    task_id="dbt_tests",
    bash_command="dbt test --select tag:staging",
)
dbt_staging >> dbt_tests
```

## Secrets

Never bake your Snowflake password into the image. Use Airflow Connections (or your secrets backend) and inject them via env vars in the dbt `profiles.yml`.

```yaml
target: prod
outputs:
  prod:
    type: snowflake
    account: "{{ env_var('SNOWFLAKE_ACCOUNT') }}"
    user:    "{{ env_var('SNOWFLAKE_USER') }}"
    password: "{{ env_var('SNOWFLAKE_PASSWORD') }}"
    warehouse: TRANSFORM_WH
    database: ANALYTICS
    schema: PROD
```

## What about cost?

Use **smaller warehouses** for tests and a separate warehouse for incremental runs. Auto-suspend after 60s. Tag dbt models with `materialized: incremental` whenever the source has reliable change markers.

Full DAG and docker setup in the repo.

---

## Resources

- 🐙 **GitHub repo:** [wlcamargo/dbt-snowflake-airflow](https://github.com/wlcamargo/dbt-snowflake-airflow)
- 📺 **Watch on YouTube:** [Engenharia de Dados com Apache Airflow, Snowflake e dbt](https://www.youtube.com/watch?v=mBrk5hvqc84)
- 📺 Bonus — CI/CD: [GitHub Actions + dbt + Snowflake](https://www.youtube.com/watch?v=frqwfqmhorU)
- 📺 More videos: [@wallacecamargo1043](https://www.youtube.com/@wallacecamargo1043)
