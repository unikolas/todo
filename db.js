const Pool = require('pg').Pool

const pool = process.env.DATABASE_URL
    ? new Pool({
          connectionString: process.env.DATABASE_URL,
          ssl: process.env.DATABASE_URL ? true : true,
      })
    : new Pool({
          user: 'postgres',
          host: 'localhost',
          port: 5432,
          database: 'perntodo',
      })

module.exports = pool
