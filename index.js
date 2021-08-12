const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv/config');
const app = express();

app.use(express.json());
app.use(cookieParser());

const conexao = require('./src/database/database');

require('./src/config/sessionConfig')(app, session, conexao);

app.use(cors());

app.use('/fichas-academia', require('./src/app/routes/routes'));

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}`));
