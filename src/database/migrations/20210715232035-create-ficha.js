/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('ficha', {
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
			nome: {
				type: Sequelize.STRING,
				allowNull: true
			},
			nome_aluno:{
				type: Sequelize.STRING,  
				allowNull: true    
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
		
		await queryInterface.dropTable('ficha');
     
	}
};
