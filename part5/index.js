// IF STATEMENT 

// let age = 11;

// if(age >= 18){
//     console.log("You are allow");
// }
// else{
//     console.log("Not Allow")
// }


const myText = document.getElementById('myText');
const btn = document.getElementById('btn');
const lable1 = document.getElementById('lable1');


let age;

btn.onclick = function () {
    age = myText.value;
    age = Number(age);
    if (age >= 18) {
        lable1.textContent =  "Allow";
        console.log("allow");
    }
    else {
        lable1.textContent = "Not Allow";
    }
}







