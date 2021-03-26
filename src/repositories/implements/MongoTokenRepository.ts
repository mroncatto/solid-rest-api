import TokenSchema, { IToken } from '../../model/Token'
import { ITokenRepository } from '../interfaces/ITokenRepository'

export class MongoTokenRepository implements ITokenRepository {
  async save (token: IToken): Promise<IToken> {
    const t = new TokenSchema()
    Object.assign(t, token)
    return await t.save()
  }

  async update (token: string, expire: Date): Promise<IToken> {
    return await TokenSchema.findOneAndUpdate({ token }, { expire })
  }

  async find (token: string): Promise<IToken> {
    return await TokenSchema.findOne({
      token,
      expire: {
        $gte: new Date()
      }
    })
  }

  async delete (token: string): Promise<IToken> {
    return await TokenSchema.findOneAndDelete({ token })
  }
}
