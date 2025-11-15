class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(hour: number) {
        console.log(`${this.name} sleeps ${hour} hours!`);
    }
}

class Student extends Person {}

class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
		super(name, age, address)
        this.designation = designation;
    }

	takeClass(hour?: number) {
        console.log(`${this.name} take class for ${hour || 0} hours!`);
    }
}

const stu1 = new Student("Rahim", 21, "Bangladesh");
stu1.getSleep(8);

const tea1 = new Teacher("Ashutosh", 39, "Barisal", "Senior Teacher");
tea1.takeClass(1);
