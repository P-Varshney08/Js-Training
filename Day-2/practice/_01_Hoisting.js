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

addTwo(5);
const addTwo = function(num){
    return num+2;
}

// why this add two cant be accessed
// there are difference in the two definitions

