import { IUserRepository } from '../../../domain/repositories';
import { UserDTO } from '../../../interfaces/dtos';
import { User } from '../../../domain/entities';

export class UpdateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * Update user
   * @id String
   * @data { name, email, password }: UserDTO
   **/
  async execute(id: string, data: UserDTO): Promise<User> {

    await this.userRepository.findById(id);

    return await this.userRepository.update(id, data);
  }
}
