const obj = {
  name: "Mayank",
};

function sayHello(age, designation) {
  return `Hello ${this.name}, my age is ${age} and i'm a ${designation}`;
}

// console.log(sayHello.call(obj, 24, "Software Developer"));
// console.log(sayHello.apply(obj, [24, "Software Developer"]));

const bindFun = sayHello.bind(obj);
// console.log(bindFun(24, "Software Developer"));

// ---------------------------------------------------------

const species = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log(`#${i} ${this.species} : ${this.name}`);
  };
  this.print();
}

species.forEach(function (specie, index) {
  //   printAnimals.call(specie, index);
});

// ------------------------------------------------------------'

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(Math.max.apply(null, numbers));
