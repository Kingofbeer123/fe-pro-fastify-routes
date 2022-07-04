import Fastify from 'fastify';

import { users } from './users';

const fastify = Fastify({
  logger: true,
});
fastify.register(import('@fastify/cors'));
fastify.register(import('@fastify/multipart'), {
  addToBody: true,
});
fastify.register(import('@fastify/cookie'));


fastify.post('/uppercase', (request, reply) => {
  let str = request.body.toUpperCase();
  if (body.includes('FUCK')) {
    return reply.status(403).send('unresolved');
  }
  else {
    return reply.status(200).send(body);
  }
});

fastify.post('/lowercase', (request, reply) => {
 let str = request.body.toLowerCase();
 if (body.includes('fuck')) {
    return reply.status(403).send('unresolved');
  }
  else {
    return reply.status(200).send(body);
  }
});

export default fastify;
