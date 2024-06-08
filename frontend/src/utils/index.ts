const isDocker = import.meta.env?.VITE_DOCKER_ENV;

export const host = isDocker ? "backend" : "localhost";
