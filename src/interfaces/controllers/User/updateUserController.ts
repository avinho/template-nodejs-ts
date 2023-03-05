import { FastifyReply, FastifyRequest } from 'fastify'
import { Controller } from '..'
import { UpdateUserUseCase } from '../../../app/useCases/user'
import { findByIdSchema, userSchema } from '../../schemas'
import { handleError } from '../../errors'

export class UpdateUserController implements Controller {
  constructor(private readonly useCase: UpdateUserUseCase) {}

  /**
   * Método responsável por lidar com a requisição HTTP para atualizar os dados de um usuário.
   * @param req FastifyRequest contendo informações da requisição.
   * @param res FastifyReply responsável por enviar a resposta da requisição.
   */
  async handle(req: FastifyRequest, res: FastifyReply): Promise<void> {
    try {
        
        const { id } = await findByIdSchema.parseAsync(req.params);
        
        const payload = await userSchema.parseAsync(req.body)
      
        const user = await this.useCase.execute(id, payload)

        res.status(201).send(user)
    } catch (err) {
      handleError(err, res)
    }
  }
  
}