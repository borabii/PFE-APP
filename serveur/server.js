const express = require("express");
const connectDB = require("./config/db");
const app = express();

//connect to database
connectDB();

//
app.use(express.json({ extended: false })); // TO accept body data ?
//
app.use("/api/users", require("./routes/user"));

//define servert port
const PORT = process.env.PORT || 6000;

//running server
app.listen(PORT, () => console.log(`server is running on port ${PORT} `));
