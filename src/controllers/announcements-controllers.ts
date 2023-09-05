import type { Request, Response, NextFunction } from 'express';

import type { Announcement, ErrorWithStatus } from '../interfaces';
import { createAnnouncement, getAllAnnouncements } from '../services';

export async function createAnnouncementCtrl(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const announcement = {
      title: req.body?.title,
      description: req.body?.description,
      announcer: req.body?.announcer,
    } as Announcement;

    const announcementDoc = await createAnnouncement(announcement);
    if (!announcementDoc) {
      const err: ErrorWithStatus = new Error('Announcement creation failed');
      err.status = 400;
      throw err;
    }

    res.status(201).json(announcementDoc);
  } catch (e: any) {
    next(e);
  }
}

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
