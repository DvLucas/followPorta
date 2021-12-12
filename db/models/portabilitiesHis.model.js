const { Model, DataTypes, Sequelize } = require('sequelize');
const { PORTABILITY_TABLE } = require('./portabilities.model');

const PORTABILITIES_HIS_TABLE = 'portabilities_his';

const PortabilitiesHisSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
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
  portabilityId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'portability_id',
    references: {
      model: PORTABILITY_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
};

class PortabilitiesHis extends Model {
  static associate(models) {
    this.belongsTo(models.Portabilities, { as: 'portabilities_his' });
  }

  static config(sequelize) { /*User.config se encuentra declarado como static para poder utilizarlo sin tener que crear una instancia del modelo*/
    return {
      sequelize, //Es la conexion que le enviamos a config para que se pueda conectar al db
      tableName: PORTABILITIES_HIS_TABLE,
      modelName: 'PortabilitiesHis',
      timestamps: true, //Este atributo permite crear por defecto los cambios de creacion y actualizacion en la base de datos
    }
  }
}

module.exports = { PORTABILITIES_HIS_TABLE, PortabilitiesHisSchema, PortabilitiesHis };
