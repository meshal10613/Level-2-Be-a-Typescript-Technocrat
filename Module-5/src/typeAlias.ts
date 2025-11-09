type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    age: number;
    gender: "male" | "female";
    contactNumber: string;
    address: {
        division: string;
        city: string;
    };
};

const user1: User = {
    id: 123,
    name: {
        firstName: "Syed Mohiuddin",
        lastName: "Meshal",
    },
    age: 21,
    gender: "male",
    contactNumber: "+880 1764447574",
    address: {
        division: "Barisal",
        city: "Jahalakathi",
    },
};

// console.log(user1);

//?function------------->
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => {
	return a + b;
};