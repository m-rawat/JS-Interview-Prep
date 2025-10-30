// console.log('start');

// function importantAction (username){
//     setTimeout(()=>{
//         return `my name is ${username}`;
//     },0);
// }

// const message=importantAction('Mayank');
// console.log(message);

// console.log('finish');

// ---------------------------------------------------------------------------

// console.log("start");

// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb(`my name is ${username}`);
//   }, 0);
// }

// importantAction("Mayank", (res) => {
//   console.log(res);
// });

// console.log("finish");

// ----------------------------------------------------------------------------

// console.log("start");

// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb(`my name is ${username}`);
//   }, 0);
// }

// function likeTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`like this video ${video}`);
//   }, 1000);
// }

// function shareTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`share this video ${video}`);
//   }, 1000);
// }

// importantAction("Mayank", (res) => {
//   console.log(res);
//   likeTheVideo("js interview questions", (ans) => {
//     console.log(ans);
//     shareTheVideo("js interview questions", (ans) => {
//       console.log(ans);
//     });
//   });
// });

// console.log("finish");

// // the above code shows the problem of callback hell or pyramid of doom

// ---------------------------------------------------------------

//promises

// console.log("start");

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = false;
//     if (result) resolve("resolved");
//     else reject("rejected");
//   }, 2000);
// });

// sub
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("finish");

//------------------------------------------------------------------

// console.log("start");

// const res = Promise.resolve("resolved");
// console.log(res);
// res.then((ans) => console.log(ans)).catch((err) => console.log(err));

// console.log("finish");

//convert this code from callback to promise

// --------------------------------------------------------------------

// console.log("start");

// function importantAction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`my name is ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`like this video ${video}`);
//     }, 600);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`share this video ${video}`);
//     }, 1000);
//   });
// }

// console.log("stop");

// importantAction("Mayank")
//   .then((res) => {
//     console.log(res);
//     likeTheVideo("js interview questions").then((res) => {
//       console.log(res);
//       shareTheVideo("js interview questions").then((res) => {
//         console.log(res);
//       });
//     });
//   })
//   .catch((err) => console.log(err));

// but the above code also look like messy or complicated to read , so solve this issue

// ------------------------------------------------------------------

// now we use promise chaining

// importantAction("Mayank")
//   .then((res) => {
//     console.log(res);
//     return likeTheVideo("js interview questions");
//   })
//   .then((res) => {
//     console.log(res);
//     return shareTheVideo("js interview questions");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// the above also a little bit messy so further optimize the code

// ----------------------------------------------------------------------

// we have promise combinators

// (i) Promise.all

// Promise.all([
//   importantAction("Mayank"),
//   likeTheVideo("js interview questions"),
//   shareTheVideo("js interview questions"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// (ii) Promise.race

// Promise.race([
//     importantAction("Mayank"),
//     likeTheVideo("js interview questions"),
//     shareTheVideo("js interview questions"),
//   ])
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

// (iii) Promise.allSettled

// Promise.allSettled([
//     importantAction("Mayank"),
//     likeTheVideo("js interview questions"),
//     shareTheVideo("js interview questions"),
//   ])
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

// (iv) Promise.any

// Promise.any([
//     importantAction("Mayank"),
//     likeTheVideo("js interview questions"),
//     shareTheVideo("js interview questions"),
//   ])
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

// ----------------------------------------------------------

// async/await

// function importantAction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`my name is ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`like this video ${video}`);
//     }, 600);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`share this video ${video}`);
//     }, 1000);
//   });
// }

// const result = async () => {
//   try {
//     const ans1 = await importantAction("Mayank");
//     const ans2 = await likeTheVideo("js interview questions");
//     const ans3 = await shareTheVideo("js interview questions");

//     console.log({ ans1, ans2, ans3 });
//   } catch (error) {
//     console.log(error);
//   }
// };

// result();

//------------------------------------------------------------------

// rescursively resolve the promises

// function importantAction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`my name is ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`like this video ${video}`);
//     }, 2000);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`share this video ${video}`);
//     }, 3000);
//   });
// }

// const resolvePromisesRecursively = (promises) => {
//   if (promises.length === 0) return;

//   const promise = promises.shift();

//   promise.then((res) => console.log(res)).catch((err) => console.log(err));

//   resolvePromisesRecursively(promises);
// };

// resolvePromisesRecursively([
//   importantAction("Mayank"),
//   likeTheVideo("js interview questions"),
//   shareTheVideo("js interview questions"),
// ]);

const powerPromise = (a, b) => {
  // return new Promise((resolve, reject) => {
  //   let first=a;
  //   for(let i=1;i<b;i++){
  //     a=a*first;
  //   }
  //   resolve(a);
  //   console.log("mayank");
  // });
  return Promise.resolve('resolved');
};

// console.log(powerPromise(5,2));

// powerPromise(2, 5)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));


  // console.log('start');

  const mainFun=async()=>{
    console.log('before');
    const ans=await powerPromise(2,6);
    console.log('after');
  }

  console.log('global before');

  mainFun();


  console.log('global after');