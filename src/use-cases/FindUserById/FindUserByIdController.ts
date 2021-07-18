import { Request, Response } from 'express'
import { FindUserByIdUseCase } from './FindUserByIdUseCase'

export class FindUserByIdController {
  constructor (
        private findUserByIdUseCase: FindUserByIdUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const id = request.params.id

    try {
      await this.findUserByIdUseCase.execute(id).then((rs) => {
        if (rs === null) {
          return response.status(404).json({
            error: 'Usuario no encontrado!'
          })
        }
        return response.status(200).json(rs)
      })
    } catch (error) {
      return response.status(404).json({
        error: 'Usuario no encontrado!'
      })
    }
  }
}
