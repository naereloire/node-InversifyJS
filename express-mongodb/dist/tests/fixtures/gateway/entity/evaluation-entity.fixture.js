"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newEvaluationEntity = void 0;
var bson_1 = require("bson");
var defaultStudentEntity = {
    _id: new bson_1.ObjectID(),
    name: 'Test Student',
    age: 28
};
var newEvaluationEntity = function (id, student) {
    if (student === void 0) { student = defaultStudentEntity; }
    return {
        _id: new bson_1.ObjectID(id),
        value: 10.0,
        date: '2021-06-18T18:00:00-03:00',
        discipline: 'Cálculo 1',
        student: student
    };
};
exports.newEvaluationEntity = newEvaluationEntity;
//# sourceMappingURL=evaluation-entity.fixture.js.map