import styled from 'styled-components'
import colors from '../constants/colors'
import ui from '../constants/constants'
import font from '../constants/typography'

const Input = styled.input`
    ${font.text.primary};
    display: block;
    width: ${(props) => props.w || '100%'};
    height: ${(props) => props.h || '40px'};
    background-color: ${ui.color.grey90};
    border-radius: ${ui.radius.md};
    min-height: 48px;
    padding: 0 12px;
    border: none;
    outline: none;
    transition: all 0.15s ease-in;
    ::placeholder {
        color: ${colors.grey50};
    }
    :focus {
        background-color: white;
    }
`

export default Input
