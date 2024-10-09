// a technique that allow to unpack values from arrays or objects into separate variables.

const hobbies = ["Reading", "coding", "Hiking"];
/*
const firstHobby = hobbies[0];
const secondHobby = hobbies[1];
const thirdHobby = hobbies[2];
*/

// instead destructure like this
const [firstHobby, secondHobby, thirdHobby] = hobbies;

// for nested array
const nestedArray = [1, [2, 3], 4];
const [firstValue, [secondValue, thirdValue], fourthValue] = nestedArray;


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};
  
let {firstName, lastName, country = "US"} = person;

const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

let [fruit1,,,fruit2] = fruits;
console.log(fruit1, fruit2);

// Destructuring can be used to swap values also

[fruit2, fruit1] = [fruit1, fruit2];
console.log(fruit1, fruit2);
