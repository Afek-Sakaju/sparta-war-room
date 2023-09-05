import type { Request, Response, NextFunction } from 'express';

import { getAllTactics } from '../services';

export async function getAllTacticsCtrl(
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const tactics = await getAllTactics();

    if (!tactics) throw Error('Tactics data not found');
    res.json(tactics);
  } catch (e: any) {
    next(e);
  }
}
