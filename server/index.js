const express = require("express");
const sequelize = require("./DataAccessLayer/SqlConnection");
const User = require("./models/SqlModels/User");
const app = express();
const main = async () => {
  try {
    await sequelize.authenticate();
    const con = await sequelize.sync();
    console.log("connected to database successfully");
  } catch (error) {
    console.log(error);
  }
};

main();
app.listen(5000, (err) => {
  if (err) {
    console.log(err); }
  console.log("server is running on port 5000");
});
