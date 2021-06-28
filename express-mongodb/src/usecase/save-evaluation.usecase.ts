import { Evaluation } from './domain/evaluation';
import { IEvaluationGateway } from './interfaces/evaluation.gateway';

export class SaveEvaluation {

    constructor(private evaluationGateway: IEvaluationGateway) {}

    async execute(evaluation: Evaluation): Promise<string> {
        return this.evaluationGateway.saveEvaluation(evaluation);
    }
    
}