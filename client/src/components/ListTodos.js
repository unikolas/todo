import React, { useEffect, useState } from 'react'
import Styled from 'styled-components'
import Todo from './Todo'

import EditTodo from './EditTodo'

import todoMeth from '../methods/todoMeth'

const StyledList = Styled.div`
    display: flex;
    flex-direction: column;
`

const ListTodos = (props) => {
    const todos = props.todos
    const [isChecking, setChecking] = useState(false)

    useEffect(() => {
        props.getTodos()
    }, [])

    const handleDeleteClick = (todo) => {
        todoMeth.delete(todo)
        props.getTodos()
    }

    const handleCheckClick = async (todo) => {
        setChecking(true)
        await todoMeth.updateStatus(todo)
        await props.getTodos()
        setChecking(false)
    }

    // <EditTodo todo={todo} />

    const todoItems = todos.map((todo) => {
        return (
            <Todo
                key={todo.id}
                todo={todo}
                onDelete={() => handleDeleteClick(todo)}
                onCheck={() => handleCheckClick(todo)}
                isChecking={isChecking}
            />
        )
    })

    return <StyledList>{todoItems}</StyledList>
}

export default ListTodos
