const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize')

class UserTypeService {

  constructor(){
    this.UserType = [];
    this.generate();
  }

  generate(){
  }

  async create(data) {
    const newUserType = await models.UserType.create(data);
    return newUserType;
  }

  async find() {
    const data = await models.UserType.findAll();
    return data;
  }

  async findOne(id) {
    const UserType = await models.UserType.findByPk(id,{
      include: ['users']
    });
    if (!UserType) {
      throw boom.notFound('User type not found');
    }
    return UserType;
  }

  async update(id, changes) {
    const UserType = await this.findOne(id);
    const rta = await UserType.update(changes);
    return rta;
  }

  async delete(id) {
    const UserType = await this.findOne(id);
    await UserType.destroy();
    return { id };
  }
}

module.exports = UserTypeService;
