const express = require('express');
const router = express.Router();

const grupoMuscularController = require('../controllers/grupoMuscularController');

router.get('/grupoMuscular/buscaGrupos', grupoMuscularController.readAll);
router.get('/grupoMuscular/buscaGrupo', grupoMuscularController.readByPk);
router.post('/grupoMuscular', grupoMuscularController.create);
router.put('/grupoMuscular', grupoMuscularController.alter);


module.exports = router;