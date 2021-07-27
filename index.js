const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());

const conexao = require('./src/database/database');

require('./src/config/sessionConfig')(app, session, conexao);

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	next();
});

app.use('/fichas-academia', require('./src/app/routes/routes'));

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}`));
