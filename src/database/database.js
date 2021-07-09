const Sequelize = require('sequelize');
const dbConfig = require('../config/DB_config');

const connection = new Sequelize(dbConfig);

connection.authenticate().then(() => {
	console.log('Conexão com o banco de dados efetuada com sucesso');
}).catch(error =>{
	console.log('Ocorreu um erro ao tentar se conectar ao banco de dados');
	console.log(error);
});

var GrupoMuscular = require('../app/models/GrupoMuscular');
GrupoMuscular.init(connection);

module.exports = connection;