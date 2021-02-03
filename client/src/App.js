import React, { Fragment } from 'react'
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'

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
                <div
                    style={{
                        maxWidth: 600,
                        padding: '0vh 5vw',
                        margin: '0 auto',
                    }}
                >
                    <InputTodo />
                    <ListTodos />
                </div>
            </Fragment>
        </div>
    )
}

export default App
