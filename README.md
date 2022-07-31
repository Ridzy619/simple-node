# Overview

This is a very simple, bare-bones NodeJS project created with Docker. The repository has a CI/CD pipeline setup with Travis-CI which continously integrates codes merged to the master branch. 

The code integration updates the docker images for the both the NodeJS app and the Nginx reverse-proxy.

The code also includes the yaml file for creating the EKS cluster on AWS using EKSCTL.

- Create a cluster by running `eksctl create cluster -f cluster.yaml`

## After Creating the Cluster

Run the following commands to create the pods and the api service for connecting to the pods. The pods will run the NodeJS application with the specified replicat set. Liveness probe has been configured which will ensure that the kubelet will attempt to recreate a new pod to replace an ailing one.

- `kubectl apply -f deployment.yaml`
- `kubectl apply -f service.yaml`

Run the following commands to create the pods for the reverse-proxy that sits in front of the application

- `kubectl apply -f ./nginx/deployment.yaml`
- `kubectl apply -f ./nginx/service.yaml`
