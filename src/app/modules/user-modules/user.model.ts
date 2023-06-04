import { Schema, model } from 'mongoose'
import { UserModel, IUSERINTERFACE } from './user.interface'

export const userSchema = new Schema<IUSERINTERFACE>(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    isBanned: {
      type: Boolean,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const Book = model<IUSERINTERFACE, UserModel>('User', userSchema, 'User')
