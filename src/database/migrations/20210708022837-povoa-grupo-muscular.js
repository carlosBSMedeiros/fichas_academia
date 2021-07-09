/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
    
		queryInterface.bulkInsert('grupoMuscular', [{
			nome: 'Peito',
			created_at: new Date(),
			updated_at: new Date()
		}, {
			nome: 'Costas',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			nome: 'Biceps',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			nome: 'Triceps',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			nome: 'Ombro - Lateral',
			created_at: new Date(),
			updated_at: new Date()
		},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		
	}
};
