import { AnnouncementModel } from '../models';
import type { Announcement } from '../interfaces';

export async function createAnnouncement(
  announcement: Announcement
): Promise<number> {
  const announcementDoc = new AnnouncementModel(announcement);
  const result: any = await announcementDoc.save();
  return result ? 201 : 400;
}

export async function getAllAnnouncements(): Promise<
  Announcement[] | undefined
> {
  try {
    const announcements = (await AnnouncementModel.find()
      .lean()
      .exec()) as unknown as Announcement[];

    if (!announcements) throw new Error('Announcements not found');
    else return announcements;
  } catch (error) {
    console.error('Error fetching announcements:', error);
  }
}
