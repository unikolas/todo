import React, { Fragment, useEffect, useState } from 'react'
import EditTodo from './EditTodo'
import Todo from './Todo'

const ListTodos = () => {
    const [todos, setTodos] = useState([])
    const getTodos = async () => {
        try {
            const response = await fetch('/api/todos')
            const jsonData = await response.json()
            setTodos(jsonData.reverse())
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getTodos()
    }, [])

    const deleteTodo = async (id) => {
        try {
            await fetch(`/api/todos/${id}`, {
                method: 'DELETE',
            })
            setTodos(todos.filter((todo) => todo.id !== id))
        } catch (err) {
            console.log(err.message)
        }
    }

    const todoItems = todos.map((todo) => {
        return (
            <Todo
                key={todo.id}
                todo={todo}
                onDeleteClick={() => deleteTodo(todo.id)}
            />
        )
    })

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {todoItems}

            {/* <EditTodo todo={todo} />
            <button
                className='btn btn-sm btn-outline-danger'
                onClick={() => deleteTodo(todo.id)}
            >
             */}
        </div>
    )
}

export default ListTodos
