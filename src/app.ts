import express from 'express'
import { router } from './routes'
import mongoose from 'mongoose'

mongoose.connect(
  'mongodb://mongo:27017/test', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

const app = express()
app.use(express.json())
app.use(router)

export { app }
