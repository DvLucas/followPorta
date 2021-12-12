const boom = require('@hapi/boom');
const { State } = require('../db/models/state.model');
const { models } = require('./../libs/sequelize')

class PortabilitiesService {

  constructor(){
    this.portabilities = [];
    this.generate();
  }

  generate(){
  }

  async create(data) {
    const newPortability = await models.Portability.create(data);
    return newPortability;
  }

  async find(query) {
    const {limit, offset} = query;
    const options = {
      offset: offset || 0,
      limit: limit || 2,
      //attributes: [ 'number','dni','description'],
      // include: {
      //   model: State,
      //   as: 'state',
      //   attributes: { exclude: ['id'] }
      // }
    };
    const data = await models.Portability.findAll(options);
    return data;
  }

  async findOne(id) {
    const portability = await models.Portability.findByPk(id);
    if (!portability) {
      throw boom.notFound('portability not found');
    }
    return portability;
  }

  async update(id, changes) {
    const portability = await this.findOne(id);
    const rta = await portability.update(changes);
    return rta;
  }

  async delete(id) {
    const portability = await this.findOne(id);
    await portability.destroy();
    return { id };
  }
}

module.exports = PortabilitiesService;
