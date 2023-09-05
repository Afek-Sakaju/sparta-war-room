import express, {
  type ErrorRequestHandler,
  type Request,
  type Response,
  type NextFunction,
} from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import path from 'path';
import mongoose from 'mongoose';

import { connectDB } from './DB/mongoose';
import { APP_PORT, MONGO_URL, SESSION_SECRET } from './utils';
import {
  authRouter,
  mainRouter,
  announcementsRouter,
  tacticsRouter,
} from './routers';

mongoose.set('bufferCommands', false);
mongoose.set('bufferTimeoutMS', 5000);

void (async function () {
  await connectDB(MONGO_URL);
})();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(express.static(path.join(__dirname, '..', 'client')));

app.use('/', mainRouter);
app.use('/auth', authRouter);
app.use('/announcements', announcementsRouter);
app.use('/tactics', tacticsRouter);

app.use(
  (
    err: ErrorRequestHandler,
    _req: Request,
    _res: Response,
    next: NextFunction
  ) => {
    console.log(`Error occurred: \n${err}`);
    next(err);
  }
);

app.listen(APP_PORT, () => {
  console.log(`Server is up on port ${APP_PORT}`);
});

export default app;
