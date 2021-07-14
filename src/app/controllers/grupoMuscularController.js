const GrupoMuscular = require('../models/GrupoMuscular');
const Exercicio = require('../models/Exercicio');

module.exports = {

	async create(req, res) {

		try {

			var { nome } = req.body;

			if (nome == null || nome == '') {
				return res.status(400).json({
					msg: 'Erro. Nome não pode ser nulo'
				});
			}

			if (await GrupoMuscular.findOne({
				where: { nome }
			})) {
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
		} catch (erro) {
			console.log(erro);
			return res.status(500).json({ msg: erro });
		}
	},

	async readAll(req, res) {
		try {
			const gruposMusculares = await GrupoMuscular.findAll({ include: Exercicio });

			if (gruposMusculares.length <= 0) {
				return res.status(200).json({
					msg: 'Nenhum Grupo Muscular Cadastrado'
				});
			}

			return res.status(200).json({
				msg: gruposMusculares
			});
		} catch (erro) {
			console.log(erro);
			return res.status(500).json({ msg: erro });
		}
	},

	async readByPk(req, res) {
		try {
			const { id } = req.query;

			const grupoMuscular = await GrupoMuscular.findByPk(id, { include: Exercicio });

			if (grupoMuscular == null) {
				return res.status(400).json({
					msg: 'Nenhum Grupo Muscular Encontrado'
				});
			}
			return res.status(200).json({
				msg: grupoMuscular
			});
		} catch (erro) {
			console.log(erro);
			return res.status(500).json({ msg: erro });
		}
	},

	async alter(req, res) {
		try {
			const { id, nome } = req.body;

			if (nome == null || nome == '') {
				return res.status(400).json({
					msg: 'Erro. Nome não pode ser nulo'
				});
			}

			const grupoMuscular = await GrupoMuscular.findByPk(id);

			if (grupoMuscular == null) {
				return res.status(400).json({
					msg: 'Nenhum Grupo Muscular Encontrado'
				});
			}

			await grupoMuscular.update({ nome },
				{
					where: { id }
				});

			return res.status(200).json({
				msg: 'Grupo Muscular atualizado', grupoMuscular
			});
		} catch (erro) {
			console.log(erro);
			return res.status(500).json({ msg: erro });
		}
	},

	async delete(req, res) {

		try {
			const { id } = req.body;

			const grupoMuscular = await GrupoMuscular.findByPk(id);

			if (!grupoMuscular) {
				return res.status(400).json({ msg: `Não foi encontrado grupo muscular com o id ${id}` });
			}

			await GrupoMuscular.destroy({
				where: {
					id
				}
			});

			return res.status(200).json({ msg: `Grupo muscular com id ${id} excluído com sucesso` });
		} catch (erro) {
			console.log(erro);
			return res.status(500).json({ msg: erro });
		}
	}

};