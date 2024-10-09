/* Hoisting behaviour are: 
1. Use variables value in its scope before it is declared
2. reference a variable in its scope before declaring which will not give any error its value is undefined
*/
function one() {
    const username = "priya";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}

one();


// -------------------------------------
if(true) {
    const  username = "priya";
    if(username === "priya") {
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// ---------------------------------------

console.log(addone(5));
function addone(num) {
    return num+1;
}

// addTwo(5);
// const addTwo = function(num){
//     return num+2;
// }

// why this add two cant be accessed
// there are difference in the two definitions


/*
console.log(a);
function myFunc() {
    console.log("inside");
}
myFunc();
var a = 10;
// here hoisting in case of var occurs
*/

console.log(a);
function myFunc() {
    console.log("inside");
}
myFunc();
let a = 10;

// ReferenceError: Cannot access 'a' before initialization
// in case of let and const hoisting is still occuring but in temporal dead zone
// TDZ is the region between the point of declaration and the point of initialization


// TDZ is the the block where a variable is inaccessible until the moment the computer initializes it with a value.

// in let and const js knows that the variable is created but cant access its value before initialization

var b=10;
function fun() {
    console.log(b);
}

fun();

// on calling fun function it is creatign new MEmory creation phase and code execution context it will find b if not present it will find in its lexical environment 
// it went to ite parent's MCP i.e. Lexical environment

// scope - local memory + lexical environment of its parent

