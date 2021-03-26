import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export class TokenValidation {
  async execute (request: Request, response: Response, next: NextFunction): Promise<any> {
    const authHeader = request.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return response.sendStatus(401)

    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err) => {
      if (err) return response.sendStatus(403)
      next()
    })
  }
}
