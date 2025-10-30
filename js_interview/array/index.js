const arr = [
  [1, 2],
  [3, 4, 5],
  [6, [7, 8], 9],
  [10, [11, [12]]],
];

const flattenArray = (arr, depth = 1) => {
  let res = [];
  arr.forEach((ele) => {
    if (Array.isArray(ele) && depth > 0) {
      res = res.concat(flattenArray(ele, depth - 1));
    } else {
      res.push(ele);
    }
  });

  return res;
};

// console.log("start");

// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb(`my name is ${username}`);
//   }, 1000);
// }

// function likeMe(hobby, cb) {
//   setTimeout(() => {
//     cb(`i like ${hobby}`);
//   }, 1000);
// }

// function myDesignation(designation, cb) {
//   setTimeout(() => {
//     cb(`i am ${designation}`);
//   }, 1000);
// }

// importantAction("mayank", function (res) {
//   console.log(res);
//   likeMe("cricket", function (res) {
//     console.log(res);
//     myDesignation("software engineer", function (res) {
//       console.log(res);
//     });
//   });
// });

// console.log("stop");

// const sub=new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     const result=false;
//     if(result) resolve('resolved');
//     else reject('rejected');
//   }, 2000);
// })

// sub.then((res)=>console.log(res)).catch((err)=>console.log(err));

// const sub1=Promise.reject('rejected');

// sub1.then((res)=>console.log(res))
// .catch((err)=>console.log(err));

const importantActionPromise = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`My name is ${username}`);
    }, 1000);
  });
};

const likeMePromise = (hobby) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`i like ${hobby}`);
    }, 200);
  });
};

const myDesignationPromise = (designation) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`i am ${designation}`);
    }, 200);
  });
};

// importantActionPromise("mayank")
//   .then((res) => {
//     console.log(res);
//     likeMePromise("cricket").then((res) => {
//       console.log(res);
//       myDesignationPromise("software engineer").then((res) => {
//         console.log(res);
//       });
//     });
//   })
//   .catch((err) => console.log(err));

// importantActionPromise("mayank")
//   .then((res) => {
//     console.log(res);
//     return likeMePromise("cricket");
//   })
//   .then((res) => {
//     console.log(res);
//     return myDesignationPromise("software engineer");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// Promise.any([
//   importantActionPromise("Mayank"),
//   likeMePromise("cricket"),
//   myDesignationPromise("software engineer"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const result = async () => {
//   try {
//     const message1 = await importantActionPromise("mayank");
//     console.log(message1);
//     const message2 = await likeMePromise("cricket");
//     console.log(message2);
//     const message3 = await myDesignationPromise("software engineer");
//     console.log(message3);
//   } catch (error) {
//     console.log(error);
//   }
// };

// result();

// const promRecursive = (promises) => {
//   if (promises.length === 0) return;

//   const promise = promises.shift();

//   promise.then((res) => console.log(res)).catch((err) => console.log(err));

//   promRecursive(promises);
// };

const createBase = (num) => {
  return (val) => {
    return num + val;
  };
};

// console.log(createBase(6)(21));

// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   inner(i);
// }

function counter() {
  var _counter = 0;

  function add(val) {
    _counter += val;
  }

  function retrive() {
    return `Counter = ${_counter}`;
  }

  return {
    add,
    retrive,
  };
}

const c = counter();
c.add(5);
c.add(10);
// console.log(c.retrive());

const pangram = (str) => {
  const arr = new Array(26).fill(false);

  let index;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      index = str.charCodeAt(i) - "A".charCodeAt(0);
    } else if (str[i] >= "a" && str[i] <= "z") {
      index = str.charCodeAt(i) - "a".charCodeAt(0);
    } else {
      continue;
    }
    arr[index] = true;
  }

  const ans = arr.every((a) => a === true);
  return ans;
};

console.log(pangram("The quick over the lazy dog"));
