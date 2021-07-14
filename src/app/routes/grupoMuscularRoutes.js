const grupoMuscularController = require('../controllers/grupoMuscularController');

module.exports = {

	adicionaRotas(router){
		router.get('/grupo-muscular/busca-grupos', grupoMuscularController.readAll);
		router.get('/grupo-muscular/busca-grupo', grupoMuscularController.readByPk);
		router.post('/grupo-muscular', grupoMuscularController.create);
		router.put('/grupo-muscular', grupoMuscularController.alter);
		router.delete('/grupo-muscular', grupoMuscularController.delete);

	}

};