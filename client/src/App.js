import React, { useState } from 'react'
import AddTodo from './components/AddTodo'
import ListTodos from './components/ListTodos'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import colors from './constants/colors'
import todoMeth from './methods/todoMeth'

const App = () => {
    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        const todos = await todoMeth.getAll()
        setTodos(todos)
    }

    return (
        <Wrapper>
            <Header color={colors.grey35}>Todo</Header>
            <Wrapper variant='main'>
                <AddTodo getTodos={() => getTodos()} />
                <ListTodos getTodos={() => getTodos()} todos={todos} />
            </Wrapper>
        </Wrapper>
    )
}

export default App
