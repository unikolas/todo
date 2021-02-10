import React, { useState } from 'react'
import Styled, { css } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import ui from '../constants/ui'
import font from '../constants/typography'
import colors from '../constants/colors'
import elevation from '../constants/elevation'
import breakpoint from '../helpers/breakpoints'

import todoConst from '../constants/todoConst'

import Icon from './Icon'
import Checkbox from './Checkbox'

const StyledTodo = Styled(motion.div)`
    display: flex;
    cursor: pointer;
    user-select: none;
    ${font.text.primary};
    background: ${(props) =>
        props.isCompleted ? 'transparent' : colors.white};
    border-radius: ${ui.radius.md};
    padding: 12px 12px;
    margin-bottom: 8px;
    vertical-align: top;
    opacity: ${(props) => (props.isChecking ? 0.8 : 1)};
    z-index: 1;
    ${breakpoint.md(css`
        :hover {
            z-index: 2;
            ${(props) =>
                props.isCompleted ? elevation('e100') : elevation('e600')}
        }
    `)}
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
    ${(props) =>
        props.isCompleted && {
            textDecoration: 'line-through',
            color: colors.grey80,
        }}
`

const Todo = (props) => {
    const [isHovered, setHovered] = useState(false)
    const isCompleted =
        props.todo.status === todoConst.status.completed ? true : false

    const handleTodoClick = (e) => {
        console.log('handle Todo Click')
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

    return (
        <StyledTodo
            isCompleted={isCompleted}
            isChecking={props.isChecking}
            onClick={(e) => handleTodoClick(e)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            layout
            initial={{ y: -48 }}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', damping: 50, stiffness: 500 }}
        >
            <Checkbox
                m={'2px 10px 2px 0'}
                isChecked={isCompleted}
                onClick={(e) => handleCheckClick(e)}
            />
            <Title isCompleted={isCompleted}>{props.todo.description}</Title>
            <Delete
                name='delete'
                size={'sm'}
                color={colors.grey95}
                onClick={(e) => handleDeleteClick(e)}
            />
        </StyledTodo>
    )
}

export default Todo
