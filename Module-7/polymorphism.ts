// polymorphism => bohurupi

class Person {
    getSleep(hour?: number) {
        console.log(`I am a normarl person & I sleep for ${hour || 10} hours!`);
    }
}

class Student extends Person {
    getSleep(hour?: number) {
        console.log(`I am a Student & I sleep for ${hour || 8} hours!`);
    }
}

class NextLevelDeveloper extends Person {
    getSleep(hour?: number) {
        console.log(
            `I am a Next Level Developer & I sleep for ${hour || 7} hours!`
        );
    }
}

const getSleepingHours = (param: Person) => {
    param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

// getSleepingHours(person1)
// getSleepingHours(person2)
// getSleepingHours(person3)

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    height: number;
    weight: number;

    constructor(height: number, weight: number) {
        super();
        this.height = height;
        this.weight = weight;
    }

    getArea(): number {
        return this.height * this.weight;
    }
}

const getArea = (param: Shape) => {
	console.log(param.getArea());
};

const shape = new Shape();
const circle = new Circle(10);
const rectangle = new Rectangle(10, 20);
getArea(rectangle)