// dynamically generalize

type genericArray<T> = Array<T>;

// const friends: string[] = ["Rahim", "Karim", "Hashim"];
const friends: genericArray<string> = ["Rahim", "Karim", "Hashim"];
// const rollNumbers: number[] = [1, 2, 3];
const rollNumbers: genericArray<number> = [1, 2, 3];
// const isEligible: boolean[] = [true, false, false];
const isEligible: genericArray<boolean> = [true, false, false];

const sqareFunc = (value: number): number => {
    return value * value;
};

type Coordinates<M, N> = [M, N];
const coordinates: Coordinates<string, string> = ["20", "30"];
const coordinates2: Coordinates<number, number> = [20, 30];

const userList: genericArray<{
    name: string;
    age: number;
	favoriteColor?: string
}> = [
    {
        name: "Karim",
        age: 22,
    },
    {
        name: "Rahim",
        age: 24,
		favoriteColor: "Black"
    },
];
