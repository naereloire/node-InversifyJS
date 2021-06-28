"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diConfig = exports.DependencyInjectionProvider = void 0;
var mongodb_config_1 = require("../database/mongodb.config");
var inversify_1 = require("inversify");
var evaluation_mongodb_gateway_1 = require("../../gateway/evaluation-mongodb.gateway");
var dependency_identifiers_1 = require("./dependency-identifiers");
var find_evaluation_by_id_usecase_1 = require("../../usecase/find-evaluation-by-id.usecase");
var save_evaluation_usecase_1 = require("../../usecase/save-evaluation.usecase");
var DependencyInjectionProvider = (function () {
    function DependencyInjectionProvider() {
    }
    DependencyInjectionProvider.prototype.registerDependencies = function () {
        this.diContainer = new inversify_1.Container();
        this.registerSingletons();
        this.registerServices();
    };
    DependencyInjectionProvider.prototype.registerSingletons = function () {
        this.diContainer.bind(mongodb_config_1.MongoDbConfiguration).toSelf().inSingletonScope();
    };
    DependencyInjectionProvider.prototype.registerServices = function () {
        this.diContainer.bind(dependency_identifiers_1.Identifiers.evaluationGateway).to(evaluation_mongodb_gateway_1.EvaluationGateway);
        this.diContainer.bind(find_evaluation_by_id_usecase_1.FindEvaluationById).toSelf();
        this.diContainer.bind(save_evaluation_usecase_1.SaveEvaluation).toSelf();
    };
    return DependencyInjectionProvider;
}());
exports.DependencyInjectionProvider = DependencyInjectionProvider;
var diConfig = new DependencyInjectionProvider();
exports.diConfig = diConfig;
//# sourceMappingURL=dependency-injection.provider.js.map