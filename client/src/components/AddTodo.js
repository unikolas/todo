import React, { useState, useEffect, useRef } from 'react'
import Styled from 'styled-components'
import { motion } from 'framer-motion'

import ui from '../constants/ui'
import colors from '../constants/colors'
import font from '../constants/typography'
import animation from '../constants/animation'
import elevation from '../constants/elevation'

import Input from './Input'
import Checkbox from './Checkbox'

const AddTodoComponent = (props) => {
    const [title, setTitle] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)
    const input = useRef(null)

    useEffect(() => {
        if (props.isActive) {
            input.current.focus()
        }
    }, [props.isActive])

    const inputKeyDownHandler = ({ key }) => {
        if (key === 'Escape') {
            input.current.blur()
        }
    }

    function handleChange(e) {
        setTitle(e.target.value)
    }

    const handleCheckClick = (e) => {
        setIsCompleted(!isCompleted)
        input.current.focus()
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if (title !== '') {
            try {
                const body = {
                    title: title,
                    description: title,
                    status: isCompleted ? 'completed' : 'todo',
                }
                await fetch('/api/todos', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                })
                setTitle('')
                props.getTodos()
                setIsCompleted(false)
            } catch (err) {
                console.log(err.message)
            }
        }
    }

    return (
        <motion.div
            variants={props.containerAnimation}
            initial='initial'
            animate={props.isActive ? 'active' : 'initial'}
            transition={animation.spring.slow}
        >
            <motion.div
                className={props.className}
                variants={props.contentAnimation}
                initial='initial'
                animate={props.isActive ? 'active' : 'initial'}
                transition={animation.spring.default}
            >
                <Checkbox
                    m={'6px 10px 2px 0'}
                    isChecked={isCompleted}
                    onClick={(e) => handleCheckClick(e)}
                />

                <form onSubmit={onSubmit}>
                    <Input
                        type='text'
                        enterKeyHint='done'
                        placeholder="What's next?"
                        value={title}
                        h={'100%'}
                        onChange={(e) => handleChange(e)}
                        onBlur={() => {
                            props.onBlur()
                        }}
                        onFocus={() => {
                            props.onFocus()
                        }}
                        onKeyDown={(e) => inputKeyDownHandler(e)}
                        ref={input}
                    />
                </form>
            </motion.div>
        </motion.div>
    )
}

const AddTodo = Styled(AddTodoComponent)`
    display: flex;
    position: relative;
    z-index: 2;
    cursor: pointer;
    width: 100%;
    min-height: 48px;
    vertical-align: top;
    ${font.text.primary};
    background: ${(props) =>
        props.isCompleted ? 'transparent' : colors.white};
    border-radius: ${ui.radius.md};
    padding: 8px 12px;
    margin-bottom: 8px;
    opacity: ${(props) => (props.isChecking ? 0.8 : 1)};
    ${elevation('e600')}
`

export default AddTodo
