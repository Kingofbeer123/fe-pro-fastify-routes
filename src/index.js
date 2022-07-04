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
  if (str.includes('FUCK')) {
    return reply.status(403).send('unresolved');
  }
  else {
    return reply.status(200).send(str);
  }
});

fastify.post('/lowercase', (request, reply) => {
  let str = request.body.toLowerCase();
  if (str.includes('fuck')) {
      return reply.status(403).send('unresolved');
    }
    else {
      return reply.status(200).send(str);
    }
});

fastify.get('/user/:id', (request, reply) => {
  let id = request.params.id;
  if (users[id]) {
    reply.status(200).send(users[id]);
  }
  else {
    reply.status(400).send('User not exist');
  }
});

fastify.get('/users', (request, reply) => {
  let usersArray = Object.values(users);
  let { filter, value } = request.query;

  if (request.query) {

    
  }

});

export default fastify;
