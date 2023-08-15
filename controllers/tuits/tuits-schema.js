/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';

const schema = mongoose.Schema({
  tuit: { type: String, required: true },
  likes: { type: Number, default: 0 },
  liked: { type: Boolean, default: false },
  dislikes: { type: Number, default: 0 },
  disliked: { type: Boolean, default: false },
  replies: { type: Number, default: 0 },
  retuits: { type: Number, default: 0 },
  handle: { type: String, required: true },
  time: { type: Date, default: () => new Date() },
  image: { type: String, required: true },
}, { collection: 'tuits' });
export default schema;
