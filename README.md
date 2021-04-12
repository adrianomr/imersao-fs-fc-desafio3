# imersao-fs-fc-desafio3

## To start the application using kubernetes, run the following commands

### Start rest api

```
kubectl apply -f k8s/rest-api/deployment.yaml
kubectl expose -f k8s/rest-api/deployment.yaml
kubectl port-forward service/rest-api 3000
```

### Start react frontend
```
kubectl apply -f k8s/react-frontend/deployment.yaml
kubectl expose -f k8s/react-frontend/deployment.yaml
kubectl port-forward service/react-frontend 3001:80
```

Then, acess the application at http://localhost:3001