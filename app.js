/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import mongoose from 'mongoose';
import AuthController from './users/auth-controller.js';
import HelloController from './controllers/hello-controller.js';
import UserController from './controllers/users-controller.js';
import TuitsController from './controllers/tuits/tuits-controller.js';
import 'dotenv/config';

const UN = 'Cluster85480';
const PW = 'cmRyV0xOX19T';
mongoose.connect(`mongodb+srv://${UN}:${PW}@cluster85480.esxcwdg.mongodb.net/tuiter?retryWrites=true&w=majority`);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: 'https://a6--charming-khapse-0d137f.netlify.app',
    // origin: 'http://localhost:3000',
  }),
);

const sessionOptions = {
  secret: 'any string',
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== 'development') {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: 'none',
    secure: true,
  };
}
app.use(session(sessionOptions));

app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);
app.listen(process.env.PORT || 4000);
