
// SPREAD OPERATORS = ... ALLOW AN ITARABLE SUCH AS AN ARRAY OR STRINGS TO BE EXPANDED INTO SEPERATE ELEMENTS 

let number = [1, 2, 3, 4, 5];

let maximum = Math.max(...number);
console.log(maximum);

let Name = "rahul";
let a = [...Name];
console.log(a);

// two array in one element


let fruits = ['apple', 'banana'];
let veg = ['tomato', 'potato'];

let mix = [...fruits ,...veg];

console.log(mix, mix.length);

