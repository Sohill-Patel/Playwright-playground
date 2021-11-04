#Get base image
FROM  mcr.microsoft.com/playwright:v1.16.0-focal
VOLUME "$(pwd)":/srv/playwright-tests 
VOLUME /srv/playwright-tests/node_modules 
WORKDIR /srv/playwright-tests

RUN ["/bin/bash", "-c", "playwright test"]
