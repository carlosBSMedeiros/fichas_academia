const Sequelize = require('sequelize');
const dbConfig = require('../config/DB_config');

const connection = new Sequelize(dbConfig);

module.exports = connection;