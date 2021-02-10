import Styled, { css } from 'styled-components'
import Color from 'color'
import ui from '../constants/ui'
import colors from '../constants/colors'
import font from '../constants/typography'
import elevation from '../constants/elevation'
import breakpoint from '../helpers/breakpoints'

const variant = {
    primary: css`
        background-color: ${colors.primary};
    `,
    success: css`
        background-color: ${colors.success};
    `,
    danger: css`
        background-color: ${colors.error};
    `,
    white: css`
        background-color: ${colors.white};
    `,
}

const size = {
    sm: css`
        font-size: ${font.text.helper};
        font-weight: 600;
        letter-spacing: 0.3px;
        border-radius: ${ui.radius.sm};
        padding: 4px 8px;
    `,
    md: css`
        font-size: ${font.text.secondary};
        font-weight: 500;
        border-radius: ${ui.radius.sm};
        padding: 8px 16px;
    `,
    lg: css`
        font-size: ${font.text.primary};
        font-weight: 500;
        border-radius: ${ui.radius.md};
        padding: 12px 20px;
    `,
}

const Button = Styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: none;
    color: ${colors.white};
    background-color: ${(props) => (props.bc ? props.bc : colors.primary)};
    background: ${(props) => props.bg};
    transition: all 150ms cubic-bezier(0.25, 0.75, 0.5, 1);
    
    :focus {
        outline: 0;
    }
    :active {
            background-color: ${Color(colors.primary).darken(0.1)};
        }
    ${breakpoint.sm(css`
        :hover {
            background-color: ${Color(colors.primary).lighten(0.1)};
        }
    `)}

    ${(props) => (props.variant ? variant[props.variant] : variant.primary)}
    ${(props) => (props.size ? size[props.size] : size.md)}
`

export default Button
