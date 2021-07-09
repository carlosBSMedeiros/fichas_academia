const grupoMuscularController = require('../controllers/grupoMuscularController');

module.exports = {

	adicionaRotas(router){
		router.get('/grupoMuscular/buscaGrupos', grupoMuscularController.readAll);
		router.get('/grupoMuscular/buscaGrupo', grupoMuscularController.readByPk);
		router.post('/grupoMuscular', grupoMuscularController.create);
		router.put('/grupoMuscular', grupoMuscularController.alter);
	}

};