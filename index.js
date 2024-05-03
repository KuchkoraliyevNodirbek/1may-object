function Cat(color, width, height, age, name) {
    this.color = color;
    this.width = width;
    this.height = height;
    this.age = age;
    this.name = name;
}

function Car(price, color, year) {
    this.price = price;
    this.color = color;
    this.year = year;
}

var myCat = new Cat("oq", 30, 20, 3, "Miau");

var myCar = new Car(50000, "qora", 2022);


console.log(myCat);
console.log(myCar); 