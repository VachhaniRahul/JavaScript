// sort() = method used to sort elements of an array in place.
//          sorts elememts as strings in lexicographic order


const person = [
    {name : "Rahul", age : 21},
    {name : "dinesh", age : 45},
    {name : "ruhi", age : 23},
    {name : "rohit", age : 40},
];

// person.sort();

// person.sort((a, b) => a.age - b.age);
// console.log(person);

person.sort((a, b) => a.name.localeCompare(b.name));
console.log(person);

