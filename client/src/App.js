import React, { useState } from 'react'

import Wrapper from './components/Wrapper'
import Avatar from './components/Avatar'
import ListTodos from './components/ListTodos'
import AddTodo from './components/AddTodo'

import todoMeth from './methods/todoMeth'

const App = () => {
    const [todos, setTodos] = useState([])
    const [isActive, setIsActive] = useState(false)

    const getTodos = async () => {
        const todos = await todoMeth.getAll()
        setTodos(todos)
    }

    const mediaMatch = window.matchMedia('(min-width: 600px)').matches
    const padding = mediaMatch ? '0 0 112px 0' : '0 0 80px 0'

    return (
        <Wrapper minh={'100vh'}>
            <Avatar
                size={'sm'}
                bc={'transparent'}
                m={'0 16px 24px 2px'}
                image={'/assets/logo/logo-transparent-grey.svg'}
                tabIndex={-1}
            />
            <Wrapper variant='main' p={padding}>
                <AddTodo onTodoAdded={() => getTodos()} />
                <ListTodos getTodos={() => getTodos()} todos={todos} />
            </Wrapper>
        </Wrapper>
    )
}

export default App
