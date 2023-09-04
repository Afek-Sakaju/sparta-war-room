import type { Request, Response, NextFunction } from 'express';

import { isConnected } from '../utils';

export async function isConnectedToDB(
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  if (isConnected()) next();
  else res.sendStatus(500);
}
