FROM node:9.2.1

ARG proxy

ENV http_proxy=$proxy https_proxy=$proxy no_proxy="backend,localhost"

WORKDIR /usr/src/app

COPY package-lock.json package.json /tmp/

RUN cd /tmp && npm install && cd /usr/src/app && cp -a /tmp/node_modules .
