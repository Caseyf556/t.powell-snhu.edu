const express = require("express");
const { Router } = express;

const jwt = require("express-jwt");
const { login, register } = require("../controllers/authentication");
const {
  tripsList,
  tripsAddTrip,
  tripsFindCode,
  tripsUpdateTrip,
} = require("../controllers/trips");

const router = Router();
const requireAuth = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "payload",
});

router.post("/login", login);
router.post("/register", register);
router.get("/trips", tripsList);
router.post("/trips", requireAuth, tripsAddTrip);

router
  .route("/trips/:tripCode")
  .get(tripsFindCode)
  .put(requireAuth, tripsUpdateTrip);

module.exports = router;
