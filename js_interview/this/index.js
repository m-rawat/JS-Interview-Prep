let calculator = {
  read() {
    this.a = prompt("What is a value");
    this.b = prompt("what is b value");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

const calc = {
  a: 0,
  add(x) {
    this.a = this.a + x;
    return this;
  },
  subtract(y) {
    this.a = this.a - y;
    return this;
  },
  multiply(z) {
    this.a = this.a * z;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(20);
// console.log(result.a);

const memoize = (fn) => {
  const obj = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!obj[key]) {
      obj[key] = fn(...args);
    }
    return obj[key];
  };
};

const multiply = (a, b) => {
  for (let i = 0; i < 1000000000; i++) {}
  return a * b;
};

const memoizeMultiply = memoize(multiply);

console.time("first call");
memoizeMultiply(9467, 7649);
console.timeEnd("first call");

console.time("second call");
memoizeMultiply(9467, 7649);
console.timeEnd("second call");

const sum = (a) => {
  return (b) => {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(10)(20)(30)(40)());
