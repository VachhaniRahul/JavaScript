// USER INPUT

// let name = window.prompt("Enter Your name ");

// console.log(name)





let Name;

document.getElementById("mySubmit").onclick = function(){
    Name = document.getElementById('myname').value;
    document.getElementById("myh1").textContent = `Hello ${Name}`;

    console.log(Name);
}