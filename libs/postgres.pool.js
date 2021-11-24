const { Pool } = require('pg');
const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`; // URL DE CONECCION Ó STRING DE CONEXION PARA LUEGO CONECTARSE DIRECTAMENTE INSTANCIANDO UNA NUEVA POOL

const pool = new Pool({ connectionString: URI });

module.exports = pool;

/* La pool de conexion la utilizamos para poder conectarnos por unica ves al servicio y luego atravez de la primera conexion reutilizarla para realizar mas consultas al servicio */
