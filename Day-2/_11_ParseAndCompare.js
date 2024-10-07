// Write an “assertObjectsEqual” function from scratch which take two object and string as parameter and return string.
// The examples below represent different use cases.

// Success Case:
// *Input*
// var expected = {foo: 5, bar: 6};
// var actual = {foo: 5, bar: 6}
// assertObjectsEqual(actual, expected, "detects that two objects are equal");

// Output:
// Passed

// Failure Case:
// *Input*
// var expected = {foo: 6, bar: 5};
// var actual = {foo: 5, bar: 6}
// assertObjectsEqual(actual, expected, "detects that two objects are equal");

// *Output*
// FAILED Expected {“foo”:6,”bar”:5}, but got {“foo”:5,”bar”:6}


function assertObjectsEqual(actual, expected, message) {
    // first check if both are objects
    if(typeof actual!== 'object' || typeof expected!== 'object'){
        return `Both inputs should be objects: ${testName}`;    
    }
    
    // compare the properties of the objects
    var keys1 = Object.keys(actual);
    var keys2 = Object.keys(expected);
    
    if(keys1.length!== keys2.length) {
        return `FAILED Expected ${JSON.stringify(actual)}, but got: ${JSON.stringify(expected)}`;
    }
    
    for(var i=0; i<keys1.length; i++) {
        if(keys1[i]!== keys2[i] || actual[keys1[i]]!== expected[keys2[i]]) {
            return `FAILED ${message} Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`;
        }
    
        if(keys1[i] !== keys2[i] && actual[keys1[i]]!==expected[keys2[i]]){
            return `FAILED ${message} Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`;
        }
    }
    return "PASSED";
}

const obj1 = {
    foo: 5,
    bar: 6,
};

const obj2 = {
    foo: 5,
    bar: 6,
    koo:7,
};

console.log(assertObjectsEqual(obj1, obj2, "Objects are not equal")); 