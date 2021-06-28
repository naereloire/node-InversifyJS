import { newEvaluationFixture } from "../../tests/fixtures/usecase/domain/evaluation.fixtures";
import { iEvaluationGateway } from "../../tests/mocks/usecase/interfaces/evaluation.gateway.mock";
import { FindEvaluationById } from "./find-evaluation-by-id.usecase";

describe('FindEvaluationById - Unit Tests', () => {
    let useCase: FindEvaluationById;

    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetAllMocks();
        useCase = new FindEvaluationById(iEvaluationGateway);
    });

    it('should find evaluation by id successfully', async () => {
        // given: there is data available
        iEvaluationGateway.findEvaluationById = jest.fn().mockResolvedValue(newEvaluationFixture());

        // when: executing the use case
        const result = await useCase.execute('1');

        // then: should return evaluation successfully
        expect(result).toBeDefined();
    });
});