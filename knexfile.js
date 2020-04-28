module.exports = {
	development: {
		client: 'mysql',
		connection: {
			host: 'localhost',
			port: 3306,
			database: 'myknex',
			user: 'root',
			password: '',
		},
		migrations: {
			directory: __dirname + '/db/migration',
		},
		seeds: {
			directory: __dirname + '/db/seeds',
		},
	},
	// production: {
	// 	client: 'pg',
	// 	connection: process.env.DATABASE_URL,
	// 	migration: {
	// 		directory: __dirname + '/db/migration',
	// 	},
	// 	seeds: {
	// 		directory: __dirname + '/db/seeds',
	// 	},
	//},
};
