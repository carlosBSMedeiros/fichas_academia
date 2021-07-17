const Ficha = require('../models/Ficha');
const FichaExercicio = require('../models/FichaExercicio');
const Exercicio = require('../models/Exercicio');
const Academia = require('../models/Academia');

const validaCampos = require('../utils/validaCampos');
const { validaCamposNulos } = require('../utils/validaCampos');

module.exports = {
	async create(req, res){

		try{

			const {id_academia, nome, nome_aluno} = req.body;
            
			var erros = validaCampos.validaCamposNulos({
				id_academia,
			});
            
			if (erros.length > 0) {
				return res.status(400).json({ msg: erros });
			}
			
			const academia = await Academia.findByPk(id_academia);
			if (!academia) {
				return res.status(400).json({ msg: 'Erro. Academia não existe' });
			}

			const ficha = await Ficha.create({
				id_academia,
				nome,
				nome_aluno
			});

			return res.status(200).json({
				msg: 'Ficha criada com sucesso',
				ficha
			});
		} catch (erro) {
			console.log(erro);
			return res.status(500).json({ msg: erro });

		}
	},

	async alter(req,res){
        
		try{
			const {id, id_academia, nome, nome_aluno} = req.body;
            
			var erros = validaCampos.validaCamposNulos({
				id,
				id_academia
			});

			if (erros.length > 0) {
				return res.status(400).json({ msg: erros });
			}

			const ficha = await Ficha.findByPk(id);
			if (!ficha) {
				return res.status(400).json({ msg: `Erro. Ficha com id ${id} não existe` });
			}
            
			const academia = await Academia.findByPk(id_academia);
			if (!academia) {
				return res.status(400).json({ msg: 'Erro. Academia não existe' });
			}

			const fichaAlter = await Ficha.update({
				nome,
				nome_aluno
			}, {
				where:{
					id
				},
				
			});
        
			return res.status(200).json({
				msg: 'Ficha alterada com sucesso',
				ficha: fichaAlter
			});
		}catch(error){
			return res.status(500).json({msg: error});
		} 
	},

	async delete(req, res){
		try{
			const {id} = req.body;

			const ficha = await Ficha.findByPk(id);

			if(!ficha){
				return res.status(400).json({msg: `Erro. Ficha com id ${id} não existe`});
			}

			await Ficha.destroy({
				where: {
					id
				}
			});

			return res.status(200).json({msg: 'Ficha excluída com sucesso'});

		}catch(error){
			return res.status(500).json({msg: error});
		}
	},

	async readAll(req, res){
		try{
            
			const {id_academia} = req.query;
			console.log(id_academia);

			const erros = validaCamposNulos({id_academia});

			if(erros.length > 0){
				return res.status(400).json({msg: erros});
			}

			if(!(await Academia.findByPk(id_academia))){
				return res.status(400).json({msg: erros});
			}

			const fichas = await Ficha.findAll({
				where: {
					id_academia
				}, 
				include: [
					{
						model: FichaExercicio,
						as: 'ficha_exercicio',
						attributes: ['treino'],
						include: [{
							model: Exercicio,
							as: 'exercicio',
							attributes: ['nome', 'descricao'],
						}]
					}
				]
			});

			return res.status(200).json({fichas});

		}catch(error){
			console.log(error);
			return res.status(500).json({msg: error});
		}
	}
};