/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('exercicio', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			id_academia:{
				type: Sequelize.UUID,
				foreignKey: true,
				references: { model: 'academia', key: 'id'},
				allowNull: true,
			},
			id_grupo_muscular:{
				type: Sequelize.INTEGER,
				foreignKey: true,
				references: { model: 'grupo_muscular', key: 'id'},
				allowNull: false,
			},
			nome: {
				type: Sequelize.STRING,
				allowNull: false
			},
			descricao:{
				type: Sequelize.TEXT               
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			}
		});
	},

	down: async (queryInterface, Sequelize) => {
		
		await queryInterface.dropTable('exercicio');
     
	}
};
