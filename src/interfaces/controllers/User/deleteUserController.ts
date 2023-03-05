import { FastifyReply, FastifyRequest } from 'fastify';
import { Controller } from '..'
import { DeleteUserUseCase } from '../../../app/useCases/user';
import { findByIdSchema } from '../../schemas';
import { handleError } from '../../errors';

export class DeleteUserController implements Controller {
  constructor(private readonly useCase: DeleteUserUseCase) {}

  /**
   * Método responsável por lidar com a requisição HTTP de exclusão de um usuário.
   * @param req FastifyRequest contendo informações da requisição.
   * @param res FastifyReply responsável por enviar a resposta da requisição.
   */
  async handle(req: FastifyRequest, res: FastifyReply): Promise<void>  {
    try {
      const { id } = await findByIdSchema.parseAsync(req.params);

      await this.useCase.execute(id);

      res.status(200).send({ message: 'User deleted' })
    } catch (err) {
      handleError(err, res)
    }
  }
}