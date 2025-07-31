// Basic Array Methods

// Array length
const vegetables = ["Carrot", "Broccoli", "Spinach", "Cauliflower"];
console.log(vegetables.length); 

// Setting array length to 2 to limit the array size
vegetables.length = 2;
console.log(vegetables);

// Array toString()
console.log(vegetables.toString()); 

// Array at()
const veggies = ["Carrot", "Broccoli", "Spinach", "Cauliflower"];
let v = veggies.at(2);
console.log(v);

v = veggies[3];
console.log(v);

// Array join()
console.log(veggies.join(" and "));

// Array pop()
console.log(veggies.pop());
console.log(veggies); 

// Array push()
veggies.push("Pumpkin");
console.log(veggies);

//The push() method returns the new array length:
console.log(veggies.push("tomato"));

// Array shift()
console.log(veggies.shift());
console.log(veggies);


// Array unshift()
console.log(veggies.unshift("lemon"));
console.log(veggies);

// Array delete()
delete veggies[0];
console.log(veggies);

// Array concat()
const myGirls = ["anmol", "komal"];
const myBoys = ["harsh", "kumar", "ritik"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
let myChildren2= [...myChildren];


// Array copyWithin()
//The copyWithin() method copies array elements to another position in an array:
//Copy to index 2, all elements from index 0:
console.log(myChildren);
console.log(myChildren.copyWithin(2, 0));

console.log(myChildren2);

//Copy to index 2, the elements from index 0 to 2:
console.log(myChildren2.copyWithin(2, 0, 2));

// Array flat()
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

// Array flatMap()
let numbers = [1, 2, 3, 4, 5];

// each element of the array is squared and later flattened
const resultingArray = numbers.flatMap((x) => [x ** 2]);

console.log(resultingArray);


// Array slice()
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(0, 1);
console.log(fruits2);

const fruits0 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits0.slice(1);
console.log(citrus);



// Array splice()
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits3);


// Array toSpliced()
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced0 = months.toSpliced(0, 1);
console.log(spliced0);
