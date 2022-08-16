docker build --tag tribe:latest .
docker run --rm --network host tribe:latest
docker image rm tribe:latest