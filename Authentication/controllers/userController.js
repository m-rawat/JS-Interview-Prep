const { users } = require("./authController");

const userData = async (req, res) => {
  try {
    const {
      user: { email },
    } = req;
    const user = users.find((user) => user.email === email);

    if (!user) {
      res.status(400).json({ error: "User does not exists" });
      return;
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { userData };
