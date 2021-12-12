const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TYPE_TABLE = 'user_type';

const UserTypeSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  permissions: {
    allowNull: false,
    type: DataTypes.STRING
  }
};

class UserType extends Model {
  static associate(models) {
    this.hasMany(models.User, {
      as: 'users',
      foreignKey: 'userTypeId',
    });
  }

  static config(sequelize) { /*User.config se encuentra declarado como static para poder utilizarlo sin tener que crear una instancia del modelo*/
    return {
      sequelize, //Es la conexion que le enviamos a config para que se pueda conectar al db
      tableName: USER_TYPE_TABLE,
      modelName: 'UserType',
      timestamps: false, //Este atributo permite crear por defecto los cambios de creacion y actualizacion en la base de datos
    }
  }
}

module.exports = { USER_TYPE_TABLE, UserTypeSchema, UserType };
