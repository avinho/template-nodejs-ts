import { IUserRepository } from '../../../domain/repositories'
import { UserDTO } from '../../../interfaces/dtos'
import { User } from '../../../domain/entities'
import { UseCase } from '..'
import { hash } from 'bcrypt'

export class CreateUserUseCase implements UseCase<User> {
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * Create a new user
   * @name String
   * @email String
   * @password String
   */
  async execute({ name, email, password }: UserDTO): Promise<User> {

    const userAlreadyExists = await this.userRepository.findByEmail(email)

    if (userAlreadyExists) {
        throw new Error('User already exists')
    }

    const passHash = await hash(password,8)

    const user = {
      name,
      email,
      password: passHash,
    }

    return await this.userRepository.create(user)
  }
}
