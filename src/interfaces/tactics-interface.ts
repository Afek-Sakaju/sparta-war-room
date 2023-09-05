import type { Types as mongooseTypes } from 'mongoose';

export interface Tactic {
  _id?: mongooseTypes.ObjectId;
  title: string;
  information: string;
}

export type TacticsListDoc = Tactic[] | undefined | null;
