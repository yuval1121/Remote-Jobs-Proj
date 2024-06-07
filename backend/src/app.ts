import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import jobs from "../static/jobs.json";
import { JobItem } from "./types";
import { addJob, deleteJob, updateJob } from "./services/job.service";
import { swaggerSpec } from "./utils/swagger";

const fastify = Fastify({ logger: true });

fastify.register(fastifyCors);
fastify.register(fastifySwagger, swaggerSpec);
fastify.register(fastifySwaggerUi, { routePrefix: "/docs" });

fastify.get("/api/jobs", (_, reply) => {
  reply.send(jobs);
});

fastify.post<{ Body: JobItem }>("/api/jobs", (request, reply) => {
  const { body } = request;

  const id = addJob(body);

  reply.send(id);
});

fastify.put<{ Params: { id: string }; Body: Partial<JobItem> }>(
  "/api/jobs/:id",
  (request, reply) => {
    const { id } = request.params;
    const { body } = request;

    try {
      updateJob(id, body);
    } catch {
      return reply.status(404).send("Not found");
    }

    reply.send(jobs);
  }
);

fastify.delete<{ Params: { id: string } }>(
  "/api/jobs/:id",
  (request, reply) => {
    const { id } = request.params;

    try {
      deleteJob(id);
    } catch {
      return reply.status(404).send("Not found");
    }

    reply.send(jobs);
  }
);

export { jobs };
export default fastify;
