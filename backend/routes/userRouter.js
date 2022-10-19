const router = require("express").Router();
const users = require("../controllers/users");

// Register User
router.post("/register", users.registerUser);
// Login User
router.post("/login", users.registerUser);

module.exports = router;
