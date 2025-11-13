"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// consraint => strict rules deya
const addStudentToCourse = (studentInfo) => {
    return {
        courseName: "Next Level",
        ...studentInfo,
    };
};
const stu1 = {
    id: 123,
    name: "Mesba",
    hasPen: true,
};
const stu2 = {
    id: 222,
    name: "Jhankar",
    hasCar: true,
    isMarried: true,
};
// const stu3 = {
//     hasPen: true,
// };
console.log(addStudentToCourse(stu1));
console.log(addStudentToCourse(stu2));
// console.log(addStudentToCourse(stu3));
//# sourceMappingURL=constraint.js.map