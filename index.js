const express = require('express')
const cors = require('cors')
const path = require('path')
const pool = require('./db')
var bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 5000
const buildPath = 'client/build'

// Middleware

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routing

// app.get('/', (req, res) => {
//     res.status(200).send('Hello Cruel World!')
// })

// Core

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, buildPath)))
    app.get('/', (req, res) =>
        res.sendFile(path.join(__dirname, buildPath, 'index.html'))
    )

    console.log('Prod, ', PORT, ', ', path.join(__dirname))
} else {
    app.use(express.static(buildPath))
    console.log('Dev, ', PORT, ', ', path.join(__dirname))
}

// API

// Listen... We need to talk...

app.listen(PORT, () => console.log(`App running on ${PORT}`))
