// spread opeartor takes a group and spread it into multiple values


// ...rest -> rest operator is used to enclose some values into an array.
/*
function myBio(fname, lname, ...otherInfo) {
    return otherInfo;
} 

const myInfo = myBio("Priya", "Varshney", "Aligarh", "UP", "India");
console.log(myInfo)
*/


// ...spread -> spread operator is used to unpack values from an array.

/*
function myBio(fname, lname, company) {
    return `${fname} ${lname} ${company}`;
}

console.log(myBio(...["Priya", "Varshney", "Bigoh"]));
*/

function sum (a, b, ...args) {    //rest
    let sum=0;
    let mul = a*b;
    for(const arg of args){
        sum +=arg;
    }
    return [sum, mul];
}

console.log(sum(1, 2, 3, 4, 5, 6))

