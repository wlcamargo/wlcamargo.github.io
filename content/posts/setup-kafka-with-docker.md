# Setting up Apache Kafka locally with Docker

Real-time pipelines start by running Kafka somewhere — and you don't need a cloud account for that. The setup in
[`setup_kafka`](https://github.com/wlcamargo/setup_kafka) spins up a full broker + UI in under a minute.

## What you get

- A single **Kafka broker** (KRaft mode — no ZooKeeper needed)
- **Kafka UI** to browse topics, partitions and messages
- A **Python producer/consumer** example ready to run

## docker-compose

```yaml
services:
  kafka:
    image: bitnami/kafka:latest
    ports: ["9092:9092"]
    environment:
      KAFKA_CFG_NODE_ID: 0
      KAFKA_CFG_PROCESS_ROLES: controller,broker
      KAFKA_CFG_LISTENERS: PLAINTEXT://:9092,CONTROLLER://:9093
      KAFKA_CFG_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_CFG_CONTROLLER_QUORUM_VOTERS: 0@kafka:9093
      KAFKA_CFG_CONTROLLER_LISTENER_NAMES: CONTROLLER

  kafka-ui:
    image: provectuslabs/kafka-ui:latest
    ports: ["8080:8080"]
    environment:
      KAFKA_CLUSTERS_0_NAME: local
      KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS: kafka:9092
```

## Producer snippet

```python
from kafka import KafkaProducer
import json

producer = KafkaProducer(
    bootstrap_servers="localhost:9092",
    value_serializer=lambda v: json.dumps(v).encode("utf-8"),
)
producer.send("events", {"user_id": 42, "action": "click"})
producer.flush()
```

## Where to go next

- Add **Schema Registry** when payloads stabilise.
- Try **Kafka Connect** for sinking to Postgres / S3 without writing code.
- Replace polling consumers with **Spark Structured Streaming** for analytics workloads.

The repo includes a complete walkthrough — clone it and you're producing messages in 30 seconds.

---

## Resources

- 🐙 **GitHub repo:** [wlcamargo/setup_kafka](https://github.com/wlcamargo/setup_kafka)
- 📺 **Watch on YouTube:** [How to Insert Data into Kafka using Python](https://www.youtube.com/watch?v=9k8rj4ysG6M)
- 📺 Related: [Build Your Own Data Engineering Lab (100% Local & Free with Docker)](https://www.youtube.com/watch?v=v1gMhd7q-W8)
- 📺 More videos: [@wallacecamargo1043](https://www.youtube.com/@wallacecamargo1043)
