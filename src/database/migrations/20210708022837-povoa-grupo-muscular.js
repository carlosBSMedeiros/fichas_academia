/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
    
		queryInterface.bulkInsert('grupoMuscular', [{
			nome: 'Peito'
		}, {
			nome: 'Costas'
		},
		{
			nome: 'Biceps'
		},
		{
			nome: 'Triceps'
		},
		{
			nome: 'Ombro - Lateral'
		},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		
	}
};
