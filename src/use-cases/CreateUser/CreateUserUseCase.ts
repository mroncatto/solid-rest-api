import { IUser } from '../../model/User'
import { IEncryptPwdProvider } from '../../providers/interfaces/IEncryptPwdProvider'
import { IMailProvider } from '../../providers/interfaces/IMailProvider'
import { IUserRepository } from '../../repositories/interfaces/IUserRepository'
import { ICreateUserRequestDTO } from './ICreateUserRequestDTO'

export class CreateUserUseCase {
  constructor (
        private usersRepository: IUserRepository,
        private mailProvider: IMailProvider,
        private encryptPassword: IEncryptPwdProvider
  ) { }

  async execute (data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('Ya existen una cuenta con este correo!')
    }

    // Encrypta password
    const user = data as IUser
    user.password = await this.encryptPassword.encrypt(user.password)

    await this.usersRepository.save(user)
    /* await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Staff',
        email: 'staff@miapp.com'
      },
      subject: 'Bienvenido a la plataforma',
      body: '<p>Ya estás habilitado en nuestra plataforma ! </p>'
    }) */
  }
}
