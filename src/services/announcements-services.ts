import { AnnouncementModel } from '../models';
import type {
  Announcement,
  AnnouncementDoc,
  AnnouncementsListDoc,
} from '../interfaces';

export async function createAnnouncement(
  announcement: Announcement
): Promise<AnnouncementDoc> {
  const announcementDoc = new AnnouncementModel(announcement);

  const result = (await announcementDoc.save()) as AnnouncementDoc;
  return result;
}

export async function getAllAnnouncements(): Promise<AnnouncementsListDoc> {
  const announcements = (await AnnouncementModel.find()
    .lean()
    .exec()) as AnnouncementsListDoc;

  return announcements;
}
