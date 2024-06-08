## How To Use

To run this application, you'll need Docker and Git installed on your computer. \
 From your command line:

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

In order to see changes in the frontend you need to refresh the page after each non-GET request.

# Tests

In order to run the tests locally

```bash
# Go into the repository
$ cd Remote-Jobs-Proj

# To run backend unit tests
$ docker exec -it backend sh
$ npm test


# To run frontend unit tests
$ docker exec -it frontend sh
$ npm test

# The E2E test will validate on the default data, if you need to reset the data just run
$ docker-compose down
$ docker-compose up -d

# To run E2E tests, first make the backend is running and then run the following commands
$ docker exec -it frontend sh
$ npm run cy:run

```

Tests are also available on CI pipeline and are visible in the [actions](https://github.com/yuval1121/Remote-Jobs-Proj/actions) tab of the repo.

## Endpoints

GET http://localhost:3000/api/jobs \
POST http://localhost:3000/api/jobs \
PUT http://localhost:3000/api/jobs \
DELETE http://localhost:3000/api/jobs
