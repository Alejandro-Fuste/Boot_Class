// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
const Sequelize = require("sequelize");

// 'mysql://user:password@host:port/database_name'
const sequelize = new Sequelize('mysql://root:root@127.0.0.1:3306/starwars');

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
// var sequelize = new Sequelize("starwars", "root", "root", {
//   host: "localhost",
//   port: 3306,
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// Exports the connection for other files to use
module.exports = sequelize;
