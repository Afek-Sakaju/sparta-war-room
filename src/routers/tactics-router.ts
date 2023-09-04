import express, {
  type Request,
  type Response,
  type NextFunction,
} from 'express';

import { getAllTacticsCtrl } from '../controllers';
import { isConnectedToDB, isAuthMW } from '../middlewares';

const router = express.Router();

router.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`User visit from:${req.originalUrl}\n ~method:${req.method}`);
  next();
});

router.get('/all', isConnectedToDB, isAuthMW, getAllTacticsCtrl);

export default router;
