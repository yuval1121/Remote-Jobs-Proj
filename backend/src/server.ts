import fastify from "./app";

fastify.listen({ port: 3000, host: "0.0.0.0" }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.swagger();

  console.log("Server listening at http://localhost:3000");
  console.log("Swagger docs available http://localhost:3000/docs");
});
