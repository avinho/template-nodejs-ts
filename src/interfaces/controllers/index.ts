import { FastifyReply, FastifyRequest } from 'fastify';

export interface Controller {
  handle(request: FastifyRequest, reply: FastifyReply): Promise<void>;
}


