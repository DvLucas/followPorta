const { Model, DataTypes, Sequelize } = require('sequelize')
const { USER_TYPE_TABLE } = require('./userType.model');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  first_name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  last_name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: true,
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
  supervisorId: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'supervisor_id',
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer',
  },
  userTypeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'user_type_id',
    references: {
      model: USER_TYPE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
} // define la estructura de la base de datos


class User extends Model {
  static associate(models) {
    this.belongsTo(models.UserType, { as: 'userType' });
    this.hasMany(models.Portability, {
      as: 'portabilities_users',
      foreignKey: 'userId',
    });
  }

  static config(sequelize) { /*User.config se encuentra declarado como static para poder utilizarlo sin tener que crear una instancia del modelo*/
    return {
      sequelize, //Es la conexion que le enviamos a config para que se pueda conectar al db
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: true, //Este atributo permite crear por defecto los cambios de creacion y actualizacion en la base de datos
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }
