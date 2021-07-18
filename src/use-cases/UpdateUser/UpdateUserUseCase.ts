import { IUserRepository } from '../../repositories/interfaces/IUserRepository'
import { IUser } from '../../model/User'
import { IUpdateUserRequestDTO } from './IUpdateUserRequestDTO'

export class UpdateUserUseCase {
  constructor (
        private usersRepository: IUserRepository
  ) {}

  async execute (id: string, data: IUpdateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findById(id)

    if (!userAlreadyExists) {
      throw new Error('User no exists!')
    }
    const user = data as IUser
    const result = await this.usersRepository.update(id, user).catch((err) => {
      throw new Error(err)
    })

    return result
  }
}
