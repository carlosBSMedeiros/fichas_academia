const Sequelize = require('sequelize');
const dbConfig = require('../config/DB_config');

const connection = new Sequelize(dbConfig);

connection.authenticate().then(() => {
	console.log('Conexão com o banco de dados efetuada com sucesso');
}).catch(error =>{
	console.log('Ocorreu um erro ao tentar se conectar ao banco de dados');
	console.log(error);
});


var Academia = require('../app/models/Academia');
Academia.init(connection);
var GrupoMuscular = require('../app/models/GrupoMuscular');
GrupoMuscular.init(connection);
var Exercicio = require('../app/models/Exercicio');
Exercicio.init(connection);

Exercicio.associate(connection.models);

module.exports = connection;