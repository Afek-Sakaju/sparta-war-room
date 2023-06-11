import { DB_STATUS } from '../DB/mongoose';

export function isConnected() {
    return DB_STATUS.connected;
}
