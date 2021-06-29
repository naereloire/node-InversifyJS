"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diConfig = exports.DependencyInjectionProvider = void 0;
var mongodb_config_1 = require("../database/mongodb.config");
var inversify_1 = require("inversify");
var evaluation_mongodb_gateway_1 = require("../../gateway/evaluation-mongodb.gateway");
var dependency_identifiers_1 = require("./dependency-identifiers");
var DependencyInjectionProvider = (function () {
    function DependencyInjectionProvider() {
    }
    DependencyInjectionProvider.prototype.registerDependencies = function () {
        this.diContainer = new inversify_1.Container();
        this.registerSingletons();
        this.registerServices();
    };
    DependencyInjectionProvider.prototype.registerSingletons = function () {
        this.diContainer.bind(dependency_identifiers_1.Identifiers.connectable).to(mongodb_config_1.MongoDbConfiguration).inSingletonScope().whenTargetNamed(dependency_identifiers_1.Identifiers.MongoDbConfiguration);
    };
    DependencyInjectionProvider.prototype.registerServices = function () {
        this.diContainer.bind(dependency_identifiers_1.Identifiers.evaluationGateway).to(evaluation_mongodb_gateway_1.EvaluationGateway);
    };
    return DependencyInjectionProvider;
}());
exports.DependencyInjectionProvider = DependencyInjectionProvider;
var diConfig = new DependencyInjectionProvider();
exports.diConfig = diConfig;
//# sourceMappingURL=dependency-injection.provider.js.map