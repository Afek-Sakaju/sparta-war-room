import type { Request, Response, NextFunction } from 'express';

import type { ErrorWithStatus } from '../interfaces';
import { getAllAnnouncements } from '../services';

export async function getAllAnnouncementsCtrl(
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const announcements = await getAllAnnouncements();
    if (!announcements) {
      const err: ErrorWithStatus = new Error('Announcements not found');
      err.status = 404;
      throw err;
    }

    res.json(announcements);
  } catch (e: any) {
    next(e);
  }
}
