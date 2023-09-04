import type { Request, Response, NextFunction } from 'express';

import { isConnected } from '../utils';

export async function isConnectedToDB(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  if (!isConnected()) res.sendStatus(500);
  else next();
}
