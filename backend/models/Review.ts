import mongoose, { Schema, model, models } from 'mongoose';
import * as schemaType from '@/backend/graphql/generated/schemaType';

// 2. Create a Schema corresponding to the document interface.
const ReviewSchema = new Schema<schemaType.Review>({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true,
  },
  feedback: { type: String, required: false },
  rate: { type: Number, required: true },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place',
    autopopulate: true,
  },
});

export default models.Review || model<schemaType.Review>('Review', ReviewSchema);
