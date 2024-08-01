// setTimeout(callback, delay);
// clearTime(timeoutId) = can cancel a timeout before it triggers




// const time = setTimeout(() => window.alert("hello"),3000);
// clearTimeout(time);

let timeoutId;

function startTimer(){

   timeoutId = setTimeout(() => window.alert("hello"),2000);
   console.log("started");

}

function clearTimer(){

    clearTimeout(timeoutId);
    console.log("stop");

}