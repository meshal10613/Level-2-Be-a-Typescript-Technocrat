//? interface only works with object type: array, object, function
// array, function = use alias;
// object = use alias | interface;

interface User {
    name: string;
    age: number;
}

interface UserWithRole extends User {
    role: "admin" | "user";
}

const user1: UserWithRole = {
    name: "Meshal",
    age: 21,
    role: "user",
};

// function
type Add1 = (a: number, b: number) => number;

interface Add2 {
    (a: number, b: number): number;
}

const add: Add2 = (a, b) => {
    return a + b;
};

// array //? indexing interface
interface Friends {
    [index: number]: string;
}

const friends: Friends = ["A", "B", "C"];
