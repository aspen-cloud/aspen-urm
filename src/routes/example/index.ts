import { FastifyPluginAsync } from "fastify";

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    const db = await fastify.pg.connect();
    // TODO do query
    // const {
    //   rows,
    // } = await client.query(
    //   "SELECT id, username, hash, salt FROM users WHERE id=$1",
    //   [req.params.id],
    // );
    db.release();
    return "this is an example";
  });
};

export default example;
