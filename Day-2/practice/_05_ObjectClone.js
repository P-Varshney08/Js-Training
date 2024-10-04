/*

let x=20;
function changeValue(){
    x=10;
    console.log("Inside function: x=",x);
}

changeValue();
console.log("Outside function: x=",x);
// Here value of x is not changed because copy is passed

*/

let obj1 = {
    fname: "Priya",
    lname: "Varshney",
}

// let obj2 = obj1;
// obj2.fname = "fname";
// obj2.lname = "lname";

// console.log(obj1, obj2);

// Here value of obj1 and obj2 are changed because they reference to same object.

// then how do we clone?
// 1. Spread
// 2. JSON stringify + JSON parse
// 3. object.assign 
// 4. Structured clone


// 1. Using spread operator - shallow copy

/*
obj2 = {...obj1}
obj1.fname = "up";
obj1.lname = "dated";

console.log(obj1, obj2);
*/


// 2. JSON stringify + JSON parse - Deep copy
/*
obj2 = JSON.parse(JSON.stringify(obj1));
obj1.fname = "up";
obj1.lname = "dated";

console.log(obj1, obj2);

*/


// 3. object.assign - Shallow copy
/*
obj2 = Object.assign({}, obj1);
obj1.fname = "up";
obj1.lname = "dated";
console.log(obj1, obj2);
*/

// 4. Structured clone - Deep copy

obj2 = structuredClone(obj1);
obj1.fname = "up";
obj1.lname = "dated";
console.log(obj1, obj2);
