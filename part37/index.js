//destructuring = extract values from arrays and objects,
//               then assign them to the variable in a convenient way
//               [] = to perform array destructuring
//               {} = to perform object destructuring




// let a = 10;
// let b = 30;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);



const person1 = {
    firstName : "rahul",
    age : 21,
    
}

function displayPerson({firstName, age}){
    console.log(`name : ${firstName}`);
    console.log(`age : ${age}`);
}

displayPerson(person1);