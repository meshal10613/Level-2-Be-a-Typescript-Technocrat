// oop - class - object

// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }

// 	makeSound () {
// 		console.log(`The animal is ${this.name} making sound ${this.sound}`)
// 	}
// }

//parameter properties

class Animal {
    constructor(
        public name: string,
        public species: string,
        public sound: string
    ) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(`The animal is ${this.name} making sound ${this.sound}`);
    }
}

const dog = new Animal("Dogesh", "Dog", "Gheu Gheu");
const cat = new Animal("Pussy", "Cat", "Mew Mew");

dog.makeSound();
cat.makeSound();
