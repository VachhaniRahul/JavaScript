// nested objects = objects inside of other objects.
//                  allowed you to represents more complex data structures
//                  child object is enclosed by a parent object


class Person{

    constructor(Name, age, ...address){
        this.Name = Name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("rahul", 21,"123 feet Road", "Rajkot", "india");

console.log(person1.Name);
console.log(person1.age);
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);