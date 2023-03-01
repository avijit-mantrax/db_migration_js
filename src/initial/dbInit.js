const { Sequelize } = require('sequelize');
const { DB_URI } = require('../config');

const sequelize = new Sequelize(DB_URI, { 
    dialect: "postgres",
    logging: false,
    dialectOptions: {
        ssl: false,
      },
});
// console.log(DB_URI);
const dbInit = async() => {
    try {  
        sequelize.sync({ alter: true });
        await sequelize.authenticate();
        console.log("db works succesfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {sequelize, dbInit}