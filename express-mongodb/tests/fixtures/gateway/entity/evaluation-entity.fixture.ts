import { ObjectID } from 'bson';
import { IEvaluationEntity } from '../../../../src/gateway/entity/evaluation-entity';
import { IStudentEntity } from '../../../../src/gateway/entity/student-entity';

const defaultStudentEntity: IStudentEntity = {
    _id: new ObjectID(),
    name: 'Test Student',
    age: 28
};

export const newEvaluationEntity = (id?: string, student: IStudentEntity = defaultStudentEntity): IEvaluationEntity => {
    return {
        _id: new ObjectID(id),
        value: 10.0,
        date: '2021-06-18T18:00:00-03:00',
        discipline: 'Cálculo 1',
        student: student
    };
}