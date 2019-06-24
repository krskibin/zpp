# ZPP
![](https://travis-ci.org/krskibin/zpp.svg?branch=master)

> Description here

## Table of Contents

- [Introduction](#introduction)
- [Structure](#structure)
- [Installation](#installation)
- [Commands](#commands)

## Introduction

Full project description here

## Structure

```bash
zpp
|   # Project main directory
│   README.md
│   docker-compose.yml
|
└───backend
│   │   # Python project files
│   │
│   └───src
|       |    # Django app files
|
└───frontend
|   │   # Vue Yarn project
|   │
│   └───src # Vue project files
|
└───bin
|   │   # Running Scripts (docker, backend, eslint, etc...)
|
└───scripts
|   |   #Database fill script
```

#### Templates

1. [Backend template inspiration](http://gregblogs.com/how-the-do-i-build-a-django-django-rest-framework-angular-1-1-x-and-webpack-project/#prereqs)
2. [Front end template](https://github.com/vuejs-templates/webpack)

#### Dependencies

1. [Docker](https://docs.docker.com/engine/installation)
2. [Docker Compose](https://docs.docker.com/compose/install)

---

## Installation

1. Install all dependancies and go to project root directory using bash console
2. Use `cp .env.template .env`, to copy environment
3. Build Docker container: run `docker-compose up --build` command
4. Run project using `docker-compose up` command
5. Apply Django migrations using `bin/migrate` command
7. Create Django superuser: `bin/backend-bash`, then `./manage.py createsuperuser` and follow the instructions
8. In your browser go to:
   1. localhost:8000 —> Backend API
   2. localhost:8080 —> Frontend app

## In case of troubles with first migrations
- ./manage.py makemigrations users
- ./manage.py sqlmigrate users 0001_initial

## In case of real troubles with migrations
- Delete migrations folders and go back to "In case of trouble with first migrations"

## Commands

**All commands working only in base project directory !**

| Command               | Usage                                    |
| --------------------- | ---------------------------------------- |
| bin/build             | Builds project Docker container          |
| bin/backend-bash      | Access to bash in backend container      |
| bin/backend-shell     | Access to django-shell in backend        |
| bin/migrate           | Applies Djnago database migrations       |
| bin/makemigrations    | Creates migration files for new models   |
| bin/pylint-run [path] | Runs python lint checker                 |
