const exercicioController = require('../controllers/exercicioController');

module.exports = {

	adicionaRotas(router){
		router.post('/exercicio', exercicioController.create);
		router.get('/exercicios', exercicioController.readAll);
		router.put('/exercicio', exercicioController.alter);
		router.delete('/exercicio', exercicioController.delete);

	}

};