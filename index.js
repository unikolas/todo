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

// Core

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, buildPath)))
    app.get('/', (req, res) =>
        res.sendFile(path.join(__dirname, buildPath, 'index.html'))
    )
    console.log('Prod ', PORT, ' ', path.join(__dirname))
} else {
    app.use(express.static(buildPath))
    console.log('Dev ', PORT, ' ', path.join(__dirname))
}

// API

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
        const allTodos = await pool.query(
            'SELECT * FROM todo ORDER BY status desc, updated_date desc'
        )
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

// Update a todo status

app.put('/api/todos/:id/update-status', async (req, res) => {
    try {
        const { id } = req.params
        const { status } = req.body
        await pool.query('UPDATE todo SET status = $1 WHERE id = $2', [
            status,
            id,
        ])
        res.json(`Todo status was updated to ${status}`)
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

// Listen... We need to talk...

app.listen(PORT, () => console.log(`App running on ${PORT}`))
