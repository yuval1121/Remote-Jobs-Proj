import crypto from "crypto";
import fastify from "../app";
import { test } from "tap";
import { JobItem } from "../types";

test("Get all jobs", async (t) => {
  // Get all jobs
  const { statusCode, payload } = await fastify.inject({
    method: "GET",
    url: "/api/jobs",
  });

  const data = JSON.parse(payload);

  // Verify that status code is 200
  t.equal(statusCode, 200);

  // Verify that the response is an object
  t.ok(Array.isArray(data));

  // Verify that the response contains the expected values
  for (const job of data) {
    t.match(job, {
      id: String,
      command: String,
      sample: String,
      user: String,
      group: String,
      status: String,
      date: String,
      completedDate: String,
    });
  }
});

test("Add a new job", async (t) => {
  // Create a new unique job object
  const object = {
    command: crypto.randomUUID(),
    sample: crypto.randomUUID(),
    user: crypto.randomUUID(),
    group: crypto.randomUUID(),
    status: crypto.randomUUID(),
    date: crypto.randomUUID(),
    completedDate: crypto.randomUUID(),
  };

  // Send a POST request to the server
  const { statusCode, payload } = await fastify.inject({
    method: "POST",
    url: "/api/jobs",
    body: object,
  });

  // Verify that status code is 200
  t.equal(statusCode, 200);

  const id = payload;

  Object.assign(object, {
    id,
  });

  // Get all jobs
  const newResponse = await fastify.inject({
    method: "GET",
    url: "/api/jobs",
  });

  const newData = JSON.parse(newResponse.payload);

  const newJob = newData.find((job: JobItem) => job.id === id);

  // Verify that the response contains the new job
  t.strictSame(newJob, object);
});

test("Update a job", async (t) => {
  // Get all jobs
  const { payload } = await fastify.inject({
    method: "GET",
    url: "/api/jobs",
  });

  const data = JSON.parse(payload);

  // Get the first job
  const job = data[0];

  // Update the job
  const updatedJob = {
    ...(job as JobItem),
    status: crypto.randomUUID(),
  };

  // Send a PUT request to the server
  const { statusCode } = await fastify.inject({
    method: "PUT",
    url: `/api/jobs/${job.id}`,
    body: updatedJob,
  });

  // Verify that status code is 200
  t.equal(statusCode, 200);

  // Get all jobs
  const newResponse = await fastify.inject({
    method: "GET",
    url: "/api/jobs",
  });

  const newData = JSON.parse(newResponse.payload).find(
    (job: JobItem) => job.id === updatedJob.id
  );

  // Verify that the job was updated
  t.strictNotSame(newData, job);
  t.strictSame(newData, updatedJob);
});

test("Delete a job", async (t) => {
  // Get all jobs
  const { payload } = await fastify.inject({
    method: "GET",
    url: "/api/jobs",
  });

  const data = JSON.parse(payload);

  // Get the first job
  const { id } = data[0];

  // Send a DELETE request to the server
  const { statusCode } = await fastify.inject({
    method: "DELETE",
    url: `/api/jobs/${id}`,
  });

  // Verify that status code is 200
  t.equal(statusCode, 200);

  // Get all jobs
  const newResponse = await fastify.inject({
    method: "GET",
    url: "/api/jobs",
  });

  const newJob = JSON.parse(newResponse.payload).find(
    (job: JobItem) => job.id === id
  );

  // Verify that the job was deleted
  t.notOk(newJob);
  t.strictNotSame(newJob, data);
});
