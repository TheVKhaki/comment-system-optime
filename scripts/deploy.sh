#! /usr/bin/env sh

# Exit in case of error
set -e

PROXY_EXTRA_MIDDLEWARES=${PROXY_EXTRA_MIDDLEWARES}${PROXY_AUTH:+,${STACK_NAME?Variable not set}-auth}

DOMAIN=${DOMAIN?Variable not set} \
TRAEFIK_PUBLIC_NETWORK=${TRAEFIK_PUBLIC_NETWORK?Variable not set} \
TRAEFIK_TAG=${TRAEFIK_TAG?Variable not set} \
STACK_NAME=${STACK_NAME?Variable not set} \
TAG=${TAG?Variable not set} \
PROXY_EXTRA_MIDDLEWARES=${PROXY_EXTRA_MIDDLEWARES} \
docker-compose \
-f docker-compose.yml \
config > docker-stack.yml

docker-auto-labels docker-stack.yml

docker stack deploy -c docker-stack.yml --with-registry-auth "${STACK_NAME?Variable not set}"
