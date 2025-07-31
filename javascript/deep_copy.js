let p1 = { fname: "harsh" };

let p2 = p1;

console.log(p2);
console.log(p1);

p2.fname = "ritk";

console.log(p2);
console.log(p1);


// Method 1: SHALLOW COPY

let p3 = { fname: "ronak",
    obj:{
        gender:'male'
    }
 };

let p4 = {
  ...p3, //spread operator or copy all ele of p3, this does not work on nested obj or iner obj {Shallow copy} we want {deep copy}
};

console.log(p4);
console.log(p3);

p4.fname = "agagag";
p4.obj.gender= 'female'

// bcz of shallow copy do not work in iner object 
console.log(p4);
console.log(p3);

//Method 2: DEEP COPY

// fun obj -> String -> copy -> Object {Deep Copy}
let p6 = { fname: "harsh",
    obj:{
        gender:'boy'
    }
 };
const p6kaString = JSON.stringify(p6);
console.log(p6kaString);
let p5 = JSON.parse(p6kaString);
p6.fname='anmol'
p6.obj.gender='female'
console.log(p5);
console.log(p6);