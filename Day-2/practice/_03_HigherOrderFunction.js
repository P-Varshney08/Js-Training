// HOF are the functions that can be accessed either by passing as an argument or returning a function 

function getBoolean(item) {
    return typeof item === 'boolean';
}

function getString(item) {
    return typeof item === 'string';
}

function getNumber(item) {
    return typeof item === 'number';
}

function get(array, fn) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}


let arr = ['priya', 'ram', 10, 45, true, false, null];

console.log(get(arr, getBoolean));
console.log(get(arr, getNumber));
console.log(get(arr, getString));