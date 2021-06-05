
import Sequelize from 'sequelize'
import relations from './relations'
import fs from 'fs'

// define the sequelize ORM instance and connect it to the db
const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    database: process.env.DB_DATABASE
  })
console.log(`🚀 sequelize ORM connected to ${process.env.DB_DIALECT} @ ${process.env.DB_HOST}:${process.env.DB_PORT}`)

fs.readdirSync('./src/db/models')
  .filter(p => !p.startsWith('_') && p.endsWith('.js'))
  .forEach(e => require(`./models/${e}`)(db))

relations(db)
db.sync()

export default db
