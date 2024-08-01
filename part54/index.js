// eventListener = Listen for specific events to create interactive web pages
//                 events : click, mouseover, mouseout
//                 .addeventListner(event, callback);


const mybox = document.getElementById('mybox');
const mybutton = document.getElementById('mybutton');

function changeColor(event){
    event.target.style.backgroundColor = 'red';
    event.target.textContent ="Thank you 😍";
    event.target.style.color = 'white';
}

mybutton.addEventListener('click', changeColor);

function changeColor1(event){
    event.target.style.backgroundColor = 'yellow';
    event.target.textContent = "Don't do it 🙄";
    event.target.style.color = 'blue';
}

mybutton.addEventListener('mouseover', changeColor1);

function changeColor2(event){
    event.target.style.backgroundColor = 'chartreuse';
    event.target.textContent = 'Click Me 😊';
    event.target.style.color = 'black';
}

mybutton.addEventListener('mouseout', changeColor2);





mybutton.addEventListener('click', event => {
     event.target.style.backgroundColor = 'black';
     event.target.textContent = 'Thank you 😘';
     event.target.style.color = 'white';
     mybox.textContent =  'Thank you 😘';

})


