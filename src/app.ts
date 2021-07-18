import express from 'express'
import { router } from './routes'
import mongoose from 'mongoose'
import swaggerUI from 'swagger-ui-express'
import * as swaggerDocument from './swagger.json'

mongoose.connect(
  'mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

const app = express()
app.use(express.json())
app.use(router)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

export { app }
