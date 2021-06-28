import { Evaluation } from './domain/evaluation';
import { IEvaluationGateway } from './interfaces/evaluation.gateway';

export class FindEvaluationById {
    constructor(private evaluationGateway: IEvaluationGateway) {}

    execute(evaluationId: string): Promise<Evaluation> {
        return this.evaluationGateway.findEvaluationById(evaluationId);
    }
}