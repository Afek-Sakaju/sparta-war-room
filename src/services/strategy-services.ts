import { StrategyModel } from '../models/strategy-model';
import type { IStrategy } from '../interfaces/strategy-interface';

export async function getAllStrategies(): Promise<IStrategy[] | undefined> {
  try {
    const strategies = (await StrategyModel.find()
      .lean()
      .exec()) as unknown as IStrategy[];

    if (!strategies) throw new Error('Strategies not found');
    else return strategies;
  } catch (error) {
    console.error('Error fetching strategies:', error);
  }
}
