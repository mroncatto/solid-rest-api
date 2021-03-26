/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { FindUserUseCase } from './FindUserUseCase'

export class FindUserController {
  constructor (
        private findUserUseCase: FindUserUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      await this.findUserUseCase.execute().then((users) => {
        return response.status(200).json(users)
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Error al buscar los registros', error: error.message || 'Unspected Error!'
      })
    }
  }
}
