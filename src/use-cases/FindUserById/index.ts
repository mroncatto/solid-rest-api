import { MongoUserRepository } from '../../repositories/implements/MongoUserRepository'
import { FindUserByIdController } from './FindUserByIdController'
import { FindUserByIdUseCase } from './FindUserByIdUseCase'

const mongoUserRepository = new MongoUserRepository()

const findUserByIdUseCase = new FindUserByIdUseCase(
  mongoUserRepository
)

const findUserByIdController = new FindUserByIdController(
  findUserByIdUseCase
)

export { findUserByIdUseCase, findUserByIdController }
