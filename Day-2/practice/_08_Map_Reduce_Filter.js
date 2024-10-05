// const arr = ["js", "ruby", "java", "python", "cpp"];

// const values = arr.forEach((el) => {
//     // console.log(el)
//     return el;
// })

// console.log(values)


const myNums = [1, 2, 3, 4, 5, 6];
const result = myNums.filter((el) => {el>4})
console.log(result);

// map function is used to transform the whole array
function double(x) {
    return x * 2;
}

const output = myNums.map((x)=> x.toString(2));
console.log(output)

const output2 = myNums.filter((x)=> x > 3);
console.log(output2);

const output3 = myNums.reduce((acc, curr)=> acc+curr, 0);
console.log(output3)