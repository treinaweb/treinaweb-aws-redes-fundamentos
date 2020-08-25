
var pgp = require('pg-promise')()

const username = process.env.RDS_USERNAME || 'user'
const password = process.env.RDS_PASSWORD || 'pass'
const host = process.env.RDS_HOST || '127.0.0.1'
const port = process.env.RDS_PORT || '5432'
const database = process.env.RDS_DATABASE || 'database'

var connectionString = process.env.RDS_DSN_URL || `postgres://${username}:${password}@${host}:${port}/${database}`

var db = pgp(connectionString)

module.exports = db
