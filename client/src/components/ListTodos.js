import React, { useEffect, useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import Styled from 'styled-components'
import Todo from './Todo'

import EditTodo from './EditTodo'

import todoMeth from '../methods/todoMeth'

const StyledList = Styled(AnimateSharedLayout)`
    position: relative;
    display: flex;
    flex-direction: column;
`

const ListTodos = (props) => {
    const todos = props.todos
    const getTodos = props.getTodos
    const [isChecking, setIsChecking] = useState(false)

    useEffect(() => {
        getTodos()
    }, [])

    const handleDeleteClick = async (todo) => {
        await todoMeth.delete(todo)
        getTodos()
    }

    const handleCheckClick = async (todo) => {
        setIsChecking(true)
        await todoMeth.updateStatus(todo)
        getTodos()
        setIsChecking(false)
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
                // layout
            />
        )
    })

    return (
        <AnimatePresence>
            <StyledList>{todoItems}</StyledList>
        </AnimatePresence>
    )
}

export default ListTodos
