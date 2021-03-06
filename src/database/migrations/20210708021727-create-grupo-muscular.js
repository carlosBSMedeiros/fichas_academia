/* eslint-disable linebreak-style */
'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
	 * Add altering commands here.
	 *
	 * Example:
	 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
	 */
		await queryInterface.createTable('grupo_muscular', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			nome: {
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

	// eslint-disable-next-line no-unused-vars
	down: async (queryInterface, Sequelize) => {
		/**
	 * Add reverting commands here.
	 *
	 * Example:
	 * await queryInterface.dropTable('users');
	 */
		await queryInterface.dropTable('grupoMuscular');
	}
};
