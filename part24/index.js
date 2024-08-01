// forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element


let numbers = [1, 2, 3, 4, 5];

numbers.forEach(Double);
numbers.forEach(display);

function display(element){
    console.log(element);
}

// function Double(element){
//     // console.log(element += element);
// }

function Double(element, index, array){
    array[index] = element * 2;
    // console.log( array[index]);
   
}

console.log(numbers);

