require('dotenv').config()

module.exports = {
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  dialect: process.env.PGDIALECT,
  port: process.env.PGPORT,
  logging: true
}
