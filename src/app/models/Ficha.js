const {Model, DataTypes} = require('sequelize');

class Ficha extends Model{
	static init(sequelize){
		super.init({
			nome: DataTypes.STRING,
			nome_aluno: DataTypes.STRING
		},{
			tableName: 'ficha',
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			sequelize
		});
	}
	static associate(models){
		this.belongsTo(models.Academia, {foreignKey: 'id_academia', as: 'academia'});
		this.hasMany(models.FichaExercicio, {foreignKey: 'id_ficha', as: 'ficha_exercicio'});
	}
}

module.exports = Ficha;