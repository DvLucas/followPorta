const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize')

class PortabilitiesHisService {

  constructor(){
    this.portabilitiesHis = [];
    this.generate();
  }

  generate(){
  }

  async create(data) {
    const newPortabilityHis = await models.PortabilityHis.create(data);
    return newPortabilityHis;
  }

  async find() {
    const data = await models.Portability.findAll(options);
    return data;
  }

  async findOne(id) {
    const portabilityHis = await models.PortabilityHis.findByPk(id);
    if (!portabilityHis) {
      throw boom.notFound('portability history not found');
    }
    return portabilityHis;
  }

  async update(id, changes) {
    const portabilityHis = await this.findOne(id);
    const rta = await portabilityHis.update(changes);
    return rta;
  }

  async delete(id) {
    const portabilityHis = await this.findOne(id);
    await portabilityHis.destroy();
    return { id };
  }
}

module.exports = PortabilitiesHisService;
