import { IStudentEntity } from './student-entity';
import { ObjectId } from 'mongodb';
// import mongoose from 'mongoose';

export interface IEvaluationEntity {
    _id: ObjectId,
    value: number,
    date: string,
    discipline: string,
    student?: IStudentEntity
}

// const EvaluationSchema = new mongoose.Schema({
//     value: {
//         type: Number,
//         required: true
//     },
//     date: {
//         type: String,
//         required: true
//     },
//     discipline: {
//         type: String,
//         required: true
//     },
//     student: {
//         name: {
//             type: String,
//             required: true
//         },
//         age: {
//             type: Number,
//             required: true
//         }
//     }
// });

// const EvaluationModel = mongoose.model<IEvaluationEntity>('Evaluation', EvaluationSchema);