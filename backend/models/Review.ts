import { Schema, model } from 'mongoose';
import * as schemaType from '@/backend/graphql/generated/schemaType';

// 2. Create a Schema corresponding to the document interface.
const reviewSchema = new Schema<schemaType.Review>({
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    autopopulate: true,
  },
  feedback: { type: String, required: false },
  rate: { type: Number, required: true },
  place: {
    type: mongoose.Schema.ObjectId,
    ref: 'Place',
    autopopulate: true,
  },
});

export const Review = model<schemaType.Review>('Review', reviewSchema);
