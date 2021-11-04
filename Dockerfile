#Get base image
FROM  mcr.microsoft.com/playwright:v1.16.0-focal
COPY . /srv/playwright-tests 
VOLUME /srv/playwright-tests/node_modules 
CMD ["cd","/srv/playwright-tests"]
RUN ["/bin/bash", "-c","npm ci"]
ENTRYPOINT [ "runtests.sh" ]
