import { prisma } from '../database';
import { User } from '@prisma/client';
import { IUserRepository } from '../../domain/repositories';
import { UserDTO } from '../../interfaces/dtos';

export class UserRepository implements IUserRepository {
  /**
   * Create a new user
   * @name String
   * @email String
   * @password String
   */
  async create({ name, email, password }: UserDTO): Promise<User> {
    return prisma.user.create({
      data: {
        name,
        email,
        password,
      }
    });
  }

  /**
   * Find User by id
   * @id String
   */
  async findById(id: string): Promise<User> {
    return prisma.user.findUniqueOrThrow({
      where: { id },
    });
  }

  /**
   * Find User by email
   * @email String
   */
  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  /**
   * Show all users
   */
  async findAll(): Promise<User[]> {
    return prisma.user.findMany();
  }

  /**
   * Update user
   * @id String
   * @data { name, email, password }
   **/
  async update(id: string, data: UserDTO): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  /**
   * Delete user
   * @id String
   **/
  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: { id },
    });
  } 
}