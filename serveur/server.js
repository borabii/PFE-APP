const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
const app = express();

//// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

//connect to database
connectDB();
app.use(express.static("uploads"));
// for parsing application/json
// Define Routes (connected with Routes folder)
app.use("/api/users", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/Publication", require("./routes/publication"));
app.use("/api/Categorie", require("./routes/Catégorie"));
app.use("/api/Contact", require("./routes/Contact"));
app.use("/api/Notification", require("./routes/Notification"));

//define servert port
const PORT = process.env.PORT || 8000;

//running server
app.listen(PORT, () => console.log(`server is running on port ${PORT} `));
