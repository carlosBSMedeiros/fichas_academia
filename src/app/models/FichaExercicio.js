const {Model, DataTypes} = require('sequelize');

class FichaExercicio extends Model{
	static init(sequelize){
		super.init({
			treino: DataTypes.STRING
		},{
			tableName: 'ficha_exercicio',
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			sequelize
		});
	}
	static associate(models){
		this.belongsTo(models.Ficha, { foreignKey: 'id_ficha', as: 'ficha' });
		this.belongsTo(models.Exercicio, {foreignKey: 'id_exercicio', as: 'exercicio'});
	}
}

module.exports = FichaExercicio;