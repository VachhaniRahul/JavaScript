// callback = a function that is passed as an argument to another function.

function sum(x, y, callback){
    let result = x + y;
    callback(result);
}

function display(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById('myh1').textContent = result;
}


sum(2,4, displayPage);