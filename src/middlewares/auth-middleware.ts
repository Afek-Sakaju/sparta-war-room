import type { Request, Response, NextFunction } from 'express';
import jwt, { type VerifyOptions } from 'jsonwebtoken';

import { JWT_ACCESS_PRIVATE_KEY } from '../utils';

export async function isAuthMW(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const accessToken = req.headers.authorization?.replace(
      'Bearer ',
      ''
    ) as string;

    jwt.verify(accessToken, JWT_ACCESS_PRIVATE_KEY, {
      expireIn: '24h',
    } as const as VerifyOptions);
    next();
  } catch (e) {
    res.sendStatus(401);
  }
}
