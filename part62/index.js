// promises = an objects that manages asynchronous operations.
//            wrap a promises object around (asynchronous codes)
//            " i promise to return value"
//            pending -> resolves or rejected
//           new Promise((resolve, reject) => {asynchronous code})


// do this things in order

// 1. walk the dog 
// 2. clean the kithen
// 3. take out the trash


function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const dogwalked = true;

            if(dogwalked){
                resolve("you walked the dog");
            }
            else{
                reject("you did not walked the dog");
            }
        }, 2000);
    })
}

function cleanKithen(){

    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const cleanKithened = true;

            if(cleanKithened){
                resolve("you clean the kithen");
            }
            else{
                reject("you did not clean the kichen");
            }
        }, 3000);
    })
}

function takeTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const takeTrashed = true;

            if(takeTrashed){
                resolve("you take the trash");
            }
            else{
                reject("you did not take the trash");
            }
        }, 3000);
    })
}


walkDog().then(value => {console.log(value); return cleanKithen()})
         .then(value => {console.log(value); return takeTrash()})
         .then(value => {console.log(value); console.log("all task Completed")})
         .catch(error => console.error(error));
