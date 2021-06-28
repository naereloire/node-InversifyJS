import { StudentVo } from './student.vo';

export interface EvaluationVo {
    id?: string,
    value: number,
    date: string,
    discipline: string,
    student: StudentVo
}