import express, {
  type Request,
  type Response,
  type NextFunction,
} from 'express';

import { getAllStrategiesCtrl } from '../controllers';
import { isAuthMW } from '../middlewares/auth-middleware';
import { isConnectedToDB } from '../middlewares/mongoDB-middleware';

const router = express.Router();

router.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`User visit from:${req.originalUrl}\n ~method:${req.method}`);
  next();
});

router.get('/all', isConnectedToDB, isAuthMW, getAllStrategiesCtrl);

export default router;
