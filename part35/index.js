// super = keyword is used in classes to call the cunstuctor or 
//         access the properties and methods of a parents 
//         this = this objects
//         super = the parent

class Animal{
    constructor(Name, age){
        this.Name = Name;
        this.age = age;
    }
    move(speed){
        console.log(`the ${this.Name} moves at speed of ${speed} `);
    }
}

class Rabbit extends Animal{
    constructor(Name, age, runSpeed){
        super(Name, age);
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`this ${this.Name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    constructor(Name, age, swimSpeed){
        super(Name, age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`this ${this.Name} can swim`);
        super.move(this.swimSpeed);
    }
}

const rabbit1 = new Rabbit('rabit', 2, 30);
console.log(rabbit1.Name);
console.log(rabbit1.age);
console.log(rabbit1.runSpeed);
rabbit1.run();


const fish1 = new Fish('fish', 3, 10);
console.log(fish1.Name);
console.log(fish1.age);
console.log(fish1.swimSpeed);
fish1.swim();







