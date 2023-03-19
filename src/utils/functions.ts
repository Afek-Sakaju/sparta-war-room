import { DB_STATUS } from './consts';

export function isConnected() {
    return DB_STATUS.connected;
}
