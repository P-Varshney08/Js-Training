class Vehicle {
  constructor() {
    if (this.constructor === Vehicle) {
      throw new Error("Cannot instantiate an abstract class.");
    }
  }

  // Abstract method
  move() {
    throw new Error("Method 'move()' must be implemented.");
  }
}

class Car extends Vehicle {
  move() {
    console.log("The car is moving.");
  }
}

class Bicycle extends Vehicle {
  move() {
    console.log("The bicycle is moving.");
  }
}

const car = new Car();
car.move();

const bike = new Bicycle();
bike.move();

// const vehicle = new Vehicle();  // Error: Cannot instantiate an abstract class.