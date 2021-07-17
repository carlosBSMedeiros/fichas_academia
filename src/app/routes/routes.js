const express = require('express');
const router = express.Router();

const rotasGrupoMuscular = require('./grupoMuscularRoutes');
rotasGrupoMuscular.adicionaRotas(router);

const rotasExercicio = require('./exercicioRoutes');
rotasExercicio.adicionaRotas(router);

const rotasFicha = require('./fichaRoutes');
rotasFicha.adicionaRotas(router);

const rotasFichaExercicio = require('./fichasExercicioRoutes');
rotasFichaExercicio.adicionaRotas(router);

module.exports = router;