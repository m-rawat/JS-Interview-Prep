const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY =
  "3534db63d401a1ff1cc8b8071b78ad0deed42b14755a125053ebc38b9f620ca3";

const users = [];

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({ name, email, password: hashedPassword });
    res.status(200).json({ messgae: "User successfully signup" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = users.find((user) => user.email === email);

    if (!userExists) {
      return res.status(400).json({ error: "User does not exists" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      userExists.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Password is incorrect" });
    }

    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json([{ error: error.message }]);
  }
};

module.exports = {
  signup,
  login,
  users,
  SECRET_KEY,
};
