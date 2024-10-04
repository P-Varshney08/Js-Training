// Write a function to convert the source file to the result file.
// The source file contains the array of objects and every object has 3 properties batch_id, name, and contact. Convert this array to another array that has an object having the key of batch_id and the array value of all the objects with the same batch_id.
// Note: also remove the batch_id from every object

const sourceFile = [
    { batch_id: 1, name: "John", contact: "123-456-7890" },
    { batch_id: 2, name: "Jane", contact: "987-654-3210" },
    { batch_id: 1, name: "Doe", contact: "456-789-1234" },
    { batch_id: 3, name: "Smith", contact: "654-321-9876" },
    { batch_id: 2, name: "Emily", contact: "321-654-9876" }
  ]; 


// const convertArray = (array) => {
//     const result = {};
//     array.forEach((obj) => {
//         if(result[obj.batch_id]) {
//             result[obj.batch_id].push({name: obj.name, contact: obj.contact});
//         } else{
//             result[obj.batch_id] = [{name: obj.name, contact: obj.contact}];
//         }
//         delete obj.batch_id;
//         console.log(obj);
//     })
//     return result;
// }



console.log(sourceFile)

const resultArray = convertArray(sourceFile);
console.log(resultArray)

// but form this original array is same although here pass by reference is executed
// in question it was stated to remove the batch_id from every object