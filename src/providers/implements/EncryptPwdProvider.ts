import { IEncryptPwdProvider } from '../interfaces/IEncryptPwdProvider'
import bcrypt from 'bcrypt'

export class EncryptPwdProvider implements IEncryptPwdProvider {
    private saltRounds = 10

    async encrypt (pwd: string): Promise<string> {
      return await bcrypt.hash(pwd, this.saltRounds)
    }

    async compare (pwd: string, hash: string): Promise<boolean> {
      return await bcrypt.compare(pwd, hash)
    }
}
