const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: "postgres://default:xRJ2LyYW1tTj@ep-black-recipe-a1kwfivm-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require?sslmode=require",
})

module.exports = pool;