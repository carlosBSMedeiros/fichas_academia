const fichaController = require('../controllers/fichaController');

const autenticacao = require('../middlewares/sessionMiddleware');

module.exports = {

	adicionaRotas(router){
		router.post('/ficha', autenticacao, fichaController.create);
		router.get('/fichas', autenticacao, fichaController.readAll);
		router.put('/ficha', autenticacao, fichaController.alter);
		router.delete('/ficha', autenticacao, fichaController.delete);
	}

};