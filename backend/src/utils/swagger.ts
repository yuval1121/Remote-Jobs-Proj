import { SwaggerOptions } from "@fastify/swagger";

export const swaggerSpec: SwaggerOptions = {
  openapi: {
    openapi: "3.0.0",
    info: {
      title: "Job Manager Demo API",
      description: "Testing the job manager demo API",
      version: "0.1.0",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Development server",
      },
    ],
    paths: {
      "/jobs": {
        get: {
          tags: ["Jobs"],
          summary: "Get all jobs",
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: { type: "string" },
                        title: { type: "string" },
                        description: { type: "string" },
                        location: { type: "string" },
                        salary: { type: "number" },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          tags: ["Jobs"],
          summary: "Create a new job",
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    id: { type: "string" },
                    command: { type: "string" },
                    sample: { type: "string" },
                    user: { type: "string" },
                    group: { type: "string" },
                    status: { type: "string" },
                    date: { type: "string" },
                    completedDate: { type: "string" },
                  },
                  required: [
                    "id",
                    "command",
                    "sample",
                    "user",
                    "group",
                    "status",
                    "date",
                    "completedDate",
                  ],
                },
              },
            },
          },
          responses: {
            "201": {
              description: "Job created successfully",
            },
            "400": {
              description: "Bad request",
            },
          },
        },
      },
      "/jobs/{id}": {
        put: {
          tags: ["Jobs"],
          summary: "Update a job by ID",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "ID of the job",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    id: { type: "string" },
                    command: { type: "string" },
                    sample: { type: "string" },
                    user: { type: "string" },
                    group: { type: "string" },
                    status: { type: "string" },
                    date: { type: "string" },
                    completedDate: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            "200": {
              description: "Job updated successfully",
            },
            "400": {
              description: "Bad request",
            },
            "404": {
              description: "Job not found",
            },
          },
        },
        delete: {
          tags: ["Jobs"],
          summary: "Delete a job by ID",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "ID of the job",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            "204": {
              description: "Job deleted successfully",
            },
            "404": {
              description: "Job not found",
            },
          },
        },
      },
    },
  },
};
