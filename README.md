# HelloWorld-Microservices

## Overview

This project is built to learn about the microservices architecture using Node.js and how to containerise and deploy the services using Kubernetes.

This repository consists of three microservices: Hello Service, World Service and HelloWorld Service, which are containerised and deployed on a Kubernetes cluster using Minikube. The Hello service returns the message "Hello", and the world service returns the message "World". The HelloWorld microservice calls both these services and outputs the combined output of both the services: "Hello World".

## Requirements

- Node.js: Required to locally run the applications.
- Docker: To build the images and containerise the services.
- Minikube: To create a local kubernetes cluster.
- Kubectl: To manage the local kubernetes cluster.

## Installation and setup

1. Clone the repository:

```bash
git clone https://github.com/Siddhant412/helloworld-microservice.git
```

2. Change the working directory:

```bash
cd helloworld-microservice/
```

3. Install packages: Run the following command inside the directory of each of the microservices

```bash
npm install
```

## Run the services locally: 
Navigate to each of the services and run the following command

```bash
npm start
```

- Accessing the services on a browser: Paste the respective URLs
  - For Hello service: http://localhost:4000/hello

  !['Hello' Output](https://drive.google.com/uc?id=1PX6ZeGcgPoj56bjaKu7k3HbTit7fP9og)

  - For World service: http://localhost:4001/world

  !['World' Output](https://drive.google.com/uc?id=1ZMYK0260vp8DVTQyN9c0z2C2GmMhFsie)

Note: HelloWorld service will return the desired output when all the services are deployed in the kubernetes cluster.

## Create Docker Images for each service: 
Navigate to the respective service and run the following command:

docker build -t &lt;image-name&gt; .

Example:

```bash
docker build -t hello-service:v1.0 .
docker build -t world-service:v1.0 .
docker build -t helloworld-service:v1.0 .
```

Verify the docker images:

```bash
docker images
```

![](https://drive.google.com/uc?id=1QEVczU-9XyEK3B-JSw9cXTj0cU1rXGYT)

## Running the Docker containers:

- Hello service:

```bash
docker run -p 4000:4000 --name hello-service-container hello-service:v1.0
```

- World service:

```bash
docker run -p 4001:4001 --name world-service-container world-service:v1.0
```

## Deploying the services in Kubernetes cluster:

Please refer to the Minikube and Kubectl installation guide [here](https://kubernetes.io/docs/tasks/tools/)

### Minikube setup

1. Start the minikube:

```bash
minikube start
```

2. Verify if minikube is running as expected:

```bash
kubectl get nodes
```

### Deploy the services

- Make sure the image names in the deployment.yaml files of all the services match the created image names.
- Navigate to the respective service directory and run the following commands.

1. Hello Service:

```bash
kubectl apply -f hello-deployment.yaml
kubectl apply -f hello-service.yaml
```

2. World Service:

```bash
kubectl apply -f world-deployment.yaml
kubectl apply -f world-service.yaml
```

3. HelloWorld Service:

```bash
kubectl apply -f helloworld-deployment.yaml
kubectl apply -f helloworld-service.yaml
```

### Verify the deployments

```bash
kubectl get deployments
kubectl get services
```

![](https://drive.google.com/uc?id=1bC6oRGGYEKZE2ncEmRuBHmMW73If8HMO)

![](https://drive.google.com/uc?id=1dGEnNPKQRjR4HOKD62G3r_YlHmVJfhZC)

## Accessing the services

1. Hello Service

Run the below command to get the url of the service and add the '/hello' endpoint at the end of the url to get 'Hello' as an output.

```bash
minikube service hello-service --url
```

![](https://drive.google.com/uc?id=1FTxQ-jjkKus0w2rkYr2szaivkV6Coai1)

2. World Service

Run the below command to get the url of the service and add the '/world' endpoint to get 'World' as an output.

```bash
minikube service world-service --url
```

![](https://drive.google.com/uc?id=1plcENHhf981nJ_ogeZ2Oy5Gk0cb-Pg4l)

3. HelloWorld Service

Run the below command to get the url of the service and add the '/helloworld' endpoint to get 'Hello World' as an output.

```bash
minikube service helloworld-service --url
```

![](https://drive.google.com/uc?id=1-NxBl-k01DRASkiDpuyF-Jwz2oM91eel)

#### To stop the Minikube cluster, run the below command:

```bash
minikube stop
```

#### To delete the Minikube cluster, run the below command:

```bash
minikube delete
```

#### Note:

- 'minikube stop' command will only stop the running cluster while preserving the state and configuration of the cluster. To start the cluster as it was, run 'minikube start'.
- 'minikube delete' command will completely delete the cluster along with the configurations, data and resources.

## Link to DockerHub:
https://hub.docker.com/repositories/siddhantraje