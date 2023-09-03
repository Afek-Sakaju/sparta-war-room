import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const strategySchema = new Schema({
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

export const StrategyModel = mongoose.model('strategy', strategySchema);
