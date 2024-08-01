// element selectors =  methods used to target and manipulates HTML elements
//                      that allow you to select one or multiple HTML 
//                      elements from the DOM (Document Object Model)



// 1. document.getElementById()            //element or null
// 2. document.getElementsByClassName()    // html collection
// 3. document.getElementsByTagName()      // html collection
// 4. document.querySelector()             // first element or null
// 5. document.querySelectorAll()          // nodelist







// const myh1 = document.getElementById('myh1');
// myh1.style.backgroundColor = 'red';
// myh1.style.textAlign = "center";
// console.log(myh1);







// const fruits = document.getElementsByClassName('fruits');
// // fruits[0].style.backgroundColor  = "red";
// // fruits[1].style.backgroundColor  = "yellow";
// // fruits[2].style.backgroundColor  = "green";
// // console.log(fruits);

// for(let i of fruits){
//     i.style.backgroundColor = "yellow";
// }

// Array.from(fruits).forEach(i => {i.style.backgroundColor = 'yellow';})







// const tags = document.getElementsByTagName('ul');
// console.log(tags);

// tags[0].style.backgroundColor = 'black';
// tags[0].style.color = 'white';







// const fruits1 = document.querySelector('.fruits');
// fruits1.style.backgroundColor = 'green'; 






const fruits2 = document.querySelectorAll('.fruits');
fruits2[1].style.backgroundColor = 'green'; 

fruits2.forEach(i => {i.style.backgroundColor = 'green';});







