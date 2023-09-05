import { AnnouncementModel } from '../models';
import type { AnnouncementsListDoc } from '../interfaces';

export async function getAllAnnouncements(): Promise<AnnouncementsListDoc> {
  const announcements = (await AnnouncementModel.find()
    .lean()
    .exec()) as AnnouncementsListDoc;

  return announcements;
}
