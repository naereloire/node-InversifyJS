import { IConnectable } from 'config/connectable';
import { injectable } from 'inversify';
import mongoose, { Connection } from 'mongoose';
import 'reflect-metadata';

@injectable()
export class MongoDbConfiguration implements IConnectable {
    public mongoClient: Connection;

    constructor() {}

    async connect(): Promise<void> {
        const connectionString = this.buildConnectionString();

        const mongooseInstance = await mongoose.connect(connectionString, {
            useNewUrlParser: true, useUnifiedTopology: true
        });

        this.mongoClient = mongooseInstance.connection;
        
    }

    private buildConnectionString(): string {
        const mongoDbConnectionPrefix = process.env.MONGODB_CONNECTION_PREFIX;
        const mongoDbURL = process.env.MONGODB_URL;
        const mongoDbUsername = process.env.MONGODB_USERNAME || '';
        const mongoDbPassword = process.env.MONGODB_PASSWORD || '';
        const credentials = mongoDbUsername && mongoDbPassword ? `${mongoDbUsername}:${mongoDbPassword}@` : ''
        return `${mongoDbConnectionPrefix}://${credentials}${mongoDbURL}`;
    }
}