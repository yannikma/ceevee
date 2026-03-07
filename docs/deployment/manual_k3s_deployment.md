# Manual Deployment to Hetzner via k3s

This guide walks you through deploying the Ceevee application to a Hetzner Cloud VM using a lightweight Kubernetes distribution (k3s).

## Prerequisites
* A Hetzner Cloud account.
* A registered domain name.
* Node.js application containerized (Dockerfile exists in the project).
* GitHub account with a Personal Access Token (PAT) with `write:packages` and `read:packages` scopes.
* `kubectl` installed on your local machine.

## Step 1: Provision a Hetzner Server
1. Log in to the Hetzner Cloud Console.
2. Create a new project or select an existing one.
3. Click "Add Server".
4. **Location:** Select the one closest to your target audience (e.g., Falkenstein, Nuremberg, or Helsinki).
5. **Image:** Ubuntu 24.04 (or 22.04).
6. **Type:** `CX22` (2 vCPU, 4GB RAM) or even `CX11` (1 vCPU, 2GB RAM) is sufficient for a simple k3s node. These are well under $10/month.
7. **SSH Keys:** Add your public SSH key for secure access.
8. **Name:** Give it a memorable name (e.g., `ceevee-node-1`).
9. Click "Create & Buy Now".
10. Note the public **IPv4 address** of the server once it's created.

## Step 2: Configure DNS
Point your domain to your new server.
1. Log in to your domain registrar's DNS control panel.
2. Create an `A` record for your domain (e.g., `ceevee.yourdomain.com` or `@` for the root) pointing to the server's public IPv4 address.

## Step 3: Install k3s on the Server
1. SSH into the server:
   ```bash
   ssh root@<YOUR_SERVER_IP>
   ```

2. Run the k3s installation script:
   ```bash
   curl -sfL https://get.k3s.io | sh -
   ```

3. Wait a few moments and verify the installation:
   ```bash
   kubectl get nodes
   ```
   You should see your node listed as `Ready`.

## Step 4: Access Cluster from Local Machine
To manage the cluster from your local machine, you need to copy the kubeconfig file.

1. On your local machine, run:
   ```bash
   scp root@<YOUR_SERVER_IP>:/etc/rancher/k3s/k3s.yaml ~/.kube/config-hetzner
   ```
2. Open `~/.kube/config-hetzner` locally and change `127.0.0.1` to `<YOUR_SERVER_IP>`.
3. Export the config path:
   ```bash
   export KUBECONFIG=~/.kube/config-hetzner
   ```
   *(You can also merge this into your main `~/.kube/config` file).*
4. Verify local access:
   ```bash
   kubectl get nodes
   ```

## Step 5: Build and Push Docker Image (GHCR)
You need to build your application image and push it to a registry so the cluster can pull it. We will use GitHub Container Registry (GHCR).

1. Log in to GHCR locally:
   ```bash
   echo $CR_PAT | docker login ghcr.io -u <YOUR_GITHUB_USERNAME> --password-stdin
   ```
2. Build the image:
   ```bash
   docker build -t ghcr.io/<YOUR_GITHUB_USERNAME>/ceevee:latest .
   ```
3. Push the image:
   ```bash
   docker push ghcr.io/<YOUR_GITHUB_USERNAME>/ceevee:latest
   ```

## Step 6: Authenticate k3s to pull from GHCR
Your k3s cluster needs permission to pull private images from GHCR.

1. Create a registry secret in the `ceevee` namespace (you will need to create the namespace first):
   ```bash
   kubectl create namespace ceevee
   kubectl create secret docker-registry ghcr-secret \
     --docker-server=ghcr.io \
     --docker-username=<YOUR_GITHUB_USERNAME> \
     --docker-password=<YOUR_CR_PAT> \
     --docker-email=<YOUR_EMAIL> \
     -n ceevee
   ```
2. Link the secret to the default service account so pods can use it:
   ```bash
   kubectl patch serviceaccount default -p '{"imagePullSecrets": [{"name": "ghcr-secret"}]}' -n ceevee
   ```

## Step 7: Update and Apply Manifests
1. Update `deploy/k8s/deployment.yaml`:
   * Replace `<your-github-username>` with your actual username.
2. Update `deploy/k8s/ingress.yaml`:
   * Replace `your-domain.com` with your actual domain.
3. Apply the manifests:
   ```bash
   kubectl apply -f deploy/k8s/
   ```

## Step 8: Verify Deployment
1. Check the status of your pods:
   ```bash
   kubectl get pods -n ceevee
   ```
2. Once the pod is `Running`, access your domain in a web browser. The k3s default Traefik ingress controller should route traffic correctly.

## Next Steps (Optional but Recommended)
* **HTTPS/SSL:** Install `cert-manager` on your k3s cluster to handle Let's Encrypt SSL certificates automatically.
* **CI/CD:** Set up GitHub Actions to automatically build and push the docker image, and update the deployment whenever you push to the `main` branch.
