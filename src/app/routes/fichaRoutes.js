const fichaController = require('../controllers/fichaController');

module.exports = {

	adicionaRotas(router){
		router.post('/ficha', fichaController.create);
		router.get('/fichas', fichaController.readAll);
		router.put('/ficha', fichaController.alter);
		router.delete('/ficha', fichaController.delete);
	}

};