"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var evaluation_gateway_mock_1 = require("../../tests/__mocks__/usecase/interfaces/evaluation.gateway.mock");
var evaluation_fixtures_1 = require("../../tests/fixtures/usecase/domain/evaluation.fixtures");
var save_evaluation_usecase_1 = require("./save-evaluation.usecase");
describe('SaveEvaluation - Unit Tests', function () {
    var useCase;
    beforeEach(function () {
        jest.resetAllMocks();
        jest.clearAllMocks();
        useCase = new save_evaluation_usecase_1.SaveEvaluation(evaluation_gateway_mock_1.iEvaluationGateway);
    });
    it('should save evaluation successfully', function () {
        var evaluationToSave = evaluation_fixtures_1.newEvaluationFixture();
        useCase.execute(evaluationToSave);
        expect(evaluation_gateway_mock_1.iEvaluationGateway.saveEvaluation).toHaveBeenCalledWith(evaluationToSave);
    });
});
//# sourceMappingURL=save-evaluation.usecase.spec.js.map