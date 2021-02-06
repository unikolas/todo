import React, { Fragment } from 'react'
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import colors from './constants/colors'

function App() {
    return (
        <Fragment>
            <Wrapper>
                <Header color={colors.grey35}>Todo</Header>
                <Wrapper variant='main'>
                    <InputTodo />
                    <ListTodos />
                </Wrapper>
            </Wrapper>
        </Fragment>
    )
}

export default App
