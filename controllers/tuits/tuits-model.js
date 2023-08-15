/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';
import tuitsSchema from './tuits-schema.js';

const tuitsModel = mongoose.model('TuitModel', tuitsSchema);
export default tuitsModel;
