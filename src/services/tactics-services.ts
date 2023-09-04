import { TacticModel } from '../models';
import type { TacticsListDoc } from '../interfaces';

export async function getAllTactics(): Promise<TacticsListDoc> {
  try {
    const tactics = (await TacticModel.find().lean().exec()) as TacticsListDoc;

    if (!tactics) throw new Error('Tactics not found');
    else return tactics;
  } catch (error) {
    console.error('Error fetching tactics:', error);
  }
}
