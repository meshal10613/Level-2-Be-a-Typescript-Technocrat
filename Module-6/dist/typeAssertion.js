"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = "222";
// (anything as Number)
// (anything as string)
const kgToGramConversion = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const num = Number(input);
        const result = (num * 1000).toString();
        return result;
    }
};
const result1 = kgToGramConversion(2);
// console.log(result1)
const result2 = kgToGramConversion("5");
try {
}
catch (error) {
    const message = error.message;
    console.log(message);
}
//# sourceMappingURL=typeAssertion.js.map