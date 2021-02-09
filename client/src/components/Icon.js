// Add material icons font to index.html
// <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

import Styled from 'styled-components'
import { motion } from 'framer-motion'
import colors from '../constants/colors'

const size = {
    xxxs: 8,
    xxs: 12,
    xs: 16,
    sm: 20,
    md: 24,
    lg: 40,
    xl: 56,
    xxl: 96,
    xxxl: 160,
}

const defaultColor = colors.black

const defaultSize = size.md

const IconComponent = (props) => {
    return (
        <motion.span
            className={'material-icons ' + props.className}
            onClick={props.onClick}
        >
            {props.name}
        </motion.span>
    )
}

const Icon = Styled(IconComponent)`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    ms-user-select: none;
    user-select: none;
    color: ${(props) => props.color || defaultColor};
    font-size: ${(props) => (props.size ? size[props.size] : defaultSize)}px;
    transition: 'all 0.15s ease-in';
    :hover {
        color: ${(props) => props.hoverColor}
    }
`

export default Icon
