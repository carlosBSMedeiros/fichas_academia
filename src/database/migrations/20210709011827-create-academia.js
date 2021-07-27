/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('academia', {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
				allowNull: false,
			},
			nome: {
				type: Sequelize.STRING,
				allowNull: false
			},
			senha:{
				type: Sequelize.STRING,
				allowNull: false
			},
			email:{
				type: Sequelize.STRING,
				allowNull: false
			},
			ativo:{
				type: Sequelize.BOOLEAN,
				defaultValue: false,
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
	
		await queryInterface.dropTable('academia');
    
	}
};
