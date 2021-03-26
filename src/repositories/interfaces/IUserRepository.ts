import { IUser } from '../../model/User'

export interface IUserRepository {
    findUsers(): Promise<IUser[]>
    findByEmail(email: string): Promise<IUser>
    findById(id: string): Promise<IUser>
    save(user: IUser): Promise<any>
    delete(user: string): Promise<IUser>
    update(user: IUser): Promise<IUser>
}
