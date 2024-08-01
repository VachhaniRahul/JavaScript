// METHOD CHAINING 

let username = window.prompt("enter name");

username = username.trim().charAt(0).toLocaleUpperCase() + username.slice(1).toLocaleLowerCase();

console.log(username);