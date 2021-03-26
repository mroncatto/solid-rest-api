import { IUserRepository } from '../../repositories/interfaces/IUserRepository'
import UserSchema, { IUser } from '../../model/User'

export class MongoUserRepository implements IUserRepository {
  async findUsers (): Promise<IUser[]> {
    return await UserSchema.find({}) as IUser[]
  }

  async findByEmail (email: string): Promise<IUser> {
    return await UserSchema.findOne({
      email: email
    })
  }

  async findById (id: string): Promise<IUser> {
    return await UserSchema.findById(id)
  }

  async delete (user: string): Promise<IUser> {
    return await UserSchema.findByIdAndRemove(user)
  }

  async update (user: IUser): Promise<IUser> {
    return await UserSchema.findByIdAndUpdate(user._id,
      {
        name: user.name
      })
  }

  async save (user: IUser): Promise<any> {
    const u = new UserSchema()
    Object.assign(u, user)
    return await u.save()
  }
}
