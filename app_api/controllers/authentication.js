const passport = require("passport");
const mongoose = require("mongoose");

const User = mongoose.model("users");
const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, email, and password are required." });
  }

  try {
    const user = new User({ name, email });
    user.setPassword(password);

    await user.save();

    const token = user.generateJwt();
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Registration failed.", error });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    passport.authenticate("local", (err, user, info) => {
      if (err) return res.status(500).json({ message: "Authentication error.", error: err });

      if (!user) return res.status(401).json({ message: "Invalid credentials.", info });

      const token = user.generateJwt();
      return res.status(200).json({ token });
    })(req, res, next);
  } catch (error) {
    return res.status(500).json({ message: "Login failed.", error });
  }
};

module.exports = { register, login };
