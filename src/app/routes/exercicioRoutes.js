const exercicioController = require('../controllers/exercicioController');
const autenticacao = require('../middlewares/sessionMiddleware');

module.exports = {

	adicionaRotas(router){
		router.post('/exercicio', autenticacao, exercicioController.create);
		router.get('/exercicios', autenticacao, exercicioController.readAll);
		router.put('/exercicio', autenticacao, exercicioController.alter);
		router.delete('/exercicio', autenticacao, exercicioController.delete);

	}

};