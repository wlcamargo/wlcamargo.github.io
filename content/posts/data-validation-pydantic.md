# Data validation in Python with Pydantic

Bad data kills pipelines silently. The earlier you catch a schema mismatch, the cheaper the fix.
[`pydantic_validator`](https://github.com/wlcamargo/pydantic_validator) shows a lightweight pattern I use in production.

## Why Pydantic?

- **Declarative schemas** — your model *is* the contract.
- **Coercion + validation** in one pass.
- **Speed**: v2 is written in Rust and is roughly 10x faster than v1.
- **Plays well with FastAPI, dbt-fal and Airflow**.

## A minimal validator

```python
from datetime import date
from pydantic import BaseModel, EmailStr, Field, ValidationError

class Customer(BaseModel):
    id: int = Field(gt=0)
    email: EmailStr
    signup_date: date
    revenue: float = Field(ge=0)

def validate_rows(rows: list[dict]) -> tuple[list[Customer], list[dict]]:
    ok, bad = [], []
    for r in rows:
        try:
            ok.append(Customer(**r))
        except ValidationError as e:
            bad.append({"row": r, "errors": e.errors()})
    return ok, bad
```

## Where this fits in a pipeline

```
extract → pydantic validate ──▶ write valid rows to bronze
                          └─▶ write rejects to quarantine (with reasons)
```

Storing the **rejected rows + reasons** in a separate table makes data quality issues debuggable for free — your analyst can SQL-query exactly what broke.

## Beyond Pydantic

For larger PySpark jobs I pair Pydantic at row level with **Great Expectations** or **Soda** at dataset level. Two complementary tools, two scopes.

---

## Resources

- 🐙 **GitHub repo:** [wlcamargo/pydantic_validator](https://github.com/wlcamargo/pydantic_validator)
- 📺 **Watch on YouTube:** [App de validação de dados com Streamlit](https://www.youtube.com/watch?v=8fmSFYOKmJI)
- 📺 Related: [Data Quality na teoria e na prática com SODA](https://www.youtube.com/watch?v=F2HFRKKdyz4)
- 📺 More videos: [@wallacecamargo1043](https://www.youtube.com/@wallacecamargo1043)
