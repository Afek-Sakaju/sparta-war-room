import type { Request, Response, NextFunction } from 'express';

import type { User } from '../interfaces';
import { registerUser, loginUser } from '../services';

export async function registerUserCtrl(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const user = {
      username: req.body?.username,
      password: req.body?.password,
    } as User;

    const userDoc = await registerUser(user);
    if (!userDoc) throw Error('User creation failed');
    res.status(201).json(userDoc);
  } catch (e: any) {
    next(e);
  }
}

export async function loginUserCtrl(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const accessToken = await loginUser(req.body.username, req.body.password);

    if (!accessToken) throw Error('Access token is expired or invalid');
    res.json({ accessToken });
  } catch (e: any) {
    next(e);
  }
}

export async function logoutUserCtrl(
  _req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> {
  res.cookie('jwtAccessToken', '', { maxAge: 1 });
  res.redirect('/login');
}
