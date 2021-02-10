import React, { useState, useRef } from 'react'
import Styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import ui from '../constants/ui'
import colors from '../constants/colors'
import font from '../constants/typography'
import elevation from '../constants/elevation'
import breakpoint from '../helpers/breakpoints'

import Input from './Input'
import Checkbox from './Checkbox'
import Button from './Button'

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

const StyledAddTodo = Styled(motion.div)`
    z-index: 2;
    position: relative;
    display: flex;
    width: 100%;
    min-height: 48px;
    cursor: pointer;
    ${font.text.primary};
    background: ${(props) =>
        props.isCompleted ? 'transparent' : colors.white};
    border-radius: ${ui.radius.md};
    padding: 8px 12px;
    margin-bottom: 8px;
    vertical-align: top;
    opacity: ${(props) => (props.isChecking ? 0.8 : 1)};
    ${elevation('e600')}
    ${breakpoint.md(css`
        :hover {
            z-index: 2;
            ${(props) =>
                props.isCompleted ? elevation('e100') : elevation('e600')}
        }
    `)}
`

const AddTodo = (props) => {
    const [title, setTitle] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const input = useRef(null)

    function handleChange(e) {
        setTitle(e.target.value)
    }

    const handleCheckClick = (e) => {
        input.current.focus()
        setIsCompleted(!isCompleted)
    }

    const handleAddClick = (e) => {
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

    const animationContainer = {
        initial: { marginTop: -48 },
        active: { marginTop: 24 },
    }
    const animationInput = {
        initial: { opacity: 0, top: -24 },
        active: { opacity: 1, top: 0 },
    }

    return (
        <motion.div
            variants={animationContainer}
            initial='initial'
            animate={isActive ? 'active' : 'initial'}
            transition={{ type: 'spring', damping: 40, stiffness: 300 }}
        >
            <AddButton
                size={'lg'}
                isActive={isActive}
                onClick={(e) => handleAddClick(e)}
            >
                Add todo
            </AddButton>

            <StyledAddTodo
                variants={animationInput}
                initial='initial'
                animate={isActive ? 'active' : 'initial'}
                transition={{ type: 'spring', damping: 50, stiffness: 500 }}
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
                        value={title}
                        placeholder="What's next?"
                        h={'100%'}
                        onChange={handleChange}
                        onBlur={() => {
                            setIsActive(false)
                        }}
                        onFocus={() => {
                            setIsActive(true)
                        }}
                        ref={input}
                    />
                </form>
            </StyledAddTodo>
        </motion.div>
    )
}

export default AddTodo
