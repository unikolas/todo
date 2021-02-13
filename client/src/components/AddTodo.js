import React, { useState, useEffect, useRef, Fragment } from 'react'
import Styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import ui from '../constants/ui'
import colors from '../constants/colors'
import font from '../constants/typography'
import animation from '../constants/animation'
import elevation from '../constants/elevation'
import breakpoint from '../helpers/breakpoints'

import Input from './Input'
import Checkbox from './Checkbox'
import Button from './Button'

const AddButton = Styled(Button)`
    z-index: 40;
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

const AddTodoComponent = (props) => {
    const [title, setTitle] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const input = useRef(null)

    function handleInputChange(e) {
        setTitle(e.target.value)
    }

    useEffect(() => {
        document.addEventListener('keydown', tabKeyHandler)
        return () => {
            document.removeEventListener('keydown', tabKeyHandler)
        }
    }, [])

    const tabKeyHandler = (e) => {
        if (e.keyCode === 9) {
            e.preventDefault()
            focusInput()
        }
    }
    const keyDownHandler = ({ key }) => {
        if (key === 'Escape') {
            input.current.blur()
        } else if (key === 'Tab') {
            input.current.blur()
        }
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
                props.onTodoAdded()
                setIsCompleted(false)
            } catch (err) {
                console.log(err.message)
            }
        }
    }

    const handleCheckMouseDown = (e) => {
        e.preventDefault()
        setIsCompleted(!isCompleted)
        input.current.focus()
    }

    const focusInput = (e) => {
        setIsActive(true)
        input.current.focus()
    }

    const blurInput = (e) => {
        setIsActive(false)
        input.current.blur()
    }

    const inputAnimation = {
        container: {
            initial: { marginTop: -48 },
            active: { marginTop: 0 },
        },
        content: {
            initial: { opacity: 0, top: -24 },
            active: { opacity: 1, top: 0 },
        },
    }

    return (
        <Fragment>
            <AddButton
                size={'lg'}
                isActive={isActive}
                onClick={() => focusInput()}
            >
                Add todo
            </AddButton>

            <motion.div
                variants={inputAnimation.container}
                initial='initial'
                animate={isActive ? 'active' : 'initial'}
                transition={animation.spring.slow}
            >
                <motion.div
                    className={props.className}
                    variants={inputAnimation.content}
                    initial='initial'
                    animate={isActive ? 'active' : 'initial'}
                    transition={animation.spring.default}
                >
                    <Checkbox
                        m={'6px 10px 2px 0'}
                        isChecked={isCompleted}
                        onMouseDown={(e) => handleCheckMouseDown(e)}
                    />

                    <form onSubmit={onSubmit}>
                        <Input
                            type='text'
                            ref={input}
                            enterKeyHint='done'
                            placeholder="What's next?"
                            value={title}
                            h={'100%'}
                            onChange={(e) => handleInputChange(e)}
                            onBlur={(e) => blurInput(e)}
                            onFocus={(e) => focusInput(e)}
                            onKeyDown={(e) => keyDownHandler(e)}
                        />
                    </form>
                </motion.div>
            </motion.div>
        </Fragment>
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
