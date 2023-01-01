#! /usr/bin/env sh

# Exit in case of error
set -e

if [ -n "$PASSWORD" ]
then
  export HASHED_PASSWORD=$(openssl passwd -apr1 $PASSWORD)
  PROXY_EXTRA_MIDDLEWARES=${PROXY_EXTRA_MIDDLEWARES},${STACK_NAME?Variable not set}-auth
fi
export PROXY_EXTRA_MIDDLEWARES

docker-compose -f docker-compose.yml config \
| yq e '(.services[] | select(.depends_on | tag == "!!map")).depends_on |= (. | keys)' - \
| sed -E "s/cpus: ([0-9\\.]+)/cpus: '\\1'/" \
> docker-stack.yml

docker-auto-labels docker-stack.yml

docker stack deploy -c docker-stack.yml --with-registry-auth --prune "${STACK_NAME?Variable not set}"
