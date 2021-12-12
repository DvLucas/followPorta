const { UserSchema, User } = require('./user.model');
const { PortabilitySchema, Portability } = require('./portabilities.model');
const { StateSchema, State } = require('./state.model');
const { UserTypeSchema, UserType } = require('./userType.model');
const { PortabilitiesHisSchema, PortabilitiesHis } = require('./portabilitiesHis.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize)) /*User.config se encuentra declarado como static para poder utilizarlo sin tener que crear una instancia del modelo*/
  State.init(StateSchema, State.config(sequelize));
  UserType.init(UserTypeSchema, UserType.config(sequelize));
  Portability.init(PortabilitySchema, Portability.config(sequelize));
  PortabilitiesHis.init(PortabilitiesHisSchema, PortabilitiesHis.config(sequelize));

  User.associate(sequelize.models);
  //State.associate(sequelize.models);
  UserType.associate(sequelize.models);
  Portability.associate(sequelize.models);
  //PortabilitiesHis.associate(sequelize.models);
}

module.exports = setupModels;

