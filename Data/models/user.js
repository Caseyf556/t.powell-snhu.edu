const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// User Definition
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    hash: {
      type: String,
      required: true
    },
    salt: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    collection: "users"
  }
);

// Sets password: generates salt + hash
userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
};

// Strong password
userSchema.methods.validatePassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
  return this.hash === hash;
};

// Generate JWT token
userSchema.methods.generateJwt = function () {
  const expiry = Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60; // 7 days
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
      exp: expiry
    },
    process.env.JWT_SECRET // 🔒 Keep secret in env
  );
};

// User Mode
module.exports = mongoose.model("User", userSchema);
