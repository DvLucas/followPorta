const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`; // URL DE CONECCION Ó STRING DE CONEXION PARA LUEGO CONECTARSE DIRECTAMENTE INSTANCIANDO UNA NUEVA POOL

const sequelize = new Sequelize(URI, {
  dialect: 'postgres', // database que utiliza
  logging: false,
}); // realiza pool automaticamente

setupModels(sequelize);

//sequelize.sync(); //lee los modelos y los crea en la db

module.exports = sequelize;
