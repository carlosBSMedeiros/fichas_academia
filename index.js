const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	next();
});


app.use('/fichas-academia', require('./src/app/routes/routes'));

// eslint-disable-next-line no-unused-vars
require('./src/database/database');

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}`));
