import { IToken } from '../../model/Token'

export interface ITokenRepository {
    save(token: IToken): Promise<IToken>
    find(token: string): Promise<IToken>
    update(token: string, expires: Date): Promise<IToken>
    delete(token: string): Promise<IToken>
}
