const mongoose = require("mongoose");

const connectDB = async () => {
  let mongoUri = "mongodb://localhost:27017/pfe_DB";
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
