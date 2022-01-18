import { Schema, model } from 'mongoose';
import * as schemaType from '@/backend/graphql/generated/schemaType';
// const bcrypt = require('bcryptjs');

// 2. Create a Schema corresponding to the document interface.
const placeSchema = new Schema<schemaType.Place>({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    autopopulate: true,
  },
  desciption: { type: String, required: true },
  mainPhoto: { type: String, required: true },
  photos: [
    {
      type: String,
    },
  ],
  priceByNight: Number,
  reviews: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Review',
      autopopulate: true,
    },
  ],
});

placeSchema.plugin(require('mongoose-autopopulate'));

// 3. Create a Model.
export const Place = model<schemaType.Place>('Place', placeSchema);

// // generating a hash
// adminSchema.methods.generateHash = function (password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(), null);
// };

// // checking if password is valid
// adminSchema.methods.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };
