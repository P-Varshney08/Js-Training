// Promise represent eventual completion or failure of an async operation and its resulting value

// It has 3 states: Pending, fulfilled, rejected
/*
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        console.log('Async task complete');
    },  1000);
})

// .then is related to resolve
promiseOne.then(function() {
    console.log('Promise consumed');
})

// here .then is not connected to promise so they are connected by resolve
*/




const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        console.log('Async task complete');
        resolve();
    },  1000);
})

promiseOne.then(function() {
    console.log('Promise consumed');
})

new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("async Task 2");
        resolve();
    }, 1000);
}).then(()=>{
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve({username: "Priya", email:"priya@gmail.com"})
    }, 1000);
})

promiseThree.then(function(user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false;
        if(error){
            reject("Failed to fetch user data");
        }
        else{
            resolve({username: "Priya", email:"priya@gmail.com"})
        }
    }, 1000);
})

/*
const r = promiseFour.then((user)=>{
    console.log(user);
    return user.username;
})
console.log(r);     // here the promise is in pending state so we can use chaining of then

*/

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(err){
    console.error(err);
})

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true;
        if(error){
            reject("JS went wrong");
        }
        else{
            resolve({username: "Js", password:"123"})
        }
    }, 1000);
})

async function consumePromiseFive(){
    try{
        const res = await promiseFive
        console.log(res)
    }
    catch(err){
        console.error(err);
    }
}

consumePromiseFive()