// .map() = accepts a callback and applies that function to each element of an array, then return a new array


const num = [1, 2, 3, 4, 5]

const newnum = num.map(square);
console.log(newnum);

// num.map(squre);
// console.log(num);  // no change in real array

function square(n){
    return Math.pow(n,2);
}

