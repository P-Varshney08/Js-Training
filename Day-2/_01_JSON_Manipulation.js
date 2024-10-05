// Write a function to convert the source file to the result file.
// The source file contains the array of objects and every object has 3 properties batch_id, name, and contact. Convert this array to another array that has an object having the key of batch_id and the array value of all the objects with the same batch_id.
// Note: also remove the batch_id from every object

// source array
const sourceFile = [
    { batch_id: 3, name: "Smith", contact: "654-321-9876" },
    { batch_id: 1, name: "John", contact: "123-456-7890" },
    { batch_id: 2, name: "Jane", contact: "987-654-3210" },
    { batch_id: 1, name: "Doe", contact: "456-789-1234" },
    { batch_id: 2, name: "Emily", contact: "321-654-9876" }
  ]; 


// const convertArray1 = (array) => {
//     const result = {};      // store data grouped-by batch-id
//     array.forEach((obj) => {
//         if(result[obj.batch_id]) {
//             // if already exist, add data to vvalue array
//             result[obj.batch_id].push({name: obj.name, contact: obj.contact});
//         } else{
//             // if not exist, create new array with data
//             result[obj.batch_id] = [{name: obj.name, contact: obj.contact}];
//         }
//         delete obj.batch_id;
//         console.log(obj);
//     })
//     return result;
// }

const output = sourceFile.reduce((acc, curr) => {
    const {batch_id, ...rest} = curr;
    // console.log(batch_id, rest);
    if(acc[batch_id]) {
        acc[batch_id].push(rest);
    } else{
        acc[batch_id] = [rest];
        // acc[batch_id].push(rest);
        delete curr.batch_id;
    }
    return acc;
}, {})

console.log(output)

// console.log(sourceFile)

// const resultArray = convertArray2(sourceFile);
// console.log(resultArray);