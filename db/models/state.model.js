const { Model, DataTypes, Sequelize } = require('sequelize');

const STATE_TABLE = 'state';

const StateSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  }
};

class State extends Model {

  static associate(models) {
    this.hasMany(models.Portabilities, {
      as: 'portabilities',
      foreignKey: 'stateId',
    });
  }

  static config(sequelize) { /*User.config se encuentra declarado como static para poder utilizarlo sin tener que crear una instancia del modelo*/
    return {
      sequelize, //Es la conexion que le enviamos a config para que se pueda conectar al db
      tableName: STATE_TABLE,
      modelName: 'State',
      timestamps: false, //Este atributo permite crear por defecto los cambios de creacion y actualizacion en la base de datos
    }
  }
}

module.exports = { STATE_TABLE, StateSchema, State };
