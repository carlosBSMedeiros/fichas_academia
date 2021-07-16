const {Model, DataTypes} = require('sequelize');

class Exercicio extends Model{
	static init(sequelize){
		super.init({
			nome: DataTypes.STRING,
			descricao: DataTypes.TEXT
		},{
			tableName: 'exercicio',
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			sequelize
		});
	}

	static associate(models){
		this.hasMany(models.FichaExercicio, {foreignKey: 'id_exercicio', as: 'exercicio'});
		this.belongsTo(models.GrupoMuscular, { foreignKey: 'id_grupo_muscular', as: 'grupo_muscular' }),
		this.belongsTo(models.Academia, { foreignKey: 'id_academia', as: 'academia' });

	}
	
}

module.exports = Exercicio;