// Error = an objects that is created to represents a probblem that occurs
//         often with user input or establishing a connection


// try{ } = encloses code that might potentially cause an error 
// catch{ } = catch and handle any thrown errors from try{ }
// finally { } = {optional} always executes. used mostly for clean up 


// try{
//     // console.lag("hello");
//     console.log(x);
// }

// catch(error){
//     console.error(error);
// }

// finally{
//     console.log("this always executs");
// }

// console.log("end of the program");



try {
    const dividend = Number( window.prompt("emter divident"));
    const divisor = Number(window.prompt("enter divisor"));

    if(divisor == 0){
        throw new Error('You cant divide by zero');
    }

    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Value must be number");
    }

    const result = dividend / divisor;
    console.log(result);
}

catch(error){
    console.error(error);
}

console.log("end of the program");
