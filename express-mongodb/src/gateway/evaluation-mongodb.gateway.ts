import 'reflect-metadata';
import { MongoDbConfiguration } from '../config/database/mongodb.config';
import { inject, injectable, named } from 'inversify';
import { Collection, ObjectId } from 'mongodb';
import { Evaluation } from '../usecase/domain/evaluation';
import { IEvaluationGateway } from '../usecase/interfaces/evaluation.gateway';
import { IEvaluationEntity } from './entity/evaluation-entity';
import { Identifiers } from '../config/dependecy-injection/dependency-identifiers';

@injectable()
export class EvaluationGateway implements IEvaluationGateway {
    private evaluationCollection: Collection<IEvaluationEntity>;

    constructor(
        @inject(Identifiers.connectable) 
        @named(Identifiers.MongoDbConfiguration) 
        private mongoDBConfig: MongoDbConfiguration) { }

    async findEvaluationById(evaluationId: string): Promise<Evaluation> {
        const objectId = new ObjectId(evaluationId);
        const query = {
            _id: objectId
        };
        return this.getEvaluationCollection().findOne(query).then((entity) => {
            if (entity && '_id' in entity) {
                return {
                    id: entity._id.toHexString(),
                    value: entity.value,
                    date: entity.date,
                    discipline: entity.discipline,
                    student: entity.student ? {
                        id: entity.student?._id?.toHexString(),
                        name: entity.student?.name,
                        age: entity.student?.age
                    } : undefined
                };
            } else {
                throw new Error('');
            }
        });
    }

    async saveEvaluation(evaluation: Evaluation): Promise<string> {
        const insertResult = this.getEvaluationCollection().insertOne({
            value: evaluation.value,
            date: evaluation.date,
            discipline: evaluation.discipline,
            student: {
                _id: new ObjectId(evaluation.student?.id),
                name: evaluation.student?.name,
                age: evaluation.student?.age
            }
        });

        return insertResult.then(result => result.insertedId.toHexString());
    }

    private getEvaluationCollection(): Collection<IEvaluationEntity> {
        if (!this.evaluationCollection) {
            const client = this.mongoDBConfig.mongoClient;
            const collection = client.collection('evaluation');
            this.evaluationCollection = collection;
            // this.evaluationCollection = this.mongoDBConfig.mongoClient.collection('evaluation');
        }

        return this.evaluationCollection;
    }
}