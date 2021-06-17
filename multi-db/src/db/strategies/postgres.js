const ICrud = require ('./interfaces/interfaceDrud')

class Postgres extends ICrud {
  constructor() {
    super()
  }
  create(item) {
    console.log('Item criado no postgres')
  }
}

module.exports = Postgres