import { IMailProvider, IMessage } from '../interfaces/IMailProvider'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import dotenv from 'dotenv'

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail

    constructor () {
      dotenv.config()
      this.transporter = nodemailer.createTransport({
        host: process.env.SMTP_SERVER,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
          ssl: process.env.SMTP_SSL
        }
      })
    }

    async sendMail (message: IMessage): Promise<void> {
      await this.transporter.sendMail({
        to: {
          name: message.to.name,
          address: message.to.email
        },
        from: {
          name: message.from.name,
          address: message.from.email
        },
        subject: message.subject,
        html: message.body
      })
    }
}
