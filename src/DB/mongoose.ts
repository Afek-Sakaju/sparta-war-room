import mongoose from 'mongoose';
import { DB_STATUS } from '../utils/consts';

export async function connectDB(url: string) {
    try {
        await mongoose.connect(url);
        console.log('Connected to DB');
        DB_STATUS.connected = true;
    } catch (error) {
        console.log(`Connection to the DB failed, error:${error}`);
    }
}
