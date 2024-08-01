// closure = a function inside of another function, the inner function
//           has access to the variables and scope of the outer function.
//           allow for private variable and state maintenance 
//           used frequently in js frameworks; React, Angular



// function outer(){

//     let a = "hello";

//     function inner(){
//         console.log(a);
//     }
//     inner();

// }
// a = "byy";

// outer();




function createCounter(){

    let count = 0;

    function increment(){

        count++;
        console.log(`count incresed to ${count}`);

    }
    function getcount(){
        return count;
    }

    return {increment, getcount};

}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getcount());