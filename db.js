const Pool = require('pg').Pool

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     database: 'perntodo',
// })

const pool = process.env.DATABASE_URL
    ? new Pool({
          connectionString: process.env.DATABASE_URL,
          ssl: { rejectUnauthorized: false },
      })
    : new Pool({
          user: 'postgres',
          host: 'localhost',
          port: 5432,
          database: 'perntodo',
      })

module.exports = pool
