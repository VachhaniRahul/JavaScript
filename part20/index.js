// rest parameters = (...rest) allow a function work with a  variable number of arguments by bundling them into an array

// infinite argument we can add 

let food1 = 'pizza';
let food2 = 'burgur';
let food3 = 'sushi';
let food4 = 'hotdog';

function fridge(...food){
    return food;
}

console.log(fridge(food1, food2, food3, food4));



function sum(...num){
    let result = 0;
    for(let i of num){
        result = result + i;
    }
    return result;
} 

let total = sum(1,4,5,10);
console.log(total);