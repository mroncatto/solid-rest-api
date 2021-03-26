import { MongoUserRepository } from '../../repositories/implements/MongoUserRepository'
import { DeleteUserController } from './DeleteUserController'
import { DeleteUserUseCase } from './DeleteUserUseCase'

const mongoUserRepository = new MongoUserRepository()

const deleteUserUseCase = new DeleteUserUseCase(
  mongoUserRepository
)

const deleteUserController = new DeleteUserController(
  deleteUserUseCase
)

export { deleteUserUseCase, deleteUserController }
