const faker = require('faker');

class UsersService {

  constructor() {
    this.users = [];
    this.generate();
  }

  generate(){
    const limit =  100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        firstNAme: faker.name.firstName(),
        lastName: faker.name.lastName(),
        lastLogin: faker.date.recent(),
        created_at: faker.date.past(),
        modified_at: faker.date.past(),
        tipe_id: faker.datatype.number(),
        supervisor_id: faker.datatype.number(),
      });
    }
  }

  async create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data,
    }
    this.users.push(newUser);
    return newUser;
  }

  async find() {
    return this.users;
  }

  async findOne(id) {
    return this.users.find(item => item.id === id);
  }

  async update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error('User not found');
    }
    this.users[index] = {
      ...this.users[index],
      ...changes
    }; // persiste los datos del objeto y solo cambia los nuevos
    return this.users[index]
  }

  async delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error('user not found');
    }
    this.users.splice(index, 1); // borra elementos por posicion
    return { id };
  }


}

module.exports = UsersService;
