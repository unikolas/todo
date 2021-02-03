const Pool = require('pg').Pool

const localhost = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'perntodo',
})

const test = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'perntodo',
})

module.exports = localhost

// heroku config:get DATABASE_URL -a fathomless-bastion-64307
