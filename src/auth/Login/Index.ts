import { DateServiceMoment } from '../../providers/implements/DateServiceMoment'
import { EncryptPwdProvider } from '../../providers/implements/EncryptPwdProvider'
import { EnviromentDotenv } from '../../providers/implements/EnviromentDotenv'
import { MongoTokenRepository } from '../../repositories/implements/MongoTokenRepository'
import { MongoUserRepository } from '../../repositories/implements/MongoUserRepository'
import { AuthController } from './AuthController'
import { AuthUseCase } from './AuthUseCase'

const mongoUserRepository = new MongoUserRepository()
const mongoTokenRepository = new MongoTokenRepository()
const encryptPassword = new EncryptPwdProvider()
const enviroment = new EnviromentDotenv()
const moment = new DateServiceMoment()

const authUseCase = new AuthUseCase(
  mongoUserRepository,
  mongoTokenRepository,
  encryptPassword,
  enviroment,
  moment
)

const authController = new AuthController(
  authUseCase
)

export { authUseCase, authController }
