require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const noteRouter = require("./routes/noteRouter");
const cookieParser = require('cookie-parser');
const auth = require('./middleware/auth');

const app = express();
app.use(express.json());

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));


// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// Routes
app.use("/user", userRouter);
app.use("/api/notes", noteRouter);

//logout user
app.get('/api/logout',auth,function(req,res){

res.clearCookie()
req.session.destroy();
res.sendStatus(200);
}); 

// Listen for Connections
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Listening on Port", PORT);
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB");
});
