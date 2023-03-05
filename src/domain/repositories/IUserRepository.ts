import { UserDTO } from '../../interfaces/dtos'
import { User } from '../../domain/entities'

export interface IUserRepository {
    create(data: UserDTO): Promise<User>
    findAll(): Promise<User[]>
    findByEmail(email: string): Promise<User | null>
    findById(id: string): Promise<User>
    update(id: string, data: UserDTO): Promise<User>
    delete(id: string): Promise<void>
}