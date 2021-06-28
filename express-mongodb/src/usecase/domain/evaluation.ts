import { Student } from './student';

export interface Evaluation {
    id?: string,
    value: number,
    date: string,
    discipline: string,
    student?: Student
}