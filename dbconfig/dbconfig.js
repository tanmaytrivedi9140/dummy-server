let mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {})
    .then(() => {
      console.log("successfull connection of database");
    })
    .catch((e) => {
      console.log(e);

      process.exit(1);
    });
};
module.exports = dbConnect;
