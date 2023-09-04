import { TacticModel } from '../models';
import type { Tactic } from '../interfaces';

export async function getAllTactics(): Promise<Tactic[] | undefined> {
  try {
    const tactics = (await TacticModel.find()
      .lean()
      .exec()) as unknown as Tactic[];

    if (!tactics) throw new Error('Tactics not found');
    else return tactics;
  } catch (error) {
    console.error('Error fetching tactics:', error);
  }
}
