import React, { useState } from 'react'
import Styled from 'styled-components'

import ui from '../constants/constants'
import font from '../constants/typography'
import colors from '../constants/colors'

import Icon from './Icon'
import Checkbox from './Checkbox'

const Todo = (props) => {
    const [isHovered, setHovered] = useState(false)

    const handleTodoClick = (e) => {
        console.log('handle Todo Click')
    }

    const handleCheckClick = (e) => {
        e.stopPropagation()
        props.onCheck
            ? props.onCheck()
            : console.log('You forgot to pass onClick function to Todo Check')
    }

    const handleDeleteClick = (e) => {
        e.stopPropagation()
        console.log('handle Delete Click')
    }

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
                isCompleted={props.isCompleted}
                isParentHovered={isHovered}
                onClick={(e) => handleCheckClick(e)}
            />
            <span style={{ flexGrow: 1 }}>{props.todo.description}</span>
            <Icon
                name='delete'
                size={'sm'}
                color={colors.grey90}
                style={{
                    cursor: 'pointer',
                    marginLeft: 'auto',
                    padding: '2px 0',
                    opacity: isHovered ? 1 : 0,
                }}
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
`

export default StyledTodo
