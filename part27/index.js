// .reduce() = reduce the elements of an array to a single value


const price = [10, 5, 30 ,15, 20];

// const total = price.reduce(sum);

// console.log(total);

// function sum(previous, next){
//     return previous + next;
// }


const max = price.reduce(getMax);
console.log(max);

function getMax(previous, next){
    return Math.max(previous,next);
}
