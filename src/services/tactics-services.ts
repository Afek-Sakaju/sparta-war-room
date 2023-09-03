import { TacticModel } from '../models';
import type { ITactic } from '../interfaces';

export async function getAllTactics(): Promise<ITactic[] | undefined> {
  try {
    const tactics = (await TacticModel.find()
      .lean()
      .exec()) as unknown as ITactic[];

    if (!tactics) throw new Error('Tactics not found');
    else return tactics;
  } catch (error) {
    console.error('Error fetching tactics:', error);
  }
}
