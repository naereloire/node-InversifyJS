import { ObjectId } from 'mongodb';

export interface IStudentEntity {
    _id?: ObjectId,
    name?: string,
    age?: number
}