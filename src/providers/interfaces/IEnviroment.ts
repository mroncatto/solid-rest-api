export interface IEnviroment {
    get(value: string): Promise<string>
}
