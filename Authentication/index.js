const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoute");
const authRoutes = require("./routes/authRoute");
const { authMiddleware } = require("./middlewares/authMiddleware");

const PORT = 8000;

app.use(express.json());

app.use("/api/user", authMiddleware, userRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
