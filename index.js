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

// Environment and basic routing

if (process.env.NODE_ENV === 'production') {
    const publicPath = path.join(__dirname, 'client/build')
    app.use(express.static(publicPath))
    // app.get('/', (req, res) => {
    //     res.sendFile(path.join(publicPath, 'index.html'))
    // })
    app.get('/', (req, res) => {
        res.send('This is from express.js')
    })
    console.log('Env: Prod, Port: ', PORT, ', Path:', path.join(__dirname))
} else {
    app.use(express.static('client/build'))
    console.log('Env: Local, Port: ', PORT, ', Path:', path.join(__dirname))
}

// Routes

// Create a todo

app.post('/api/todos', async (req, res) => {
    try {
        const { description } = req.body
        const newTodo = await pool.query(
            'INSERT INTO todo (description) VALUES($1) RETURNING *',
            [description]
        )
        res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

// Get all todos

app.get('/api/todos', async (req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo')
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message)
    }
})

// Get a todo

app.get('/api/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const todo = await pool.query('SELECT * FROM todo WHERE id = $1', [id])
        res.json(todo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

// Update a todo

app.put('/api/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { description } = req.body
        const updateTodo = await pool.query(
            'UPDATE todo SET description = $1 WHERE id = $2',
            [description, id]
        )
        res.json('Todo was updated')
    } catch (err) {
        console.log(err.message)
    }
})

// Delete a todo

app.delete('/api/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deleteTodo = await pool.query('DELETE FROM todo WHERE id = $1', [
            id,
        ])
        res.json('Todo was deleted :>')
    } catch (err) {
        console.log(err.message)
    }
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
