import express from "express";
import AuthController from "./users/auth-controller.js";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from "cors";
import session from "express-session";
import "dotenv/config";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "https://a5--charming-khapse-0d137f.netlify.app/",
  })
);

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
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
