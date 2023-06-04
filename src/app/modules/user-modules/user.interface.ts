// import { HydratedDocument, Model } from 'mongoose'

import { Model } from 'mongoose'

export type IUSERINTERFACE = {
  _id: string
  role: string
  firstName: string
  middleName: string
  lastName: string
  phone: string
  email: string
  password: string
  isBanned: false
}

export type UserModel = Model<IUSERINTERFACE, object>
// {
//   getOneBookByID(id: string): Promise<HydratedDocument<IUSERINTERFACE>>
//   // getAllBookOFSpecificGenre(): Promise<HydratedDocument<IBookInterFace>>
//   // getBooksOFSpecificGenreAndPublication(): Promise<
//   //   HydratedDocument<IBookInterFace>
//   // >
//   // getSpecialBooks(): Promise<HydratedDocument<IBookInterFace>>
//   // setBooksPrice(): Promise<HydratedDocument<IBookInterFace>>
// }
