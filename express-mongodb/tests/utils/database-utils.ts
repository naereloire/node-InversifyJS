import mongoose from 'mongoose';

export const insertData = async <T>(collection: string, data: T[]) => {
    await mongoose.connection.collection(collection).insertMany(data);
}

export const resetDatabase = async () => {
    await mongoose.connection.dropDatabase();
}