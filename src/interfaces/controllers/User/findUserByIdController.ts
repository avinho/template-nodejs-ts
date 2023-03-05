import { FastifyReply, FastifyRequest } from 'fastify';
import { Controller } from '..'
import { FindUserByIdUseCase } from '../../../app/useCases/user';
import { findByIdSchema } from '../../schemas';
import { handleError } from '../../errors';

export class FindUserByIdController implements Controller {
  constructor(private readonly useCase: FindUserByIdUseCase) {}

  /**
   * Método responsável por lidar com a requisição HTTP para trazer os dados de um usuário.
   * @param req FastifyRequest contendo informações da requisição.
   * @param res FastifyReply responsável por enviar a resposta da requisição.
   */
  async handle(req: FastifyRequest, res: FastifyReply): Promise<void>  {
    try {
      const { id } = await findByIdSchema.parseAsync(req.params);

      const user = await this.useCase.execute(id);

      res.status(200).send(user)
    } catch (err) {
      handleError(err, res)
    }
  }
}