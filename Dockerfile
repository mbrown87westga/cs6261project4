# syntax=docker/dockerfile:1
FROM node:12-alpine

RUN npm install -g @angular/cli
RUN npm install -g http-server

WORKDIR /project

CMD ["sh", "/project/serve.sh"]
