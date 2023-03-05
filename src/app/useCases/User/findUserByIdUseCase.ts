import { IUserRepository } from '../../../domain/repositories'
import { User } from '../../../domain/entities'

export class FindUserByIdUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * Find User by id
   * @id String
   */
  async execute(id: string): Promise<User> {
    return await this.userRepository.findById(id)
  }
}
