const express = require('express');
const router = express.Router();

const RotasGrupoMuscular = require('./grupoMuscularRoutes');
RotasGrupoMuscular.adicionaRotas(router);


module.exports = router;