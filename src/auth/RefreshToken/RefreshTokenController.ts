/* eslint-disable no-useless-constructor */
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import { RefreshTokenUseCase } from './RefreshTokenUseCase'
import { IToken } from '../../model/Token'
import { IEnviroment } from '../../providers/interfaces/IEnviroment'

export class RefreshTokenController {
  constructor (
        private refreshTokenUseCase: RefreshTokenUseCase,
        private env: IEnviroment
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const refreshToken = request.body.token

    if (refreshToken == null) return response.sendStatus(400)

    try {
      const token: IToken = await this.refreshTokenUseCase.execute(refreshToken)
      const accessToken = jwt.sign({ user: token.email }, await this.env.get('ACCESS_TOKEN_SECRET'), { expiresIn: Number(await this.env.get('SESSION_REFRESH')) })
      return response.status(201).json({ accessToken: accessToken })
    } catch (error) {
      response.status(403).json({ error: error.message || 'Error inesperado!' })
    }
  }
}
