// arrow function = a concise way to write function expression good for simple function that you use only once    (parameters) => some code

// function hello(){
//     console.log("hello");
// }

// hello();

const hello = () => console.log("hello");// without argument
hello();


const Hello = (Name) => console.log(`hello ${Name}`);// with argument

Hello("rahul");


setTimeout(function () {
    console.log("hello")
}, 2000);



const num = [1, 2, 3, 4, 5];

const square = num.map((element) => Math.pow(element, 2));
console.log(square);


const even = num.filter((element) => element % 2 === 0);
console.log(even);

const sum = num.reduce((a, b) => a + b);
console.log(sum);







