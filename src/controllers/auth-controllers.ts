import type { Request, Response, NextFunction } from 'express';

import type { ErrorWithStatus, User } from '../interfaces';
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

    if (!userDoc) {
      const err: ErrorWithStatus = new Error('Username already taken');
      err.status = 409;
      throw err;
    }
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

    if (!accessToken) {
      const err: ErrorWithStatus = new Error('Invalid username or password');
      err.status = 401;
      throw err;
    }
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
}
