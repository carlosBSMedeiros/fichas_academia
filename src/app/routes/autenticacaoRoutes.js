const autenticacaoController = require('../controllers/autenticacaoController');

module.exports = {

	adicionaRotas(router){
		router.post('/login', autenticacaoController.login);
		router.post('/logout', autenticacaoController.logout);
	}

};