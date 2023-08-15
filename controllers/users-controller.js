/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import * as usersDao from '../users/users-dao.js';

const createUser = async (req, res) => {
  const newUser = await usersDao.createUser(req.body);
  res.json(newUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const status = await usersDao.deleteUser(id);
  res.json(status);
};

const findAllUsers = async (req, res) => {
  const { username } = req.query;
  const { password } = req.query;
  if (username && password) {
    const user = await usersDao.findUserByCredentials(username, password);
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
  } else if (username) {
    const user = await usersDao.findUserByUsername(username);
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
  } else {
    const users = await usersDao.findAllUsers();
    res.json(users);
  }
};

const findUserById = async (req, res) => {
  const { id } = req.params;
  const user = await usersDao.findUserById(id);
  res.json(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const status = await usersDao.updateUser(id, req.body);
  const user = await usersDao.findUserById(id);
  req.session.currentUser = user;
  res.json(status);
};

const UserController = (app) => {
  app.get('/api/users', findAllUsers);
  app.get('/api/users/:uid', findUserById);
  app.post('/api/users', createUser);
  app.delete('/api/users/:uid', deleteUser);
  app.put('/api/users/:uid', updateUser);
};
export default UserController;
