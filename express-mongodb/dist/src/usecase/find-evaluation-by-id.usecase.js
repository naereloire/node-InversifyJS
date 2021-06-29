"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindEvaluationById = void 0;
var FindEvaluationById = (function () {
    function FindEvaluationById(evaluationGateway) {
        this.evaluationGateway = evaluationGateway;
    }
    FindEvaluationById.prototype.execute = function (evaluationId) {
        return this.evaluationGateway.findEvaluationById(evaluationId);
    };
    return FindEvaluationById;
}());
exports.FindEvaluationById = FindEvaluationById;
//# sourceMappingURL=find-evaluation-by-id.usecase.js.map