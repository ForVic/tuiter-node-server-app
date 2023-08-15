/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';
import usersSchema from './users-schema.js';

const usersModel = mongoose.model('Users', usersSchema);
export default usersModel;
