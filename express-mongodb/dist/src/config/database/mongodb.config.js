"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbConfiguration = void 0;
var inversify_1 = require("inversify");
var mongoose_1 = __importDefault(require("mongoose"));
var MongoDbConfiguration = (function () {
    function MongoDbConfiguration() {
    }
    MongoDbConfiguration.prototype.connect = function () {
        var _this = this;
        var connectionString = this.buildConnectionString();
        mongoose_1.default.connect(connectionString, {
            useNewUrlParser: true, useUnifiedTopology: true
        }).then(function (result) {
            console.log('Connected to mongoDB instance');
            _this.mongoClient = result.connection;
        }).catch(function (error) {
            console.error('Could not connect to mongoDB instance. Details: ', error);
        });
    };
    MongoDbConfiguration.prototype.buildConnectionString = function () {
        var mongoDbConnectionPrefix = process.env.MONGODB_CONNECTION_PREFIX;
        var mongoDbURL = process.env.MONGODB_URL;
        var mongoDbUsername = process.env.MONGODB_USERNAME;
        var mongoDbPassword = process.env.MONGODB_PASSWORD;
        return mongoDbConnectionPrefix + "://" + mongoDbUsername + ":" + mongoDbPassword + "@" + mongoDbURL;
    };
    MongoDbConfiguration = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], MongoDbConfiguration);
    return MongoDbConfiguration;
}());
exports.MongoDbConfiguration = MongoDbConfiguration;
//# sourceMappingURL=mongodb.config.js.map