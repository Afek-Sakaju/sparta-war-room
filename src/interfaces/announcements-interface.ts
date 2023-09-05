import type { Types as mongooseTypes } from 'mongoose';

export interface Announcement {
  _id?: mongooseTypes.ObjectId;
  title: string;
  description: string;
  announcer?: string;
}

export type AnnouncementsListDoc = Announcement[] | undefined | null;
