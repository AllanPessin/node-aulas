const ICrud = require ('./interfaces/interfaceDrud')
const Sequelize = require('sequelize')

const driver = new Sequelize(
  'heroes',
  'postgres',
  'docker',
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5431,
    quoteIdentifiers: false,
  }
)

class Postgres extends ICrud {
  constructor() {
    super()
    this.driver = null
    this._herois = null
    this._connect()
  }

  async isConnected() {
    try {
      await this.driver.authenticate()
      return true
    }catch(error) {
      console.log('Fail:', error)
      return false
    }
  }

  async deineModel() {
    this._herois = driver.define('herois', {
      id: {
        type: Sequelize.INTEGER,
        require: true,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        require: true,
      },
      poder: {
        type: Sequelize.STRING,
        require: true
      }
    }, {
      tableName: 'heroes',
      freezeTableName: false,
      timestamp: false
    })
  
    await Herois.sync()
  }
  
  _connect(){
    this._driver = new Sequelize(
      'heroes',
      'postgres',
      'docker',
      {
        host: 'localhost',
        dialect: 'postgres',
        port: 5431,
        quoteIdentifiers: false,
      }
    )
  }

  create(item) {
    console.log('Item criado no postgres')
  }
}

module.exports = Postgres