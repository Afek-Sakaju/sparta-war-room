import mongoose from 'mongoose';

export const DB_STATUS = {
    connected: false,
};

export async function connectDB(url: string) {
    try {
        await mongoose.connect(url);
        console.log('Connected to DB');
        DB_STATUS.connected = true;
    } catch (error) {
        console.log(`Connection to the DB failed, error:${error}`);
    }
}
