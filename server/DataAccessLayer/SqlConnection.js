const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("lms", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
  },
});



module.exports = sequelize;
