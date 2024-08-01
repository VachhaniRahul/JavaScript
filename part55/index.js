// eventListener = listener for specific events to create interactive webpages
//                 events : keydown, keyup
//                documents.addEventListener(events, callback);


// document.addEventListener('keydown', event => {
//     console.log(event);
// })

// document.addEventListener('keydown', event => {
//     console.log(`Key down is ${event.key}`);
// })


// document.addEventListener('keyup', event => {
//     console.log(`Key up is ${event.key}`);
// })


const mybox = document.getElementById('mybox');

document.addEventListener('keydown', event => {
    mybox.textContent = '😃';
    mybox.style.backgroundColor = 'green';
})

document.addEventListener('keyup', event => {
    mybox.textContent = '😉';
    mybox.style.backgroundColor = 'rgb(230, 78, 18)';
})


const moveAmount = 10;

let x = 0;
let y = 0;

document.addEventListener('keydown', event => {
    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y = y - moveAmount;
                break;

            case "ArrowDown":
                y = y + moveAmount;
                break;

            case "ArrowLeft":
                x = x - moveAmount;
                break;
            
            case "ArrowRight":
                x = x + moveAmount;
                break;
            
        }
        mybox.style.top = `${y}px`;
        mybox.style.left = `${x}px`;
    }
})
