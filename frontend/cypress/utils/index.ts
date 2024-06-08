const isDocker = Cypress.env("DOCKER_ENV");

export const host = isDocker ? "backend" : "localhost";
