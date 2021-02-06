import React, { useState } from 'react'
import Styled from 'styled-components'
import Icon from './Icon'
import ui from '../constants/constants'
import font from '../constants/typography'
import colors from '../constants/colors'

const Todo = (props) => {
    const [isHovered, setHovered] = useState(false)
    return (
        <div
            className={props.className}
            style={{ display: 'flex' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            // onClick={() => console.log('Todo click')}
        >
            <Icon
                name={props.completed ? 'check_box' : 'check_box_outline_blank'}
                size={'sm'}
                color={colors.grey90}
                style={{ padding: '2px 8px 2px 0' }}
            />
            <span>{props.todo.description}</span>
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
                onClick={() => console.log('Delete')}
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
