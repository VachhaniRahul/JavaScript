

const fruits = [
    {Name : "apple", color : "red"},
    {Name : "banana", color : "yellow"},
    {Name : "coconut", color : "white"}
];

const fruitsName = fruits.map(fruit => fruit.Name);
console.log(fruitsName);

const yellowfruits = fruits.filter(fruit => fruit.color ==="yellow");
console.log(yellowfruits);









