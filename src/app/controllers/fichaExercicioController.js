const FichaExercicio = require('../models/FichaExercicio');
const Ficha = require('../models/Ficha');
const Exercicio = require('../models/Exercicio');

const validaCampos = require('../utils/validaCampos');

module.exports = {
	async create(req, res) {

		try {

			const { id_ficha, id_exercicio, treino } = req.body;

			var erros = validaCampos.validaCamposNulos({
				id_ficha, id_exercicio, treino
			});

			if (erros.length > 0) {
				return res.status(400).json({ msg: erros });
			}

			const ficha = await Ficha.findByPk(id_ficha);
			if (!ficha) {
				return res.status(400).json({ msg: 'Erro. Ficha não existe' });
			}

			const exercicio = await Exercicio.findByPk(id_exercicio);
			if (!exercicio) {
				return res.status(400).json({ msg: 'Erro. Exercicio não existe' });
			}

			const FichaExercicio = await FichaExercicio.create({
				id_ficha,
				id_exercicio,
				treino
			});

			return res.status(200).json({
				msg: 'FichaExercicio criada com sucesso',
				FichaExercicio
			});
		} catch (erro) {
			console.log(erro);
			return res.status(500).json({ msg: erro });

		}
	},

	async createMultiple(req, res) {

		var ret = [];
		try {
			const { fichasExercicio } = req.body;

			for (var fichaExercicio of fichasExercicio) {
				const { id_ficha, id_exercicio, treino } = fichaExercicio;

				var erros = validaCampos.validaCamposNulos({
					id_ficha, id_exercicio, treino
				});

				if (erros.length > 0) {
					return res.status(400).json({ msg: erros });
				}

				const ficha = await Ficha.findByPk(id_ficha);
				if (!ficha) {
					return res.status(400).json({ msg: 'Erro. Ficha não existe' });
				}

				const exercicio = await Exercicio.findByPk(id_exercicio);
				if (!exercicio) {
					return res.status(400).json({ msg: 'Erro. Exercicio não existe' });
				}

				const fichaExercicioNovo = await FichaExercicio.create({
					id_ficha,
					id_exercicio,
					treino
				});

				ret.push(fichaExercicioNovo);
			}

			return res.status(200).json({ msg: ret });
		} catch (erro) {
			console.log(erro);
			return res.status(500).json({ msg: erro });
		}
	},

	async alter(req, res) {

		try {
			const { id, id_ficha, id_exercicio, treino } = req.body;

			var erros = validaCampos.validaCamposNulos({
				id, id_ficha, id_exercicio, treino
			});

			if (erros.length > 0) {
				return res.status(400).json({ msg: erros });
			}

			const fichaExercicio = FichaExercicio.findByPk(id);
			if (!fichaExercicio) {
				return res.status(400).json({ msg: 'Erro. FichaExericio não existe' });
			}

			if (!(fichaExercicio.id_ficha == id_ficha)) {
				const ficha = await Ficha.findByPk(id_ficha);
				if (!ficha) {
					return res.status(400).json({ msg: 'Erro. Ficha não existe' });
				}
			}

			if (!(fichaExercicio.id_exercicio == id_ficha)) {
				const exercicio = await Exercicio.findByPk(id_exercicio);
				if (!exercicio) {
					return res.status(400).json({ msg: 'Erro. Exercicio não existe' });
				}
			}


			const fichaExercicioAlter = await FichaExercicio.update({
				id_ficha,
				id_exercicio,
				treino
			}, {
				where: {
					id
				},

			});

			return res.status(200).json({
				msg: 'FichaExercicio alterada com sucesso',
				fichaExercicio: fichaExercicioAlter
			});
		} catch (error) {
			return res.status(500).json({ msg: error });
		}
	},

	async delete(req, res) {
		try {
			const { id } = req.body;

			const fichaExercicio = await FichaExercicio.findByPk(id);

			if (!fichaExercicio) {
				return res.status(400).json({ msg: 'Erro. Ficha não existe' });
			}

			await fichaExercicio.destroy({
				where: {
					id
				}
			});

			return res.status(200).json({ msg: 'FichaExercicio excluída com sucesso' });

		} catch (error) {
			return res.status(500).json({ msg: error });
		}
	},

	async readAll(req, res) {
		try {

			const id_ficha = req.query;

			const erros = validaCampos.validaCamposNulos({ id_ficha });

			if (erros.length > 0) {
				return res.status(400).json({ msg: erros });
			}

			if (!(await Ficha.findByPk(id_ficha))) {
				return res.status(400).json({ msg: 'Ficha não existe' });
			}

			const fichasExercicio = await FichaExercicio.findAll({
				where: {
					id_ficha
				},
				include: [
					{
						model: Exercicio,
						as: 'exercicio',
						attributes: ['nome', 'descricao'],
					}
				]
			});

			return res.status(200).json({ fichasExercicio });

		} catch (error) {
			return res.status(500).json({ msg: error });
		}
	}
};