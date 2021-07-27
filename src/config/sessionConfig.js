module.exports = (app, session, conexao) => {
	
	var SequelizeStore = require('connect-session-sequelize')(session.Store);

	var myStore = new SequelizeStore({
		db: conexao,
		checkExpirationInterval: 3 * 60 * 60 * 1000, //3 horas 
		expiration: 60 * 60 * 1000 //1 hora
	});

	app.use(session({
		secret: '4e939330',
		resave: false,
		saveUninitialized: false,
		maxAge: 120000,
		store: myStore
	}));

	myStore.sync();

};