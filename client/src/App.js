import React, { useState, useEffect } from 'react'
import Styled, { css } from 'styled-components'

import elevation from './constants/elevation'
import breakpoint from './helpers/breakpoints'

import Wrapper from './components/Wrapper'
import Avatar from './components/Avatar'
import ListTodos from './components/ListTodos'
import AddTodo from './components/AddTodo'
import Button from './components/Button'

import todoMeth from './methods/todoMeth'

const AddButton = Styled(Button)`
    z-index: 10;
    position: fixed;
    bottom: 32px;
    left: 50%;
    ${elevation('e600')}

    transform: translateX(-50%) ${(props) =>
        props.isActive ? 'translateY(250%)' : null};
    transition: transform 150ms cubic-bezier(.25,.75,.5,1);

    ${breakpoint.sm(
        css`
            bottom: 56px;
        `
    )}
`
const addTodoAnimation = {
    container: {
        initial: { marginTop: -24 },
        active: { marginTop: 0 },
    },
    content: {
        initial: { opacity: 0, top: -48 },
        active: { opacity: 1, top: 0 },
    },
}

const App = () => {
    const [todos, setTodos] = useState([])
    const [isActive, setIsActive] = useState(false)

    const getTodos = async () => {
        const todos = await todoMeth.getAll()
        setTodos(todos)
    }

    const keyPressHandler = (e) => {
        if (e.keyCode === 9) {
            e.preventDefault()
            setIsActive(!isActive)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyPressHandler)
        return () => {
            document.removeEventListener('keydown', keyPressHandler)
        }
    }, [])

    return (
        <Wrapper>
            <Avatar
                size={'sm'}
                bc={'transparent'}
                m={'0 16px 24px 2px'}
                image={'/assets/logo/logo-transparent-grey.svg'}
                tabIndex={-1}
            />
            <Wrapper variant='main'>
                <AddButton
                    size={'lg'}
                    isActive={isActive}
                    onClick={(e) => setIsActive(true)}
                >
                    Add todo
                </AddButton>
                <AddTodo
                    isActive={isActive}
                    getTodos={() => getTodos()}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}
                    containerAnimation={addTodoAnimation.container}
                    contentAnimation={addTodoAnimation.content}
                />
                <ListTodos getTodos={() => getTodos()} todos={todos} />
            </Wrapper>
        </Wrapper>
    )
}

export default App
