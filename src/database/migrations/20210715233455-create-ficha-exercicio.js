/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('ficha_exercicio', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			id_ficha:{
				type: Sequelize.INTEGER,
				foreignKey: true,
				references: { model: 'ficha', key: 'id'},
				allowNull: true
			},
			id_exercicio:{
				type: Sequelize.INTEGER,
				foreignKey: true,
				references: { model: 'exercicio', key: 'id'},
				allowNull: true
			},
			treino:{
				type: Sequelize.STRING,
				allowNull: false
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
		
		await queryInterface.dropTable('ficha_exercicio');
     
	}
};
