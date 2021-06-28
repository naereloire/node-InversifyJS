import { Collection } from 'mongodb';
import { MongoDbConfiguration } from '../../../../src/config/database/mongodb.config';
export const mongoCollectionMock = {
    find: jest.fn(),
    findOneAndDelete: jest.fn(),
    findOneAndReplace: jest.fn(),
    findOneAndUpdate: jest.fn(),
    deleteOne: jest.fn(),
    deleteMany: jest.fn(),
    insertOne: jest.fn(),
    insertMany: jest.fn(),
    findOne: jest.fn(),
    findMany: jest.fn(),
    insert: jest.fn(),
    aggregate: jest.fn(),
    count: jest.fn(),
    countDocuments: jest.fn()
} as unknown as Collection<any>;

export const mongoDbConfiguration = {
    mongoClient: {
        collection: jest.fn()
    },
    connect: jest.fn()
} as unknown as MongoDbConfiguration;

export const setupCollection = (collection = mongoCollectionMock) => {
    mongoDbConfiguration.mongoClient.collection = jest.fn().mockReturnValue(collection);
};

