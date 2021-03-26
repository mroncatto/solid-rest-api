import { ITokenRepository } from '../../repositories/interfaces/ITokenRepository'
import { IToken } from '../../model/Token'
import { IEnviroment } from '../../providers/interfaces/IEnviroment'
import { IDateService } from '../../providers/interfaces/IDateService'

export class RefreshTokenUseCase {
  constructor (
    private tokenRepository: ITokenRepository,
    private env: IEnviroment,
    private moment: IDateService
  ) {}

  async execute (token: string) {
    try {
      const tk:IToken = await this.tokenRepository.find(token)
      if (tk) {
        await this.tokenRepository
          .update(token, await this.moment
            .increaseDateInSeconds(new Date(), Number(await this.env.get('TOKEN_EXPIRES_IN'))))
        return tk
      } else {
        throw new Error('Token inválido o expirado!')
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
