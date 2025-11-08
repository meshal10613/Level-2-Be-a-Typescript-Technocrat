// array, object

let shopingList: string[] = ["egg", "milk", "sugar"];

shopingList.push("rice");

let mixedArr: (number | string | boolean)[] = ["eggs", 12, "milk", 1, true];

// tuple
let coordinates: [number, number] = [20, 30];
let couple: [string, string] = ["Husband", "Wife"];
let nameAgeRoll: [string, number, number] = ["Meshal", 21, 1];

// reference type-----------------
const user: {
	organization: "Programming Hero Level-1-Batch-11, Level-2-Batch-6"; //? now this value never be changed
	// value => type : literal type
    firstName: string;
    middleName?: string; //? optional type
    lastName: string;
	readonly isMarried?: boolean; // access modifier
} = {
	organization: "Programming Hero Level-1-Batch-11, Level-2-Batch-6",
    firstName: "Syed",
    middleName: "Mohiuddin",
	isMarried: false,
    lastName: "Meshal",
};

