import { DateServiceMoment } from '../../providers/implements/DateServiceMoment'
import { EnviromentDotenv } from '../../providers/implements/EnviromentDotenv'
import { MongoTokenRepository } from '../../repositories/implements/MongoTokenRepository'
import { RefreshTokenController } from './RefreshTokenController'
import { RefreshTokenUseCase } from './RefreshTokenUseCase'

const mongoTokenRepository = new MongoTokenRepository()
const enviroment = new EnviromentDotenv()
const moment = new DateServiceMoment()

const refreshTokenUseCase = new RefreshTokenUseCase(
  mongoTokenRepository,
  enviroment,
  moment
)

const refreshTokenController = new RefreshTokenController(
  refreshTokenUseCase,
  enviroment
)

export { refreshTokenUseCase, refreshTokenController }
