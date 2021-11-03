#!/usr/bin/env bash

  #--shm-size 1gb \
docker run -it --rm --init \
  --ipc host \
  --env DEBUG \
  --env ENVIRONMENT \
  --env PWDEBUG \
  --volume "$(pwd)":/srv/playwright-tests \
  --volume /srv/playwright-tests/node_modules \
  --workdir /srv/playwright-tests \
    mcr.microsoft.com/playwright:v1.16.0-focal \
    /bin/bash -c 'npm ci && npm test'