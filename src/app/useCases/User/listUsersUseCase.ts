import { IUserRepository } from '../../../domain/repositories'
import { User } from '../../../domain/entities'

export class ListUsersUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * Show all users
   */
  async execute(): Promise<User[]> {
    return await this.userRepository.findAll()
  }
}
