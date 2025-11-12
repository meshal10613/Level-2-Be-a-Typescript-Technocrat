// Generic Function

// const createArrayString = (value: string) => [value];
// const createArrayNumber = (value: number) => [value];
// const createArrayObject = (value: {
// 	id: number;
// 	name: string;
// }) => {
// 	return [value];
// };

const createArrayGenerics = <T>(value: T) => {
    return [value];
};

// const objArray = createArrayGenerics({id: 10, name: "Rahim"})
// const numArray = createArrayGenerics(20);
// const strArray = createArrayGenerics("hello")
// console.log(objArray, numArray, strArray)

//? tuple

const createArrayWithTuple = <X, Y>(value1: X, value2: Y) => {
    return [value1, value2];
};

// const objArray = createArrayWithTuple({id: 10, name: "Rahim"}, { id:11, name: "Karim" })
// const numArray = createArrayWithTuple(20, '50');
// const strArray = createArrayWithTuple("hello", "ssf")
// console.log(objArray, numArray, strArray)

// 
const addStudentToCourse = <T>(studentInfo: T) => {
	return {
		courseName: "Next Level",
		...studentInfo
	};
}

const stu1 = {
	id: 123,
	name: "Mesba",
	hasPen: true,
}

const stu2 = {
	id: 222,
	name: "Jhankar",
	hasCar: true,
	isMarried: true
}

console.log(addStudentToCourse(stu1))
console.log(addStudentToCourse(stu2))