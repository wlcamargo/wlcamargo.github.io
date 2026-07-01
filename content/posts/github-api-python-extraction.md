# Extracting data from the GitHub API with Python

The GitHub API is a goldmine for engineering analytics — commits per repo, PR throughput, contributor activity, language mix. The repo
[`get_data_from_github`](https://github.com/wlcamargo/get_data_from_github) is a small toolkit I built around it.

## Authenticate first

Unauthenticated requests are rate-limited to **60/hour per IP**. With a Personal Access Token you jump to **5000/hour**.

```python
import os, requests

HEADERS = {
    "Accept":        "application/vnd.github+json",
    "Authorization": f"Bearer {os.environ['GITHUB_TOKEN']}",
}
```

## Paginate cleanly

Don't write your own retry/pagination by hand — wrap it:

```python
def get_all(url):
    items = []
    while url:
        r = requests.get(url, headers=HEADERS, timeout=30)
        r.raise_for_status()
        items.extend(r.json())
        url = r.links.get("next", {}).get("url")
    return items

repos = get_all("https://api.github.com/users/wlcamargo/repos?per_page=100")
```

## Useful endpoints

| Endpoint | Useful for |
|---|---|
| `/users/{user}/repos` | Inventory |
| `/repos/{owner}/{repo}/commits` | Activity over time |
| `/repos/{owner}/{repo}/pulls?state=all` | Throughput / review cycles |
| `/repos/{owner}/{repo}/contents/{path}` | Reading files (for content sites) |
| `/repos/{owner}/{repo}/languages` | Language mix |

## Bonus: dump to Parquet

```python
import pandas as pd
df = pd.json_normalize(repos)
df.to_parquet("repos.parquet", index=False)
```

From there it's two SQL queries away from a "top repos by recent activity" dashboard.

The repo has a full CLI plus a few example notebooks.

---

## Resources

- 🐙 **GitHub repo:** [wlcamargo/get_data_from_github](https://github.com/wlcamargo/get_data_from_github)
- 🐙 More projects: [github.com/wlcamargo](https://github.com/wlcamargo)
- 📺 **YouTube channel:** [@wallacecamargo1043](https://www.youtube.com/@wallacecamargo1043) — tutorials on Data Engineering, Python and the modern data stack
