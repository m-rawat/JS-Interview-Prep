// Map ployfil

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    let res = [];

    for (let i = 0; i < this.length; i++) {
      res.push(cb(this[i], i, this));
    }

    return res;
  };
}

const arr1 = [1, 2, 3, 4];

const ans = arr1.myMap((ele, i, arr1) => {
  return ele * 5;
});

// console.log(ans);

//-----------------------------------------------------------------

// Filter polyfil

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (cb) {
    let res = [];

    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        res.push(this[i]);
      }
    }
    return res;
  };
}

const arr2 = [1, 2, 3, 4];

const ans2 = arr2.myFilter((ele, i, arr2) => {
  return ele > 2;
});

// console.log(ans2);

//----------------------------------------------------------------

// Reduce polyfil

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (cb, initialValue) {
    let acc = initialValue;

    for (let i = 0; i < this.length; i++) {
      acc = acc ? cb(acc, this[i], i, this) : this[i];
    }
    return acc;
  };
}

const arr3 = [1, 2, 3, 4];

const ans3 = arr3.myReduce((acc, curr, i, arr3) => {
  return acc + curr;
}, 0);

// console.log(ans3);

//--------------------------------------------------------------

// call polyfil

if (!Function.prototype.myCall) {
  Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== "function") {
      throw new Error(this + "It's not callable");
    }

    context.fn = this;
    context.fn(...args);
  };
}

function userInfo() {
  console.log(this.name + this.age);
}

const obj = {
  name: "Mayank",
  age: 24,
};

// userInfo.myCall(obj);

//---------------------------------------------------------------

// apply polyfil

if (!Function.prototype.myapply) {
  Function.prototype.myapply = function (context = {}, args = []) {
    if (typeof this !== "function") {
      throw new Error(this + "It's not callable");
    }

    if (!Array.isArray(args)) {
      throw new Error("CreateListFromArrayLike called on non-object");
    }

    context.fn = this;
    context.fn(...args);
  };
}

function userInfo(profession) {
  console.log(this.name + this.age + profession);
}

const obj1 = {
  name: "Mayank",
  age: 24,
};

// userInfo.myapply(obj1, ["Software Engineer"]);

//----------------------------------------------------------------

// bind polyfil

if (!Function.prototype.myBind) {
  Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== "function") {
      throw new Error(this + "can not be bound as it's not callable");
    }

    context.fn = this;

    return function (...newArgs) {
      return context.fn(...args, ...newArgs);
    };
  };
}

function userInfo(profession, experience) {
  console.log(this.name + this.age + profession + experience);
}

const obj2 = {
  name: "Mayank",
  age: 24,
};

// const fun = userInfo.myBind(obj2, "Software Engineer");
// fun(7);

//------------------------------------------------------------------

// memoize polyfil

function myMemoize(fn, context) {
  let res = {};

  return function (...args) {
    const argsCache = JSON.stringify(args);

    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const longSum = (a, b) => {
  for (let i = 0; i <= 100000000; i++) {}
  return a + b;
};

const longSumMemoize = myMemoize(longSum);

//----------------------------------------------------------------------

// debouncing

const myDebounce = (cb, delay) => {
  let timer;

  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

//----------------------------------------------------------------------

// throttleing

const myThrottle = (cb, delay) => {
  let last = 0;

  return (...args) => {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return cb(...args);
  };
};

 // ----------------------------------------------------------------

 // Flatten array infinitely

const flatArrayInfinitely=(arr)=>{
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      flatArrayInfinitely(arr[i]);
    }
    else{
      res.push(arr[i]);
    }
  }
  return res;
}

// console.log(flatArrayInfinitely([1, [2, [3, [4, [5, [6]]]]]]));

// const rescursiveFlatByReduce=(arr)=>{
//   return arr.reduce((acc,curr)=> Array.isArray(curr) ? acc.concat(rescursiveFlatByReduce(curr)):acc.concat(curr),[])
// }

// console.log(rescursiveFlatByReduce([1, [2, [3, [4, [5, [6]]]]]]));

//----------------------------------------------------------------------

//Flatten deep objects

const flattenDeepObject = (obj, parent) => {
  let res = {};

  function generateFlatObject(obj, parent) {
    for (let key in obj) {
      let newParent = parent + key;
      let value = obj[key];
      if (typeof value === "object" && value !== null) {
        generateFlatObject(value, newParent + ".");
      } else {
        res[newParent] = value;
      }
    }
  }
  generateFlatObject(obj, parent);
  return res;
};

const obj3 = {
  a: "12",
  b: 23,
  c: {
    d: 23,
    e: {
      f: 20,
    },
    g: [1, 2],
  },
};

// console.log(flattenDeepObject(obj3, ""));

//{ a: '12', b: 23, 'c.d': 23, 'c.e.f': 20, 'c.g.0': 1, 'c.g.1': 2 }


//----------------------------------------------------------------

// Promise.all

const dummyAPI = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    },time);
  });
};

const promiseArray = [dummyAPI(1000), dummyAPI(2000), dummyAPI(3000)];

const promiseAllPolyfill = (arr) => {
  return new Promise((resolve, reject) => {
    let res = [];
    let completed = 0;
    arr.forEach((promise, idx) => {
      promise
        .then((response) => {
          res[idx] = response;
          completed++;
          if (completed === arr.length) {
            resolve(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

promiseAllPolyfill(promiseArray)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));
