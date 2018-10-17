FROM python:3.7
ENV PYTHONUNBUFFERED 1

# Proxy
ARG PROXY
ENV http_proxy=$PROXY https_proxy=$PROXY no_proxy="selenium*,frontend,localhost"

# wait-for-it.sh from
# https://github.com/vishnubob/wait-for-it/
ENV PATH /tmp/scripts:$PATH
COPY wait-for-it.sh /tmp/scripts/wait-for-it.sh

WORKDIR /usr/src/app/backend

# Packages necessary for LDAP
RUN apt-get update && apt-get install -y libsasl2-dev python-dev libldap2-dev libssl-dev

# Python packages installation
ADD requirements.txt .
RUN pip install -r requirements.txt

WORKDIR /usr/src/app/backend/src
