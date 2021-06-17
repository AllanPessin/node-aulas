const ICrud = require ('./interfaces/interfaceDrud')

class MongoDB extends ICrud {
  constructor() {
    super()
  }
  create(item) {
    console.log('Item criado no mongoDB')
  }
}

 module.exports = MongoDB
