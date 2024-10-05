// Write an implementation of a function that generate a query string URL of object.The method take object and URL as parameter and return string ,where every key-value pair converted into query string.

// Below as sample

// *input*

// <pre><code class="javascript">
// {
//   "keyOne": "value One",
//   "keyTwo": "value Two",
//   "keyThree": "value Three",
// }

// url:"https://localhost:400",
// </code></pre> 

// *Output:* 

// <pre><code class="javascript">
// https://localhost:400?keyOne=value one&keyTwo=value Two&keyThree=value Three
// </code></pre>


// Note: Do not modify the original object, return a new object.

const obj1 = {
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree": "value Three",
};


function generateURL(obj) {
    let url = "https://localhost:400";
    if(Object.keys(obj).length > 0){
        url += "?";
    }
    let c=0;
    for(let key in obj){
        c++;
        url += key + "=" + obj[key];
        if(c!==Object.keys(obj).length) {
            url +="&";
        }
    }
    return url;
}

console.log(generateURL(obj1));
