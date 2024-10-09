const myObj = {
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree": "value Three",
  "keyFour": {
    "keyA": true,
    "keyB": false,
    "keyC": {
      "keyCOne": "key C one value",
      "keyCTwo": "key C two value",
      "keyCThree": 1234
    }
  }
};

function flattenObject(obj) {
    let flatObject = {};

    function flat(obj, parentKey=''){
        for(let key in obj) {
            // console.log(key);
            let newParentKey = parentKey? parentKey + '.' + key : key;
            // console.log('ye', newParentKey);
            if(typeof obj[key] === 'object' && obj[key]!== null){
                flat(obj[key], newParentKey);
            } else {
                flatObject[newParentKey] = obj[key];
            }
            // console.log(flatObject)
        }
    }
    flat(obj);
    return flatObject;

}

console.log(flattenObject(myObj));