import React from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'
import ui from '../constants/ui'
import font from '../constants/typography'

const InputComponent = React.forwardRef((props, ref) => {
    return <input ref={ref} className={props.className} {...props} />
})

const Input = styled(InputComponent)`
    ${font.text.primary};
    width: ${(props) => (props.w ? props.w : '100%')};
    height: ${(props) => (props.h ? props.h : '32px')};
    background-color: ${(props) => (props.bc ? props.bc : 'transparent')};
    border-radius: ${ui.radius.sm};
    border: none;
    outline: none;
    transition: all 0.15s ease-in;
    ::placeholder {
        color: ${colors.grey80};
    }
    :focus {
        background-color: white;
    }
`

export default Input
