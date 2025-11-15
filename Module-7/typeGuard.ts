//? type guard- in, typeof

type AlfaNumeric = number | string;

const add = (a: AlfaNumeric, b: AlfaNumeric) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return Number(a) + Number(b);
    }
};

// console.log(add(1, "2"));
// console.log(add(1, 2));

//? in guard
type NormalUser = {
    name: string;
};

type AdminUser = {
    name: string;
    role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
        console.log(`This ${user.name} and his role is ${user?.role}`);
    } else {
		console.log(`This ${user.name}`);
	}
};

getUserInfo({ name: "Rahim", role: "Admin" });
