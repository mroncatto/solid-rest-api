import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  _id: string;
  email: string;
  name: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true }
})

export default mongoose.model<IUser>('User', UserSchema)
