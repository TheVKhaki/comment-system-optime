#! /usr/bin/env sh

# Exit in case of error
set -e

./scripts/build.sh

docker-compose -f docker-compose.yml push
