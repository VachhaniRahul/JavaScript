// object = A collection or related properties and/or methods can represent real world objects (people, places)
// object = { key : value, function() }


person1 = {
    firstName : "Rahul",
    LastName : "Vachhani",
    age : 21,
    // hy : function(){console.log(person1.firstName, person1.LastName, person1.age)},

    //Both are same 
    hy : () => console.log(person1.firstName, person1.LastName, person1.age),
}

console.log(person1.firstName);
console.log(person1.LastName);
console.log(person1.age);
person1.hy();


