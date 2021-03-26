export interface IDateService {
    getDate(): Promise<Date>
    greaterThan(dateA: Date, dateB: Date): Promise<boolean>
    differDateInSeconds(dateA: Date, dateB: Date): Promise<number>
    increaseDateInSeconds(date: Date, time: number): Promise<Date>
}
