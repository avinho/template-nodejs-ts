import { UserRepository } from '../repositories/';
import { 
    CreateUserUseCase,
    FindUserByIdUseCase, 
    ListUsersUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase 
} from '../../app/useCases/user';
import { 
    CreateUserController, 
    ListUsersController, 
    FindUserByIdController,
    UpdateUserController,
    DeleteUserController         
} from '../../interfaces/controllers/user';

const userRepository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(userRepository);
export const createUserController = new CreateUserController(createUserUseCase);

const listUsersUseCase = new ListUsersUseCase(userRepository);
export const listUsersController = new ListUsersController(listUsersUseCase);

const findUserByIdUseCase = new FindUserByIdUseCase(userRepository);
export const findUserByIdController = new FindUserByIdController(findUserByIdUseCase);

const updateUserUseCase = new UpdateUserUseCase(userRepository);
export const updateUserController = new UpdateUserController(updateUserUseCase);

const deleteUserUseCase = new DeleteUserUseCase(userRepository);
export const deleteUserController = new DeleteUserController(deleteUserUseCase);
