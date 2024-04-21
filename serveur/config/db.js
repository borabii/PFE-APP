const mongoose = require("mongoose");
const config = require("config");

const mongoUri = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("mongoDb connected succesfuly");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
