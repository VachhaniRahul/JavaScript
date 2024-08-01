// class = provides a more structured and cleaner way to work with
//         work with objects compared to traditional constuctor 
//         function


class Product{
    constructor(Name, price){
        this.Name = Name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product : ${this.Name}`);
        console.log(`Price : ${this.price}`);
    }
}

const product1 = new Product("Shirts", 3000);
product1.displayProduct();


const product2 = new Product("Pants", 4000);
product2.displayProduct();
