class RailwayForm {
  constructor(name, trainno) {
    this.name = name;
    this.trainno = trainno;
  }

  submit() {
    console.log(
      `${this.name} your form is submitted for train no ${this.trainno}`
    );
  }
  cancel() {
    console.log(
      `${this.name} your form is cancelled for train no ${this.trainno}`
    );
  }
}

const mayankForm = new RailwayForm("Mayank", 12345);
// mayankForm.submit();
// mayankForm.cancel();

// if you do not create any constructor then default constructor look like this
// constructor(){}

// Inheritance

class Phone {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  info() {
    console.log(
      `This phone is ${this.brand} ${this.model} and price is ${this.price}`
    );
  }
}

const samsung = new Phone("Samsung", "S10", 10000);
// samsung.info();

// we can use super keyword to call parent class method

class SmartPhone extends Phone {
  constructor(camera, ...args) {
    super(...args);
    this.camera = camera;
  }

  smartPhoneInfo() {
    super.info();
  }

  cameraInfo() {
    console.log(`This phone has ${this.camera} camera`);
  }
}

const samsungSmart = new SmartPhone("20MP", "Samsung", "S24", 100000);
// samsungSmart.smartPhoneInfo();
// samsungSmart.cameraInfo();

// Static Method
// static method attached to class not objects of class

class Animal {
  constructor(name) {
    this.name = Animal.capitalize(name);
  }

  walk() {
    console.log(`${this.name} is walking`);
  }

  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}

const dog = new Animal("bruno");
// dog.walk();

// Getter and Setter

class Home {
  constructor(address) {
    this.address = address;
  }

  get getAddress() {
    console.log(this.address);
  }

  set setNewAddress(address) {
    this.address = address;
  }
}

const myHome = new Home("123 Street");
// myHome.getAddress;
// myHome.setNewAddress = "456 Street";
// myHome.getAddress;

// instanceOf operator

// console.log(myHome instanceof Home);


// function constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.address = "123 Street";

const mySelf = new Person("Mayank", 25);
const myFriend = new Person("xyz", 23);

console.log(mySelf.address);
console.log(myFriend.address);
