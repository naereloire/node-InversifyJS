"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppServer = void 0;
require("reflect-metadata");
require("./entrypoint/evaluation.entrypoint");
var body_parser_1 = require("body-parser");
var inversify_express_utils_1 = require("inversify-express-utils");
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var express_actuator_1 = __importDefault(require("express-actuator"));
var mongodb_config_1 = require("./config/database/mongodb.config");
var dependency_injection_provider_1 = require("./config/dependecy-injection/dependency-injection.provider");
var AppServer = (function () {
    function AppServer(mongoDBConfiguration) {
        this.mongoDBConfiguration = mongoDBConfiguration;
        this.mongoDBConfiguration.connect();
        this.startServer();
    }
    AppServer.prototype.startServer = function () {
        this._inversifyConfig = new inversify_express_utils_1.InversifyExpressServer(dependency_injection_provider_1.diConfig.diContainer);
        this._inversifyConfig.setConfig(function (app) {
            app.use(body_parser_1.json());
            app.use(body_parser_1.urlencoded({ extended: false }));
            app.use(cors_1.default());
            app.use(express_actuator_1.default());
        });
        this._application = this._inversifyConfig.build();
        this._server = this._application.listen(process.env.PORT);
    };
    return AppServer;
}());
exports.AppServer = AppServer;
var env = process.env.APP_ENV || 'local';
dotenv_1.default.config({
    path: "resource/" + env + ".env"
});
dependency_injection_provider_1.diConfig.registerDependencies();
exports.default = new AppServer(dependency_injection_provider_1.diConfig.diContainer.get(mongodb_config_1.MongoDbConfiguration));
//# sourceMappingURL=app.js.map