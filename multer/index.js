const express = require("express");
const app = express();
const PORT = 5000;

const fileRoute = require("./routes/fileRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/uploads", fileRoute);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
