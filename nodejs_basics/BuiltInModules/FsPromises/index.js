const fs = require("node:fs/promises");

fs.readFile("./data.txt", "utf-8")
  .then((data) => console.log(data, "promise"))
  .catch((err) => console.log(err));

const readFile = async () => {
  try {
    const data = await fs.readFile("./data.txt", "utf-8");
    console.log(data, "async/await");
  } catch (error) {
    console.log(error);
  }
};

readFile();
