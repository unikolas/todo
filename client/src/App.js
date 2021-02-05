import React, { Fragment } from 'react'
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'
import Wrapper from './components/Wrapper'

function App() {
    return (
        <div>
            <Fragment>
                <h1
                    style={{
                        padding: '5vh 5vw 2vh',
                        fontWeight: 700,
                        color: '#8899B8',
                    }}
                >
                    Todo
                </h1>
                <Wrapper>
                    <InputTodo />
                    <ListTodos />
                </Wrapper>
            </Fragment>
        </div>
    )
}

export default App
