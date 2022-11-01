const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const noteRouter = require("./noteRouter");

router.get("/", (req, res) => {
  res.send("Welcome to SoftNotes!");
});

router.use("/user", userRouter);
router.use("/api/notes", noteRouter);

module.exports = router;
