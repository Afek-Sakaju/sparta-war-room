import express, {
  type Request,
  type Response,
  type NextFunction,
} from 'express';

import { getAllAnnouncementsCtrl } from '../controllers';
import { isAuthMW, isConnectedToDB } from '../middlewares';

const router = express.Router();

router.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`User visit from:${req.originalUrl}\n ~method:${req.method}`);
  next();
});

router.get('/all', isConnectedToDB, isAuthMW, getAllAnnouncementsCtrl);

export default router;
