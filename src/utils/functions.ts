import { DB_STATUS } from '../DB/mongoose';

export function isConnected(): boolean {
  return DB_STATUS.connected;
}
