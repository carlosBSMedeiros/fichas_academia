const express = require('express');
const router = express.Router();

const exercicioController = require('../controllers/exercicioController');

router.get('/home', exercicioController.home);

module.exports = router;