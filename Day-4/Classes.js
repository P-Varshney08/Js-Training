// Classes are a template for creating objects.

class Rectangle{
    constructor(length, width){
        this.length = length;
        this.width = width;
    }

    // getter
    get area() {
        return this.calArea();
    }

    calArea() {
        return this.length * this.width;
    }
}

console.log(Rectangle)

/*
class Rectangle {
    #height = 0;        // private properties
    #width;
    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }
  }

*/

class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} barks`);
    }
}

const d = new Dog("Mitzie");
d.speak();

class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} meows`);
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log(`${this.name} roars`);
    }
}

const l = new Lion("Fuzzy");
l.speak(); 

const emmployee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const user = {
    salary: 10000,
};

user.__proto__ = emmployee;

/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello my name is ${this.name}`)
    }
}

let person1 = new Person("John", 20);
let person2 = new Person("Jake", 31);

person1.greet();
person2.greet();

let person = {
    name: "John",
    age: 20,
    greet() {
        console.log(`Hello my name is ${this.name}`)
    }
}

person.greet();

class Student extends Person {
    constructor(name, age) {
        super(name, age);
    }
}

let student = new Student("Jane", 18);

student.greet();

*/


/*
class Person{
    constructor(name){
        this.name = name;
        this.occupation = "Unemployed";
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am a ${this.occupation}`);
    }
}

// inheriting
class Student extends Person {
    constructor(name){
        super(name);

        // overriding occupation
        this.occupation = "Student";
    }

    // Overriding method
    greet() {
        console.log(`Hello, my name is ${this.name}. I have a degree in Computer Science.`);
    }
}

let p = new Student('Jack');
p.greet();

*/


class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }

    describe() {
        console.log(`Person: Name - ${this.name}, Age - ${this.age}`);
    }
}

// Inheritancea
class Programmer extends Person {
    constructor(_name, _age, _yearsOfExperience) {
        super(_name, _age);
        this.yearsOfExperience = _yearsOfExperience;
    }
}

let person1 = new Person("Jeff", 45);
let programmer1 = new Programmer("Dom", 56);
console.log(person1)
console.log(programmer1)

function developSoftware(programmers) {
    // Develop software
}
