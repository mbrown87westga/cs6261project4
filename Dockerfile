# syntax=docker/dockerfile:1
FROM node:12-alpine

RUN npm install -g @angular/cli
RUN npm install -g http-server

ADD serve.sh /project/serve.sh

WORKDIR /project

CMD ["serve.sh"]
