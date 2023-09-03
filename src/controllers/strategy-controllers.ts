import type { Request, Response, NextFunction } from 'express';
import { getAllStrategies } from '../services';

export async function getAllStrategiesCtrl(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const strategies = await getAllStrategies();
    res.json(strategies);
  } catch (e: any) {
    next(e);
  }
}
