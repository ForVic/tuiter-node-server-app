/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import usersModel from './users-model.js';

export const findAllUsers = () => usersModel.find();

export const findUserById = (uid) => usersModel.findById(uid);

export const findUserByUsername = (username) => usersModel.findOne({ username });

// eslint-disable-next-line max-len
export const findUserByCredentials = (username, password) => usersModel.findOne({ username, password });

export const createUser = (user) => usersModel.create(user);

// eslint-disable-next-line max-len, no-return-await
export const updateUser = async (uid, user) => {
  usersModel.updateOne({ _id: uid }, { $set: user })
    .then((ret) => ((ret.acknowledged && ret.matchedCount === ret.modifiedCount)
      ? usersModel.findById(uid).lean()
      : null));
};

export const deleteUser = (uid) => usersModel.deleteOne({ _id: uid });
