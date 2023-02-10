const { Sequelize } = require("sequelize");
const sequelize = require("../../DataAccessLayer/SqlConnection");
const User = sequelize.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  courses: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = User;
