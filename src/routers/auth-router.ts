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
import { isAuthMW, isConnectedToDB } from '../middlewares';

const router = express.Router();

router.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`User visit from:${req.originalUrl}\n ~method:${req.method}`);
  next();
});

router.post('/login', isConnectedToDB, loginUserCtrl);

router.get('/logout', isConnectedToDB, isAuthMW, logoutUserCtrl);

router.post('/register', isConnectedToDB, registerUserCtrl);

router.get('/user-authenticated', isAuthMW, (_req: Request, res: Response) => {
  res.sendStatus(200);
});

export default router;
