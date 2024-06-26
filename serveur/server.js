const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
var app = express();
const path = require("path");
//// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

//connect to database
connectDB();
app.use(express.static("uploads"));
// Define Routes (connected with Routes folder)
app.use("/api/users", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/Publication", require("./routes/publication"));
app.use("/api/Categorie", require("./routes/Catégorie"));
app.use("/api/Contact", require("./routes/Contact"));
app.use("/api/Reclamation", require("./routes/Reclamation"));
app.use("/api/Notification", require("./routes/Notification"));
app.use("/api/Conversations", require("./routes/Conversations"));
app.use("/api/Messages", require("./routes/Messages"));

//
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
//define servert port
const PORT = process.env.PORT || 8000;

//running server
app.listen(PORT, () => console.log(`server is running on port ${PORT} `));
