const Academia = require('../models/Academia');

const validaCampos = require('../utils/validaCampos');

module.exports = {

	async login(req, res) {

		try {
			const { email, senha } = req.body;

			const erros = validaCampos.validaCamposNulos({
				email, senha
			});

			if(erros.length > 0){
				return res.status(400).json({ msg: erros });
			}

			const academia = await Academia.findOne({
				where: {
					email
				}
			});

			if (!academia) {
				return res.status(400).json({ msg: 'Academia não encontrada' });
			}

			if(academia.senha != senha){
				return res.status(400).json({ msg: 'senha incorreta' });
			}

			req.session.isAuth = true;
			
			res.cookie('idAcad', academia.id);

			return res.status(200).json({ msg: 'Autenticação realizada com sucesso' });
		} catch (erro) {
			console.log(erro);
			return res.status(500).json({ msg: erro });

		}
	},

	async logout(req,res){
		await req.session.destroy();
		res.status(200).json({msg: 'Logout realizado com sucesso'});
	}

};