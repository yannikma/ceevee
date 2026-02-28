# Low-Cost Kubernetes Deployment Strategy

* **Status:** accepted
* **Date:** 2026-02-28

## Context and Problem Statement

The application is in a stable, ready-to-deploy state. We need a reliable hosting environment to deploy it. Because this is a personal open-source "fun-project," computing costs must remain strictly under $10/month. Additionally, the setup must be vendor-agnostic so that we do not get locked into a specific cloud provider's proprietary systems, ensuring high portability across different environments. 

How and where should we deploy our application using Kubernetes while respecting the hard cost limit and portability constraints?

## Considered Options

* Hetzner Cloud VM + k3s
* Civo Cloud Managed k3s
* Oracle Cloud Free Tier (ARM) + k3s
* Basic VPS (DigitalOcean / Linode / Vultr) + k3s

## Decision Outcome

Chosen option: "Hetzner Cloud VM + k3s", because it offers an unbeatable price-to-performance ratio well below the $10/month limit. Utilizing k3s on a bare Linux VM ensures a fully standard, vendor-agnostic Kubernetes environment. This means we avoid vendor lock-in and can effortlessly migrate to another VPS provider in the future simply by moving our Kubernetes manifests and persistent data.

### Positive Consequences

* **Extremely low monthly cost:** Fits comfortably under the $10/month limit (around €4/month for highly capable nodes).
* **High vendor neutrality:** No reliance on proprietary managed Kubernetes services; it's just standard container orchestration on a Linux box.
* **Full control:** Complete access to the cluster configuration, node resources, and networking layers.
* **Flexibility:** Easy to switch to any other cloud provider by simply spinning up another generic Linux VM and installing k3s.

### Negative Consequences

* **Operational overhead:** We must manage the underlying operating system updates, basic security (firewalls, SSH keys), and k3s cluster upgrades manually.
* **Availability risks:** A single-node cluster means there is no high availability (HA) control plane or worker redundancy by default.
