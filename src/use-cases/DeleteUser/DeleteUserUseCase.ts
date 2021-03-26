import { IUserRepository } from '../../repositories/interfaces/IUserRepository'

export class DeleteUserUseCase {
  constructor (
        private usersRepository: IUserRepository
  ) {}

  async execute (data: string) {
    const userAlreadyExists = await this.usersRepository.findById(data)

    if (!userAlreadyExists) {
      throw new Error('Usuario no existe!')
    }

    const user = await this.usersRepository.delete(data).catch((err) => {
      throw new Error(err)
    })

    return user
  }
}
