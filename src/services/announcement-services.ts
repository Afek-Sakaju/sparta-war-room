import { AnnouncementModel } from '../models/announcement-model';
import type { IAnnouncement } from '../interfaces/announcement-interface';

export async function createAnnouncement(
  announcement: IAnnouncement
): Promise<number> {
  const announcementDoc = new AnnouncementModel(announcement);
  const result: any = await announcementDoc.save();
  return result ? 201 : 400;
}

export async function getAllAnnouncements(): Promise<
  IAnnouncement[] | undefined
> {
  try {
    const announcements = (await AnnouncementModel.find()
      .lean()
      .exec()) as unknown as IAnnouncement[];

    if (!announcements) throw new Error('Announcements not found');
    else return announcements;
  } catch (error) {
    console.error('Error fetching announcements:', error);
  }
}
