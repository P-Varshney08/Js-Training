// Array Methods

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr[0]);

arr.push(8);
arr.pop();

arr.unshift(9);     // push at starting

arr.shift();       // remove at starting

console.log(arr.includes(9));
console.log(arr.indexOf(5));
console.log(arr.indexOf(15));

const newArr = arr.join();

console.log(typeof newArr);
console.log(newArr);

// slice, splice
/*
console.log("A ", arr);
const myN1 = arr.slice(2, 4);

console.log(myN1);
console.log("B ", arr);
*/

console.log("A ", arr);
const myN1 = arr.splice(2, 3);
// in splice first argument is starting index, second is deletecount
// and actual elements are deleted from original array

console.log(myN1);
console.log("B ", arr);



const marval_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marval_heroes.push(dc_heroes);
// marval_heroes.concat(dc_heroes);
marval_heroes.push(...dc_heroes);

const all = [...marval_heroes, ...dc_heroes] 

console.log(all);

const new_arr = [1, [2, [3, 4], [5]], [6, 7, 8]];

const flattened = new_arr.flat(Infinity);
// we will pass depth in this so if we have arrays of multiple depth simply pass Infinity
console.log(flattened);


console.log(Array.isArray("Priya"));
console.log(Array.from("Priya"));       // convert anything to array
console.log(Array.from({
    fname: "Priya",
    lname: "Varshney",
}))
console.log(Array.from(true))

console.log(Array.of(100, 200, 300));












