import { iEvaluationGateway } from '../../tests/mocks/usecase/interfaces/evaluation.gateway.mock';
import { newEvaluationFixture } from '../../tests/fixtures/usecase/domain/evaluation.fixtures';
import { SaveEvaluation } from './save-evaluation.usecase';

describe('SaveEvaluation - Unit Tests', () => {
    let useCase: SaveEvaluation;
    
    beforeEach(() => {
        jest.resetAllMocks();
        jest.clearAllMocks();
        useCase = new SaveEvaluation(iEvaluationGateway);
    });

    it('should save evaluation successfully', () => {
        // given: an evaluation to save
        const evaluationToSave = newEvaluationFixture()

        // when: saving this evaluation
        useCase.execute(evaluationToSave);

        // then: should have called the gateway with right parameters
        expect(iEvaluationGateway.saveEvaluation).toHaveBeenCalledWith(evaluationToSave);
    });
});