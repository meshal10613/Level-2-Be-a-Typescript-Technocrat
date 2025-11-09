//? nullable type

const getUser = (input: string | null) => {
    if (input) {
        console.log(`From DB ${input}`);
    } else {
        console.log(`From DB: all user`);
    }
};

// getUser(null)

//? unknown type
const discountCal = (input: unknown) => {
    if (typeof input === "number") {
        const discountedPrice = input * 0.1;
        console.log(discountedPrice);
    } else if (typeof input === "string") {
        const [price] = input.split(" ");
        const discountedPrice = Number(price) * 0.1;
        console.log(discountedPrice);
    } else {
        console.log("Wrong Input");
    }
};

// discountCal(100);
// discountCal("100 TK");
// discountCal(null);

//? void

const throwError = (msg: string): never => {
	throw new Error(msg)
};

// throwError("Error...")