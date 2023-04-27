class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        }
    get personInfo() {
        console.log(`Імʼя: ${this.name}. Вік: ${this.age}`);
    }
}

class Car {
    constructor (brand, model, year, numberplate){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.numberplate = numberplate;
    }
    addOwner(owner){
        if (owner.age > 18){
            this.ownerName = owner;
        } else {
            console.log(`Громадянин(ка) ${owner.name} повинно бути більше 18 років щоб зареєструвати авто!`);
        }
    }
    get carInfo() {
        if (this.ownerName) {
            console.log(`Інформація про авто: ${this.brand} ${this.model} (${this.year}) - ${this.numberplate}. Власник: ${this.ownerName.name}`);
        } else {
            console.log(`За автівкою ${this.brand} ${this.model} (${this.year}) не зареєстровано власника!`);
        }
  }

}

let person1 = new Person ('Роман Романюк', 28);
let person2 = new Person ('Сергій Середа', 24);
let person3 = new Person ('Марія Притула', 17);

person1.personInfo;
person2.personInfo;
person3.personInfo;

let car1 = new Car ('Audi', 'A6', 2020, 'AE7565CK');
let car2 = new Car ('Subaru', 'Impreza', 2012, 'AC9689CH');
let car3 = new Car ('Toyota', 'Highlander', 2022);

car1.addOwner(person1);
car2.addOwner(person2);
car3.addOwner(person3);

car1.carInfo;
car2.carInfo;
car3.carInfo;
