import { Request, Response } from 'express'
import { DeleteUserUseCase } from './DeleteUserUseCase'

export class DeleteUserController {
  constructor (
        private deleteUserUseCase: DeleteUserUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const _id = request.params.id

    try {
      await this.deleteUserUseCase.execute(_id).then((rs) => {
        if (rs === null) {
          return response.status(400).json({
            error: 'Error al eliminar usuario!'
          })
        }
        return response.status(201).json(({
          message: 'Usuario eliminado !'
        }))
      })
    } catch (error) {
      return response.status(400).json({
        error: error.message || 'Error Inesperado!'
      })
    }
  }
}
