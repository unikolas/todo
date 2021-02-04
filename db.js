const Pool = require('pg').Pool

const pool = new Pool({
    connectionString:
        process.env.DATABASE_URL ||
        'postgres://ohummmvrtdccin:770b575b1a23b4be200c720287dae377205b29c713ea4389e831842d0d2f8755@ec2-3-232-92-90.compute-1.amazonaws.com:5432/d5dkuohncl6tvv',
    ssl: process.env.DATABASE_URL ? true : true,
})

// const test = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     database: 'perntodo',
// })

module.exports = pool
