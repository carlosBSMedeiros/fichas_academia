const express = require('express');
const router = express.Router();

const rotasGrupoMuscular = require('./grupoMuscularRoutes');
rotasGrupoMuscular.adicionaRotas(router);

const rotasExercicio = require('./exercicioRoutes');
rotasExercicio.adicionaRotas(router);

module.exports = router;