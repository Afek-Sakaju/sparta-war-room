import type { Types as mongooseTypes } from 'mongoose';

export interface User {
  _id?: mongooseTypes.ObjectId;
  username: string;
  password: string;
}

export type UserDoc = User | undefined | null;
