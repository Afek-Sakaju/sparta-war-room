import type { Request, Response, NextFunction } from 'express';

import type { Announcement } from '../interfaces';
import { createAnnouncement, getAllAnnouncements } from '../services';

export async function createAnnouncementCtrl(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const announcement = {
    title: req.body?.title,
    description: req.body?.description,
    announcer: req.body?.announcer,
  } as unknown as Announcement;

  try {
    const status = await createAnnouncement(announcement);
    res.sendStatus(status);
  } catch (e: any) {
    next(e);
  }
}

export async function getAllAnnouncementsCtrl(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const announcements = await getAllAnnouncements();
    res.json(announcements);
  } catch (e: any) {
    next(e);
  }
}
