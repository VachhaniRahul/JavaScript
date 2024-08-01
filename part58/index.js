// classList = element property in javascript used to interact 
//              with an element list of classes (css classes)
//              allows you to make reusable classes for many elements 
//              across your webpage.

// add()
// remove()
// toggle(remove if present, add if not)
// replace(oldClass, newClass)
// contains()

const mybutton = document.getElementById('mybutton');

mybutton.classList.add("enabled");       //add()

// mybutton.classList.remove("enabled");  // remove()


mybutton.addEventListener("mouseover", function(){
    mybutton.classList.add('hover');
})

mybutton.addEventListener("mouseout", function(event){
    event.target.classList.remove('hover');
})




// mybutton.addEventListener("click", function(event){
//     event.target.classList.replace('enabled','disabled'); // replace()
// })



mybutton.addEventListener('click',function(event){

    if(event.target.classList.contains("disabled")){
        event.target.classList.replace('disabled','enabled');
    }
    else{
        event.target.classList.replace('enabled','disabled');
    }
})