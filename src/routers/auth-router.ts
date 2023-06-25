import express, {
  type Request,
  type Response,
  type NextFunction,
} from 'express';

import {
  registerUserCtrl,
  loginUserCtrl,
  logoutUserCtrl,
} from '../controllers';
import { isAuthMW } from '../middlewares/auth-middleware';
import { isConnectedToDB } from '../middlewares/mongoDB-middleware';

const router = express.Router();

router.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`User visit from:${req.originalUrl}\n ~method:${req.method}`);
  next();
});

router.post('/register', isConnectedToDB, registerUserCtrl);

router.post('/login', isConnectedToDB, loginUserCtrl);

router.get('/logout', isConnectedToDB, logoutUserCtrl);

router.get('/user-authenticated', isAuthMW, (_req: Request, res: Response) => {
  res.sendStatus(200);
});

export default router;
