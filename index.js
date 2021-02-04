const express = require('express')
const cors = require('cors')
const path = require('path')
const pool = require('./db')
var bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routing

// app.get('/', (req, res) => {
//     res.status(200).send('Hello World!')
// })

if (process.env.NODE_ENV === 'production') {
    const publicPath = path.join(__dirname, 'client/build')
    app.use(express.static(publicPath))
    // app.get('/', (req, res) => {
    //     res.sendFile(path.join(publicPath, 'index.html'))
    // })
    app.get('/', (req, res) => {
        res.status(200).send('Hello Cruel World!')
    })
    console.log('Prod, ', PORT, ', ', path.join(__dirname))
} else {
    app.use(express.static('client/build'))
    console.log('Dev, ', PORT, ', ', path.join(__dirname))
}

// Listen... We need to talk...

app.listen(PORT, () => console.log(`App running on ${PORT}`))
