//complete this code
class Person {
	constructor(name, age) {
		this.name = name;
		this.age=age;
	}

	get name() {
		return this.name;
	}

	get age() {
		return this.age;
	}

	set name(newName) {
		this.name = newName;
	}

	set age(newAge) {
		this.age=newAge;
	} 
}

class Student extends Person {
	constructor(name, age) {
		super(name, age);
	}

	study() {
		return `${this.name()} is studying`;
	}
}

class Teacher extends Person {
	constructor(name, age) {
		super(name, age);
	}

	teach() {
		return `${this.name()} is teaching`;
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
