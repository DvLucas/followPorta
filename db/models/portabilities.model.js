const { Model, DataTypes, Sequelize } = require('sequelize')
const { STATE_TABLE } = require('./state.model');
const { USER_TABLE } = require('./user.model');

const PORTABILITY_TABLE = 'portabilities';

const PortabilitySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  number: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  dni: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'modified_at',
    defaultValue: Sequelize.NOW,
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING
  },
  pin: {
    allowNull: true,
    type: DataTypes.STRING
  },
  expirationPin: {
    allowNull: true,
    type: DataTypes.DATE
  },
  stateId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'state_id',
    references: {
      model: STATE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'user_id',
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  portabilityFather: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'portability_father'
  }
} // define la estructura de la base de datos

class Portability extends Model {
  static associate(models) {
    this.belongsTo(models.State, { as: 'state' });
    this.hasMany(models.PortabilitiesHis, {
      as: 'portabilities_his',
      foreignKey: 'portabilityId',
    });
  }

  static config(sequelize) { /*User.config se encuentra declarado como static para poder utilizarlo sin tener que crear una instancia del modelo*/
    return {
      sequelize, //Es la conexion que le enviamos a config para que se pueda conectar al db
      tableName: PORTABILITY_TABLE,
      modelName: 'Portability',
      timestamps: true, //Este atributo permite crear por defecto los cambios de creacion y actualizacion en la base de datos
    }
  }
}


module.exports = { PORTABILITY_TABLE, PortabilitySchema, Portability }
