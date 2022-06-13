const path = require("path");
const fastify = require("fastify")({
  logger: true,
});

fastify
  .register(require("@fastify/formbody"))
  .register(require("@fastify/static"), {
    root: path.join(__dirname, "public"),
  });

const sleep = (time = 3_000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

fastify.get("/", async (request, reply) => {
  return reply.sendFile("index.html");
});

fastify.post("/submission", async (request, reply) => {
  console.log("Processing: ", request.id, request.body.firstName);

  await sleep();

  return reply.send({
    ...request.body,
    requestId: request.id,
  });
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
