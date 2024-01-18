#!/bin/bash
# entrypoint.sh

set -e

if [ "$NODE_ENV" = "development" ]; then
    npm install
fi

npm run db:import

exec "$@"
