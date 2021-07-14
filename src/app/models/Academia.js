const {Model, DataTypes} = require('sequelize');

class Academia extends Model{
	static init(sequelize){
		super.init({
			nome: DataTypes.STRING,
			senha: DataTypes.STRING,
			ativo: DataTypes.BOOLEAN
		},{
			tableName: 'academia',
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			sequelize
		});
	}
	static associate(models){
		this.hasMany(models.Exercicio);
	}
}

module.exports = Academia;