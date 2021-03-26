import { Request, Response } from 'express'
import { AuthUseCase } from './AuthUseCase'

export class AuthController {
  constructor (
    private authUseCase: AuthUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    try {
      const token = await this.authUseCase.execute({ email, password })
      return response.status(201).json(token)
    } catch (error) {
      return response.status(400).json({
        error: error.message || 'Error inesperado!'
      })
    }
  }
}
