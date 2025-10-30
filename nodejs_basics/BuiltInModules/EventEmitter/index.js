const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, toppings) => {
  console.log(`order is resceived of ${size} pizza with ${toppings} toppings`);
});

emitter.on("order-pizza", () => {
  console.log("Amazing pizza");
});

console.log('checking if order-pizza event is emitted');

emitter.emit("order-pizza", "large", "mushroom");
