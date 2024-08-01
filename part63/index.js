// json = javascript object notation) data-interchange format used for 
//        exchanging data between a server and web application json files 
//        {key : value} or {value1, value2, value3}

//        JSON.srtingify() = converts a js objects to a json string.
//        JSON.parse() = converts a json string to a js objects

// const Names = ['rahul', 'raj', 'mohan', 'ridhi'];
// console.log(Names);
// console.log(typeof(Names));


// const newNames = JSON.stringify(Names);
// console.log(newNames);
// console.log(typeof(newNames));


// const newNames1 = JSON.parse(newNames);
// console.log(newNames1);
// console.log(typeof(newNames1));






fetch("person.json")
   .then(response => response.json())
   .then(value => console.log(value))


fetch("name.json")
   .then(response => response.json())
   .then(value => console.log(value))