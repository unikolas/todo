import styled from 'styled-components'
import Color from 'color'
import ui from '../constants/constants'

const Input = styled.input`
    display: block;
    width: ${(props) => props.w || '100%'};
    height: ${(props) => props.h || '40px'};
    font: ${(props) => props.font || ui.text.primary};
    background-color: ${ui.color.grey95};
    border-radius: ${ui.radius.sm};
    min-height: 40px;
    padding: 0 12px;
    border: 1px solid rgba(30, 30, 30, 0);
    outline: none;
    transition: all 0.15s ease-in;
    ::placeholder {
        color: ${ui.color.grey};
    }
    :focus {
        background-color: ${Color(ui.color.grey95).darken(0.03)};
    }
`

export default Input
