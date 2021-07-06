const express = require('express');
const app = express();
app.use(express.json());
app.use('/', require('./app/src/routes/routes')); 
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}`));
