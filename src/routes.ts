import { Router } from 'express'
import { createUserController } from './use-cases/CreateUser'
import { deleteUserController } from './use-cases/DeleteUser'
import { findUserController } from './use-cases/FindUser'
import { updateUserController } from './use-cases/UpdateUser'
import { authController } from './auth/Login/Index'
import { TokenValidation } from './middlewares/TokenValidation'
import { refreshTokenController } from './auth/RefreshToken/Index'

const router = Router()
const session = new TokenValidation()

router.get('/', (request, response) => {
  return response.status(200).json({ message: 'Hello World!' })
})

// Autenticación
router.post('/auth', (request, response) => {
  return authController.handle(request, response)
})

// Renovación del token
router.post('/token', (request, response) => {
  return refreshTokenController.handle(request, response)
})

router.post('/users', (request, response) => {
  return createUserController.handle(request, response)
})

router.get('/users', (request, response) => {
  return findUserController.handle(request, response)
})

// Endpoints que requieren autenticación
router.delete('/users', session.execute, (request, response) => {
  return deleteUserController.handle(request, response)
})

router.put('/users', session.execute, (request, response) => {
  return updateUserController.handle(request, response)
})

export { router }
