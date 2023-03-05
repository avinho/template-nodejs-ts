import { UseCase } from '..';
import { IUserRepository } from '../../../domain/repositories';

export class DeleteUserUseCase implements UseCase<void> {
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * Delete user
   * @id String
   **/
  async execute(id: string): Promise<void> {

    await this.userRepository.findById(id);

    await this.userRepository.delete(id);
  }
}