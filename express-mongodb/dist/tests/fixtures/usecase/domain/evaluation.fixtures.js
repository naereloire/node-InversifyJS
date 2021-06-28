"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newEvaluationFixture = void 0;
var defaultStudent = {
    id: '1',
    age: 28,
    name: 'Sattox'
};
var newEvaluationFixture = function (id, student) {
    return {
        id: id,
        value: 10.0,
        date: '2021-06-18T15:30:00-03:00',
        discipline: 'Cálculo 1',
        student: student ? student : defaultStudent
    };
};
exports.newEvaluationFixture = newEvaluationFixture;
//# sourceMappingURL=evaluation.fixtures.js.map