import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const announcementSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: false,
  },
  description: {
    type: String,
    required: true,
    unique: false,
  },
  announcer: {
    type: String,
    default: 'Unknown announcer',
  },
});

export const AnnouncementModel = mongoose.model(
  'announcement',
  announcementSchema
);
