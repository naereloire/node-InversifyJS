import { Evaluation } from "../../../../src/usecase/domain/evaluation";
import { Student } from "../../../../src/usecase/domain/student";

const defaultStudent: Student = {
    id: '1',
    age: 28,
    name: 'Sattox'
}

export const newEvaluationFixture = (id?: string, student?: Student): Evaluation => {
    return {
        id: id,
        value: 10.0,
        date: '2021-06-18T15:30:00-03:00',
        discipline: 'Cálculo 1',
        student: student ? student : defaultStudent
    };
}