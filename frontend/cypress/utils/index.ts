const isDocker = Cypress.env("DOCKER_ENV");

export const host = isDocker && window.Cypress ? "backend" : "localhost";
