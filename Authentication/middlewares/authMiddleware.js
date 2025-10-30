const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../controllers/authController");

const authMiddleware = async (req, res, next) => {
  const token = req.headers?.authorization;

  if (!token) {
    res.status(400).json({ error: "Token is required" });
    return;
  }
  const user = await jwt.verify(token, SECRET_KEY);

  if (!user) {
    res.status(400).json({ error: "Invalid token" });
    return;
  }
  req.user = user;
  next();
};
module.exports = { authMiddleware };



