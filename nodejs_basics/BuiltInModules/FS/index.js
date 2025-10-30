const fs = require("node:fs");

console.log("first");

const syncData = fs.readFileSync("./data.txt", "utf-8");
console.log(syncData);

console.log("second");

fs.readFile("./data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data, "async");
  }
});

console.log("third");

fs.writeFileSync("./create.txt", "file first data");

console.log("fourth");

fs.writeFile("./create.txt", " file second data", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file is created successfully");
  }
});

console.log("fifth");
