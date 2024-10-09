// static method doesn't require an instance

class Square {
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }

    static equals(a, b) {
        return a.width*a.height === b.width *b.height;
    }
    static isValidDimensions(width, height) {
        return width=== height;
    }
}

let square1 = new Square(8);
let square2 = new Square(9);
console.log(Square.equals(square1, square2));
console.log(Square.isValidDimensions(6,2))


class Car {
    constructor(name) {
        this.name = name;
    }

    static hello() {
        return "Hello!";
    }
}

const myCar = new Car("Ford");

console.log(Car.hello()); // Hello

// console.log(myCar.hello()); // cant use static method 


// Encapsulation

class BankAccount{
    #balance;   // private field

    constructor(initialBalance){
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited ${amount}, new balance: ${this.#balance}`);
    }

    withdraw (amount) {
        if(this.#balance >= amount){
            this.#balance -= amount;
            console.log(`Withdrawn ${amount}, new balance: ${this.#balance}`);

        } else{
            console.log("Insufficient funds");
        }
    }

    getBalance() {
        return this.#balance;
    } 
}

const account = new BankAccount(500);
account.deposit(100);
account.withdraw(200);
console.log(account.getBalance());





class Number{
    static a=10;
    increment(){
        return Number.a+=5;
    }
}

const num = new Number();
num.increment();
console.log(Number.a);

const num2 = new Number();

console.log(Number.a);