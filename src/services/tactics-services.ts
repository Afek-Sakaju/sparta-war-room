import { TacticModel } from '../models';
import type { TacticsListDoc } from '../interfaces';

export async function getAllTactics(): Promise<TacticsListDoc> {
  const tactics = (await TacticModel.find().lean().exec()) as TacticsListDoc;
  return tactics;
}
