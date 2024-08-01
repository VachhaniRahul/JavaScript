

const myButton = document.getElementById('myButton');
const img = document.getElementById('img');

// myButton.addEventListener('click',function(event){

//     if(img.style.display === "none"){
//         img.style.display = 'block';
//         myButton.textContent = 'hide';
//     }
//     else{
//         img.style.display = "none";
//         myButton.textContent = 'show';
//     }

// })




myButton.addEventListener('click', function (event) {

    if(img.style.visibility === "hidden") {
        img.style.visibility = 'visible';
        myButton.textContent = 'hide';
    }
    else {
        img.style.visibility = "hidden";
        myButton.textContent = 'show';
    }

})