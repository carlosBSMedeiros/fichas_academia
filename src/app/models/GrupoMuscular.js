const { Model, DataTypes } = require('sequelize');

class GrupoMuscular extends Model{
	static init(sequelize){
		super.init({
			nome:{
				type: DataTypes.STRING
			}
		},{
			tableName: 'grupoMuscular',
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			sequelize
		});
	}
}


module.exports = GrupoMuscular;