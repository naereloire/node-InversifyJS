import { IEvaluationGateway } from '../../../../src/usecase/interfaces/evaluation.gateway';

export const iEvaluationGateway = {
    findEvaluationById: jest.fn(),
    saveEvaluation: jest.fn()
} as IEvaluationGateway;