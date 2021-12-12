const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize')

class UsersService {

  constructor() {
    this.users = [];
    this.generate();
  }

  generate(){
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const user = await models.User.findAll({
      include: ['userType']
    });
    return user;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }


  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    // const index = this.users.findIndex(item => item.id === id);
    // if (index === -1){
    //   throw new Error('User not found');
    // }
    // this.users[index] = {
    //   ...this.users[index],
    //   ...changes
    // }; // persiste los datos del objeto y solo cambia los nuevos
    // return this.users[index]
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();

    // const index = this.users.findIndex(item => item.id === id);
    // if (index === -1){
    //   throw new Error('user not found');
    // }
    // this.users.splice(index, 1); // borra elementos por posicion

    return { id };
  }


}

module.exports = UsersService;
