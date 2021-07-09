const express = require('express');
const app = express();

app.use(express.json());

app.use('/fichasAcademia', require('./src/app/routes/routes')); 

const connection = require('./src/database/database');
connection.authenticate().then(() => {
	console.log('Conexão com o banco de dados efetuada com sucesso');
}).catch(error =>{
	console.log('Ocorreu um erro ao tentar se conectar ao banco de dados');
	console.log(error);
});

var GrupoMuscular = require('./src/app/models/GrupoMuscular');
GrupoMuscular.init(connection);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}`));
