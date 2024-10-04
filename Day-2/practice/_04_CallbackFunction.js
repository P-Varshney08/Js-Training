// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action.  
// Two ways in which callback can be called: synchronous and asynchronous

// Synchronous Callback:
/*
let value = 1;

doSomething(() => {
  value = 2;
});

console.log(value);
*/

// Asynchronous Callback:
function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(()=>{
        console.log("Data fetched");
        callback();
    }, 2000);
}

function process() {
    console.log("Processing data...");
}

fetchData(process);
