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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbConfiguration = void 0;
var inversify_1 = require("inversify");
var mongodb_1 = require("mongodb");
var MongoDbConfiguration = /** @class */ (function () {
    function MongoDbConfiguration() {
        var _this = this;
        console.log('oi');
        var mongoDbConnectionPrefix = process.env.MONGOBD_CONNECTION_PREFIX;
        var mongoDbURL = process.env.MONGOBD_URL;
        var mongoDbUsername = process.env.MONGOBD_USERNAME;
        var mongoDbPassword = process.env.MONGOBD_PASSWORD;
        mongodb_1.MongoClient.connect(mongoDbConnectionPrefix + "://" + mongoDbUsername + ":" + mongoDbPassword + mongoDbURL, function (error, client) {
            if (error) {
                console.error('Could not connect to mongo instance. Details: ', error);
                return;
            }
            console.log('Connected to mongoDB instance');
            _this.mongoClient = client;
        });
    }
    MongoDbConfiguration = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], MongoDbConfiguration);
    return MongoDbConfiguration;
}());
exports.MongoDbConfiguration = MongoDbConfiguration;
//# sourceMappingURL=mongodb.config.js.map