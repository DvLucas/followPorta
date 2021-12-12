require('dotenv').config();
//libreria que se utiliza para leer las variables de entorno del archivo .env

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.PGUSER,
  dbPassword: process.env.PGPASSWORD,
  dbHost: process.env.PGHOST || 'localhost',
  dbName: process.env.PGDATABASE,
  dbPort: process.env.PGPORT || '5432',
}


module.exports = { config }
