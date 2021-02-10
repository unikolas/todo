import React, { useState } from 'react'
import Wrapper from './components/Wrapper'
import Avatar from './components/Avatar'
import ListTodos from './components/ListTodos'
import AddTodo from './components/AddTodo'
import AddTodoNew from './components/AddTodoNew'

import todoMeth from './methods/todoMeth'

const App = () => {
    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        const todos = await todoMeth.getAll()
        setTodos(todos)
    }

    return (
        <Wrapper>
            <Avatar
                style={{
                    margin: '0 16px 24px 2px',
                    backgroundColor: 'transparent',
                }}
                size={'sm'}
                image={'/assets/logo/logo-transparent.svg'}
            />
            <Wrapper variant='main'>
                {/* <AddTodo getTodos={() => getTodos()} /> */}
                <AddTodoNew getTodos={() => getTodos()} />
                <ListTodos getTodos={() => getTodos()} todos={todos} />
            </Wrapper>
        </Wrapper>
    )
}

export default App
