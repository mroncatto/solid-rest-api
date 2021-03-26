import { MongoUserRepository } from '../../repositories/implements/MongoUserRepository'
import { UpdateUserController } from './UpdateUserController'
import { UpdateUserUseCase } from './UpdateUserUseCase'

const mongoUserRepository = new MongoUserRepository()

const updateUserUseCase = new UpdateUserUseCase(
  mongoUserRepository
)

const updateUserController = new UpdateUserController(
  updateUserUseCase
)

export { updateUserUseCase, updateUserController }
