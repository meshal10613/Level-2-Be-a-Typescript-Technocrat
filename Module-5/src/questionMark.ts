// ? : ternary operator : decision making
// ?? : nullish coalescing operator
// ?. optional chaining

const userAge = 20;

const biyerJonnoEligible = (age: number) => {
	const result = age >= 21 ? "Wow! You're eligible" : "Sorry! You're not eligible";
	return result
};

// console.log(biyerJonnoEligible(userAge))

const userTheme = undefined; // if null | undifined then it's work

const selectedTheme = userTheme ?? "light";
// console.log(selectedTheme)

// optional chaining
const user: {
	address: {
		city: string;
		town: string;
		postalCode?: string;
	}
} = {
	address: {
		city: "Jhalakathi",
		town: "Jhalakathi"
	}
}

// console.log(user?.address?.postalCode)