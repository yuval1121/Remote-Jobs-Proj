const isDocker = import.meta.env?.VITE_DOCKER_ENV === "true";

export const host = isDocker && window.Cypress ? "backend" : "localhost";
