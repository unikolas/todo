import { useState } from 'react'
import { motion } from 'framer-motion'
import Styled, { css } from 'styled-components'
import media from '../helpers/media'

import colors from '../constants/colors'
import Icon from './Icon'

const CheckContainer = Styled.div`
    display: block;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${(props) => props.m && props.m};
`

const Check = Styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 3px solid ${colors.grey95};
`

const Checkbox = (props) => {
    const handleClick = (e) => {
        e.stopPropagation()
        props.onClick
            ? props.onClick(e)
            : alert('Pass onCheck function to Checkbox')
    }

    const spring = {
        type: 'spring',
        stiffness: 400,
        damping: 40,
    }

    return (
        <CheckContainer m={props.m} onClick={(e) => handleClick(e)}>
            <Check>
                {props.isChecked && (
                    <Icon name='check' size={'xs'} color={colors.white} />
                )}
            </Check>
        </CheckContainer>
    )
}

export default Checkbox
