class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
	getSleep(hour?: number){
		console.log(`${this.name} sleeps for ${hour || 0} hours`)
	}
}

class Student extends Person {
    constructor(name: string) {
        super(name);
    }

    doStudy(hour?: number) {
        console.log(`${this.name} study for ${hour || 0} hours`);
    }
}




class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }

	takeClass(hour?: number) {
        console.log(`${this.name} take class for ${hour || 0} hours`);
    }
}

const isStudent = (user: Person) => {
	return user instanceof Student;
}

const isTeacher = (user: Person) => {
	return user instanceof Teacher;
}

const getUserInfo = (user: Person) => {
	if(isStudent(user)){
		console.log(user.doStudy(8))
	} else if(isTeacher(user)){
		console.log(user.takeClass(4))
	} else {
		console.log(user.getSleep(10))
	}
}

const stu1 = new Student("Karim");
const tea1 = new Teacher("Bashar");

getUserInfo(stu1)