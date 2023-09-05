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
  try {
    const announcements = (await AnnouncementModel.find()
      .lean()
      .exec()) as AnnouncementsListDoc;

    if (!announcements) throw new Error('Announcements not found');
    else return announcements;
  } catch (error) {
    console.error('Error fetching announcements:', error);
  }
}
