import fastify from "./app";

fastify.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
  console.log("Server listening at", address);
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
