import type { Request, Response, NextFunction } from 'express';

import { getAllTactics } from '../services';

export async function getAllTacticsCtrl(
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const tactics = await getAllTactics();
    res.json(tactics);
  } catch (e: any) {
    next(e);
  }
}
