import styled from 'styled-components'
import Color from 'color'
import ui from '../constants/constants'

const Button = styled.button`
    display: block;
    width: ${(props) => props.size};
    height: ${(props) => props.h || '40px'};
    font: ${(props) => props.font || ui.text.primary};
    background-color: ${ui.color.primary};
    color: white;
    border-radius: ${ui.radius.sm};
    min-height: 40px;
    padding: 0 16px;
    border: 1px solid rgba(30, 30, 30, 0);
    outline: none;
    transition: all 0.15s ease-in;
    :hover {
        background-color: ${Color(ui.color.primary).lighten(0.1)};
    }
    :active {
        background-color: ${Color(ui.color.primary).darken(0.1)};
    }
    :focus {
        outline: 0;
    }
`

export default Button
