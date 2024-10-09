// Make a Calculator that takes function and variables as an argument and returns values based on the calculation of the function provided to it.
// Do this for all the functions implemented.
// Add more function tests: temperature conversion, area, etc.

// Note: 
// * Verify and validate the number of arguments allowed as per the requirement of function provided
// * Handle use of arrow functions


const calculator = (fn, ...arguments) => {
    // Check if the function expects more or fewer arguments than provided
    // console.log("f", fn.length);
    // console.log("a",arguments.length);
    if (fn.length!== arguments.length) {
        throw new Error(`Expected ${fn.length} arguments, but got ${arguments.length}`);
    }

    // Handle both regular functions and arrow functions
    try {
        return fn(...arguments);
    } catch (error) {
        throw new Error(`Error in function execution: ${error.message}`);
    }
}

// definition for function used
const add = (a, b) => a+b;
const subtract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a/b;
}
const celsiusToFahrenheit = (celcius) => (celcius * 9)/5 + 32;
const fahrenheitToCelsius = (fahrenheit) =>  ((fahrenheit-32) * 5)/9;
const areaOfCircle = (radius) => 3.14*radius*radius;
const areaOfRectangle = (length, width) => length*width;

try {
    console.log('Addition (5 + 3):', calculator(add, 5, 3)); // Output: 8
    console.log('Subtraction (10 - 4):', calculator(subtract, 10, 4)); // Output: 6
    console.log('Multiplication (7 * 6):', calculator(multiply, 7, 6)); // Output: 42
    console.log('Division (8 / 2):', calculator(divide, 8, 2)); // Output: 4
    console.log('Celsius to Fahrenheit (25°C):', calculator(celsiusToFahrenheit, 25)); // Output: 77°F
    console.log('Fahrenheit to Celsius (77°F):', calculator(fahrenheitToCelsius, 77)); // Output: 25°C
    console.log('Area of Circle (radius 5):', calculator(areaOfCircle, 5)); // Output: 78.54
    console.log('Area of Rectangle (5x10):', calculator(areaOfRectangle, 5, 10)); // Output: 50
} catch (error) {
    console.error(error.message);
}


