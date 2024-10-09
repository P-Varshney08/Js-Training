// Closure is a function that has access to variables in its parent scope, even after the parent function has returned

function outer() {
    let username = "Priya";
    function inner() {
        let secret = "Varshney";
        console.log("inner", username);
    }
    function innerTwo() {
        console.log("innerTwo", username);
        // console.log(secret);
    }
    inner();
    innerTwo();
}

outer();

// console.log("Too outer", username);

// here we cant access username neither with var 
// although scope is removed from global execution phase

function makeFun() {
    const name = "Priya";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFun();

myFunc();


// along with function its lexical scope is also returned