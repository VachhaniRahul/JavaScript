// WHILE LOOP

// let count = 1;

// while(count != 10){
//     console.log(count);
//     count++;
// }


let username;
let password;
let loggedIn = false;

while(!loggedIn){
    username = window.prompt("enter username");
    password = window.prompt("enter password");

    if(username === "Rahul" && password === "123" ){
        loggedIn = true;
        console.log("Logged in succesfully!");
    }
    else{
        console.log("Please enter valid username and username");
    }
}

