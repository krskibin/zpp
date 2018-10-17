# ZPP

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
│   │   # Python Django project (otracker)
│   │
│   └───api
│   |
|   └───zpp
|
└───frontend
|   │   # Vue Yarn project
|   │
│   └───src
|   │   │   # Vue project files
|
└───bin
|   │   #  Running Scripts (docker, backend, eslint, etc...)
|
└───scripts
|   |	Database fill script
```

#### Templates

1. [Backend template inspiration](http://gregblogs.com/how-the-do-i-build-a-django-django-rest-framework-angular-1-1-x-and-webpack-project/#prereqs)
2. [Front end template](https://github.com/vuejs-templates/webpack)

#### Dependencies

1. [Docker](https://docs.docker.com/engine/installation)
2. [Docker Compose](https://docs.docker.com/compose/install)
3. [Node.js](https://nodejs.org/en/download/package-manager/) (Optional)
4. [Yarn](https://yarnpkg.com/en/)* (Optional)

---
## Installation

1. Install all dependancies and go to project root directory using bash console
2. Build Docker container: run `docker-compose up --build` command
4. Run project using `docker-compose up` command
5. Apply Django migrations using `bin/migrate` command
6. Create Django superuser: `bin/backend-bash`, then `./manage.py createsuperuser` and follow the instructions
7. In your browser go to:
   1. localhost:8000 —> Backend API
   2. localhost:8080 —> Frontend app
