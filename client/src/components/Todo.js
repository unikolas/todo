import React, { useState } from 'react'
import Styled from 'styled-components'

import ui from '../constants/constants'
import font from '../constants/typography'
import colors from '../constants/colors'
import elevation from '../constants/elevation'
import todoConst from '../constants/todoConst'

import Icon from './Icon'
import Checkbox from './Checkbox'

const Todo = (props) => {
    const [isHovered, setHovered] = useState(false)

    // Handlers

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

    // Styles

    const titleStyles = {
        default: {
            flexGrow: 1,
        },
        completed: {
            textDecoration: 'line-through',
            color: colors.grey80,
        },
    }

    const deleteButtonStyles = {
        cursor: 'pointer',
        marginLeft: 'auto',
        padding: '2px 0',
        opacity: isHovered ? 1 : 0,
    }

    // Return

    console.log(props.todo.status)

    return (
        <div
            className={props.className}
            style={{ display: 'flex' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={(e) => handleTodoClick(e)}
        >
            <Checkbox
                m={'2px 10px 2px 0'}
                todoStatus={props.todo.status}
                isParentHovered={isHovered}
                onClick={(e) => handleCheckClick(e)}
            />
            <span
                style={
                    titleStyles.default &&
                    (props.todo.status === todoConst.status.completed
                        ? titleStyles.completed
                        : null)
                }
            >
                {props.todo.description}
            </span>
            <Icon
                name='delete'
                size={'sm'}
                color={colors.grey90}
                style={deleteButtonStyles}
                onClick={(e) => handleDeleteClick(e)}
            />
        </div>
    )
}

const StyledTodo = Styled(Todo)`
    display: flex;
    cursor: pointer;
    width: ${(props) => props.w || '100%'};
    ${font.text.primary};
    background-color: white;
    border-radius: ${ui.radius.md};
    padding: 12px 12px;
    margin-bottom: 8px;
    vertical-align: top;
    z-index: 1;
    ${elevation('e0')}
    
    @media (min-width: 640px) {
        :hover{
            z-index: 2;
            ${elevation('e600')}
        }
    }
    
`

export default StyledTodo
