import mongoose, { Schema, model } from 'mongoose';

// const bcrypt = require('bcryptjs');

// import * as schemaType from '@/backend/graphql/generated/schemaType';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  photo: { type: String, required: false },
});

export default mongoose.models.User || mongoose.model('User', userSchema);

// // generating a hash
// adminSchema.methods.generateHash = function (password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(), null);
// };

// // checking if password is valid
// adminSchema.methods.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };
