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

async function main() {
  const Herois = driver.define('herois', {
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
  // await Herois.create({
  //   nome: 'Lanterna Verde',
  //   poder: 'Anel'
  // })
  const result = await Herois.findAll({raw: true, attributes: ['nome']})
  console.log(result)
}

main()