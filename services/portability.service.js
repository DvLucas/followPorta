const faker = require('faker');

class PortabilitiesService {

  constructor(){
    this.portabilities = [];
    this.generate();
  }

  generate(){
    const limit =  100;
    for (let index = 0; index < limit; index++) {
      this.portabilities.push({
        id: faker.datatype.uuid(),
        number: faker.phone.phoneNumber(),
        alternativeNumber: faker.phone.phoneNumber(),
        dni: faker.internet.ip(),
        created_at: faker.date.recent(),
        modified_at: faker.date.recent(),
        state: faker.datatype.number(),
        description: faker.lorem.sentence(),
        pin: faker.finance.mask(),
        expirationPin: faker.date.recent(),
        userId: faker.datatype.number()
      });
    }
  }

  async create(data) {
    const newPortability = {
      id: faker.datatype.uuid(),
      ...data,
    }
    this.portabilities.push(newPortability);
    return newPortability;
  }

  async find() {
    return this.portabilities;
  }

  async findOne(id) {
    return this.portabilities.find(item => item.id === id);
  }

  async update(id, changes) {
    const index = this.portabilities.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error('portability not found');
    }
    this.portabilities[index] = {
      ...this.portabilities[index],
      ...changes
    }; // persiste los datos del objeto y solo cambia los nuevos
    return this.portabilities[index]
  }

  async delete(id) {
    const index = this.portabilities.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error('portability not found');
    }
    this.portabilities.splice(index, 1); // borra elementos por posicion
    return { id };
  }
}

module.exports = PortabilitiesService;
