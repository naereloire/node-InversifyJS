import { Request } from 'express';
import { BaseHttpController, controller, httpGet, httpPost, interfaces, request, requestParam } from 'inversify-express-utils';
import { SaveEvaluation } from '../usecase/save-evaluation.usecase';
import { FindEvaluationById } from '../usecase/find-evaluation-by-id.usecase';
import { EvaluationVo } from './json/evaluation.vo';
import { IEvaluationGateway } from '../usecase/interfaces/evaluation.gateway';
import { inject } from 'inversify';
import { Identifiers } from '../config/dependecy-injection/dependency-identifiers';
import 'reflect-metadata';

@controller('/evaluation')
export class EvaluationController extends BaseHttpController implements interfaces.Controller {
    private findEvaluationById: FindEvaluationById;
    private saveEvaluation: SaveEvaluation;

    constructor(@inject(Identifiers.evaluationGateway) private evaluationGateway: IEvaluationGateway) {
        super();
        this.findEvaluationById = new FindEvaluationById(this.evaluationGateway);
        this.saveEvaluation = new SaveEvaluation(this.evaluationGateway);
    }

    @httpGet('/:id')
    async getEvaluationById(@requestParam('id') id: string): Promise<interfaces.IHttpActionResult> {
        const evaluation = await this.findEvaluationById.execute(id);
        return this.json(evaluation, 200);
    }

    @httpPost('/')
    async saveAnEvaluation(@request() req: Request): Promise<interfaces.IHttpActionResult> {
        const evaluationToSave = req.body as EvaluationVo; 
        const createdId = await this.saveEvaluation.execute({
            id: evaluationToSave.id,
            value: evaluationToSave.value,
            date: evaluationToSave.date,
            discipline: evaluationToSave.discipline,
            student: { 
                id: evaluationToSave.student?.id,
                name: evaluationToSave.student?.name,
                age: evaluationToSave.student?.age
            }
        });
        return this.created(createdId, undefined);
    }
}