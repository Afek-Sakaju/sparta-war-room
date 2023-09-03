import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tacticSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: false,
  },
  information: {
    type: String,
    required: true,
    unique: false,
  },
});

export const TacticModel = mongoose.model('tactic', tacticSchema);
