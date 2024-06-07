import Fastify from "fastify";
import jobs from "../static/jobs.json";
import { JobItem } from "./types";
import crypto from "crypto";
import fastifyCors from "@fastify/cors";

const fastify = Fastify({ logger: true });

fastify.register(fastifyCors);

fastify.get("/api/jobs", (_, reply) => {
  reply.send(jobs);
});

fastify.post<{ Body: JobItem }>("/api/jobs", (request, reply) => {
  const { body } = request;

  // if (Array.isArray(body)) {
  //   const ids: string[] = [];

  //   for (const job of body) {
  //     const id = crypto.randomUUID();

  //     jobsData[id] = job;
  //   }

  //   return reply.send(ids);
  // }

  const id = crypto.randomUUID();

  jobs.push({ ...body, id });

  reply.send(id);
});

fastify.put<{ Params: { id: string }; Body: Partial<JobItem> }>(
  "/api/jobs/:id",
  (request, reply) => {
    const { id } = request.params;
    const { body } = request;
    const job = jobs.find((job) => job.id === id);

    if (!job) {
      reply.status(404).send();
      return;
    }

    Object.assign(job, body);

    reply.send(jobs);
  }
);

fastify.delete<{ Params: { id: string } }>(
  "/api/jobs/:id",
  (request, reply) => {
    const { id } = request.params;
    const job = jobs.find((job) => job.id === id);

    if (!job) {
      reply.status(404).send();
      return;
    }

    jobs.splice(jobs.indexOf(job), 1);

    reply.send(jobs);
  }
);

export default fastify;
