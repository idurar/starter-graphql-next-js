import mongoose, { Schema, model, models } from 'mongoose';
import * as schemaType from '@/backend/graphql/generated/schemaType';

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<schemaType.Place>({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
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
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
      autopopulate: true,
    },
  ],
});

schema.plugin(require('mongoose-autopopulate'));

export default models.Place || model<schemaType.Place>('Place', schema);
