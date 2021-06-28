import { Evaluation } from '../domain/evaluation';

export interface IEvaluationGateway {
    findEvaluationById(evaluationId: string): Promise<Evaluation>;
    saveEvaluation(evaluation: Evaluation): Promise<string>;
}