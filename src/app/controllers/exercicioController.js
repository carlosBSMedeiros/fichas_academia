const Exercicio = require('../models/Exercicio');
const GrupoMuscular = require('../models/GrupoMuscular');
const Academia = require('../models/Academia');

const validaCampos = require('../utils/validaCampos');

module.exports = {

	async create(req, res){

		try{

			const {id_academia, id_grupo_muscular, nome, descricao} = req.body;
            
			var erros = validaCampos.validaCamposNulos({
				id_academia,
				id_grupo_muscular,
				nome
			});
                
			if(erros.length > 0){
				var erroRet = '';
				for(var erro of erros){
					erroRet += erro + ';';
				}
				return res.status(400).json({msg : 'Erro' , erroRet});
			}
            
			const academia = await Academia.findByPk(id_academia);
			if(!academia){
				return res.status(400).json({msg : 'Erro. Academia não existe'});
			}
            
			const grupoMuscular = await GrupoMuscular.findByPk(id_grupo_muscular);
			if(!grupoMuscular){
				return res.status(400).json({msg : 'Erro. Grupo Muscular não existe'});
			}
            
			const exercicio = await Exercicio.create({
				id_academia,
				id_grupo_muscular,
				nome,
				descricao
			});

			return res.status(200).json({msg: 'Exercicio criado com sucesso', exercicio});
		}catch(erro){
			return res.status(400).json({msg : 'Erro. ', erro});
		}
        
	}

};