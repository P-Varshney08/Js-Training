// JavaScript Object Notation (JSON) is a standard text-based format for representing data based on JavaScript object syntax

const json = {
    "name": "John Doe",
    "age": 30,
    "address": {
        "street": "123 Main St",
        "city": "New York",
        "state": "NY"
    }
}


// sometimes we receive a raw JSON string, and we need to convert it to an object. And when we want to send a JavaScript object across the network, we need to convert it to JSON (a string) before sending it.
// parse(): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
// stringify(): Accepts an object as a parameter, and returns the equivalent JSON string.

console.log(json)

const transformedObj1 = JSON.parse('[1,2, {"k":1}]', (key, value) => {
    return typeof value === "object" ? undefined : value;
});

console.log(transformedObj1)

console.log(JSON.parse("{}"))
console.log(JSON.parse("true"))
console.log(JSON.parse('"foo"'))
console.log(JSON.parse('[1, 5 , {"k":1}]'))
console.log(JSON.parse("null"))


let obj = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
}

let obj2 = ["1", "2", "3", "4", "5", "6", "7"];

for(var i in obj2){
    console.log(i)
}


let jsonData = {
    "name": "Priya",
    "age": 25,
    "skills": ["React", "Node", "JavaScript"],
    "location": {
      "city": "Delhi",
      "country": "India"
    }
  };
  
  // Accessing data
  console.log(jsonData.name);
  console.log(jsonData.skills[0]);
  console.log(jsonData.location.city); 
  
// Modifying data
jsonData.age=21;
jsonData.skills.pop();
jsonData.location.city="Noida";
  
  console.log(jsonData);
  


  let jsonDataWithArray = {
    "name": "Priya",
    "languages": ["Hindi", "English", "French"],
    "projects": [
      {
        "name": "Shopping App",
        "status": "completed"
      },
      {
        "name": "Portfolio Website",
        "status": "ongoing"
      }
    ]
  };
  
  // Accessing array elements
  console.log(jsonDataWithArray.languages[1]);  
  console.log(jsonDataWithArray.projects[1].name); 
  
  // Modifying arrays
  jsonDataWithArray.languages.push("Spanish");
  jsonDataWithArray.projects[1].status="completed";
  jsonDataWithArray.languages.splice(2, 1);  
  
  console.log(jsonDataWithArray);
  