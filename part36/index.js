// getter = special methods that makes a property readable
// setter = special methods that makes a property writable

// validate and modify a value when reading / writing a property


class Person {

    constructor(firstName, LastName, age) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }
    set firstName(newFirstName) {

        if (typeof newFirstName === 'string' && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be string");
        }
    }

    set LastName(newLastName) {

        if (typeof newLastName === 'string' && newLastName.length > 0) {
            this._LastName = newLastName;
        }
        else {
            console.error("Last name must be string");
        }
    }

    set age(neeAge) {

        if (typeof neeAge === 'number' && neeAge > 0) {
            this._age = neeAge;
        }
        else {
            console.error("Age must be positive")
        }
    }

    get firstName() {
        return this._firstName;
    }

    get LastName() {
        return this._LastName;
    }
    get age() {
        return this._age;
    }

}

const Person1 = new Person("rahul", 'vachhani', 21);
// Person1._firstName = 20; 
console.log(Person1.firstName);
console.log(Person1.LastName);
console.log(Person1.age);