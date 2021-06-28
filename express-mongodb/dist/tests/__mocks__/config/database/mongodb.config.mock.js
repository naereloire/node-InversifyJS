"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCollection = exports.mongoDbConfiguration = exports.mongoCollectionMock = void 0;
exports.mongoCollectionMock = {
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
};
exports.mongoDbConfiguration = {
    mongoClient: {
        collection: jest.fn()
    },
    connect: jest.fn()
};
var setupCollection = function (collection) {
    if (collection === void 0) { collection = exports.mongoCollectionMock; }
    exports.mongoDbConfiguration.mongoClient.collection = jest.fn().mockReturnValue(collection);
};
exports.setupCollection = setupCollection;
//# sourceMappingURL=mongodb.config.mock.js.map