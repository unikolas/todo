import React, { Fragment, useEffect, useState } from 'react'
import EditTodo from './EditTodo'
import Todo from './Todo'

import todoMeth from '../methods/todoMeth'

const ListTodos = () => {
    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        const todos = await todoMeth.getAll()
        setTodos(todos)
    }

    useEffect(() => {
        getTodos()
    }, [])

    const handleDeleteClick = (todo) => {
        todoMeth.delete(todo)
        setTodos(todos.filter((item) => item.id !== todo.id))
    }

    const handleCheckClick = async (todo) => {
        await todoMeth.updateStatus(todo)
        const todos = await todoMeth.getAll()
        setTodos(todos)
    }

    // <EditTodo todo={todo} />

    const todoItems = todos.map((todo) => {
        return (
            <Todo
                key={todo.id}
                todo={todo}
                onDelete={() => handleDeleteClick(todo)}
                onCheck={() => handleCheckClick(todo)}
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
        </div>
    )
}

export default ListTodos
