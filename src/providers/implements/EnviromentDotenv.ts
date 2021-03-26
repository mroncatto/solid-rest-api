import { IEnviroment } from '../interfaces/IEnviroment'
import dotenv from 'dotenv'

export class EnviromentDotenv implements IEnviroment {
  constructor () {
    dotenv.config()
  }

  async get (ENV: string): Promise<string> {
    return process.env[ENV]
  }
}
