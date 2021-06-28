import { MongoMemoryServer } from 'mongodb-memory-server';
import { resetDatabase } from './database-utils';
import { AppServer } from '../../src/server';
import { Application } from 'express';
import mongoose from 'mongoose';

export interface IIntegrationTestConfig {
    testSuiteName: string,
    dbName?: string,
    resetDatabaseAfterTests?: boolean
}

export interface IApplicationContext {
    getApplication: () => Application;
}

export const integrationTest = (config: IIntegrationTestConfig, testScenarios: (applicationContext: IApplicationContext) => void) => {
    describe(config.testSuiteName, () => {
        let app: AppServer;

        const mongoDBInMemory = new MongoMemoryServer({
            instance: {
                dbName: config.dbName
            }
        });

        beforeAll(async () => {
            await mongoDBInMemory.start();
            const instanceInfo = mongoDBInMemory.instanceInfo as any;
            process.env.MONGODB_URL = `${instanceInfo.ip}:${instanceInfo.port}/${instanceInfo.dbName}`
            process.env.MONGODB_USERNAME = '';
            process.env.MONGODB_PASSWORD = '';
        });

        afterAll(async () => {
            await mongoDBInMemory.stop();
            await mongoose.disconnect();
        });

        afterEach(async () => {
            if (config.resetDatabaseAfterTests) {
                await resetDatabase();
            }
        });

        beforeEach(async () => {
            app = new AppServer();
            await app.init();
        });

        testScenarios({
            getApplication: () => app._application
        });
    });
}