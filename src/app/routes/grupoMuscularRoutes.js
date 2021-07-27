const grupoMuscularController = require('../controllers/grupoMuscularController');

const autenticacao = require('../middlewares/sessionMiddleware');


module.exports = {

	adicionaRotas(router){
		router.get('/grupo-muscular/busca-grupos', autenticacao, grupoMuscularController.readAll);
		router.get('/grupo-muscular/busca-grupo', autenticacao, grupoMuscularController.readByPk);
		router.post('/grupo-muscular', autenticacao, grupoMuscularController.create);
		router.put('/grupo-muscular', autenticacao, grupoMuscularController.alter);
		router.delete('/grupo-muscular', autenticacao, grupoMuscularController.delete);

	}

};