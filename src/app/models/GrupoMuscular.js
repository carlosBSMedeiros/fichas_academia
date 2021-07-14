const { Model, DataTypes } = require('sequelize');

class GrupoMuscular extends Model{
	static init(sequelize){
		super.init({
			nome:{
				type: DataTypes.STRING
			}
		},{
			tableName: 'grupo_muscular',
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			sequelize
		});

	}

	static associate(models){
		this.hasMany(models.Exercicio, { foreignKey: 'id_grupo_muscular', targetKey: 'id' });
	}
}


module.exports = GrupoMuscular;