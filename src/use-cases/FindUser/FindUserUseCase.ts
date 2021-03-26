import { IUserRepository } from '../../repositories/interfaces/IUserRepository'

export class FindUserUseCase {
  constructor (
        private usersRepository: IUserRepository
  ) {}

  async execute () {
    const users = await this.usersRepository
      .findUsers()
      .catch((err) => {
        throw new Error(err)
      })

    return users
  }
}
