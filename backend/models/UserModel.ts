import { Schema, model } from 'mongoose';
// const bcrypt = require('bcryptjs');

import * as schemaType from '@/backend/graphql/generated/schemaType';

const schema = new Schema<schemaType.User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  photo: String,
});

export const UserModel = model<schemaType.User>('User', schema);

// // generating a hash
// adminSchema.methods.generateHash = function (password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(), null);
// };

// // checking if password is valid
// adminSchema.methods.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };
