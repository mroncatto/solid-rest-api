export interface IEncryptPwdProvider {
    encrypt(pwd: string): Promise<string>
    compare(pwd: string, hash: string): Promise<boolean>
}
