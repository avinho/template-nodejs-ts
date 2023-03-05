import { FastifyReply, FastifyRequest } from 'fastify';
import { Controller } from '..'
import { ListUsersUseCase } from '../../../app/useCases/user';
import { handleError } from '../../errors';

export class ListUsersController implements Controller {
  constructor(private readonly useCase: ListUsersUseCase) {}

  /**
   * Método responsável por lidar com a requisição HTTP para listar todos os usuarios no banco de dados.
   * @param req FastifyRequest contendo informações da requisição.
   * @param res FastifyReply responsável por enviar a resposta da requisição.
   */
  async handle(req: FastifyRequest, res: FastifyReply): Promise<void>  {
    try {
      const users = await this.useCase.execute();

      res.status(201).send(users)
    } catch (err) {
      handleError(err, res)
    }
  }
}