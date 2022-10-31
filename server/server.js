const userRouter = require("./backend/routes/userRouter");
const noteRouter = require("./backend/routes/noteRouter");
const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();


const PORT = process.env.PORT || 5000;

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(cors());

// Routes
app.use("/user", userRouter);
app.use("/api/notes", noteRouter);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });