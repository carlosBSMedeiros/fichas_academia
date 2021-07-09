const exercicioController = require('../controllers/exercicioController');

module.exports = {

	adicionaRotas(router){
		router.post('/exercicio', exercicioController.create);
	}

};