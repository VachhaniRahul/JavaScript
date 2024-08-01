// inheritance = allows a new class to inheritance properties and
//               methods from an existing class  


class Animal{
    static alive = true;

    eat(){
        console.log(`this ${this.name} is eating`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";
}


const rabbit = new Rabbit();
rabbit.alive = false
console.log(rabbit.alive)
rabbit.eat();