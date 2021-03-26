import { MongoUserRepository } from '../../repositories/implements/MongoUserRepository'
import { FindUserController } from './FindUserController'
import { FindUserUseCase } from './FindUserUseCase'

const mongoUserUseCase = new MongoUserRepository()

const findUserUseCase = new FindUserUseCase(
  mongoUserUseCase
)

const findUserController = new FindUserController(
  findUserUseCase
)

export { findUserUseCase, findUserController }
