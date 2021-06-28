import 'reflect-metadata';
import { Application } from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { diConfig } from './config/dependecy-injection/dependency-injection.provider';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import actuator from 'express-actuator';
import { Identifiers } from './config/dependecy-injection/dependency-identifiers';
import { IConnectable } from './config/connectable';
// import all entrypoints. This is necessary due to how Inversify Express Utils registers the controllers on express routers
import './entrypoint/entrypoints-registration';

/**
 * Application Server. This is responsible to setup any application dependency
 */
export class AppServer {
    private _inversifyConfig: InversifyExpressServer;
    public _application: Application;

    constructor() {
        // initialize dependency injection container
        diConfig.registerDependencies();
    }

    async init(): Promise<void> {
        // define wich env properties to use
        const env = process.env.APP_ENV || 'local';
        dotenv.config({
            path: `resource/${env}.env`
        });

        // connect all connectables
        diConfig.diContainer.getAll<IConnectable>(Identifiers.connectable)
                            .forEach(async (connectable) => await connectable.connect());

        // create inversify server config with DI container
        this._inversifyConfig = new InversifyExpressServer(diConfig.diContainer);
        // add all the middlewares to server configuration. This will add request/response processors to server communications
        this._inversifyConfig.setConfig((app: Application) => {
            // add body parsers to enable serialization/deserialization
            app.use(json());
            app.use(urlencoded({extended: false}));
            // add CORS middleware
            app.use(cors());
            // add health check and liveness endpoints
            app.use(actuator());
        });

        // build the server and expose it to further configuration and/or test purpouses
        this._application = this._inversifyConfig.build();
    }
}