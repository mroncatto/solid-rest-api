import { Router } from 'express'
import { createUserController } from './use-cases/CreateUser'
import { deleteUserController } from './use-cases/DeleteUser'
import { findUserController } from './use-cases/FindUser'
import { updateUserController } from './use-cases/UpdateUser'
import { authController } from './auth/Login/Index'
import { TokenValidation } from './middlewares/TokenValidation'
import { refreshTokenController } from './auth/RefreshToken/Index'
import { findUserByIdController } from './use-cases/FindUserById'

const router = Router()
const session = new TokenValidation()

router.get('/', (request, response) => {
  return response.redirect('/docs')
})

// Autenticación
router.post('/auth', (request, response) => {
  return authController.handle(request, response)
})

// Renovación del token
router.post('/auth/token', (request, response) => {
  return refreshTokenController.handle(request, response)
})

router.post('/user', (request, response) => {
  return createUserController.handle(request, response)
})

router.get('/user', session.execute, (request, response) => {
  return findUserController.handle(request, response)
})

router.get('/user/:id', session.execute, (request, response) => {
  return findUserByIdController.handle(request, response)
})

router.delete('/user/:id', session.execute, (request, response) => {
  return deleteUserController.handle(request, response)
})

router.put('/user/:id', session.execute, (request, response) => {
  return updateUserController.handle(request, response)
})

export { router }
