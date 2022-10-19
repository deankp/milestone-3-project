const Users = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const users = {
  registerUser: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await Users.findOne({ email: email });
      if (user)
        return res.status(400).json({ msg: "This email already exists!" });

      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        username: username,
        email: email,
        password: passwordHash,
      });
      await newUser.save();
      res.json({ msg: "Sign up Success" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email: email });
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Incorrect Password" });

      // if login successful create token
      const payload = { id: user._id, name: user.username };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.json({ token });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = users;
