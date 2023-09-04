import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const announcementSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title.'],
  },
  description: {
    type: String,
    required: [true, 'Please provide the required description.'],
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
