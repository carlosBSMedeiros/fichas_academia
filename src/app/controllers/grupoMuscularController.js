const GrupoMuscular = require('../models/GrupoMuscular');

module.exports = {

	//CRUD	
	async create(req, res) {

		try {

			var { nome } = req.body;

			if (nome == null || nome == '') {
				return res.status(400).json({
					msg: 'Erro. Nome não pode ser nulo'
				});
			}

			if(await GrupoMuscular.findOne({
				where: { nome }
			})){
				return res.status(400).json({
					msg: `Erro. Grupo Muscular com nome ${nome} já existe`
				});
			}

			const novoGpMuscular = await GrupoMuscular.create({
				nome
			});

			return res.status(200).json({
				msg: 'cadastro de grupo musuclar efetuado com sucesso', novoGpMuscular
			});
		} catch (error) {
			return res.status(400).json({
				msg: 'Erro', error
			});
		}
	},

	async readAll(req, res){
		const gruposMusculares = await GrupoMuscular.findAll({});

		if(gruposMusculares.length <= 0){
			return res.status(200).json({
				msg: 'Nenhum Grupo Muscular Cadastrado'
			});
		}

		return res.status(200).json({
			msg: gruposMusculares
		});
	},

	async readByPk(req, res){
		const {id} = req.query;

		const grupoMuscular = await GrupoMuscular.findByPk(id);

		if(grupoMuscular == null){
			return res.status(400).json({
				msg: 'Nenhum Grupo Muscular Encontrado'
			});
		}
		return res.status(200).json({
			msg: grupoMuscular
		});

	},

	async alter(req, res){
		const {id, nome} = req.body;

		if(nome == null || nome == ''){
			return res.status(400).json({
				msg: 'Erro. Nome não pode ser nulo'
			});
		}

		const grupoMuscular = await GrupoMuscular.findByPk(id);

		if(grupoMuscular == null){
			return res.status(400).json({
				msg: 'Nenhum Grupo Muscular Encontrado'
			});
		}

		await grupoMuscular.update({
			nome
		});

		return res.status(200).json({
			msg: 'Grupo Muscular atualizado' , grupoMuscular
		});
	}

};