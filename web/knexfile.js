
export default {
	development: {
	  client: 'pg',
	  connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: 'L0vemarie',
		database: 'my-shopify-app',
	  },
	  migrations: {
		directory: './migrations',
		extension: 'cjs', 
	  },
	  seeds: {
		directory: './seeds',
	  },
	},
	production: {
	  client: 'pg',
	  connection: process.env.DATABASE_URL, // assuming you use an environment variable for production
	  migrations: {
		directory: './migrations',
		extension: 'cjs',
	  },
	  seeds: {
		directory: './seeds',
	  },
	},
  };
  