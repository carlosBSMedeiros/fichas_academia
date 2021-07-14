const Exercicio = require('../models/Exercicio');
const GrupoMuscular = require('../models/GrupoMuscular');
const Academia = require('../models/Academia');

const validaCampos = require('../utils/validaCampos');

module.exports = {

	async create(req, res) {
		try {

			const { id_academia, id_grupo_muscular, nome, descricao } = req.body;

			var erros = validaCampos.validaCamposNulos({
				id_academia,
				id_grupo_muscular,
				nome
			});

			if (erros.length > 0) {
				var erroRet = '';
				for (var erro of erros) {
					erroRet += erro + ';';
				}
				return res.status(400).json({ msg: erroRet });
			}

			const academia = await Academia.findByPk(id_academia);
			if (!academia) {
				return res.status(400).json({ msg: 'Erro. Academia não existe' });
			}

			const grupoMuscular = await GrupoMuscular.findByPk(id_grupo_muscular);
			if (!grupoMuscular) {
				return res.status(400).json({ msg: 'Erro. Grupo Muscular não existe' });
			}

			const exercicio = await Exercicio.create({
				id_academia,
				id_grupo_muscular,
				nome,
				descricao
			});

			return res.status(200).json({ msg: 'Exercicio criado com sucesso', exercicio });
		} catch (erro) {
			console.log('erro no cadastro');
			return res.status(500).json({ msg: erro });
		}

	},

	async readAll(req, res) {

		const exercicios = await Exercicio.findAll({
			include: [
				{
					model: GrupoMuscular,
					as: 'grupo_muscular',
					attributes: ['id', 'nome']
				}],

		});

		return res.status(200).json(exercicios);

	},

	async alter(req, res) {

		try {
			const { id, id_academia, id_grupo_muscular, nome, descricao } = req.body;

			var erros = validaCampos.validaCamposNulos({
				id,
				id_academia,
				id_grupo_muscular,
				nome
			});

			if (erros.length > 0) {

				return res.status(400).json({ msg: erros });
			}

			const exercicio = await Exercicio.findByPk(id);

			if (!exercicio) {
				return res.status(400).json({ msg: `Não foi encontrado exercicio com id ${id}` });
			}

			const novoExercicio = await Exercicio.update({
				id,
				id_academia,
				id_grupo_muscular,
				nome,
				descricao
			}, {
				where: {
					id
				}
			});

			return res.status(200).json({
				msg: 'Exercicio atualizado com sucesso',
				exercicio: novoExercicio
			});

		} catch (erro) {
			console.log(erro);
			return res.status(500).json({ msg: erro });

		}
	},

	async delete(req, res) {

		try {
			const { id } = req.body;

			const exercicio = await Exercicio.findByPk(id);

			if (!exercicio) {
				return res.status(400).json({ msg: `Não foi encontrado exercicio com o id ${id}` });
			}

			await Exercicio.destroy({
				where: {
					id
				}
			});

			return res.status(200).json({ msg: `Exercicio com id ${id} excluído com sucesso` });
		} catch (erro) {
			console.log(erro);
			return res.status(500).json({ msg: erro });

		}
	}

};