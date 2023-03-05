import { FastifyReply, FastifyRequest } from 'fastify'
import { Controller } from '..'
import { CreateUserUseCase } from '../../../app/useCases/user'
import { userSchema } from '../../schemas'
import { handleError } from '../../errors'

export class CreateUserController implements Controller {
  constructor(private readonly useCase: CreateUserUseCase) {}

  /**
   * Método responsável por lidar com a requisição HTTP de criação de um novo usuário.
   * @param req FastifyRequest contendo informações da requisição.
   * @param res FastifyReply responsável por enviar a resposta da requisição.
   */
  async handle(req: FastifyRequest, res: FastifyReply): Promise<void> {
    try {
      const payload = await userSchema.parseAsync(req.body)
      
      const user = await this.useCase.execute(payload)

      res.status(201).send(user)
    } catch (err) {
      handleError(err, res)
    }
  }
  
}