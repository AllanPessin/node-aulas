# Design Patterns - Strategy

## postgreSQL
sudo docker run \
 --name postgres \
 -e POSTGRES_USER=postgres \
 -e POSTGRES_PASSWORD=docker \
 -e POSTGRES_DB=heroes \
 -p 5431:5431 \
 -d \
 postgres

docker ps
docker exec -it postgres /bin/bash

sudo docker run \
  --name adminer \
  -p 8080:8080 \
  --link postgres:postgres \
  -d \
  adminer

  ## mongodb

sudo docker run \
  --name mongodb \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=admin \
  -d \
  mongo:4

sudo docker run \
  --name mongoclient \
  -p 3000:3000 \
  --link mongodb:mongodb \
  -d \
  mongoclient/mongoclient

sudo docker exec -it mongodb \
  mongo --host localhost -u admin -p admin --authenticationDatabase admin \
  --eval "db.getSiblingDB('herois').createUser({user: 'allan', pwd: 'docker', roles: [{role: 'readWrite', db: 'herois'}]})"