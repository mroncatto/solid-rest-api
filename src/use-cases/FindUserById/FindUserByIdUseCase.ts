import { IUserRepository } from '../../repositories/interfaces/IUserRepository'

export class FindUserByIdUseCase {
  constructor (
        private usersRepository: IUserRepository
  ) {}

  async execute (data: string) {
    const user = await this.usersRepository.findById(data)

    if (!user) throw new Error('Usuario no encontrado')

    return user
  }
}
