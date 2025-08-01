// Problem: Create an object representing a type of tea with properties for name, type and caffeine content
const teas = {
  name: "Lemon tea",
  type: "Green",
  caffeine: "low",
};

// Problem: Access and print the name and type properties of the tea object
console.log(teas.name);
console.log(teas["type"]);

// Problem: Add a new property origin to the tea object
teas.origin = "Assam"

// Problem: Change the caffeine level of the tea object to "Medium"
teas.caffeine="Medium"

// Problem: Remove the type property from the tea object
delete teas.type

// Problem: Check if the tea object has a property origin
console.log("origin" in teas);


// Problem: Use a for...in loop to print all properties of the tea object
for(let key in teas){
    console.log(key + ";" + teas[key]);
    
}


// Problem: Create a nested object representing different types of teas and their properties
const myTeas= {
    greentea:{name: "Green Tea"},
    blackTea:{name:"Black Tea"}
}

// Problem: Create a copy of the tea object
const teaCopy = {...teas}

// Problem: Add a custom method describe to the tea object that returns a description string
teas.type = "Green";
teas.describe = function () {
    const c = `${this.name} is a ${this.type} tea with ${this.caffeine} caffeine content.`;
  return c;
};

console.log(teas.describe());

// Problem: Merge two objects representing different teas into one

const Mer ={...teaCopy, ...teas }
console.log(Mer);
