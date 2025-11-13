"use strict";
// keyOf: type operator
Object.defineProperty(exports, "__esModule", { value: true });
const myVehicle = "bike";
const user = {
    id: 123,
    name: "Meshal",
    address: {
        city: "Jhalakathi"
    }
};
const myId = user['id'];
// console.log(myId)
const getPropertyFromObj = (obj, key) => {
    return obj[key];
};
const result = getPropertyFromObj(user, "name");
console.log(result);
//# sourceMappingURL=keyOfConstraint.js.map