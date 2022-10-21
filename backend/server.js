require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const noteRouter = require("./routes/noteRouter");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/user", userRouter);
app.use("/api/notes", noteRouter);

// Listen for Connections
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Listening on Port", PORT);
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB");
});
