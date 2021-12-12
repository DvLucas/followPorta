'use strict';

const { USER_TABLE, UserSchema } = require('./../models/user.model')
const { PORTABILITY_TABLE, PortabilitySchema } = require('./../models/portabilities.model')
const { STATE_TABLE, StateSchema } = require('./../models/state.model')
const { USER_TYPE_TABLE, UserTypeSchema } = require('./../models/userType.model')
const { PORTABILITIES_HIS_TABLE, PortabilitiesHisSchema } = require('./../models/portabilitiesHis.model')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable( USER_TYPE_TABLE, UserTypeSchema);
    await queryInterface.createTable( STATE_TABLE, StateSchema);
    await queryInterface.createTable( USER_TABLE, UserSchema);
    await queryInterface.createTable( PORTABILITY_TABLE, PortabilitySchema);
    await queryInterface.createTable( PORTABILITIES_HIS_TABLE, PortabilitiesHisSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(PORTABILITIES_HIS_TABLE);
    await queryInterface.dropTable(PORTABILITY_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(STATE_TABLE);
    await queryInterface.dropTable(USER_TYPE_TABLE);
  }
};
