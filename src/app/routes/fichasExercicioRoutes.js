const fichaExercicioController = require('../controllers/fichaExercicioController');
const autenticacao = require('../middlewares/sessionMiddleware');

module.exports = {

	adicionaRotas(router){
		router.post('/ficha-exercicio', autenticacao, fichaExercicioController.create);
		router.post('/ficha-exercicios', autenticacao, fichaExercicioController.createMultiple);
		router.get('/ficha-exercicios',autenticacao, fichaExercicioController.readAll);
		router.put('/ficha-exercicio', autenticacao, fichaExercicioController.alter);
		router.delete('/ficha-exercicio', autenticacao, fichaExercicioController.delete);
	}

};