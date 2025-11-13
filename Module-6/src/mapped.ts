// mapped types

//map

const arrayOfNum: number[] = [1, 3, 5];
const arrayOfString: string[] = ["one", "two", "three"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((n) => n.toString());
console.log(arrayOfStringUsingMap)

type AreaOfNumber = {
	height: number;
	width: number;
}

type height = AreaOfNumber["height"]

// type AreaOfString = {
// 	height: string;
// 	width: string
// }

type Area<T> = {
	[key in keyof T]: T[key]
}

const area1: Area<AreaOfNumber> = {
	height: 50,
	width: 40
}