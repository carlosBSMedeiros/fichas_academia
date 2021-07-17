const fichaExercicioController = require('../controllers/fichaExercicioController');

module.exports = {

	adicionaRotas(router){
		router.post('/ficha-exercicio', fichaExercicioController.create);
		router.post('/ficha-exercicios', fichaExercicioController.createMultiple);
		router.get('/ficha-exercicios', fichaExercicioController.readAll);
		router.put('/ficha-exercicio', fichaExercicioController.alter);
		router.delete('/ficha-exercicio', fichaExercicioController.delete);
	}

};