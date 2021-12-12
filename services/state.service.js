const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize')

class StateService {

  constructor(){
    this.State = [];
    this.generate();
  }

  generate(){
  }

  async create(data) {
    const newstate = await models.State.create(data);
    return newstate;
  }

  async find() {
    const data = await models.State.findAll();
    return data;
  }

  async findOne(id) {
    const state = await models.State.findByPk(id);
    if (!state) {
      throw boom.notFound('state not found');
    }
    return state;
  }

  async update(id, changes) {
    const state = await this.findOne(id);
    const rta = await state.update(changes);
    return rta;
  }

  async delete(id) {
    const state = await this.findOne(id);
    await state.destroy();
    return { id };
  }
}

module.exports = StateService;
