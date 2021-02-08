import React, { Fragment, useEffect, useState } from 'react'
import EditTodo from './EditTodo'
import Todo from './Todo'

import todoMeth from '../methods/todoMeth'

const ListTodos = () => {
    const [todos, setTodos] = useState([])

    // const getTodos = async () => {
    //     try {
    //         const response = await fetch('/api/todos')
    //         const jsonData = await response.json()
    //         setTodos(jsonData.reverse())
    //     } catch (err) {
    //         console.log(err.message)
    //     }
    // }

    const getTodos = async () => {
        const todos = await todoMeth.getAll()
        setTodos(todos.reverse())
    }

    useEffect(() => {
        getTodos()
    }, [])

    const handleDeleteClick = (todo) => {
        todoMeth.delete(todo)
        setTodos(todos.filter((item) => item.id !== todo.id))
    }

    const handleCheckClick = (todo) => {
        todoMeth.updateStatus(todo)
    }

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

            {/* <EditTodo todo={todo} />
             */}
        </div>
    )
}

export default ListTodos
