//? clss protected / privet korar maddhome encapsulation kora hoi

class BankAccount {
    // Private properties (cannot be accessed from outside)
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    // Public method to deposit money
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    // Public method to withdraw money
    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }

    // Getter method (read-only access)
    public getBalance(): number {
        return this.balance;
    }
}

// Using the class
const myAccount = new BankAccount(500);

myAccount.deposit(200);
myAccount.withdraw(100);

console.log(myAccount.getBalance()); // 600







// class Person {
// 	name: string;
// 	age: string;
// 	constructor(name: string, age: string){
// 		this.name = name;
// 		this.age = age;
// 	}

// 	getAge(){
// 		const age = Date.now() - new Date(this.age).getTime();
// 		return Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
// 	}
// }

// const p1 = new Person("Meshal", "2005-06-21");
// console.log(p1.getAge())