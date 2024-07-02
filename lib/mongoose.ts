import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URL) {
        return console.log('MISSING MONGODB_URL');
    }

    if (isConnected) {
        return console.log('MongoDB ALREADY CONNECTED');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'DevFlow'
        })

        isConnected = true;

        console.log('MONGODB is CONNECTED');
    }
    catch (error) {
        console.log('MongoDB connection failed', error);
    }
}