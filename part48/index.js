// synchronous = executes line by line consicutively in a sequential manner
//               code that waits for an operation to complate.


// asynchronous = allows multiple operation to be performed concurrently 
//                without waiting dosn't block execution flow and allowes the
//                program to continue 


// setTimeout(function(){console.log('Task 1')}, 2000);

// console.log('Task 2');
// console.log('Task 3');
// console.log('Task 4');





function fun1(callback){
    setTimeout(function(){
        console.log('Task 1');
        callback();
    }, 2000);
}

function fun2(){
    console.log('Task 2');
    console.log('Task 3');
    console.log('Task 4');
}

fun1(fun2);