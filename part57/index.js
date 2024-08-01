// nodeList = static collection of html elements by (id, class, element)
//            can be created by using querySelectorAll()
//            similar to an array, but no (map, filter, reduce)
//            nodeList won't update to automatically reflect changes



let buttons = document.querySelectorAll(".mybutton");



// console.log(buttons);

// buttons.forEach(function(button){
//     button.style.backgroundColor = "blue";
//     button.style.color = "white";
// })

// buttons[3].style.backgroundColor = "green";





// buttons.forEach(function (button) {
//     button.addEventListener('click', function (event) {
//         event.target.style.backgroundColor = "white";
//     })
// })







// add an new elements


let newButton = document.createElement('button'); // step 1

newButton.textContent = 'button 5'; // step 2
newButton.classList = 'mybutton'; // assign a class

document.body.appendChild(newButton); // step 3

console.log(buttons); // in nodeList have 4 buttons, not 5 see that its is static




// for add in nodeList we assign again

buttons = document.querySelectorAll(".mybutton");

console.log(buttons);





// remove an element

buttons.forEach(function(button){
     button.addEventListener('click', function(event){
        event.target.remove();
        buttons = document.querySelectorAll(".mybutton");
        console.log(buttons);
     })
})