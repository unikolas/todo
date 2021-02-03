import React, { Fragment, useEffect, useState } from 'react'
import EditTodo from './EditTodo'

const ListTodos = () => {
    const [todos, setTodos] = useState([])
    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:5000/todos')
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
            const deleteTodo = await fetch(
                `http://localhost:5000/todos/${id}`,
                {
                    method: 'DELETE',
                }
            )
            setTodos(todos.filter((todo) => todo.id !== id))
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <Fragment>
            <table className='table mt-4'>
                <thead>
                    <tr>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td className='d-flex gap-3 align-items-center'>
                                <span className='flex-fill fs-6'>
                                    {todo.description}
                                </span>
                                <EditTodo todo={todo} />
                                <button
                                    className='btn btn-sm btn-outline-danger'
                                    onClick={() => deleteTodo(todo.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodos
