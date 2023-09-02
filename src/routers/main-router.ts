import express, {
  type Request,
  type Response,
  type NextFunction,
} from 'express';
import path from 'path';

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`User visit from:${req.originalUrl}\n ~method:${req.method}`);
  next();
});

router.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.sendFile(
    path.resolve(__dirname, '../..', 'client', 'htmls', 'home.html')
  );
});

router.get('/login', (_req: Request, res: Response, _next: NextFunction) => {
  res.sendFile(
    path.resolve(__dirname, '../..', 'client', 'htmls', 'login.html')
  );
});

router.get('/register', (_req: Request, res: Response, _next: NextFunction) => {
  res.sendFile(
    path.resolve(__dirname, '../..', 'client', 'htmls', 'register.html')
  );
});

router.get(
  '/announcements',
  (_req: Request, res: Response, _next: NextFunction) => {
    res.sendFile(
      path.resolve(__dirname, '../..', 'client', 'htmls', 'announcements.html')
    );
  }
);

router.get(
  '/spartan-strategies',
  (_req: Request, res: Response, _next: NextFunction) => {
    res.sendFile(
      path.resolve(
        __dirname,
        '../..',
        'client',
        'htmls',
        'spartan-strategies.html'
      )
    );
  }
);

export default router;
