import { IUserRepository } from '../../repositories/interfaces/IUserRepository'
import { IUserLoginRequestDTO } from './IUserLoginRequestDTO'
import jwt from 'jsonwebtoken'
import { IUser } from '../../model/User'
import { ITokenRepository } from '../../repositories/interfaces/ITokenRepository'
import Token, { IToken } from '../../model/Token'
import { IEncryptPwdProvider } from '../../providers/interfaces/IEncryptPwdProvider'
import { IEnviroment } from '../../providers/interfaces/IEnviroment'
import { IDateService } from '../../providers/interfaces/IDateService'

export class AuthUseCase {
  constructor (
    private userRepository: IUserRepository,
    private tokenRepository: ITokenRepository,
    private encryptPassword: IEncryptPwdProvider,
    private env: IEnviroment,
    private moment: IDateService
  ) { }

  async execute (data: IUserLoginRequestDTO) {
    // Confirma la existencia del usuario en la base de datos
    const user:IUser = await this.userRepository.findByEmail(data.email)
    if (user == null) throw new Error('Correo y/o password Incorrectos!')
    const checkPassword = await this.encryptPassword.compare(data.password, user.password)
    if (!checkPassword) throw new Error('Correo y/o password Incorrectos!')

    // Crea los tokens
    const accessToken = jwt.sign({ user: user.email }, await this.env.get('ACCESS_TOKEN_SECRET'), { expiresIn: Number(await this.env.get('SESSION_REFRESH')) })
    const refreshToken = jwt.sign({ user: user.email }, await this.env.get('TOKEN_EXPIRES_IN'))

    // Almacena el refresh token para renovar session
    const token: IToken = new Token()
    token.email = user.email
    token.token = refreshToken
    token.expire = await this.moment.increaseDateInSeconds(new Date(), Number(await this.env.get('TOKEN_EXPIRES_IN')))
    await this.tokenRepository.save(token)

    return { accessToken, refreshToken }
  }
}
