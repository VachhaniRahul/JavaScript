// contant variable 

const PI = 3.14159;

let radius;
let result;

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    // console.log(typeof radius);
    result = 2 * PI * radius;
    // console.log(result);
    document.getElementById("myh3").textContent =  `Your result is ${result}`+`cm` ;

}
