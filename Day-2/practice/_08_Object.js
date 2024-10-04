// ...rest -> rest operator is used to enclose some values into an array.
/*
function myBio(fname, lname, ...otherInfo) {
    return otherInfo;
} 

const myInfo = myBio("Priya", "Varshney", "Aligarh", "UP", "India");
console.log(myInfo)
*/


// ...spread -> spread operator is used to unpack values from an array.

function myBio(fname, lname, company) {
    return `${fname} ${lname} ${company}`;
}

console.log(myBio(...["Priya", "Varshney", "Bigoh"]));
