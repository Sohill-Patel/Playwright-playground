#Get base image
FROM  mcr.microsoft.com/playwright:v1.16.0-focal

COPY /fixture /srv/salesforce-playwright-tests 
COPY /tests /srv/salesforce-playwright-tests 
COPY /package-lock.json /srv/salesforce-playwright-tests 
COPY /package.json /srv/salesforce-playwright-tests 
VOLUME /srv/salesforce-playwright-tests 

WORKDIR /srv/salesforce-playwright-tests

RUN cd /srv/salesforce-playwright-tests/ 
RUN npm install

CMD ["npm", "run", "test"]
#ENTRYPOINT ["/bin/bash", "-c", "/srv/salesforce-playwright-tests/runtests.sh" ]
