import moment from 'moment'
import { IDateService } from '../interfaces/IDateService'

export class DateServiceMoment implements IDateService {
  async getDate (): Promise<Date> {
    return moment().toDate()
  }

  async greaterThan (dateA: Date, dateB: Date): Promise<boolean> {
    return moment(dateA).diff(moment(dateB), 's') > 1
  }

  async differDateInSeconds (dateA: Date, dateB: Date): Promise<number> {
    return moment(dateA).diff(moment(dateB), 's')
  }

  async increaseDateInSeconds (date: Date, time: number): Promise<Date> {
    return moment(date).add(time, 's').toDate()
  }
}
