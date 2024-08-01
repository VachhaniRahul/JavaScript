// constructor = special method for defining the properties and methods of objects


function Car(company, model, year, color){
    this.company = company,
    this.model = model,
    this.year = year,
    this.color = color
}


const car1 = new Car('Bmw','bmw 30', 2024, "red");
console.log(car1.company);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);


const car2 = new Car('honda','shwift 30', 2022, "blue");
console.log(car2.company);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
