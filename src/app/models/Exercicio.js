const {Model, DataTypes} = require('sequelize');

class Exercicio extends Model{
	static init(sequelize){
		super.init({
			nome:{
				type: DataTypes.STRING
			}
		},{
			tableName: 'exercicio',
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			sequelize
		});
	}
}

module.exports = Exercicio;