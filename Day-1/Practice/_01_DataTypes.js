// Primitive Data-types = number, boolean, string, null, undefined, symbol

let message = "Hello";      // string type
console.log(typeof(message));
console.log(isNaN(message));

let number = 10;        // number type
console.log(typeof(number));

let boolean = true;     // boolean type

let array = [1, 2, 3, 4, 5];  // array type

let object = {name: "John", age: 30};  // object type

let undefinedVariable;     // undefined type
console.log("type of Undefined value is: ", typeof(undefinedVariable));

let symbol = Symbol("symbol"); // symbol type

let nullValue = null;     // object type
console.log("type of null is: ", typeof(nullValue));

// Reference data-types = 
// all values that on being copied, their reference is passed not the main value 

var a=12;
var b=a;

console.log(a==b);
a+=2;
console.log(a, b);

const arr = [1, 2, 3, 4, 5];

const arrCopy = arr;
arr.pop();

console.log(arr, arrCopy);