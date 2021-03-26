import { EncryptPwdProvider } from '../../providers/implements/EncryptPwdProvider'
import { MailtrapMailProvider } from '../../providers/implements/MailtrapMailProvider'
import { MongoUserRepository } from '../../repositories/implements/MongoUserRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const mailtrapMailProvider = new MailtrapMailProvider()
const mongoUserRepository = new MongoUserRepository()
const encryptPwdProvider = new EncryptPwdProvider()

const createUserUseCase = new CreateUserUseCase(
  mongoUserRepository,
  mailtrapMailProvider,
  encryptPwdProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }
