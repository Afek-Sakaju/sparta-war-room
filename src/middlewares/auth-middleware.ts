import jwt, { type VerifyOptions } from 'jsonwebtoken';

import type { Request, Response, NextFunction } from 'express';
import { accessPrivateKey } from '../app';

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

    jwt.verify(accessToken, accessPrivateKey, {
      expireIn: '24h',
    } as const as VerifyOptions);
    next();
  } catch (e) {
    res.redirect('/login');
  }
}
