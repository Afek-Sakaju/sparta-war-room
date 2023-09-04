import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tacticSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title.'],
  },
  information: {
    type: String,
    required: [true, 'Please provide the required information.'],
  },
});

export const TacticModel = mongoose.model('tactic', tacticSchema);
