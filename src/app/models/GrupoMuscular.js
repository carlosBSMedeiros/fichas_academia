const { Model, DataTypes } = require('sequelize');

class GrupoMuscular extends Model{
	static init(sequelize){
		super.init({
			nome:{
				type: DataTypes.STRING
			}
		},{
			tableName: 'grupoMuscular',
			sequelize
		});
	}
}


module.exports = GrupoMuscular;