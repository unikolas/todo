import React, { useState, useRef } from 'react'
import Styled, { css } from 'styled-components'
import {
    motion,
    AnimatePresence,
    useDragControls,
    useViewportScroll,
} from 'framer-motion'

import ui from '../constants/ui'
import font from '../constants/typography'
import colors from '../constants/colors'
import animation from '../constants/animation'
import breakpoint from '../helpers/breakpoints'

import todoConst from '../constants/todoConst'

import Icon from './Icon'
import Checkbox from './Checkbox'
import elevation from '../constants/elevation'

const StyledTodo = Styled(motion.div)`
    display: flex;
    cursor: pointer;
    user-select: none;
    ${font.text.primary};
    background: ${(props) =>
        props.isCompleted && !props.drag ? 'transparent' : colors.white};
    border-radius: ${ui.radius.md};
    padding: 12px 12px;
    margin-bottom: 8px;
    vertical-align: top;
    opacity: ${(props) => (props.isChecking ? 0.8 : 1)};
    z-index: ${(props) => (props.isDrag ? 10 : 1)};
    ${(props) => (props.isDrag ? elevation('e600') : null)}
`

const Delete = Styled(Icon)`
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin: auto 0 auto auto;
    ${breakpoint.md(css`
        :hover {
            color: ${colors.error};
        }
    `)}
`

const Title = Styled.span`
    flexGrow: 1;
    word-wrap: break-word;
    min-width: 30%;
    padding-right: 8px;
    ${(props) =>
        props.isCompleted && {
            textDecoration: 'line-through',
            color: colors.grey80,
        }}
`

const Todo = (props) => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    const [isDrag, setDrag] = useState(false)
    const dragControls = useDragControls()
    const timerRef = useRef(0)

    const isCompleted =
        props.todo.status === todoConst.status.completed ? true : false

    const handleTodoClick = (e) => {
        if (isDrag) {
            return
        } else {
            console.log('handle Todo Click')
        }
    }

    const handleCheckClick = (e) => {
        e.stopPropagation()
        props.onCheck
            ? props.onCheck()
            : console.log('You forgot to pass onClick from Todo to Todo Check')
    }

    const handleDeleteClick = (e) => {
        e.stopPropagation()
        props.onDelete()
    }

    function startDrag(e) {
        if (isTouchDevice) {
            // Touch device - Delayed drag start
            timerRef.current = setTimeout(() => {
                dragControls.start(e, { snapToCursor: true })
                setDrag(true)
                console.log(timerRef)
            }, 600) // Feels close to iOS long tap timeout and haptic feedback. To investigate
        } else {
            // Non touch device - Instant drag start
            timerRef.current = setTimeout(() => {
                dragControls.start(e, { snapToCursor: true })
                setDrag(true)
                console.log(timerRef)
            }, 100) // Preserve delay for a usual click before setting drag styles
        }
    }

    function endDrag() {
        console.log('cancel: ', timerRef)
        clearTimeout(timerRef.current)
        setDrag(false)
        if (!isDrag) {
            handleTodoClick()
        }
    }

    return (
        <AnimatePresence
            initial={props.animatePresence ? props.animatePresence : false}
        >
            <StyledTodo
                isCompleted={isCompleted}
                isChecking={props.isChecking}
                layout
                initial={{ y: -40 }}
                animate={{ y: 0 }}
                transition={animation.spring.default}
                //
                drag={isDrag ? 'y' : false}
                isDrag={isDrag}
                dragControls={dragControls}
                dragOriginY={null}
                whileTap={!isDrag ? null : { scale: 1.05 }}
                onPointerDown={startDrag}
                onTap={endDrag}
                onDragEnd={endDrag} // Handle cancel if pointer is outside an element
            >
                <Checkbox
                    m={'2px 10px 2px 0'}
                    isChecked={isCompleted}
                    onMouseDown={(e) => handleCheckClick(e)}
                />
                <Title isCompleted={isCompleted}>
                    {props.todo.description}
                </Title>
                <Delete
                    name='delete'
                    size={'sm'}
                    color={colors.grey95}
                    onClick={(e) => handleDeleteClick(e)}
                />
            </StyledTodo>
        </AnimatePresence>
    )
}

export default Todo
