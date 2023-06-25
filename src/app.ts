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
import { authRouter, mainRouter } from './routers';

mongoose.set('bufferCommands', false);
mongoose.set('bufferTimeoutMS', 5000);

void (async function () {
  await connectDB('mongodb://127.0.0.1:27017/chivalry-auth');
})();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: '@uthent1c@teY0ur$elf',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(express.static(path.join(__dirname, '..', 'client')));

app.use('/', mainRouter);
app.use('/auth', authRouter);

app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.log(`Error occured: \n${err}`);
    next(err);
  }
);

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});

export const accessPrivateKey = 'Its-a-secret!';
export default app;
