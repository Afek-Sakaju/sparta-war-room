import { DB_STATUS } from '../DB/mongoose';

export const isConnected = (): boolean => DB_STATUS.connected;
