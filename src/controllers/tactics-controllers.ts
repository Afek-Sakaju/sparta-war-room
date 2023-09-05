import type { Request, Response, NextFunction } from 'express';
import type { ErrorWithStatus } from '../interfaces';
import { getAllTactics } from '../services';

export async function getAllTacticsCtrl(
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const tactics = await getAllTactics();

    if (!tactics) {
      const err: ErrorWithStatus = new Error('Tactics data not found');
      err.status = 404;
      throw err;
    }

    res.json(tactics);
  } catch (e: any) {
    next(e);
  }
}
