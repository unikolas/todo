const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
// const pool = require('./db')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware

app.use(cors())
app.use(express.json())
app.use(express.static('build')) // serve static files (css & js) from the 'public' directory
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('client/index.js'))

// app.use(express.static(path.join(__dirname, 'public')))
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')

// Create a todo

app.post('/todos', async (req, res) => {
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

app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo')
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message)
    }
})

// Get a todo

app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const todo = await pool.query('SELECT * FROM todo WHERE id = $1', [id])
        res.json(todo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

// Update a todo

app.put('/todos/:id', async (req, res) => {
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

app.delete('/todos/:id', async (req, res) => {
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
