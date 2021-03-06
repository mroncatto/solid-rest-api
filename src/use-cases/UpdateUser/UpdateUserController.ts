import { Request, Response } from 'express'
import { UpdateUserUseCase } from './UpdateUserUseCase'

export class UpdateUserController {
  constructor (
    private updateUserUseCase: UpdateUserUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { _id, name, email, password } = request.body
    const id = request.params.id

    try {
      await this.updateUserUseCase.execute(id, {
        _id,
        name,
        email,
        password
      }).then((rs) => {
        if (rs === null) {
          return response.status(400).json({
            error: 'Error al actualizar usuario!'
          })
        }
        return response.status(201).json({
          message: 'Usuario alterado con éxito !'
        })
      })
    } catch (error) {
      return response.status(400).json({
        error: error.message || 'Há ocurrido un error inesperado'
      })
    }
  }
}
