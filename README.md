## How To Use

To run this application, you'll need Docker installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/yuval1121/Remote-Jobs-Proj.git

# Go into the repository
$ cd Remote-Jobs-Proj

# Run with Docker
$ docker-compose up -d

```

# Frontend

Open browser and enter url: http://localhost:5173

# Backend

Open browser and enter url: http://localhost:3000/docs for swagger docs

# Tests

Tests are available on CI pipeline and are visible in the actions tab of repo.

In order to run locally

```bash
# Go into the repository
$ cd Remote-Jobs-Proj

# To run backend unit tests
$ docker exec -it backend sh
$ npm test


# To run frontend unit tests
$ docker exec -it frontend sh
$ npm test

# To run E2E tests, first make the backend is running and then run
$ docker exec -it frontend sh
$ npm run cy:run

```

## Endpoints

GET http://localhost:3000/api/jobs
POST http://localhost:3000/api/jobs
PUT http://localhost:3000/api/jobs
DELETE http://localhost:3000/api/jobs
