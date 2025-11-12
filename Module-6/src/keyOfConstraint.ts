// keyOf: type operator

type RichPeoplesVehicle = {
	car: string;
	bike: string;
	cng: string;
}

type MyVehicle = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = "bike";

type User = {
	id: number;
	name: string;
	address: {
		city: string
	}
}

const user: User = {
	id: 123,
	name: "Meshal",
	address: {
		city: "Jhalakathi"
	}
}

const myId = user['id'];
// console.log(myId)

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
	return obj[key];
}

const result = getPropertyFromObj(user, "name");
console.log(result)