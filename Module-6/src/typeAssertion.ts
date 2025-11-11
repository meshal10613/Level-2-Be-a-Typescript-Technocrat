let anything: any;

anything = "222";

// (anything as Number)
// (anything as string)

const kgToGramConversion = (
    input: string | number
): string | number | undefined => {
    if (typeof input === "number") {
        return input * 1000;
    } else if (typeof input === "string") {
        const num = Number(input);
        const result = (num * 1000).toString();
        return result;
    }
};

const result1 = kgToGramConversion(2) as number;
// console.log(result1)
const result2 = kgToGramConversion("5") as string;
// console.log(result2)

type CustomError = {
	message: string;
}

try {
	
} catch (error) {
	const message = (error as CustomError).message;
	console.log(message)
}