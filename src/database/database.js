const Sequelize = require('sequelize');
const dbConfig = require('../config/DB_config');
const env = require('../config/environment');

const connection = new Sequelize(env.dbURL, dbConfig);

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

var Ficha = require('../app/models/Ficha');
Ficha.init(connection);

var FichaExercicio = require('../app/models/FichaExercicio');
FichaExercicio.init(connection);

Exercicio.associate(connection.models);
GrupoMuscular.associate(connection.models);
Ficha.associate(connection.models);
FichaExercicio.associate(connection.models);

module.exports = connection;