// function-------------
// 1. arrow function; 2. normal function

function sum (a: number, b: number): number {
	return a + b;
};

sum(2, 5);

const add2 = (a: number, b: number) => {
	return a + b;
};

// object => function => method
const poorUser = {
	name: "meshal",
	balance: 0,
	addBalance(value: number){
		return this.balance + value;
	}
}
poorUser.addBalance(50)

const arr: number[] = [1, 4, 6];
const sqareArr = arr.map((e: number): number => e * e);