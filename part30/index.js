// this = reference to the objects where THIS is used       person.name = this.name


const person1 = {
        Name : "Rahul",
        age : 21,
        yourName : function(){console.log(`this is your name ${this.Name}`)},
        yourAge : function(){console.log(`this is your age ${this.age}`)}
}

person1.yourName();
person1.yourAge();
