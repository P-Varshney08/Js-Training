let obj1 = {
    fname: "Priya",
    lname: "Varshney",
    address: {
        city: "New York",
        state: "NY"
    }
}

// 1. Using spread operator - shallow copy

/*
obj2 = {...obj1}
obj1.fname = "up";
obj1.lname = "dated";
// spread operator makes shallow copy while sending reference of object types
obj1.address.city="London";

console.log(obj1, obj2);
*/


// 2. JSON stringify + JSON parse - Deep copy
/*
obj2 = JSON.parse(JSON.stringify(obj1));
obj1.fname = "up";
obj1.lname = "dated";
obj1.address.city="London";

console.log(obj1, obj2);

*/


// 3. object.assign - Shallow copy
/*
obj2 = Object.assign({}, obj1);
obj1.fname = "up";
obj1.lname = "dated";
obj1.address.city="London";
console.log(obj1, obj2);
*/

// 4. Structured clone - Deep copy

/*
obj2 = structuredClone(obj1);
obj1.fname = "up";
obj1.lname = "dated";
obj1.address.city="London";
console.log(obj1, obj2);
*/