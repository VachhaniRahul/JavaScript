// callback hell = situation in javascript where callbacks are nested whithin
//                 other callbackes to the degree where the code is difficult
//                 to read. old pattern to handle asynchronous functions.
//                 use promises + async/wait to avoid callbacks hell



function task1(callback) {

    setTimeout(() => {
        console.log("task 1 completed");
        callback();
    }, 2000);
}

function task2(callback) {

    setTimeout(() => {
        console.log("task 2 completed");
        callback();
    }, 3000);
}

function task3(callback) {

    setTimeout(() => {
        console.log("task 3 completed");
        callback();
    }, 1000);
}

function task4(callback) {

    setTimeout(() => {
        console.log("task 4 completed");
        callback();
    }, 2500);
}

task1(function () {
    task2(function () {
        task3(function () {
            task4(function(){
                console.log("all task completed");
            });
        })
    })
})
