# Three-Tier Architecture with Serverless

![alt text](image-2.png)

- Static content is stored on an amazon bucket
- Dynamic content is dealt by API gateway
- Business logic is on AWS Lambda

## Serverless Design

- We dont have to worry about scalability and HA. This is done automatically.

## 3-tier with Kubernetes

![alt text](image-3.png)

At least 2 pods on different zones.

- Cluster autoscaler
- Load balancer Ingress
- Pods are stateless

![alt text](image-4.png)
