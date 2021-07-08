const env = require('./environment');

module.exports = {
	dialect: 'postgres',
	host: 'localhost',
	username: env.dbUser,
	password: env.dbPassword,
	database: env.dbName,
	denife: {
		underscored: true,
		timestamps: true,
	},
};