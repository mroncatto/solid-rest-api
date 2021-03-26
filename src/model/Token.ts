import mongoose, { Document, Schema } from 'mongoose'
export interface IToken extends Document {
    _id: string
    email: string
    token: string
    expire: Date
}

const TokenSchema: Schema = new Schema({
  email: { type: String, required: true },
  token: { type: String, require: true, unique: true },
  expire: { type: Date, required: true }
})

export default mongoose.model<IToken>('Token', TokenSchema)
