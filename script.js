//complete this code
class Person {
	constructor(name, age) {
		this.name = name;
		this.age=age;
	}

	getName() {
		return this.name;
	}

	getAge() {
		return this.age;
	}

	setName(name) {
		this.name = name;
	}

	setAge(age) {
		this.age=age;
	} 
}

class Student extends Person {
	constructor(name, age) {
		super(name, age);
	}

	study() {
		return `${this.name} is studying`;
	}
}

class Teacher extends Person {
	constructor(name, age) {
		super(name, age);
	}

	teach() {
		return `${this.name} is teaching`;
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
