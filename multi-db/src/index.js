const ContextStrategy = require ('./db/strategies/base/contextStrategy')
const MongoDB = require ('./db/strategies/mongodb')
const Postgres = require ('./db/strategies/postgres')

const cotextMongo = new ContextStrategy(new MongoDB())
cotextMongo.create()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()